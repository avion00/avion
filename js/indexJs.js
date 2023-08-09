// navigation animation for small screen
const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav_list");
  const navLinks = document.querySelectorAll(".nav_list li");

  menu.addEventListener("click", () => {
    // togggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // menu animation
    menu.classList.toggle("toggle");
  });
};
navSlide();

// dark to light mode or vice versa
var icon = document.getElementById("icon");
// var logo = document.getElementById('logo');

if (localStorage.getItem("theme") == null) {
  localStorage.getItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if ((localData = "light")) {
  icon.src = "image/moon.png";
  document.body.classList.remove("dark_theme");
} else if ((localData = "dark")) {
  icon.src = "image/sun.png";
  document.body.classList.add("dark_theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark_theme");

  if (document.body.classList.contains("dark_theme")) {
    icon.src = "image/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "image/moon.png";
    localStorage.setItem("theme", "light");
  }
};
