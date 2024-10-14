"use strict";
const hiddenElements = document.querySelectorAll(".hidden");

function toggleMenu() {
  const menu = document.querySelector(".navbar--links__container");
  menu.classList.toggle("active");
}

//
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
hiddenElements.forEach((el) => observer.observe(el));
