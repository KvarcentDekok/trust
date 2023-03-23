const sliderControlLeft = document.querySelector('.slider__control--left');
const sliderControlRight = document.querySelector('.slider__control--right');
const sliderList = document.querySelector('.slider__list');

function slider() {
    sliderControlLeft.addEventListener('click', () => {
        const slides = sliderList.querySelectorAll('.slider__slide');
        const slideWidth = slides[0].offsetWidth;

        let slideIndex = ~~(sliderList.scrollLeft / slideWidth) - 1;

        if (slideIndex < 0) {
            slideIndex = 0;
        }

        slides[slideIndex].scrollIntoView({inline: "start", behavior: "smooth"});
    });

    sliderControlRight.addEventListener('click', () => {
        const slides = sliderList.querySelectorAll('.slider__slide');
        const slideWidth = slides[0].offsetWidth;

        let slideIndex = ~~(sliderList.scrollLeft / slideWidth) + 1;

        if (slideIndex >= slides.length) {
            slideIndex = slides.length - 1;
        }

        slides[slideIndex].scrollIntoView({inline: "start", behavior: "smooth"});
    });
}

export default slider;
