const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            if (element.classList.contains('from-left')) {
                element.classList.add('scroll-reveal-left');
            } else if (element.classList.contains('from-right')) {
                element.classList.add('scroll-reveal-right');
            } else if (element.classList.contains('from-bottom')) {
                element.classList.add('scroll-reveal-up');
            }
            
            element.classList.remove('scroll-hidden');
            observer.unobserve(element);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about, .services, .whyus, .hr, .contact');
    const designImg = document.querySelector('.designImg');
    
    sections.forEach((section, index) => {
        section.classList.add('scroll-hidden');
        
        if (index % 2 === 0) {
            section.classList.add('from-left');
        } else {
            section.classList.add('from-right');
        }
        
        observer.observe(section);
    });
    
    if (designImg) {
        designImg.classList.add('scroll-hidden', 'from-bottom');
        observer.observe(designImg);
    }
});