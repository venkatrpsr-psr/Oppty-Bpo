

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animation');
        }
    });
});

document.querySelectorAll('.animate-right, .animate-top, .animate-left, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el);
}); 

function scrollSlider(direction) {
    const slider = document.getElementById('insightSlider');
    const scrollStep = slider.clientWidth + 25; 
    
    slider.scrollBy({
        left: direction * scrollStep,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const statsElements = document.querySelectorAll('.stat-number');
    
    const startCounting = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
           
            const currentNum = Math.floor(progress * target);
            
            if (el.innerText.includes('%')) {
                el.innerText = currentNum + '%';
            } else if (el.innerText.includes('~')) {
                el.innerText = '~' + currentNum;
            } else {
                el.innerText = currentNum;
            }

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    const StatsVisualizer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                StatsVisualizer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    statsElements.forEach(stat => StatsVisualizer.observe(stat));
});
