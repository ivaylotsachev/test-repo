import gsap from 'gsap';

const fromWork = () => {
    console.log('home from works ainmation');

    const delay = 0.1;
    const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'Power4.easeIn' },
    });

    return new Promise((resolve) => {
        tl.to('.transition-layer-container', { yPercent: -130 })
            .to('.image-reveal', { yPercent: -110 }, delay)
            .from('.profile-image', { scale: 1.3 }, delay)
            .from('.title-one p', { yPercent: 110 }, delay)
            .from('.title-two p', { yPercent: 110 }, delay)
            .from('.title-three p', { yPercent: 110 }, delay)
            .from(
                '.head-location',
                {
                    autoAlpha: 0,
                    onComplete: () => {
                        resolve();
                        document
                            .querySelector('html')
                            .classList.remove('js-scroll-disabled');
                    },
                },
                0.3
            );
    });
};

export default fromWork;
