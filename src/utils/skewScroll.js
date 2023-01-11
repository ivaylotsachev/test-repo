import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skewScroll = () => {
    const skewSetter = gsap.quickSetter('section', 'skewY', 'deg');
    const proxy = { skew: 0 };

    ScrollTrigger.create({
        onUpdate: (self) => {
            const skew = self.getVelocity() / 300;

            if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {
                    skew: 0,
                    duration: 1,
                    ease: 'power3',
                    overwrite: true,
                    onUpdate: () => skewSetter(proxy.skew),
                });
            }
        },
    });
};

export default skewScroll;
