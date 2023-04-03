import Swiper, { Navigation, Scrollbar } from 'swiper';

function slider() {
    const swiperMain = new Swiper('.slider__init', {
        modules: [Navigation, Scrollbar],
        spaceBetween: 30,
        slidesPerView: "auto",
        slidesOffsetAfter: 225,
        navigation: {
            nextEl: '.slider__control.slider__control--right',
            prevEl: '.slider__control.slider__control--left',
            disabledClass: 'slider__control--disabled'
        },
        scrollbar: {
            el: '.slider__scrollbar',
            draggable: true,
            dragClass: 'slider__scrollbar-drag'
        },
    });
}

export default slider;
