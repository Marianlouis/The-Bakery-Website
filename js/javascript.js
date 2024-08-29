document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const top = document.querySelector('.top');
        if (window.scrollY > 20) { // Adjust the value to control when the change happens
            top.classList.add('scrolled');
        } else {
            top.classList.remove('scrolled');
        }
    });
});