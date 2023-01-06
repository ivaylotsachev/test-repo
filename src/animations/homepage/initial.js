import gsap from 'gsap';

const initial = (store) => {
    const transitionLayer = '.transition-layer-container';
    const delay = 1.6;

    const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'Power4.in', stagger: 0.02 },
    });

    gsap.set(transitionLayer, { yPercent: 130 });
    document.body.classList.add('js-scroll-disabled');

    tl.to(transitionLayer, { yPercent: 0 })
        .to('.top', { borderRadius: 0 }, 0.5)
        .from('.transition-title', { yPercent: 110 }, 0.2)
        .to(transitionLayer, { yPercent: -130 }, 1.5)
        .to('.bottom', { borderRadius: 0 }, 1.8)
        .to('.image-reveal', { yPercent: -100 }, delay)
        .from('.profile-image', { scale: 1.2 }, delay)
        .from('.title-one p', { yPercent: 110 }, delay)
        .from('.title-two p', { yPercent: 110 }, delay)
        .from(
            '.title-three p',
            {
                yPercent: 110,
                onComplete: () => {
                    document.body.classList.remove('js-scroll-disabled');
                    store.setInitialLoading(false);
                },
            },
            delay
        );
};

export default initial;
