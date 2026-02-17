const path = document.getElementById("progress-path");
const pathLength = path.getTotalLength();
const groups = document.querySelectorAll(".step-group");
const sideTexts = document.querySelectorAll(".step-text");
const finalStepText = document.getElementById("t5");

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

function animateFlow() {
  let start = null;
  const duration = 5500;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);

    path.style.strokeDashoffset = pathLength - (pathLength * progress);

    const markers = [0, 0.22, 0.48, 0.8, 0.98];
    markers.forEach((m, i) => {
      if (progress >= m) {
        groups[i].classList.add("active");
        if (i < 4) sideTexts[i].classList.add("active");
        else finalStepText.classList.add("active");
      }
    });

    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateFlow();
    observer.disconnect();
  }
}, { threshold: 0.2 });

observer.observe(document.getElementById("automation-section"));
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq=>{
  faq.querySelector('.faq-question').addEventListener('click',()=>{
    faqs.forEach(item=>{
      if(item !== faq) item.classList.remove('active');
    });
    faq.classList.toggle('active');
  });
});

        // Automatic Cloning Script for Unbroken Infinite Scroll
        document.querySelectorAll('.js-clone').forEach(track => {
            const content = track.innerHTML;
            track.innerHTML = content + content;
        });
        const video = document.querySelector(".main-video-element");
const btn = document.getElementById("videoControl");
const icon = document.getElementById("playPauseIcon");

btn.onclick = () => {
    if(video.paused){
        video.play();
        icon.className = "fa-solid fa-pause";
    }else{
        video.pause();
        icon.className = "fa-solid fa-play";
    }
};
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 1;
    const totalSlides = 3;

    function autoPlay() {
        currentSlide++;
        if (currentSlide > totalSlides) {
            currentSlide = 1;
        }
        
        const radio = document.getElementById(`s${currentSlide}`);
        if (radio) {
            radio.checked = true;
        }
    }

    // Set interval for 5 seconds
    let slideTimer = setInterval(autoPlay, 5000);

    // Pause auto-play when user manually clicks a dot or card
    const container = document.querySelector('.testi-container');
    container.addEventListener('mouseenter', () => clearInterval(slideTimer));
    container.addEventListener('mouseleave', () => {
        slideTimer = setInterval(autoPlay, 5000);
    });
});
   