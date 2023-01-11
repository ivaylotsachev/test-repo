import gsap from 'gsap';

const magnetIn = (event) => {
    const magnetButton = event.currentTarget;
    const bounding = magnetButton.getBoundingClientRect();
    const magnetsStrength = magnetButton.getAttribute('data-strength');

    gsap.to(magnetButton, 1.5, {
        x:
            ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
            magnetsStrength,
        y:
            ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
            magnetsStrength,
        rotate: '0.001deg',
        ease: 'Power4.easeOut',
    });
};

const magnetOut = (event) => {
    gsap.to(event.currentTarget, 1.5, {
        x: 0,
        y: 0,
        ease: 'Elastic.easeOut',
    });
};

export default { magnetIn, magnetOut };
