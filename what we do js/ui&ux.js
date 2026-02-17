let currentSlide = 0;
// We select slides inside #hero-section
const heroSection = document.getElementById('hero-section');
const totalSlides = heroSection.querySelectorAll('.v-slide').length;
const sliderInner = document.getElementById('vInner'); // Updated ID
const dots = document.querySelectorAll('.v-dot');

function goToSlide(index) {
  currentSlide = index;
  // Moves the tray vertically
  sliderInner.style.transform = `translateY(-${currentSlide * 100}vh)`;
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
}

// Set initial interval
let autoCycle = setInterval(nextSlide, 5000);

// Resets the timer when you click a dot
function manualNav(index) {
  clearInterval(autoCycle);
  goToSlide(index);
  autoCycle = setInterval(nextSlide, 5000);
}
const stepsData = [
        {
            title: "UX Discovery & Research",
            desc: "UX Discovery & Research involves understanding project goals and user needs through interviews and analysis of consumer behavior. This process ensures a user-centric approach.",
            icon: "fa-search",
            color: "#9d7dfc"
        },
        {
            title: "UX Prototype",
            desc: "We create interactive wireframes and low-fidelity prototypes to visualize the user flow and test the functionality of the product before moving to high-fidelity design.",
            icon: "fa-layer-group",
            color: "#3182ce"
        },
        {
            title: "UI Design Concept",
            desc: "Our creative team develops unique visual identities, choosing the right typography, colors, and layouts to ensure an engaging and memorable brand experience.",
            icon: "fa-paint-brush",
            color: "#e53e3e"
        },
        {
            title: "Validation & Testing",
            desc: "We perform rigorous usability testing and quality assurance to identify any friction points. We iterate based on real feedback to ensure a flawless experience.",
            icon: "fa-vial",
            color: "#dd6b20"
        },
        {
            title: "Launch",
            desc: "After final refinements, we help you deploy your platform. We monitor performance and provide ongoing support to ensure long-term business success.",
            icon: "fa-rocket",
            color: "#38a169"
        }
    ];

    let currentStep = 0;
    const tabs = document.querySelectorAll('.step-tab');
    const dotss = document.querySelectorAll('.dotp');
    const progressFill = document.getElementById('progressFill');

    function updateUI(index) {
        currentStep = index;
        const data = stepsData[index];

        // Update Tabs
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });

        // Update Dots & Progress Bar
        dots.forEach((dots, i) => {
            dots.classList.toggle('active', i <= index);
        });
        progressFill.style.width = (index / (stepsData.length - 1)) * 100 + "%";

        // Update Content
        document.getElementById('stepNum').innerText = `0${index + 1}`;
        document.getElementById('stepSub').innerText = `Step 0${index + 1}`;
        document.getElementById('stepTitle').innerText = data.title;
        document.getElementById('stepDesc').innerText = data.desc;
        document.getElementById('contentIcon').style.background = data.color;
        document.getElementById('contentIcon').innerHTML = `<i class="fas ${data.icon}"></i>`;
    }

    // Add click events to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => updateUI(index));
    });
    function changeStep(dir) {
        if (dir === 'next') {
            currentStep = (currentStep + 1) % stepsData.length;
        } else {
            currentStep = (currentStep - 1 + stepsData.length) % stepsData.length;
        }
        updateUI(currentStep);
    }
  
function openProjectModal() {
    document.getElementById("projectModal").style.display = "flex";
}

function closeProjectModal() {
    document.getElementById("projectModal").style.display = "none";
}
lucide.createIcons();

// Optional: Mouse movement affects the container tilt
const container = document.querySelector('.stack-container');
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    container.style.transform = `rotateX(${15 + y}deg) rotateY(${-x}deg)`;
});
const toolsData = [
    { name: 'Figma', icon: 'figma' },
    { name: 'Adobe XD', icon: 'framer' },
    { name: 'Sketch', icon: 'diamond' },
    { name: 'InVision', icon: 'layers' },
    { name: 'FigJam', icon: 'edit-3' },
    { name: 'Framer', icon: 'box' },
    { name: 'Zeplin', icon: 'layout' }
];

