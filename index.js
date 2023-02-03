const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");

  if (navMenu.classList.contains("menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});