function filterMissions(category) {
    // 1. Update Active Button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Filter Logic
    const missions = document.querySelectorAll('.mission-card');
    
    missions.forEach(card => {
        // Reset animation
        card.style.animation = 'none';
        card.offsetHeight; /* trigger reflow */
        
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add animation keyframe to your CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);



document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('holoCard');
    const card = cardContainer.querySelector('.holo-card');

    document.addEventListener('mousemove', (e) => {
        // Only run on desktop
        if(window.innerWidth < 992) return;

        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        cardContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        cardContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'all 0.5s ease';
    });

    // Remove transition when moving for smoothness
    document.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.final-signal-section');
    const card = document.getElementById('monolith3D');

    // 1. TRACK MOUSE ONLY INSIDE THE SECTION
    section.addEventListener('mousemove', (e) => {
        // If we are hovering directly over the card, don't tilt (keep it steady)
        if (card.matches(':hover')) {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            return; 
        }

        // Otherwise, calculate the tilt based on mouse position
        const x = (window.innerWidth / 2 - e.pageX) / 40; // Reduced sensitivity (40)
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    // 2. RESET WHEN LEAVING SECTION
    section.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'transform 0.5s ease';
    });

    // 3. SMOOTH ENTRY
    section.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.2s ease-out';
    });
});