const stack = document.getElementById('toolsStack');
const cards = [];

toolsData.forEach((tool, i) => {
    const card = document.createElement('div');
    card.className = 'tools-card';
    card.style.zIndex = toolsData.length - i;

    card.innerHTML = `
        <div class="tools-icon">
            <i data-lucide="${tool.icon}" width="64" height="64"></i>
        </div>
        <div class="tools-name">${tool.name}</div>
    `;

    stack.appendChild(card);
    cards.push(card);
});

lucide.createIcons();

window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.tools-scroll-wrapper');
    const rect = wrapper.getBoundingClientRect();
    const maxScroll = wrapper.offsetHeight - window.innerHeight;

    const scrollProgress = Math.min(
        Math.max(-rect.top, 0),
        maxScroll
    ) / maxScroll;

    const total = cards.length;

    cards.forEach((card, i) => {
        const start = i / total;
        const end = (i + 1) / total;

        if (scrollProgress >= start && scrollProgress < end) {
            const progress = (scrollProgress - start) / (end - start);

            card.classList.add('active');
            card.style.opacity = 1 - progress;
            card.style.transform = `
                translateY(${-progress * 150}px)
                rotate(${-progress * 15}deg)
                scale(${1 + progress * 0.1})
            `;
            card.style.visibility = 'visible';

        } else if (scrollProgress < start) {
            card.classList.remove('active');
            card.style.opacity = 1;
            card.style.visibility = 'visible';
            card.style.transform = `
                translateY(0)
                scale(${1 - i * 0.05})
                translateZ(${-i * 50}px)
            `;

        } else {
            card.classList.remove('active');
            card.style.opacity = 0;
            card.style.visibility = 'hidden';
        }
    });
});

