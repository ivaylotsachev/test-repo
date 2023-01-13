import gsap from 'gsap';

const toSingleWork = () => {
    console.log('works to single work animation');
    const html = document.querySelector('html');

    html.classList.add('js-scroll-disabled');
    gsap.set('.separator', { autoAlpha: 0 });
    gsap.set('.order-mask', { autoAlpha: 0 });
    gsap.set('.item-subtitle', { autoAlpha: 0 });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: 'Power4.easeInOut',
                stagger: 0.02,
            },
        });

        tl.to('.title-grotesk', { yPercent: 120, onComplete: resolve }, 0);
    });
};

export default toSingleWork;
