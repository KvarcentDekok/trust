import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function makeVars(startScroller, trigger) {
    return {
        scrollTrigger: {
            trigger: trigger,
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

export function animationFeatures() {
    gsap.from('.features-list__item:nth-of-type(1)', makeVars('100%', '#features'));

    gsap.from('.features-list__item:nth-of-type(2)', makeVars('90%', '#features'));

    gsap.from('.features-list__item:nth-of-type(3)', makeVars('80%', '#features'));

    gsap.from('.features-list__item:nth-of-type(4)', makeVars('70%', '#features'));
}

export function animationPeculiarities() {
    const peculiarities = document.querySelectorAll('.peculiarity');
    const features = document.querySelectorAll('.feature');
    const peculiaritiesStartPercent = 100;
    const featuresStartPercent = 100 - peculiarities.length * 10;

    function initAnimations(elements, startPercent) {
        for (let i = 0; i < elements.length; i++) {
            const startScrollerPercent = startPercent - i * 10;
            const startScrollerString = `${startScrollerPercent}%`;

            gsap.from(elements[i], makeVars(startScrollerString, '#peculiarities'));
        }
    }

    initAnimations(peculiarities, peculiaritiesStartPercent);
    initAnimations(features, featuresStartPercent);
}

export function animationIndicators() {
    const elements = document.querySelectorAll('.indicators__wrapper');
    const tl = gsap.timeline();

    gsap.registerEffect({
        name: 'counter',
        extendTimeline: true,
        defaults: {
            end: 0,
            duration: 0.5,
            ease: 'power1',
            increment: 1,
        },
        effect: (targets, config) => {
            const tl = gsap.timeline();

            targets[0].innerText = targets[0].innerText.replace(/,/g, '');

            tl.to(targets, {
                duration: config.duration,
                innerText: config.end,
                snap: {innerText: config.increment},
                modifiers: {
                    innerText: (innerText) => {
                        return gsap.utils.snap(config.increment, innerText).toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    }
                },
                ease: config.ease
            }, 0);

            return tl;
        }
    })

    for (let i = 0; i < elements.length; i++) {
        const indicator = elements[i].querySelector('.indicators__indicator');
        const number = indicator.querySelector('.indicators__number');
        const endValue = indicator.getAttribute('aria-label');

        tl.from(elements[i], {opacity: 0}, '+=0.5');
        tl.counter(number, {end: endValue}, '-=0.5');
    }
}