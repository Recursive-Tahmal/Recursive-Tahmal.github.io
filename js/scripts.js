document.addEventListener('DOMContentLoaded', function () {
    // Get all images
    var projectImages = document.querySelectorAll('.img');

    // Add click event listener to each image
    projectImages.forEach(function (img) {
        img.addEventListener('click', function () {
            // Toggle clicked class on the image
            img.classList.toggle('clicked');
            // Toggle the text of the image
            img.nextElementSibling.innerText = img.classList.contains('clicked') ? 'Click to shrink' : 'Click to expand';
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all list items
    var listItems = document.querySelectorAll(".nav li");

    // Add click event listener to each list item
    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Get the href attribute of the clicked item
            var href = item.querySelector("a").getAttribute("href");

            // Redirect to the corresponding page
            window.location.href = href;
        });
    });
});
