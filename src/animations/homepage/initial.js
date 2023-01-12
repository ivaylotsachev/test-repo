import gsap from 'gsap';

const initial = (store) => {
    console.log('homepage initial animation');
    const transitionLayer = '.transition-layer-container';
    const delay = 4.2;

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: 'Power4.easeInOut',
                stagger: 0.02,
                delay: 0.6,
            },
        });

        gsap.set(transitionLayer, { yPercent: 0 });
        document.body.classList.add('js-scroll-disabled');

        tl.from('.tr-title-one p', { xPercent: 110 })
            .to('.tr-title-one p', { xPercent: 110 }, 2)
            .from('.tr-title-two p', { xPercent: 110 }, 2)
            .to(transitionLayer, { yPercent: -130 }, 4)
            .to('.bottom', { borderRadius: 0 }, 4.4)
            .from('.title-one p', { yPercent: 110 }, delay)
            .from('.title-two p', { yPercent: 110 }, delay)
            .from('.title-three p', { yPercent: 110 }, delay)
            .to('.image-reveal', { xPercent: -110 }, delay)
            .from('.profile-image', { scale: 1.4 }, delay)
            .from(
                '.main-nav-item',
                {
                    yPercent: -200,
                    stagger: 0.04,
                    onComplete: () => {
                        resolve();
                        store.setInitialLoading(false);
                    },
                },
                delay
            );
    });
};

export default initial;