const data = [
  {
    title: "AI-Ahly Sabbour",
    cat: "Real Estate",
    desc: "Egypt’s pioneering engineering consultancy firm reshaping the real estate industry. Focused on sustainable building design, smart construction technologies, and client-centric project management.",
    img: "../img/55.png",
    del: ["Website", "Admin Dashboard", "Project Tracker", "Client Portal"],
    tech: ["React", "Node", "Tailwind", "MySQL", "GraphQL", "Docker"]
  },
  {
    title: "Enterprise UX Dashboard",
    cat: "UI/UX Platform",
    desc: "A data-driven UX dashboard designed for enterprise workflow optimization. Includes advanced analytics, AI-powered recommendations, and cross-platform collaboration tools.",
    img: "../img/56.png",
    del: ["Dashboard", "UX Audit", "Analytics Panel", "User Insights"],
    tech: ["Vue", "D3.js", "Tailwind", "PostgreSQL", "TypeScript", "Redis"]
  },
  {
    title: "Healthcare UX Portal",
    cat: "Healthcare",
    desc: "Patient-centric healthcare portal with accessibility-first UX design. Enables telemedicine, appointment scheduling, and secure health data management.",
    img: "../img/6.png",
    del: ["Patient Portal", "Admin Panel", "Appointment System", "Medical Records"],
    tech: ["React", "Accessibility", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "FinTech Experience Suite",
    cat: "FinTech",
    desc: "Secure and intuitive fintech UX built for trust and scalability. Features secure payment flows, KYC automation, and AI fraud detection.",
    img: "../img/4.png",
    del: ["Web App", "KYC Flow", "Payment Gateway", "Fraud Detection"],
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe API", "Tailwind"]
  },
  {
    title: "AI UX Learning Platform",
    cat: "EdTech",
    desc: "Interactive AI-powered UX learning ecosystem for future designers. Includes gamified exercises, personalized learning paths, and AI mentoring.",
    img: "../img/yui.png",
    del: ["Learning Platform", "Progress Tracking", "Course Dashboard", "AI Mentor"],
    tech: ["React", "AI APIs", "Figma", "Node.js", "GraphQL"]
  },
  {
    title: "E-Commerce UX Revamp",
    cat: "Retail",
    desc: "High-conversion e-commerce UX with performance-driven UI decisions. Optimized for mobile, includes AI product recommendations and multi-currency support.",
    img: "../img/56.png",
    del: ["Storefront", "Checkout UX", "Product Management", "Analytics Dashboard"],
    tech: ["Shopify", "Headless UI", "Stripe", "React", "Tailwind"]
  },
  {
    title: "Travel Booking Experience",
    cat: "Travel",
    desc: "Optimized UX for travelers to book flights and hotels with ease. Integrated with multi-platform booking engines, live pricing, and itinerary management.",
    img: "../img/55.png",
    del: ["Booking App", "Dashboard", "Itinerary Planner", "Live Pricing"],
    tech: ["React", "Node.js", "Tailwind", "APIs", "Mapbox"]
  }
];


let i = 0;

const title = document.getElementById("faTitle");
const desc = document.getElementById("faDesc");
const img = document.getElementById("faImage");
const cat = document.getElementById("faCategory");
const del = document.getElementById("faDeliverables");
const tech = document.getElementById("faTech");
const idx = document.getElementById("faIndex");

function render(){
  const d = data[i];
  title.textContent = d.title;
  desc.textContent = d.desc;
  img.src = d.img;
  cat.textContent = d.cat;
  idx.textContent = String(i+1).padStart(2,"0");
  del.innerHTML = d.del.map(x=>`<span>${x}</span>`).join("");
  tech.innerHTML = d.tech.map(x=>`<span>${x}</span>`).join("");
}

// Next / Previous buttons
document.querySelector(".next").onclick = ()=>{
  i = (i+1)%data.length; render();
}
document.querySelector(".prev").onclick = ()=>{
  i = (i-1+data.length)%data.length; render();
}

// Automatic slide every 4 seconds
setInterval(()=>{
  i = (i+1)%data.length; render();
},4000);

// Initial render
render();


let stepIndex=0;
const steps=document.querySelectorAll(".ux-steps .step");
const fill=document.querySelector(".ux-fill");

function runProgress(){
 steps.forEach(s=>s.classList.remove("active"));
 steps[stepIndex].classList.add("active");

 fill.style.transition="none";
 fill.style.width="0%";

 setTimeout(()=>{
  fill.style.transition="width 6s linear";
  fill.style.width="100%";
 },50);

 stepIndex++;
 if(stepIndex>=steps.length) stepIndex=0;
}

runProgress();
setInterval(runProgress,6000);

setInterval(()=>{
  document.querySelector(".next").click();
},6000);

const thumbs = document.getElementById("faThumbs");

data.forEach((d,idx)=>{
  const img=document.createElement("img");
  img.src=d.img;
  img.onclick=()=>{
    i=idx;
    render();
    document.querySelectorAll(".fa-thumbs img").forEach(t=>t.classList.remove("active"));
    img.classList.add("active");
  };
  thumbs.appendChild(img);
});

const counters = document.querySelectorAll(".stat-card h2");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const el = entry.target;
            const target = parseFloat(el.dataset.target);
            let count = 0;
            const step = target / 80;

            const update = () => {
                count += step;
                if(count < target){
                    el.innerText = el.innerText.includes('%')
                        ? Math.floor(count) + '%'
                        : count.toFixed(target % 1 ? 1 : 0);
                    requestAnimationFrame(update);
                } else {
                    el.innerText = el.dataset.target + (el.innerText.includes('%') ? '%' : '');
                }
            };
            update();
            observer.unobserve(el);
        }
    });
},{threshold:0.6});

counters.forEach(c => observer.observe(c));




