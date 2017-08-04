$(document).ready(function(){
    var swiper = new Swiper('.home_slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: true
    });  
    
    /* Scroll show menu 
    ========================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() < 450 ) {
            $('.share-over').fadeOut();
        }
        else {
            $('.share-over').fadeIn();
        }
    });
    /* Nav-menu - requires jQuery Easing plugin
     ========================================================*/
    $(function() {
        $('.share-over .share-comment a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    $(".close").click(function(){
        $(".bg-transp").fadeOut();
    });
    /* Scroll To Top */
    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
     /* Scroll Custom bar 
     ========================================================*/
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
    
    /* Menu Mobile 
    ========================================================*/
    (function ($) {
        $.fn.menumaker = function (options) {
            var cssmenu = $(this)
                , settings = $.extend({
                    format: "dropdown"
                    , sticky: false
                }, options);
            return this.each(function () {
                $(this).find(".button").on('click', function () {
                    $(this).toggleClass('menu-opened');
                    var mainmenu = $(this).next('ul');
                    if (mainmenu.hasClass('open')) {
                        mainmenu.slideToggle().removeClass('open');
                    }
                    else {
                        mainmenu.slideToggle().addClass('open');
                        if (settings.format === "dropdown") {
                            mainmenu.find('ul').show();
                        }
                    }
                });
                cssmenu.find('li ul').parent().addClass('has-sub');
                multiTg = function () {
                    cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                    cssmenu.find('.submenu-button').on('click', function () {
                        $(this).toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open').slideToggle();
                        }
                        else {
                            $(this).siblings('ul').addClass('open').slideToggle();
                        }
                    });
                };
                if (settings.format === 'multitoggle') multiTg();
                else cssmenu.addClass('dropdown');
                if (settings.sticky === true) cssmenu.css('position', 'fixed');
                resizeFix = function () {
                    var mediasize = 768;
                    if ($(window).width() > mediasize) {
                        cssmenu.find('ul').show();
                    }
                    if ($(window).width() <= mediasize) {
                        cssmenu.find('ul').hide().removeClass('open');
                    }
                };
                resizeFix();
                return $(window).on('resize', resizeFix);
            });
        };
    })(jQuery);
    (function ($) {
        $(document).ready(function () {
            $("#cssmenu").menumaker({
                format: "multitoggle"
            });
        });
    })(jQuery);
    
    /* Show comment 
    ========================================================*/
    (function ($) {
        var closeToggle = function() {
            $('.drop-item.active').slideToggle();
            $('.drop-item').removeClass('active');
        }

        $('.drop-item').on('click', function(e) {
           e.stopPropagation();
        });

        $('.drop-wrap .drop-menu').on('click', function(e) {
            e.stopPropagation();
            var $menu = $(this).closest('.drop-wrap');
            var $ulMenu = $menu.find('.drop-item');
            var $classActive = $ulMenu.attr('class');

            //close menu open
            closeToggle();
            if($classActive.search('active') == -1) {
                // active slider toggle
                $ulMenu.addClass('active');
                $ulMenu.slideToggle();
                $flagActive  = $htmlThis;
            } 

        });

        $("body").on("click", function() {
            closeToggle();
        });   
    })(jQuery);
    
     /* Get day
    ========================================================*/
    $(document).ready(function() {
        // Making 2 variable month and day
        var monthNames = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]; 
        var dayNames= ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]

        // make single object
        var newDate = new Date();
        newDate.setDate(newDate.getDate());
        $('#Date').html(dayNames[newDate.getDay()] + ", " + newDate.getDate() + '/' + monthNames[newDate.getMonth()] + '/' + newDate.getFullYear());
        setInterval( function() {
        var seconds = new Date().getSeconds();
        $("#sec").html(( seconds < 10 ? "0": "" ) + seconds);
        },1000);

        setInterval( function() {
        var minutes = new Date().getMinutes();
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);

        setInterval( function() {
        var hours = new Date().getHours();
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000); 
    });
    
    /* Responsvie slider
    ========================================================*/
    (function() {
        var $window = $(window)
        $window.resize(function resize(){
            if ($window.width() < 768) {
                return  $('#swp-con').addClass('swiper-resp'), 
                            $('#swp-wrap').addClass('swiper-wrapper'), 
                            $('#swp-wrap .hotnew_box').addClass('swiper-slide');
            }
            $('#swp-con').removeClass('swiper-resp'), 
            $('#swp-wrap').removeClass('swiper-wrapper'), 
            $('#swp-wrap .hotnew_box').removeClass('swiper-slide').css("width", "100%");
        }).trigger('resize');
    })(jQuery);
    
    var swiper = new Swiper('.swiper-resp', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: true,
    });
});

function openpopupinfo(){$('.wrapPopup').show();}

function closepopupinfo(){$('.wrapPopup').show();}

$('.popupClose').click(function(){$('.wrapPopup').hide();});







