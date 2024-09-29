// navbar
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

// animasi gsap
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

// animasi reveal

ScrollReveal().reveal(".about__title", { delay: 100 }, { interval: 1000 });
ScrollReveal().reveal(".about__image", { delay: 300 }, { interval: 1000 });
ScrollReveal().reveal(".about__text", { delay: 600 }, { interval: 1000 });
ScrollReveal().reveal(".tiga__text", { delay: 300 }, { interval: 1000 });
ScrollReveal().reveal(".tiga__card", { delay: 500 }, { interval: 1000 });
ScrollReveal().reveal(".empat__right", { delay: 300 }, { interval: 1000 });
ScrollReveal().reveal(".empat__left", { delay: 500 }, { interval: 1000 });
