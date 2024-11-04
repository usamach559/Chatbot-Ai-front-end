
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
    const tabElements = document.querySelectorAll('.nav-link');
    tabElements.forEach(tab => {
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            const tabTarget = new bootstrap.Tab(this);
            tabTarget.show();
        });
    });
});
// Sabhi elements jinme 'link-text' class hai, unko select karen
// Sabhi elements jinme 'nav-item' class hai, unko select karen
const navItems = document.querySelectorAll('.nav-item');

// Har ek nav-item par click event listener lagayein
navItems.forEach(item => {
    item.addEventListener('click', function (event) {
        // Default action ko rok lein agar koi anchor tag ka use ho raha ho
        event.preventDefault();

        // Sab links ke andar se 'active-t' class ko remove karen
        document.querySelectorAll('.link-text').forEach(link => link.classList.remove('active-t'));

        // Is clicked nav-item ke andar jo 'link-text' hai usme 'active-t' class add karen
        const linkText = this.querySelector('.link-text');
        if (linkText) {
            linkText.classList.add('active-t');
        }
    });
});



document
.querySelector(".navbar-toggler")
.addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show");
});