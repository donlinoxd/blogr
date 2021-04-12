const burger = document.querySelector(".burger");
const navContainer = document.querySelector(".nav-container");
const navLink = document.querySelectorAll(".nav-link");
const navSubLinks = document.querySelectorAll(".nav-link ul");
const childSubLinks = document.querySelectorAll(".nav-sublink");

// FOR BURGER MENU
burger.addEventListener("click", navMenuActive);

// FOR NAV LINKS
navLink.forEach((link, i) => {
  link.addEventListener("click", () => {
    //   FOR ARROW ANIMATION
    const arrows = document.querySelectorAll("img[alt='Arrow Icon']");

    // FOR SUBLINKS
    if (!navSubLinks[i].classList.contains("nav-sublink-active")) {
      navSubLinks.forEach((sublink) => {
        sublink.classList.remove("nav-sublink-active");
      });
      arrows.forEach((arrow) => {
        arrow.classList.remove("active");
      });
      childSubLinks.forEach((child) =>
        child.addEventListener("click", navMenuActive)
      );
    }
    navSubLinks[i].classList.toggle("nav-sublink-active");
    arrows[i].classList.toggle("active");
  });
});

function navMenuActive() {
  navContainer.classList.toggle("nav-links-active");
  navSubLinks.forEach((sublink) => {
    sublink.classList.remove("nav-sublink-active");
  });
}
