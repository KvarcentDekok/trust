import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function makeVars(startScroller) {
    return {
        scrollTrigger: {
            trigger: '#features',
            start: `top ${startScroller}`,
            end: '+=500',
            scrub: 2,
            toggleActions: 'restart pause reverse pause'
        },
        y: 300,
        opacity: 0,
        ease: "power1.inOut"
    }
}

function animationFeatures() {
    gsap.from('.features-list__item:nth-of-type(1)', makeVars('100%'));

    gsap.from('.features-list__item:nth-of-type(2)', makeVars('90%'));

    gsap.from('.features-list__item:nth-of-type(3)', makeVars('80%'));

    gsap.from('.features-list__item:nth-of-type(4)', makeVars('70%'));
}

export default animationFeatures;