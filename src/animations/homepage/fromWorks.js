import gsap from 'gsap';

const fromWork = () => {
    const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'Power4.easeIn' },
    });

    return new Promise((resolve) => {
        tl.to('.image-reveal', { xPercent: -110 })
            .from('.profile-image', { scale: 1.3 }, 0)
            .from('.title-one p', { xPercent: 110 }, 0)
            .from('.title-two p', { xPercent: -110 }, 0)
            .from('.title-three p', { xPercent: 110 }, 0)
            .from(
                '.head-location',
                { autoAlpha: 0, onComplete: () => resolve() },
                0.3
            );
    });
};

export default fromWork;
