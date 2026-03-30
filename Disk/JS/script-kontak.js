const menuBar = document.querySelector (".hamburger");
const menuNav = document.querySelector (".navbar");
const menuTion = document.querySelector (".menu");


menuBar.addEventListener('click', () => {
    menuBar.classList.toggle("is-active");
    menuTion.classList.toggle("menu-active");
});

window.addEventListener('scroll', () => {
    menuNav.classList.toggle ("nav-scroll-active", window.scrollY > 0)
    // hamburger
    windowsPosition = window.scrollY > 200;
    menuBar.classList.toggle ("btn-active", windowsPosition);
    menuBar.classList.remove("is-active");
    menuTion.classList.remove("menu-active");
});
