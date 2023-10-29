/**
 * Used for expanding and shrinking images
 */
// Get all elements with class 'project-img'
var projectImages = document.querySelectorAll('.img');

// Add event listeners to each image
projectImages.forEach(function (img) {
    // Click event: Toggle width on click
    img.addEventListener('click', function () {
        // Check current width and toggle between 10% and 100%
        if (img.style.width === '50%') {
            img.style.width = '10%';
            // Change the text to "Click to expand"
            img.nextElementSibling.innerText = 'Click to expand';
        } else {
            img.style.width = '50%';
            // Change the text to "Click to shrink"
            img.nextElementSibling.innerText = 'Click to shrink';
        }
    });
});
