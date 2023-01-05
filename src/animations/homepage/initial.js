import gsap from 'gsap';

const initial = () => {
    console.log('initial');

    const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'Power4.out', stagger: 0.02 },
    });

    tl.to('.image-reveal', { xPercent: -100 })
        .from('.profile-image', { scale: 1.2 }, 0)
        .from('.title-one p', { xPercent: -110 }, 0)
        .from('.title-two p', { xPercent: 110 }, 0)
        .from('.title-three p', { xPercent: -110 }, 0);
};

export default initial;
