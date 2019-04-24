const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
// grabbing all of the navigation links
const links = document.querySelectorAll(".nav-links li");

// navigation animation and link fade in
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
