const yearSpan = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  const isOpen = navMenu.classList.contains("open");

  menuButton.innerHTML = isOpen ? "&#10006;" : "&#9776;";
  menuButton.setAttribute("aria-expanded", isOpen);
});