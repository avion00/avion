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


// toggle mode(dark-light) with icon end

const modeToggleBtn = document.getElementById("icon");

// Function to toggle between light and dark mode
function toggleMode() {
  const body = document.body;

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    modeToggleBtn.src = "image/moon.png";
    body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    modeToggleBtn.src = "image/sun.png";
    localStorage.setItem("mode", "dark");
  }
}

// Add event listener for the mode toggle button
modeToggleBtn.addEventListener("click", toggleMode);

// Check for system's color scheme preference and apply it
function applySystemColorScheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.body.classList.add("dark-mode");
    modeToggleBtn.src = "image/sun.png";
  } else {
    document.body.classList.remove("dark-mode");
    modeToggleBtn.src = "image/moon.png";
  }
}

// Initially apply the system's color scheme
applySystemColorScheme();

// Remove the mode preference from local storage
function clearLocalStorageMode() {
  localStorage.removeItem("mode");
}

// Add an event listener for page unload to clear the local storage mode
window.addEventListener("beforeunload", clearLocalStorageMode);

// toggle mode(dark-light) with icon end
