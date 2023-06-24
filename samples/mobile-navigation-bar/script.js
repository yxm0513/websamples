let links = document.querySelectorAll(".navbar-icon");
const navbar = document.querySelector(".navbar");
const appearenceBtn = document.querySelector(".appearence-btn");
let isDark = false;
const clearActive = () => {
  for (link of links) link.classList.remove("active");
};

for (link of links) {
  link.onclick = function () {
    clearActive();
    this.classList.add("active");
  };
}

const changeAppearance = () => {
  if (!isDark) {
    appearenceBtn.classList.add("dark");
    navbar.classList.add("dark");
    isDark = !isDark;
  } else {
    appearenceBtn.classList.remove("dark");

    navbar.classList.remove("dark");
    isDark = !isDark;
  }
};
