const navbar = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".nav-toggle");
const closeMenuBtn = document.querySelector(".nav-toggle");

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (header.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (header.style.background = `transparent`);
});

function toggleMenu() {
  menu.classList.toggle("menu_visible");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu .item-menu[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu .item-menu[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu .item-menu.select").classList.remove("select");
        menuLink.classList.add("select");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_visible");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

ScrollReveal().reveal(".nav-bar", { delay: 250 });
ScrollReveal().reveal(".photo-jose", { delay: 350 });
ScrollReveal().reveal(".saludo-inicio", { delay: 450 });
ScrollReveal().reveal(".sub-inicio", { delay: 550 });
ScrollReveal().reveal(".section__title", { delay: 250 });
ScrollReveal().reveal(".section__subtitle", { delay: 350 });
ScrollReveal().reveal(".about__description", { delay: 350 });
ScrollReveal().reveal(".about__summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill__title", { delay: 450 });
ScrollReveal().reveal(".skill__item", { delay: 450 });
ScrollReveal().reveal(".portfolio__item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });