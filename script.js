const header= document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 20)
});

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2000,
    delay: 120,
    reset: true
});

sr.reveal('.home-text', {origin:'top'});
sr.reveal('.about-me-img, .blog-items, .skills-text',{origin: 'bottom'});
sr.reveal('.skills-img',{origin:'top'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.right-contact', {origin: 'right'});