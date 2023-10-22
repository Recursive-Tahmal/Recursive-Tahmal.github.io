// Add your custom scripts here
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbarScroll");
    navbar.classList.toggle("navbar-shrink", window.scrollY > 100);
});
