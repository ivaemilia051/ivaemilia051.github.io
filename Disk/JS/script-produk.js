const menuBar = document.querySelector (".hamburger");
const menuNav = document.querySelector (".navbar");
const menuTion = document.querySelector (".menu");
const btnFilter = document.querySelectorAll (".komputer-box ul li");
const imgFilter = document.querySelectorAll (".all-produk img");



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

btnFilter.forEach (data => {
    data.onclick = () => {
        btnFilter.forEach (data => {
            data.className = "";
        })

        data.className = "active";

        // filter image
        const btnText = data.textContent;
        imgFilter.forEach (img => {
            img.style.display = "none";
            if (img.getAttribute ("data-filter") == btnText.toLowerCase() || btnText == "Semua Produk") {
                img.style.display = "block";
            }
        })
    }
})
