
document.addEventListener('DOMContentLoaded', function () {
    const scrollLeft = document.getElementById('scroll-left');
    const scrollRight = document.getElementById('scroll-right');
    const tabSlider = document.querySelector('.tab-slider'); // Use class selector
    const scrollAmount = 150; // Adjust scroll amount based on your needs

    // Scroll Left
    scrollLeft.addEventListener('click', function () {
        tabSlider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    // Scroll Right
    scrollRight.addEventListener('click', function () {
        tabSlider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Function to toggle the visibility of scroll icons based on scroll position
    function toggleScrollIcons() {
        if (tabSlider.scrollLeft === 0) {
            scrollLeft.style.display = 'none';
        } else {
            scrollLeft.style.display = 'block';
        }

        if (tabSlider.scrollWidth - tabSlider.clientWidth <= tabSlider.scrollLeft + 1) {
            scrollRight.style.display = 'none';
        } else {
            scrollRight.style.display = 'block';
        }
    }

    // Initial check to toggle scroll icons
    toggleScrollIcons();

    // Add scroll event listener to update the icons visibility dynamically
    tabSlider.addEventListener('scroll', toggleScrollIcons);

    // Ensure Bootstrap's JavaScript is correctly initializing the tabs
    const tabElements = document.querySelectorAll('.nav-link-slider');
    tabElements.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const tabTarget = new bootstrap.Tab(this);
            tabTarget.show();
        });
    });
});





document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
});


// eye icon js 
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('bi-eye');
        toggleIcon.classList.add('bi-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('bi-eye-slash');
        toggleIcon.classList.add('bi-eye');
    }
}


// end
        function toggleDiv(checkboxId, divId) {
            document.getElementById(checkboxId).addEventListener("change", function () {
                const toggleDiv = document.getElementById(divId);
                if (this.checked) {
                    toggleDiv.style.display = "block"; // Show the div
                } else {
                    toggleDiv.style.display = "none"; // Hide the div
                }
            });
        }

        // Apply the toggle logic to both checkboxes
        toggleDiv("includeBrandCheckbox", "toggleBrandDiv");
        toggleDiv("generatePostsCheckbox", "togglePostsDiv");


