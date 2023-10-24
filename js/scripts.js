document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('nav ul.nav a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents the link from being followed immediately

            var listItem = link.parentElement; // Get the parent <li> element

            listItem.classList.add('active'); // Add the 'active' class to the <li>

            setTimeout(function () {
                window.location.href = link.getAttribute('href'); // Redirects to the destination URL after the delay
            }, 500); // Wait for 0.5 seconds (500 milliseconds) before redirecting
        });
    });
});
