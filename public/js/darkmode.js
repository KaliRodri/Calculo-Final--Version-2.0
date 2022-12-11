document.getElementById("change-mode").addEventListener("click", toggleMode);

function toggleMode() {
  var h = document.getElementById("container-all");
  h.classList.toggle("dark-body");

  var h = document.getElementById("header-container");
  h.classList.toggle("dark-header");

  var h = document.getElementById("footer-container");
  h.classList.toggle("dark-header");

  var h = document.getElementById("text-container");
  h.classList.toggle("dark-color");

  var h = document.getElementsByClassName("subjectLi");
  for (var i = 0; i < h.length; i++) {
    h[i].classList.toggle("dark-color-inside");
  }

  var h = document.getElementsByClassName("aqui");
  for (var i = 0; i < h.length; i++) {
    h[i].classList.toggle("dark-color");
  }

  var h = document.getElementById("moon-change");
  h.classList.toggle("moon-clicked");

  var h = document.getElementById("sun-change");
  h.classList.toggle("sun-clicked");
}
