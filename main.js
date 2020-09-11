"use strict";

const toggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener("click", () => {
    let classes = navbarMenu.classList;
    classes.toggle("open");
});
