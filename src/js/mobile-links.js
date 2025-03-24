document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector("[data-menu]");
    const burgerButton = document.querySelector("[data-menu-open]");
    const closeMenuButton = document.querySelector("[data-menu-close]");
    const menuLinks = document.querySelectorAll(".mobile-link");

    function openMenu() {
        mobileMenu.classList.add("open");
    }

    function closeMenu() {
        mobileMenu.classList.remove("open");
    }

    burgerButton.addEventListener("click", function (event) {
        event.stopPropagation();
        openMenu(); 
    });

    closeMenuButton.addEventListener("click", function (event) {
        event.stopPropagation();
        closeMenu();
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            closeMenu();
        });
    });

    window.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !burgerButton.contains(event.target)) {
            closeMenu();
        }
    });

    mobileMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});