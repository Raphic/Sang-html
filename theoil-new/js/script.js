 var swiper = new Swiper('.slider-01 .swiper-container', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.slider-02 .swiper-container', {
    spaceBetween: 40,
    centeredSlides: true,
//    autoplay: {
//        delay: 2500,
//        disableOnInteraction: false,
//    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.slider-03 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 55,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

