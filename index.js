const navbar = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
const homebg = document.querySelector(".home__background");
const menu = document.querySelector(".nav-toggle");
const links = document.querySelector(".menu");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("menu_visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (header.style.background = `rgba(0,0,0,0.9)`);
  window.scrollY < 100 && (header.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".navbar__links  .active");
  const shouldBeActive = document.querySelector(
    ".navbar__links [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}



ScrollReveal().reveal(".nav-bar", { delay: 250 });
ScrollReveal().reveal(".phto-jose", { delay: 350 });
ScrollReveal().reveal(".home__title--primary", { delay: 350 });
ScrollReveal().reveal(".saludo-inicio", { delay: 450 });
ScrollReveal().reveal(".sub-inicio", { delay: 550 });
ScrollReveal().reveal(".section__title", { delay: 250 });
ScrollReveal().reveal(".section__subtitle", { delay: 350 });
ScrollReveal().reveal(".about__description", { delay: 350 });
ScrollReveal().reveal(".about__summary", { delay: 450 });
ScrollReveal().reveal(".button--cta", { delay: 550 });
ScrollReveal().reveal(".skill__title", { delay: 450 });
ScrollReveal().reveal(".skill__item", { delay: 450 });
ScrollReveal().reveal(".services__item", { delay: 450 });
ScrollReveal().reveal(".portfolio__item", { delay: 450 });
ScrollReveal().reveal(".contact__item", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 450 });