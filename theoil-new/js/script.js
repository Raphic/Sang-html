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
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {  
            slidesPerView: 2,
            spaceBetween: 20
        },
        576: {  
            slidesPerView: 3,
        },
        992: {
            spaceBetween: 30,
        }
    }
});


var wrapper = document.querySelector(".nav-wrapper");
var nav = priorityNav.init({
    mainNavWrapper: ".nav-wrapper", // mainnav wrapper selector (must be direct parent from mainNav)
    mainNav: ".nav-ul", // mainnav selector. (must be inline-block)
    navDropdownLabel: 'MORE <i class="fa fa-angle-double-down" aria-hidden="true"></i>',
    navDropdownClassName: "nav__dropdown", // class used for the dropdown.
    navDropdownToggleClassName: "nav__dropdown-toggle", // class used for the dropdown toggle.
});

