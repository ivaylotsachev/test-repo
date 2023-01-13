import gsap from 'gsap';

const toWorks = () => {
    console.log('home to works animation');

    const transitionLayer = '.transition-layer-container';
    gsap.set(transitionLayer, { yPercent: 130 });
    document.querySelector('html').classList.add('js-scroll-disabled');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            defaults: { duration: 1.2, ease: 'Power4.easeInOut' },
        });

        tl.to('.image-container', { yPercent: -20 })
            .to('.titles-wrapper', { yPercent: -30 }, 0)
            .to(
                transitionLayer,
                {
                    yPercent: 0,
                    onComplete: resolve,
                },
                0
            );
    });
};

export default toWorks;
