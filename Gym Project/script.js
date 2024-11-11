function toggleMenu() {
  const menu = document.querySelector(".navbar--links__container");
  menu.classList.toggle("active");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hidden-right")) {
        entry.target.classList.add("show-right");
      } else {
        entry.target.classList.add("show");
      }
    } else {
      entry.target.classList.remove("show", "show-right");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden, .hidden-right");

hiddenElements.forEach((el) => observer.observe(el));
