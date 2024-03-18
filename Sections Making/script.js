// script.js
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID

        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Scroll to the top of the section
            });
        }
    });
});
