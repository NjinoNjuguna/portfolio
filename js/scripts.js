// 1. Auto-update the Copyright Year
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// 2. Handle Contact Form Alert (without breaking Netlify)
const contactForm = document.querySelector('form[name="contact"]');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // We DON'T preventDefault() here so Netlify can still receive the data
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        } else {
            event.preventDefault(); // Stop only if fields are missing
            alert('Please fill out all fields.');
        }
    });
}
