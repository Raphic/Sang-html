function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Main js========================================================*/
include('js/jquery-2.1.1.js');
include('js/jquery-ui.min.js');
include('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.1.0/js/swiper.min.js');
include('js/map/color.jquery.js');
include('js/map/raphael.js');
include('js/map/jquery.usmap.js');
//include(domain + '/js/jquery.mCustomScrollbar.js');



