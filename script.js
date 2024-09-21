const question = document.querySelectorAll(".question");

question.forEach((q) => {
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
});
