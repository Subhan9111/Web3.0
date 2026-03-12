var btn = document.getElementById("DarkMode");

btn.onclick = function () {
  document.body.classList.toggle("darkmode");
};

function scrollNed() {
  document.getElementById("CV").scrollIntoView({
    behavior: "smooth",
  });
}

function toggle(id) {
  var alleBokser = document.querySelectorAll(".cvInfo");
  alleBokser.forEach(function (boks) {
    boks.style.display = "none ";
  });
  var valgt = document.getElementById(id);
  valgt.style.display = "block";
}
