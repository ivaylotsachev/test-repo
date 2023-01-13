import gsap from 'gsap';

const fromHome = () => {
    console.log('works from home animation');

    gsap.set('.bottom', { borderRadius: '100%' });
    gsap.set('.top', { borderRadius: '100%' });

    return new Promise((resolve) => {
        const tl = gsap.timeline({
            defaults: {
                duration: 1.2,
                ease: 'Power4.easeInOut',
                stagger: 0.02,
            },
        });

        tl.to('.transition-layer-container', {
            yPercent: -130,
            onComplete: resolve,
        })
            .to('.bottom', { borderRadius: 0 }, 0.3)
            .from('.title-grotesk', { opacity: 0, yPercent: 100 }, 0.2)
            .from('.works-images-container', { opacity: 0, yPercent: 50 }, 0.2);
    });
};

export default fromHome;
