import gsap from 'gsap';

const initial = () => {
    console.log('workspage initial animation');

    const html = document.querySelector('html');
    const transitionLayer = '.transition-layer-container';
    const delay = 4.2;
    gsap.set(transitionLayer, { yPercent: 0 });

    html.classList.add('js-scroll-disabled');

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: 'Power4.easeInOut',
                stagger: 0.02,
                delay: 0.6,
            },
        });

        tl.from('.tr-title-one p', { xPercent: 110 })
            .to('.tr-title-one p', { xPercent: 110 }, 2)
            .from('.tr-title-two p', { xPercent: 110 }, 2)
            .to(transitionLayer, { yPercent: -130 }, 4)
            .to('.bottom', { borderRadius: 0 }, 4.4)
            .from('.title-grotesk', { yPercent: 110 }, delay)
            .from(
                '.main-nav-item',
                {
                    yPercent: -200,
                    stagger: 0.04,
                    onComplete: () => {
                        resolve();
                        html.classList.remove('js-scroll-disabled');
                    },
                },
                delay
            );
    });
};

export default initial;
