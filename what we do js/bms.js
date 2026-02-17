const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            
            item.classList.toggle('active');
        });
    });



const items = document.querySelectorAll('.feat-item');

items.forEach(item => {
    const randX = (Math.random() * 100 - 50).toFixed(2) + 'px';
    const randY = (Math.random() * 100 - 50).toFixed(2) + 'px';
    const randRot = (Math.random() * 15 - 7.5).toFixed(2) + 'deg';
    const randSkewX = (Math.random() * 5 - 2.5).toFixed(2) + 'deg';
    const randSkewY = (Math.random() * 5 - 2.5).toFixed(2) + 'deg';

    item.style.setProperty('--rand-x', randX);
    item.style.setProperty('--rand-y', randY);
    item.style.setProperty('--rand-rot', randRot);
    item.style.setProperty('--rand-skew-x', randSkewX);
    item.style.setProperty('--rand-skew-y', randSkewY);
});



document.querySelectorAll('.content h3, .content p').forEach(el => {
    const text = el.innerText;
    el.innerHTML = '';

    [...text].forEach(char => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;

        span.style.setProperty('--rand-x', Math.random());
        span.style.setProperty('--rand-y', Math.random());

        el.appendChild(span);
    });

    el.classList.add('scatter');
});

