



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.v-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Set CSS variables
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});




// Add this to your existing JS
const title = document.querySelector('.v-title');
if (title) {
    const text = title.innerHTML;
    const words = text.split(' ');
    title.innerHTML = words.map((word, i) => 
        `<span style="display:inline-block; opacity:0; transform:translateX(-20px); transition: all 0.6s ease ${i * 0.1}s">${word}</span>`
    ).join(' ');

    // Trigger the reveal
    setTimeout(() => {
        title.querySelectorAll('span').forEach(s => {
            s.style.opacity = '1';
            s.style.transform = 'translateX(0)';
        });
    }, 100);
}


document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll('.process-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered delay for each step
                setTimeout(() => {
                    entry.target.classList.add('reveal');
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });

    steps.forEach(step => observer.observe(step));
});


document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-x");

    animatedElements.forEach(el => {
        setTimeout(() => {
            el.classList.add("show");
        }, 200);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-x");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 200);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".slide-x");
    const others = document.querySelectorAll(".animate-x");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 120);
    });

    others.forEach(el => {
        setTimeout(() => {
            el.classList.add("show");
        }, 200);
    });
});


document.querySelectorAll('.logo-track').forEach(track => {
    track.addEventListener('mouseenter', () => {
        track.querySelectorAll('.logo-slide').forEach(slide => {
            slide.style.animationPlayState = 'paused';
        });
    });

    track.addEventListener('mouseleave', () => {
        track.querySelectorAll('.logo-slide').forEach(slide => {
            slide.style.animationPlayState = 'running';
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".promise-card").forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 120);
    });
});



document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;

        // close others
        document.querySelectorAll(".faq-item").forEach(faq => {
            if (faq !== item) faq.classList.remove("active");
        });

        // toggle current
        item.classList.toggle("active");
    });
});
// hero section physics card effect//

document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.physics-card');
    const vision = document.querySelector('.vision-layer');
    
    // Calculate values
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Apply 3D tilt to card
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
    // Apply parallax drift to background
    vision.style.transform = `scale(1.1) translate(${xAxis * 0.5}px, ${yAxis * 0.5}px)`;
});



// Blueprint section logic box interaction//
document.querySelectorAll('.logic-box').forEach(box => {
    box.addEventListener('click', () => {
        // 1. Remove active class from all boxes
        document.querySelectorAll('.logic-box').forEach(b => b.classList.remove('active'));
        // 2. Add active to clicked box
        box.classList.add('active');

        // 3. Get the target ID
        const targetId = box.getAttribute('data-target');

        // 4. Hide all blueprints and show target
        document.querySelectorAll('.blueprint-unit').forEach(unit => {
            unit.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});



document.querySelectorAll('.matrix-node').forEach(node => {
    node.addEventListener('mousemove', e => {
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        node.style.setProperty('--x', `${x}px`);
        node.style.setProperty('--y', `${y}px`);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.kinetic-entry');
    
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the row is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const rowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    rows.forEach(row => rowObserver.observe(row));
});



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace('+', '').replace('%', '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + (counter.getAttribute('data-target').includes('%') ? '%' : '+');
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target + (counter.getAttribute('data-target').includes('%') ? '%' : '+');
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    const counterObserver = new IntersectionObserver(startCounter, { threshold: 0.5 });
    counters.forEach(c => counterObserver.observe(c));
});




document.addEventListener('DOMContentLoaded', () => {
    const system = document.querySelector('.gravity-system');
    const rings = document.querySelectorAll('.orbit-ring');
    const planets = document.querySelectorAll('.brand-planet');

    // 1. Magnetic Slowdown
    system.addEventListener('mouseenter', () => {
        rings.forEach(ring => {
            ring.style.animationPlayState = 'paused';
        });
        planets.forEach(planet => {
            planet.style.animationPlayState = 'paused';
        });
    });

    system.addEventListener('mouseleave', () => {
        rings.forEach(ring => {
            ring.style.animationPlayState = 'running';
        });
        planets.forEach(planet => {
            planet.style.animationPlayState = 'running';
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const speed = 200;
                
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;
                    
                    if(count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + (target > 90 ? '%' : '+');
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
});




    document.addEventListener('DOMContentLoaded', () => {
        const vault = document.getElementById('securityVault');
        const lockIcon = document.getElementById('lockIcon');
        const statusText = document.querySelector('.vault-status');
        
        let isOpen = false;

        vault.addEventListener('click', () => {
            if (!isOpen) {
                // Open the vault
                vault.classList.add('vault-open');
                lockIcon.classList.remove('fa-lock');
                lockIcon.classList.add('fa-lock-open');
                isOpen = true;
            } else {
                // Close the vault (Optional, if you want toggle behavior)
                vault.classList.remove('vault-open');
                lockIcon.classList.remove('fa-lock-open');
                lockIcon.classList.add('fa-lock');
                isOpen = false;
            }
        });
    });


document.addEventListener('DOMContentLoaded', () => {
    const chips = document.querySelectorAll('.keyword-chip');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        chips.forEach(chip => {
            const speed = parseFloat(chip.getAttribute('data-speed'));
            const yPos = -(scrollY * speed * 0.05);
            chip.style.transform = `translateY(${yPos}px)`;
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.background = 'rgba(11, 13, 18, 0.95)';
        } else {
            nav.style.padding = '20px 0';
            nav.style.background = 'rgba(11, 13, 18, 0.8)';
        }
    });

    // Mobile Menu Toggle (Basic Logic)
    window.toggleMenu = function() {
        const links = document.querySelector('.nav-links');
        if (links.style.display === 'flex') {
            links.style.display = 'none';
        } else {
            links.style.display = 'flex';
            links.style.flexDirection = 'column';
            links.style.position = 'absolute';
            links.style.top = '100%';
            links.style.left = '0';
            links.style.width = '100%';
            links.style.background = '#0b0d12';
            links.style.padding = '20px';
        }
    };
});


document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('nexusBtn');
    
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate center
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Move button slightly (Magnetic Effect)
        const moveX = (x - centerX) / 3;
        const moveY = (y - centerY) / 3;
        
        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.data-file');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    cards.forEach(card => {
        const idElement = card.querySelector('.file-id');
        
        card.addEventListener('mouseenter', () => {
            let iteration = 0;
            const originalText = idElement.dataset.value;
            
            clearInterval(idElement.interval); // Clear any existing interval

            idElement.interval = setInterval(() => {
                idElement.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iteration) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
                
                if(iteration >= originalText.length) { 
                    clearInterval(idElement.interval);
                }
                
                iteration += 1 / 3; // Speed of decode
            }, 30);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('bentoGrid');
    
    grid.addEventListener('mousemove', (e) => {
        const cards = document.getElementsByClassName('bento-card');
        
        for(const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        }
    });
});