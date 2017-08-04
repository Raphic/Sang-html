function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Main js
 ========================================================*/
include('js/jquery-2.1.1.js');
include('js/jquery-ui.min.js');
include('js/swiper.jquery.min.js');
include('js/jquery.rd-navbar.js');
/* Slider
 ========================================================*/
