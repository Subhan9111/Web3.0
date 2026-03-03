const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", function () {
  const cvSection = document.getElementById("CV");

  cvSection.scrollIntoView({
    behavior: "smooth",
  });
});
