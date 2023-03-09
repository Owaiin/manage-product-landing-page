const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("mob-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navMenu.classList.contains("hidden")
    ? (hamburger.src = "./images/icon-hamburger.svg")
    : (hamburger.src = "./images/icon-close.svg");
});
