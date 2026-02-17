document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('opptyContactForm');

    // Input Focus Animation
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = "scale(1.02)";
        });
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = "scale(1)";
        });
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.querySelector('.submit-btn');
        btn.innerHTML = '<span>Sending...</span>';
        
        setTimeout(() => {
            btn.style.background = "#2ecc71";
            btn.innerHTML = '<span>Sent Successfully!</span>';
        }, 2000);
    });
});
// Magnetic Button Effect
const magBtn = document.querySelector('.magnetic-btn');
magBtn.addEventListener('mousemove', (e) => {
    const rect = magBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    magBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
});

magBtn.addEventListener('mouseleave', () => {
    magBtn.style.transform = `translate(0, 0)`;
});

// Counter Logic
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const target = +entry.target.dataset.target;
            const count = +entry.target.innerText;
            const speed = 200;
            const inc = target / speed;
            if(count < target) {
                entry.target.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            }
        }
    });
});

document.addEventListener('mousemove', (e) => {
    const hero = document.getElementById('parallax-hero');
    const layers = document.querySelectorAll('.parallax-layer');
    
    // Calculate mouse position relative to center
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    layers.forEach((layer, index) => {
        // Different speed for each boll to create depth
        const speed = (index + 1) * 2; 
        const xPos = x * speed;
        const yPos = y * speed;
        
        layer.style.transform = `translateX(${xPos}px) translateY(${yPos}px)`;
    });
});

const stackcounters = document.querySelectorAll('.counter');

stackcounters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const increment = Math.ceil(target / 80);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});