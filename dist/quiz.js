import questions from "./modules/quest.js";
window.onload = function () {
  show(0);
};

let question_count = 0;
let points = 0;
function next() {
  let userAnswer = document.querySelector("li.options.active").innerHTML;
  //check answer and give points
  if (userAnswer === questions[question_count].answer) {
    points++;
    sessionStorage.setItem("points", points);
  }
  if (question_count === questions.length - 1) {
    sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
    clearInterval(myTime);
    return (location.href = "end.html");
  }

  question_count++;
  show(question_count);
}
document.getElementById("next").addEventListener("click", next);
function show(count) {
  let question = document.getElementById("questions");
  // question.innerHTML="<h2>" + questions[count].question + "</h2>";
  question.innerHTML = `<h2>Q ${question_count + 1} ${
    questions[count].question
  }</h2>
    <ul class="option_group">
    <li class="options">${questions[count].options[0]}</li>
    <li class="options">${questions[count].options[1]}</li>
    <li class="options">${questions[count].options[2]}</li>
    <li class="options">${questions[count].options[3]}</li>
    </ul>`;
  toggleActive();
}
let toggleActive = () => {
  let options = document.querySelectorAll("li.options");
  for (let i = 0; i < options.length; i++) {
    options[i].onclick = function () {
      for (let j = 0; j < options.length; j++) {
        if (options[j].classList.contains("active")) {
          options[j].classList.remove("active");
        }
      }
      options[i].classList.add("active");
    };
  }
};
