import Swiper, {Navigation, Scrollbar, Controller} from 'swiper';

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
    const sliderObject = new Swiper('#gallery', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.gallery__slider-control.slider__control--right',
            prevEl: '.gallery__slider-control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        scrollbar: {
            el: '#gallery-scrollbar',
            draggable: true,
            dragClass: 'slider__scrollbar-drag'
        }
    });
}

export function initSliderOffers() {
    const sliderOffers = new Swiper('#similar-offers', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.similar-offers__slider-control.slider__control--right',
            prevEl: '.similar-offers__slider-control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        scrollbar: {
            el: '#similar-offers-scrollbar',
            draggable: true,
            dragClass: 'slider__scrollbar-drag'
        }
    });
}

export function initSliderResidentialComplex() {
    const sliderObject = new Swiper('.slider__init', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.gallery__slider-control.slider__control--right',
            prevEl: '.gallery__slider-control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        scrollbar: {
            el: '#gallery-scrollbar',
            draggable: true,
            dragClass: 'slider__scrollbar-drag'
        }
    });
}

export function initSliderTimeline() {
    const sliderYears = new Swiper('#slider-years', {
        modules: [Controller],
        spaceBetween: 20,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        slidesOffsetAfter: 2000,
        slideActiveClass: 'timeline__year--active',
        breakpoints: {
            900: {
                spaceBetween: 48
            }
        }
    });

    const sliderHistory = new Swiper('#slider-history', {
        modules: [Controller],
        spaceBetween: 30,
        lazy: true,
        slidesOffsetAfter: 2000,
    });

    sliderYears.controller.control = sliderHistory;
    sliderHistory.controller.control = sliderYears;
}
