/************ HERO SECTION JS  **********/
const heroslides = document.querySelectorAll('.hero-slide');
const heroContainer = document.getElementById('hero-section');

const backgrounds = [
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600',
  'https://images.unsplash.com/photo-1495364141860-b0d03ecd504a?q=80&w=1600',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600'
];

// Split words for animation
document.querySelectorAll('.hero-slide h1').forEach(title => {
  const words = title.innerText.split(' ');
  title.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});

let heroindex = 0;

function nextSlide() {
  heroslides[heroindex].classList.remove('active');
  heroindex = (heroindex + 1) % heroslides.length;

  heroContainer.style.backgroundImage = `url('${backgrounds[heroindex]}')`;

  setTimeout(() => {
    heroslides[heroindex].classList.add('active');
  }, 300);
}

heroContainer.style.backgroundImage = `url('${backgrounds[0]}')`;
heroslides[0].classList.add('active');

setInterval(nextSlide, 5000);

/*********  JOURNEY SECTION **********/
document.addEventListener('DOMContentLoaded', () => {
  const years = document.querySelectorAll('.year');
  const slides = document.querySelectorAll('.journey-slide');
  const progressFill = document.querySelector('.progress-fill');
  
  let currentIndex = 0;
  const slideDuration = 5000; // 5 seconds per slide
  let startTime = Date.now();
  let timerInterval;

  function updateSlide(index) {
    // Reset Navigation
    years.forEach(y => y.classList.remove('active'));
    years[index].classList.add('active');

    // Reset Slides
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');

    // Reset Progress Bar
    currentIndex = index;
    startTime = Date.now();
  }

  function startAutoplay() {
    timerInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed / slideDuration) * 100;

      if (progress >= 100) {
        let next = (currentIndex + 1) % years.length;
        updateSlide(next);
      } else {
        progressFill.style.width = `${progress}%`;
      }
    }, 50);
  }

  // Click interaction
  years.forEach((year, index) => {
    year.addEventListener('click', () => {
      updateSlide(index);
    });
  });

  startAutoplay();
});
/*********  **********/

const data = [
  {
    title: "Achievement Oriented",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2l4 8h-8l4-8zm-8 10h16v10H4z"/></svg>`,
    text: `
      We believe in setting clear goals and achieving measurable results.
      Our teams are driven by performance and accountability.
      Continuous improvement is part of our culture.
      We celebrate milestones and project success.
      Challenges motivate us to deliver better outcomes.
      Excellence is our daily benchmark.
      Results define our growth.
    `
  },
  {
    title: "Customer Focus",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>`,
    text: `
      We prioritize understanding client needs deeply.
      Long-term partnerships matter more than short wins.
      Solutions are tailored for real business impact.
      Transparency builds trust with our clients.
      Feedback drives continuous improvement.
      We align technology with business goals.
      Client success defines our success.
    `
  },
  {
    title: "Teamwork",
    icon: `<svg viewBox="0 0 24 24"><path d="M4 4h16v6H4zm0 8h16v8H4z"/></svg>`,
    text: `
      Collaboration is at the heart of Oppty.
      We value shared ownership of goals.
      Cross-functional teams deliver stronger results.
      Respect and trust fuel productivity.
      Open communication strengthens execution.
      Diverse ideas lead to innovation.
      Together we achieve more.
    `
  },
  {
    title: "Ownership",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20"/></svg>`,
    text: `
      We take responsibility for our work.
      Accountability ensures consistent quality.
      Every team member owns outcomes.
      Proactive problem-solving is encouraged.
      Decisions are made with confidence.
      Integrity guides our actions.
      Ownership builds trust.
    `
  },
  {
    title: "Visioning & Strategic Direction",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>`,
    text: `
      We think long-term, not just immediate wins.
      Strategy drives sustainable growth.
      Innovation aligns with business vision.
      Market trends shape our roadmap.
      Clear direction empowers teams.
      Planning enables scalability.
      Vision fuels progress.
    `
  }
];
document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".value-item");
  const title = document.getElementById("valueTitle");
  const text = document.getElementById("valueText");
  const icon = document.getElementById("valueIcon");
  const dots = document.querySelectorAll(".dot");

  function setActive(index) {
    items.forEach(i => i.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    items[index].classList.add("active");
    dots[index].classList.add("active");

    title.textContent = data[index].title;
    text.innerHTML = data[index].text;
    icon.innerHTML = data[index].icon;
  }

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      setActive(Number(item.dataset.index));
    });
  });

  // Initial load
  setActive(0);

});
item.addEventListener("click", () => {
  setActive(Number(item.dataset.index));
});

/******* PURPOSE SECTION**********/
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate'); // Trigger CSS animations

        // If it's the stats section, start counter
        if (entry.target.classList.contains('purpose-stats')) {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.3 });

  // Observe relevant sections
  document.querySelectorAll('.purpose-row, .purpose-stats, .purpose-title').forEach(el => {
    observer.observe(el);
  });
});

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let count = 0;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

/************COMMITMENTS SECTION JS **********/


/******* ICONS JS *********/
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