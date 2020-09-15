"use strict";

const toggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".navbar__menu");
const navbarMenuItem = document.querySelectorAll(".navbar__menu__item");

toggleBtn.addEventListener("click", () => {
    let classes = navbarMenu.classList;
    classes.toggle("open");
});

for (let i = 0; i < navbarMenuItem.length; i++) {
    navbarMenuItem[i].addEventListener("click", () => {
        window.open("empty.html");
    });
}

// input
// const homeSearchInputValue = document.querySelector(".home__search__input")
//     .value;
// const homeSearchBtn = document.querySelector("home__search__button");

// homeSearchBtn.addEventListener("click", () => {
//     if (homeSearchInputValue !== "") {
//     }
// });

// about new
const aboutNewBtn = document.querySelector(".about__new > button");

aboutNewBtn.addEventListener("click", () => {
    // console.log("log");
    window.open("empty.html");
});

// type 분류
const aboutBtn = document.querySelector(".about__buttons");
const aboutProject = document.querySelector(".about__project");
const projectCard = document.querySelectorAll(".about__project__card");

aboutBtn.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;

    if (filter == null) {
        return;
    }

    const active = document.querySelector(".about__buttons__btn.selected");

    active.classList.remove("selected");
    const target = e.target.nodeName === "BUTTON" ? e.target : false;
    target.classList.add("selected");

    aboutProject.classList.add("anim-out");

    setTimeout(() => {
        projectCard.forEach((project) => {
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        aboutProject.classList.remove("anim-out");
    }, 300);
});
