$(document).ready(function(){
    var swiper = new Swiper('.home_slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: true
    }); 
    /* Scroll show menu */
    $(window).scroll(function() {
        if ($(this).scrollTop() < 450 ) {
            $('.share-over').fadeOut();
        }
        else {
            $('.share-over').fadeIn();
        }
    });
    /* Scroll To Top */
    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
     /* Scroll Custom bar */
    (function($){
        $(window).on("load",function(){
            $(".home-scroll").mCustomScrollbar({
                theme:"minimal-dark"
            });
            $(".hot_video_comment .top").mCustomScrollbar({
                theme:"minimal-dark"
            });
            $(".hot_video_more").mCustomScrollbar({
                theme:"minimal-dark"
            });
            $(".styleBon .hotnew_content").mCustomScrollbar({
                theme:"minimal-dark"
            });
        });
    })(jQuery);
});





