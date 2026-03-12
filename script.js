let btn = document.getElementById("DarkMode");
btn.onclick = function () {
  document.body.classList.toggle("darkmode");
};

function scrollNed() {
  document.getElementById("CV").scrollIntoView({
    behavior: "smooth",
  });
}

function toggle(id) {
  let alleBokser = document.querySelectorAll(".cvInfo");
  console.log(alleBokser);
  alleBokser.forEach(function (boks) {
    boks.style.display = "none";
  });
  let valgt = document.getElementById(id);
  valgt.style.display = "block";
}
