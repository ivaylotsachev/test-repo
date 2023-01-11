import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.set('.profile-image', { filter: 'grayscale(1)' });

const scroll = () => {
    /* head section*/
    const tl = gsap.timeline({
        defaults: {
            duration: 0.6,
            scrollTrigger: {
                trigger: '.titles-wrapper',
                start: 'top 5%',
                end: 'bottom center',
                scrub: 1,
            },
        },
    });
};

export default scroll;
