import gsap from 'gsap';

const toHome = () => {
    console.log('works to home animation');

    const transitionLayer = '.transition-layer-container';
    const html = document.querySelector('html');

    html.classList.add('js-scroll-disabled');
    gsap.set('.bottom', { borderRadius: '100%' });
    gsap.set('.top', { borderRadius: '100%' });
    gsap.set(transitionLayer, { yPercent: 130 });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: 'Power4.easeInOut',
                stagger: 0.02,
            },
        });

        tl.to('.works-page', { yPercent: -20 }).to(
            transitionLayer,
            { yPercent: 0, onComplete: resolve },
            0
        );
    });
};

export default toHome;
