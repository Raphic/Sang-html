$(document).ready(function() {
    /* the Responsive menu script */
    $('body').addClass('js');
          var $menu = $('#menu'),
              $menulink = $('.menu-link'),
              $menuTrigger = $('.has-subnav > a');

    $menulink.click(function(e) {
            e.preventDefault();
            $menulink.toggleClass('active');
            $menu.toggleClass('active');
    });
    //-----------------------
    var add_toggle_links = function() { 		
        if ($('.menu-link').is(":visible")){
            if ($(".toggle-link").length > 0){
            }
            else{
                $('.has-subnav > a').before('<span class="toggle-link"> Open submenu </span>');
                $('.toggle-link').click(function(e) {		
                    var $this = $(this);
                    $this.toggleClass('active').siblings('ul').toggleClass('active');
                });	
            }
        }
        else{
            $('.toggle-link').empty();
        }
    }
    add_toggle_links();
    $(window).bind("resize", add_toggle_links);	
    
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    $('.box-login').click(function(){
		$('.login-menu').toggleClass('open');
        $('.my-profile').slideToggle('fast');
	});
    
    $('.inline-input .edit').click(function(){
        $(this).slideToggle(0);
        $(this).closest('.inline-input').find('.profile-save').slideToggle();
        $(this).closest('.inline-input').find('.profile-cancel').slideToggle();
		$(this).closest('.inline-input').find('input').removeAttr("disabled");
	});
    
    $('.inline-input .profile-save').click(function(){
        $(this).closest('.inline-input').find('.profile-save').slideToggle();
        $(this).closest('.inline-input').find('.profile-cancel').slideToggle();
        $(this).closest('.inline-input').find('.edit').delay(1000).slideToggle();
    });
    $('.inline-input .profile-cancel').click(function(){
        $(this).closest('.inline-input').find('.profile-save').slideToggle();
        $(this).closest('.inline-input').find('.profile-cancel').slideToggle();
        $(this).closest('.inline-input').find('input').attr("disabled","disabled");
        $(this).closest('.inline-input').find('.edit').delay(1000).slideToggle();
    }); 
    
    
    $('#map').usmap({
	    'stateSpecificStyles': {
	      'AK' : {fill: '#f00'}
	    },
	    'stateSpecificHoverStyles': {
	      'HI' : {fill: '#ff0'}
	    },
	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
	    },
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
    });
    
    

});