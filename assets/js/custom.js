jQuery(window).on('scroll', function() {        
    var st = jQuery(this).scrollTop();
    jQuery('header').toggleClass('sticky_header', st > 300);
    jQuery('.go_to_top').toggleClass('show', st > 100);
});

jQuery('.go_to_top').on('click', function(e) {
    e.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, 300);
});
