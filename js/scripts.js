window.addEventListener('DOMContentLoaded', () => {
    
    // 1. Auto-update the Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Handle Contact Form Alert (Netlify Compatible)
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                // Let Netlify handle the redirect/submission
                alert('Thank you for your message, ' + name + '!');
            } else {
                event.preventDefault(); 
                alert('Please fill out all fields.');
            }
        });
    }
});
