// Add interactivity here - this is just a placeholder example
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function () {
            this.classList.toggle('highlight');
        });
    });
});
