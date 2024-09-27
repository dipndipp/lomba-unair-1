/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__drone-1", 1.2, {
  opacity: 0,
  x: -200,
  delay: 1.6,
  rotate: "40deg",
});
gsap.from(".home__drone-2", 1.2, {
  opacity: 0,
  x: 200,
  delay: 1.5,
  rotate: "-40deg",
});
gsap.from(".layer__img-3", 1.2, { opacity: 0, y: 200, delay: 1.3 });
gsap.from(".layer__img-2", 1.2, { opacity: 0, y: 200, delay: 0.7 });
gsap.from(".layer__img-1", 1.2, { opacity: 0, y: 200, delay: 0.3 });
gsap.from(".home__description", 1.2, { opacity: 0, y: -60, delay: 0.6 });
gsap.from(".home__title", 1.2, { opacity: 0, y: -60, delay: 0.9 });
gsap.from(".home__button", 1.2, { opacity: 0, y: -60, delay: 0.3 });
