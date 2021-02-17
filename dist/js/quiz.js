window.onload = function () {
  show(0);
};
//question
let questions = [
  {
    id: 1,
    question:
      "Which one of the following does not represent the submerged portion of the iceberg?",
    answer: "Diagnosed cases under treatment",
    options: [
      "Diagnosed cases under treatment",
      "Undiagnosed cases",
      "Pre-symptomatic cases",
      "Carriers sub clinical cases",
    ],
  },
  {
    id: 2,
    question:
      "Which of the following is NOT true regarding pathogenesis of a disease?",
    answer: "Screening is of no use in changing course of disease",
    options: [
      "Screening is of no use in changing course of disease",
      "Tertiary prevention is possible",
      "Entry of organism occurs",
      "Includes subclinical cases",
    ],
  },
  {
    id: 3,
    question: "In Advanced Epidemiological triad, agent is replaced by:",
    answer: "Causative factors",
    options: [
      "Determinant risk factors",
      "Causative bacterium/virus",
      "Causative factors",
      "Determinant factors",
    ],
  },
  {
    id: 4,
    question: "Triangle of Epidemiology stands for:",
    answer: "Interaction & interdependence of agent, host, environment & time",
    options: [
      "Interaction of agent, host & environment",
      "Interaction of agent, host, environment & time",
      "Interaction & interdependence of agent, host, environment & time",
      "None of the above",
    ],
  },
  {
    id: 5,
    question: "Epidemiological triad are all included except:",
    answer: "Investigator",
    options: ["Host", "Environmental factors", "Agent", "Investigator"],
  },
];
function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  //save user name
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";
}
let question_count = 0;
let points = 0;
function next() {
  let userAnswer = document.querySelector("li.options.active").innerHTML;
  //check answer and give points
  if (userAnswer === questions[question_count].answer) {
    points += 1;
    sessionStorage.setItem('points', points);
  }
  if (question_count === questions.length - 1) {
    sessionStorage.setItem('time',`${minutes} minutes and ${seconds} seconds`)
    clearInterval(myTime);
    return (location.href = "end.html");
  }

  question_count++;
  show(question_count);
}
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
