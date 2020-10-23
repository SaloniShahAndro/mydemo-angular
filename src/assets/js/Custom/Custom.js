$(document).ready(function() {

    // go to top scroll
    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    // go to top scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll_top').addClass("in");
        } else {
            $('.scroll_top').removeClass("in");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
    });


    // $(".dashboard_menu_toggle").click(function(e){
    //     e.preventDefault();
    //     $("body").toggleClass("show_sidebar");
    // });
    
    $('.scroll_top').hide();
// go to top scroll
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

  // go to top scroll
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scroll_top').fadeIn();
        } else {
            $('.scroll_top').fadeOut();
        }
  });

  // home page slider
  $('.sm_slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    prevArrow: "<button class='slick-prev border-0'><img src='assets/images/down-arrow-white.svg' height='18' width='30'/></button>",
    nextArrow: "<button class='slick-next border-0'><img src='assets/images/down-arrow-white.svg' height='18' width='30'/></button>",
  });
		// home page slider

 

});
