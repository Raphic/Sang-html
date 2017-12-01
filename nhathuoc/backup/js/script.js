$(document).ready(function(){
    /* Menu Mobile 
    ========================================================*/
    
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
        spaceBetween: 1,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 1
            }
        }
    });
    var swiper = new Swiper('.tabs-slider-02 .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 1,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 1
            }
        }
    });
    var swiper = new Swiper('.tabs-slider-03 .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 1,
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
                spaceBetween: 1
            }
        }
    });
    var swiper = new Swiper('.tabs-slider-detail .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0,
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
    $(document).ready(function () {
        $("#content-slider").lightSlider({
            loop: true
            , keyPress: true
        });
        $('#image-gallery').lightSlider({
            gallery: true
            , item: 1
            , thumbItem: 5
            , slideMargin: 0
            , speed: 500
            , auto: true
            , loop: true
            , onSliderLoad: function () {
                $('#image-gallery').removeClass('cS-hidden');
            }
        });
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
    
    $(function () {
//        $('.fillter .sub').hide();
        $('.main-sub .main-show').click(function(e) {
            $('.main-sub .sub').slideToggle(400);
            $('.sub').toggleClass('active');
            e.stopPropagation();
        });
        $('.menu_label').click(function(a) {
            $('.main-menu.mfixed > ul').toggleClass('active');
            $('.detail-menu-page .main-menu > ul').toggleClass("show");
            a.stopPropagation();
        });
    });
    /* Rate button show 
    ========================================================*/
    $(function () {
        $('.drop-rate .btn-danhgia').click(function(e) {
            $(this).addClass('hidden');
            $(this).removeClass('show');
            
            $('.drop-rate .btn-cancel').addClass('show');
            $('.drop-rate .btn-cancel').removeClass('hidden');
            
            $('.drop-rate-form').addClass('show');
            $('.drop-rate-form').removeClass('hidden');
            e.stopPropagation();
        });
        $('.drop-rate .btn-cancel').click(function(e) {
            $(this).addClass('hidden');
            $(this).removeClass('show');
            
            $('.drop-rate .btn-danhgia').addClass('show');
            $('.drop-rate .btn-danhgia').removeClass('hidden');
            
            $('.drop-rate-form').removeClass('show');
            $('.drop-rate-form').addClass('hidden');
            e.stopPropagation();
        });
    });
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
    /* Scroll fix main menu 
    ========================================================*/
    $(window).bind('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.bottom-header').addClass("mfixed");
            $('.bread-crumb ul').addClass("mfixed");
            $('.banner').addClass("mfixed");
            $('.main-menu').addClass("mfixed");
            $('.logo').css("opacity", "0");
            $('.detail-menu-page').addClass("mfixed");
        } else {
            $('.bottom-header').removeClass("mfixed");
            $('.bread-crumb ul').removeClass("mfixed");
            $('.banner').removeClass("mfixed");
            $('.main-menu').removeClass("mfixed");
            $('.logo').css("opacity", "1");
            $('.main-menu ul').removeClass("active");
            $('.detail-menu-page').removeClass("mfixed");
        }
    });
    /* Rate star
    ========================================================*/
    $('#stars li').on('mouseover', function(){
      /* 1. Add tooltip */
      var $spanRate = $("span.rate");
      $starRateIndex = $(this).index();
      $classStarHoverActive =     $spanRate.eq($starRateIndex).attr('class');
      if($classStarHoverActive.search('rateActive') == -1) {
         $("span.rate").addClass('hideRateActive');
      } else {
        $("span.rate").removeClass('hideRateActive');
      }

      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
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
           $("span.rate").removeClass('hideRateActive');
              $(this).removeClass('hover');
          });
      });
      /* 2. Action to perform on click */
      $('#stars li').on('click', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently selected
          var $positionActive = $(this).index();
          $("span.rate").removeClass('rateActive');
          $("span.rate").eq($positionActive) .addClass('rateActive'); 
          var stars =     $(this).parent().children('li.star');
          for (i = 0; i < stars.length; i++) {
              $(stars[i]).removeClass('selected');
          }
          for (i = 0; i < onStar; i++) {
              $(stars[i]).addClass('selected');
          }
      });
    });

function openpopupinfo(){$('.wrapPopup').show();}

function closepopupinfo(){$('.wrapPopup').show();}

$('.popupClose').click(function(){$('.wrapPopup').hide();});







