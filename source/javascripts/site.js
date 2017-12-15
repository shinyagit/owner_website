$(document).ready(function(){
  hsize = $(window).height();
  $(".wrapper-900, .wrapper-full, .top-page .screen-image").css("height", hsize + "px");
});
$(window).resize(function(){
  hsize = $(window).height();
  $(".wrapper-900, .wrapper-full, .top-page .screen-image").css("height", hsize + "px");
});

// $(function(){
//   var setElm = $('.animation'),
//   delayHeight = 200;
//
//   setElm.css({opacity: '0'});
//   $('html, body').animate({scrollTop:0}, 1);
//
//   $(window).on('load scroll resize', function(){
//
//     setElm.each(function(){
//       var setThis = $(this),
//       elmTop = setThis.offset().top,
//       elmHeight = setThis.height(),
//       scrTop = $(window).scrollTop(),
//       winHeight = $(window).height();
//
//       if (scrTop > elmTop - winHeight + delayHeight) {
//         setThis.stop().animate({opacity:'1'}, 2000),
//         setThis.addClass('.svg-anim');
//       } else if (scrTop < elmTop - winHeight + delayHeight) {
//         setThis.stop().animate({opacity: '0'}, 2000),
//         setThis.removeClass('.svg-anim');
//       }
//     });
//   });
// });
