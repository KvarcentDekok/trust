import Swiper, {Navigation, Scrollbar} from 'swiper';

export function initSliderMain() {
    const sliderMain = new Swiper('.slider__init', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: 'auto',
        slidesOffsetAfter: 225,
        lazy: true,
        navigation: {
            nextEl: '.slider__control.slider__control--right',
            prevEl: '.slider__control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        scrollbar: {
            el: '.slider__scrollbar',
            draggable: true,
            dragClass: 'slider__scrollbar-drag'
        }
    });
}

export function initSliderApartment() {
    const sliders = document.querySelectorAll('.slider__init');

    function buildSlider(slider) {
        const sliderId = slider.id;

        return new Swiper(`#${sliderId}`, {
            modules: [Navigation],
            lazy: true,
            navigation: {
                nextEl: `.slider__control.slider__control--right[data-slider="${sliderId}"]`,
                prevEl: `.slider__control.slider__control--left[data-slider="${sliderId}"]`,
                disabledClass: 'slider__control--disabled'
            },
        });
    }

    for (let i = 0; i < sliders.length; i++) {
        buildSlider(sliders[i]);
    }
}

export function initSliderObject() {
    const sliderObject = new Swiper('.slider__init', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.slider__control.slider__control--right',
            prevEl: '.slider__control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        scrollbar: {
            el: '.slider__scrollbar',
            draggable: true,
            dragClass: 'slider__scrollbar-drag'
        }
    });
}
