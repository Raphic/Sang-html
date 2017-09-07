
$(document).ready(function () {

    /*! Fades in page on load */
    $('body').css('display', 'none');
    $('body').fadeIn(500);

});

function changebg() {
    var images = ['https://s-media-cache-ak0.pinimg.com/originals/33/b2/4b/33b24b3756f54fd8d60637aaee7bc0d8.jpg', 'http://wallpapercave.com/wp/T6yFqyt.jpg', 'http://www.fybak.com/i/2017/06/hipster-computer-backgrounds-macbook-tumblr-wallpaper-background-desktop.jpg', 'http://hidefwallpaper.org/wp-content/uploads/Dark-Storm-Mountain-HD-Desktop-Wallpaper.jpg'];
    $('.frmmenu').css({ 'background': 'linear-gradient(rgba(20, 19, 75, 0.5),rgba(20, 19, 75, 0.5)),url(' + images[Math.floor(Math.random() * images.length)] + ') center center no-repeat fixed','background-size': 'cover' });
}

$(".frmmenu").hide();
$(".fa-bars").click(function () {//Click Open Menu
    $(".iconheader_right").hide();
    $(".headerbox").hide();
    $(this).hide();
    $(".frmmenu").fadeIn();
    changebg();
})

$(".fa-times").click(function () { //Click Close Menu
    $(".frmmenu").slideUp(10);
    $(".iconheader_right").fadeIn();
    $(".headerbox").fadeIn();
    $(".fa-bars").fadeIn();
    
})
$(".searchbox").fadeOut(0);
$(".fa-search").click(function () { //Click search icon
    $(".searchbox").fadeIn(0);
    $(".searchbox > input").focus();
    $(".searchbox > input").width('80%');
    $(".canceltext").fadeIn();
})

$(".canceltext").click(function () {//Click Cancel Search
    $(".searchbox").hide();
})

//$(function () {
   
//    $("body").swipe({
//        //Generic swipe handler for all directions
//        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
//            //alert("You swiped " + direction);
//            if (direction == "right") {
//                $(this).animate({ width: "0px" },"slow");
//                window.history.back();
//            }
//        }
//    });
//});

$(function() {
    $("body").swipe( { fingers:'all', swipeLeft:swipe1, swipeRight:swipe2, allowPageScroll:"auto"} );

    //Swipe handlers.
    function swipe1(event, direction, distance, duration, fingerCount) {
        alert("You swiped " + direction);
        // $(this).text( "You have swiped " + direction +' with ' + fingerCount +' fingers' );
    }

    function swipe2(event, phase, direction, distance) {
        $(this).animate({ width: "0px" }, "slow");
        window.history.back();
    }

   
});
