const search = document.querySelector(".search"); //
const listJobs = document.querySelector(".av-jobs");

const addToDom = (jobs) => {
  jobs.map((jobs) => {
    let item = document.createElement("li");
    let link = document.createElement("a");
    listJobs.appendChild(item);
    item.classList.add("list-group-item");
    item.appendChild(link);
    link.href = jobs.website;
    const text = document.createTextNode(jobs.title);
    link.appendChild(text);
    link.target = "_blank";
  });
};

console.log(addToDom(jobs));

const li = document.querySelectorAll("li");

const searchEngine = (e) => {
  const text = e.target.value.toLowerCase();
  console.log("Text:  ${text}"); //wszystko z imputu

  li.forEach((el) => {
    const task = el.textContent;
    // console.log(el.textContent) // sam element bez li
    if (task.toLowerCase().indexOf(text) !== -1) {
      //zabezpieczenie duze/male litery
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

search.addEventListener("keyup", searchEngine);
