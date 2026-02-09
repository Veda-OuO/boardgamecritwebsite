document.addEventListener('DOMContentLoaded', () => {
    // Cookie Consent Management
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    const COOKIE_NAME = 'greginplay_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    function getCookieConsent() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === COOKIE_NAME) {
                return value;
            }
        }
        return null;
    }

    function setCookieConsent(value) {
        const date = new Date();
        date.setTime(date.getTime() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = COOKIE_NAME + "=" + value + ";" + expires + ";path=/;SameSite=Strict";
    }

    function loadGoogleAnalytics() {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VCT3J79KN5';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VCT3J79KN5', {
            'anonymize_ip': true
        });
    }

    function showCookieConsent() {
        if (cookieConsent) {
            cookieConsent.style.display = 'block';
        }
    }

    function hideCookieConsent() {
        if (cookieConsent) {
            cookieConsent.style.display = 'none';
        }
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            setCookieConsent('accepted');
            hideCookieConsent();
            loadGoogleAnalytics();
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            setCookieConsent('declined');
            hideCookieConsent();
        });
    }

    const consent = getCookieConsent();
    if (consent === 'accepted') {
        loadGoogleAnalytics();
    } else if (consent === null) {
        showCookieConsent();
    }

    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonialIndex = 0;

    if (testimonials.length > 0) {
        testimonials[currentTestimonialIndex].classList.add('active');

        setInterval(() => {
            testimonials[currentTestimonialIndex].classList.remove('active');
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            testimonials[currentTestimonialIndex].classList.add('active');
        }, 16000);
    }

    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
});
