const hamBurger = document.querySelector(".header__hamburger");
const headerNav = document.querySelector(".header__wrapper")
const toggleMenu = document.querySelector(".toggle-menu");
hamBurger.addEventListener('click', () => {
    if (!headerNav.classList.contains("toggle")) {
        headerNav.classList.add("toggle");
        toggleMenu.style.display = "block";

    } else {
        headerNav.classList.remove("toggle");
        toggleMenu.style.display = "none";

    }
})

