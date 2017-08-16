$(function() {
   //Script for mobile menu
    $(document).ready(function(){ 
        var touch 	= $('#touch-menu');
        var menu 	= $('.top-line__menu--desktop');
     
        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });

    	$(window).resize(function(){
    		var w = $(window).width();
    		if(w > 768 && menu.is(':hidden')) {
    			menu.removeAttr('style');
            }
        });
    });
    
    //Scroll to anchor
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('a[href*="#"]').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });


    //Scroll top
    $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass("active");
        } else {
            $('.top').removeClass("active");
        };
    });
});
