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

$('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    speed: 500,
    variableWidth: true,
  });
  $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('beforeChange', currentSlide, nextSlide);
  });
  $('.center').on('afterChange', function(event, slick, currentSlide){
    console.log('afterChange', currentSlide);
  });