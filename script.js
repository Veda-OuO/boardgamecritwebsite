document.addEventListener('DOMContentLoaded', () => {
    // Testimonial rotation
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonialIndex = 0;

    if (testimonials.length > 0) {
        // Show the first testimonial initially
        testimonials[currentTestimonialIndex].classList.add('active');

        setInterval(() => {
            // Remove active class from current testimonial
            testimonials[currentTestimonialIndex].classList.remove('active');

            // Move to the next testimonial, looping back to the start
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;

            // Add active class to the new current testimonial
            testimonials[currentTestimonialIndex].classList.add('active');
        }, 16000); // Change quote every 16 seconds
    }

    // Automatically update copyright year
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});