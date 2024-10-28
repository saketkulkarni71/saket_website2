
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;   
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill out all fields.");
    }
});

// Fade-in on scroll for cards
const fadeInElements = document.querySelectorAll('.project-card, .experience-card');
const fadeInOnScroll = () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Trigger once on page load

const modal = document.getElementById('pdfModal');
const modalClose = document.querySelector('.close');
const pdfViewer = document.getElementById('pdfViewer');

// Open modal when clicking on a project with data-pdf attribute
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function() {
        const pdfUrl = this.getAttribute('data-pdf');
        pdfViewer.src = pdfUrl;
        modal.style.display = 'block';
    });
});

// Close the modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    pdfViewer.src = ''; // Clear the PDF source to stop loading
});

// Close modal when clicking outside of it
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
        pdfViewer.src = '';
    }
});