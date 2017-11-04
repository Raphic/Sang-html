 


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