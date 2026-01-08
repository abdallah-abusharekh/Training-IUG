const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const pnavLinks = document.querySelectorAll(".pnav-link");
const closeNav = document.querySelector(".close-nav");

function handleToggleNav() {
  nav.classList.toggle("open");
}

menuBtn.addEventListener("click", handleToggleNav);

closeNav.addEventListener("click", handleToggleNav);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
pnavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    pnavLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
