const questions = document.querySelectorAll(".question");

questions.forEach((q, index) => {
  // using mouse
  q.addEventListener("click", () => {
    const icon = q.querySelector(".icon-toggle");
    const answer = q.querySelector(".ques-ans");

    answer.classList.toggle("ques-ans--visible");

    if (icon.getAttribute("src") === "assets/images/icon-plus.svg") {
      icon.setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      icon.setAttribute("src", "assets/images/icon-plus.svg");
    }
  });

  // using keyboard
  q.addEventListener("keydown", (e) => {
    const key = e.key;

    switch (key) {
      case "ArrowDown":
        if (index < questions.length - 1) {
          questions[index + 1].focus();
        } else {
          questions[0].focus();
        }
        break;

      case "ArrowUp":
        if (index > 0) {
          questions[index - 1].focus();
        } else {
          questions[questions.length - 1].focus();
        }
        break;
      case "Enter":
        toggleAnswer(q);
        break;
      default:
        break;
    }
  });
});

function toggleAnswer(question) {
  const answer = question.querySelector(".ques-ans");
  const icon = question.querySelector(".icon-toggle");
  const isExpanded = question.getAttribute("aria-expanded") === "true";

  answer.classList.toggle("ques-ans--visible");
  question.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    icon.setAttribute("src", "assets/images/icon-plus.svg");
  } else {
    icon.setAttribute("src", "assets/images/icon-minus.svg");
  }
}
