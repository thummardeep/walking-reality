
window.addEventListener('scroll', function() {
  var st = window.scrollY || window.pageYOffset;
  var header = document.querySelector('header');
  var goToTop = document.querySelector('.go-to-top');
  
  if (st > 300) {
      header.classList.add('top');
  } else {
      header.classList.remove('top');
  }
  
  if (st > 100) {
      goToTop.classList.add('show');
  } else {
      goToTop.classList.remove('show');
  }
});

document.querySelector('.go-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

  // --------------------------- navbar menu open ----------------------------
  jQuery('.nav-menu').on('click', function(){
          jQuery('html').addClass('showmenu');
  });
  jQuery('.close-icon-wrap').on('click', function(){
          jQuery('html').removeClass('showmenu');
  });

  // Function to handle accordion functionality
function accordion() {
  var footerTitles = document.querySelectorAll('footer .footer-title');
  var footerRows = document.querySelectorAll('footer .row ul');

  footerRows.forEach(function(row) {
      row.style.display = 'none';
  });

  footerTitles.forEach(function(title) {
      title.addEventListener('click', function() {
          var parent = this.parentElement;
          var siblingUL = parent.querySelector('ul');

          if (parent.classList.contains('active')) {
              siblingUL.style.display = 'none';
              parent.classList.remove('active');
          } else {
              siblingUL.style.display = 'block';
              parent.classList.add('active');
          }
      });
  });
}

// Function to check window width and apply accordion accordingly
// Function to handle accordion functionality
function accordion() {
  var footerTitles = document.querySelectorAll('footer .footer-title');
  var footerRows = document.querySelectorAll('footer .row ul');

  footerRows.forEach(function(row) {
      row.style.display = 'none';
  });

  footerTitles.forEach(function(title) {
      title.addEventListener('click', function() {
          var parent = this.parentElement;
          var siblingUL = parent.querySelector('ul');

          if (parent.classList.contains('active')) {
              siblingUL.style.display = 'none';
              parent.classList.remove('active');
          } else {
              siblingUL.style.display = 'block';
              parent.classList.add('active');
          }
      });
  });
}




// function checkWidth() {
//   var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

//   if (width <= 767) {
//       accordion();
//   } else {
     
//       var footerRows = document.querySelectorAll('footer .row ul');

//       footerRows.forEach(function(row) {
//           row.style.display = 'block';
//       });

//       var footerTitles = document.querySelectorAll('footer .footer-title');
      
//       footerTitles.forEach(function(title) {
//           title.removeEventListener('click', function() {});
//       });
//   }
// }


// checkWidth();

// window.addEventListener('resize', function() {
//   checkWidth();
// });

jQuery(document).ready(function($) {
  // Function to handle accordion functionality
  function accordion() {
      $('footer .row ul').hide();
      $("footer .footer-title").on("click", function() {
          $("footer .row ul").slideUp('slow');
          if ($(this).parent().hasClass("active")) {
              $(this).parent().find('ul').slideUp('slow');
              $('.footer-title').parent().removeClass('active');
          } else {
              $(this).parent().find('ul').slideDown('slow');
              $('.footer-title').parent().removeClass('active');
              $(this).parent().addClass('active');
          }
      });
  }

  // Function to check window width and apply accordion accordingly
  function checkWidth() {
      var width = $(window).width();
      if (width <= 767) {
          accordion();
      } else {
          // Ensure that the accordion is deactivated if the window width is above 767 pixels
          $('footer .row ul').show();
          $("footer .footer-title").off("click");
      }
  }

   // Initial check on page load
   checkWidth();

   // Listen for window resize event
   $(window).resize(function() {
       checkWidth();
   });
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

// first slider code
$('.center').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0px',
  speed: 2000,
  variableWidth: true,
  focusMode:true
});
$('.custom-prev').click(function(){
  $('.center').slick('slickPrev');
});

$('.custom-next').click(function(){
  $('.center').slick('slickNext');
});
$('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log('beforeChange', currentSlide, nextSlide);
});
$('.center').on('afterChange', function(event, slick, currentSlide){
  console.log('afterChange', currentSlide);
});


// second slick slider

$('.center-2').slick({
  
  infinite: true,
  centerPadding: '0',
  speed: 2000,
  variableWidth: true,
  focusMode:true
});
$('.custom-prev-1').click(function(){
  $('.center-2').slick('slickPrev');
});

$('.custom-next-1').click(function(){
  $('.center-2').slick('slickNext');
});
$('.center-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log('beforeChange', currentSlide, nextSlide);
});
$('.center-2').on('afterChange', function(event, slick, currentSlide){
  console.log('afterChange', currentSlide);
});



