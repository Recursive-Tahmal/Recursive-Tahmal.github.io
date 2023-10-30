document.addEventListener('DOMContentLoaded', function () {
    var projectImages = document.querySelectorAll('.img');

    projectImages.forEach(function (img) {
        img.addEventListener('click', function () {
            img.classList.toggle('clicked');
            img.nextElementSibling.innerText = img.classList.contains('clicked') ? 'Click to shrink' : 'Click to expand';
        });
    });
});
