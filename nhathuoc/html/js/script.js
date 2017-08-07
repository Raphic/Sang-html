$(document).ready(function(){
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
    
    /* Slider
    ========================================================*/
    var swiper = new Swiper('.banner-slider .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: true
    });
    
    var swiper = new Swiper('.tabs-slider-01 .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 15,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                spaceBetween: 20
            }
        }
    });
    var swiper = new Swiper('.tabs-slider-02 .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 15,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                spaceBetween: 20
            }
        }
    });
    var swiper = new Swiper('.tabs-slider-03 .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 15,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                spaceBetween: 20
            }
        }
    });
    var swiper = new Swiper('.tabs-slider-detail .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 15,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                slidesPerColumn: 1,
            },
            600: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            }
            ,
            360: {
                slidesPerView: 1,
                slidesPerColumn: 1,
            }
        }
    });
    
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 5,
        loop:true,
        loopedSlides: 5,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        slidesPerView: 5,
        touchRatio: 0.2,
        loop:true,
        loopedSlides: 5,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    
    var swiper = new Swiper('.home_slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: true
    });  
    /* Drop item 
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

//        $("body").on("click", function() {
//            closeToggle();
//        });   
    })(jQuery);
    
    /* Scroll show menu 
    ========================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() < 700 ) {
            $('.scroll-show-binhluan').fadeOut();
        }
        else {
            $('.scroll-show-binhluan').fadeIn();
        }
    });
    $(function() {
        $('.click-href a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    /* Rate star
    ========================================================*/
    $(document).ready(function(){
  
      /* 1. Visualizing things on Hover - See next part for action on click */
      $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
          if (e < onStar) {
            $(this).addClass('hover');
          }
          else {
            $(this).removeClass('hover');
          }
        });

      }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
          $(this).removeClass('hover');
        });
      });


      /* 2. Action to perform on click */
      $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
          $(stars[i]).addClass('selected');
        }
      });
        
    });
    
});

function openpopupinfo(){$('.wrapPopup').show();}

function closepopupinfo(){$('.wrapPopup').show();}

$('.popupClose').click(function(){$('.wrapPopup').hide();});







