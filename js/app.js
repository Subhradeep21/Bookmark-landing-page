const hamBurger = document.querySelector(".header__hamburger");
const headerNav = document.querySelector(".header__wrapper")
const toggleMenu = document.querySelector(".toggle-menu");

const tabs = document.querySelectorAll("[data-tab-target]");
const tabItems = document.querySelectorAll("[data-tab-content");

const faqs = document.querySelectorAll(".faqs__question");

hamBurger.addEventListener('click', () => {
    if (!headerNav.classList.contains("toggle")) {
        headerNav.classList.add("toggle");
        toggleMenu.style.display = "block";

    } else {
        headerNav.classList.remove("toggle");
        toggleMenu.style.display = "none";

    }
})


tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        const target = document.querySelector(tab.dataset.tabTarget);

        tabItems.forEach(item => {
            item.classList.remove("visible");
        })
        tabs.forEach(element => {
            element.classList.remove("active");
        })

        tab.classList.add("active");
        target.classList.add("visible");
    })

});

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("show");
    })
})


/*
element.addEventListener("click", function () {
    features.forEach(f => f.classList.remove("active"));

    this.classList.add("active");

})
*/
