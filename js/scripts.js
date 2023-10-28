// document.addEventListener('DOMContentLoaded', function () {
//     var links = document.querySelectorAll('nav ul.nav a');

//     links.forEach(function (link) {
//         link.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevents the link from being followed immediately

//             var listItem = link.parentElement; // Get the parent <li> element

//             listItem.classList.add('active'); // Add the 'active' class to the <li>

//             setTimeout(function () {
//                 window.location.href = link.getAttribute('href'); // Redirects to the destination URL after the delay
//             }, 500); // Wait for 0.5 seconds (500 milliseconds) before redirecting
//         });
//     });
// });


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
