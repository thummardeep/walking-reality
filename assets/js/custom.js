jQuery(window).on('scroll', function() {        
    var st = jQuery(this).scrollTop();
    jQuery('header').toggleClass('sticky_header', st > 300);
    jQuery('.go-to-top').toggleClass('show', st > 100);
});

jQuery('.go-to-top').on('click', function(e) {
    e.preventDefault();
    jQuery('html, body').animate({
        scrollTop: 0
    }, 300);
});





// $('.center').slick({
//   centerMode: true,
//   infinite: true,
//   centerPadding: '0px',
//   speed: 2000,
//   variableWidth: true,
// });

// // Define your text contents for each slide
// var textContents = [
//   "Text for slide 1",
//   "Text for slide 2",
//   "Text for slide 3",
//   // Add more texts for each slide as needed
// ];

// $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   console.log('beforeChange', currentSlide, nextSlide);
// });

// $('.center').on('afterChange', function(event, slick, currentSlide){
//   console.log('afterChange', currentSlide);
//   // Get the current slide index from the Slick instance
//   var currentSlideIndex = $('.center').slick('slickCurrentSlide');
//   // Update the text content based on the current slide index
//   $('.text-container').text(textContents[currentSlideIndex]);
// });
$('.center').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0px',
  speed: 2000,
  variableWidth: true,
  focusMode:true
});
$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log('beforeChange', currentSlide, nextSlide);
});
$('.center').on('afterChange', function(event, slick, currentSlide){
  console.log('afterChange', currentSlide);
});