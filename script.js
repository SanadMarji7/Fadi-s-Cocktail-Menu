document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const modal = createImageModal();
    document.body.appendChild(modal);

    sections.forEach(section => {
        section.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });

        section.addEventListener('click', function (e) {
            if (e.target.tagName === 'IMG') {
                showModal(e.target.src);
            }
        });
    });

    function createImageModal() {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'image-modal';
        modalContainer.style.display = 'none';
        modalContainer.style.position = 'fixed';
        modalContainer.style.left = '0';
        modalContainer.style.top = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modalContainer.style.zIndex = '1000';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.alignItems = 'center';
        
        const modalImage = document.createElement('img');
        modalImage.style.maxWidth = '80%';
        modalImage.style.maxHeight = '80%';
        modalImage.style.margin = 'auto';

        modalContainer.appendChild(modalImage);

        modalContainer.addEventListener('click', function () {
            modalContainer.style.display = 'none';
        });

        return modalContainer;
    }

    function showModal(imageSrc) {
        const modal = document.getElementById('image-modal');
        const img = modal.querySelector('img');
        img.src = imageSrc;
        modal.style.display = 'flex';
    }
});

// Smooth scroll for navigation (if you have a navbar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
