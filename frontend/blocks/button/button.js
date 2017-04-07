
$(function () {
  // эффект по клику для зеленой кнопки
    $('.button_green').on('mousedown', function () {
      $(this).addClass('button_white-green');
    });
    $('.button_green', $(this)).on('mouseup', function () {
      $(this).removeClass('button_white-green');
    });
// - для красной кнопки
  $('.button_red').on('mousedown', function () {
    $(this).addClass('button_white-red');
  });
  $('.button_red', $(this)).on('mouseup', function () {
    $(this).removeClass('button_white-red');
  });


  $(".button").click(function (e) {

    // Remove any old one
    $(".ripple").remove();

    // Setup
    var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple'></span>");


    // Make it round!
    if(buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");
  });
});
















// $(function () {
//   $('.button').on('click', function () {
//     if ( $(this).hasClass('button_a'))
//     {
//       if (!$(this).hasClass('button_shadow-green') && $(this).hasClass('button_green')) {
//         $(this).addClass('button_shadow-green')
//       }
//       else if ($(this).hasClass('button_green') && $(this).hasClass('button_shadow-green')) {
//         $(this).removeClass('button_green')
//         $(this).addClass('button_white-green')
//       }
//       else {
//         $(this).removeClass('button_white-green')
//         $(this).addClass('button_green')
//         $(this).removeClass('button_shadow-green')
//       }
//     }
//     else  {
//       if (!$(this).hasClass('button_shadow-red') && $(this).hasClass('button_red')) {
//         $(this).addClass('button_shadow-red')
//       }
//       else if ($(this).hasClass('button_red') && $(this).hasClass('button_shadow-red')) {
//         $(this).removeClass('button_red')
//         $(this).addClass('button_white-red')
//       }
//       else {
//         $(this).addClass('button_red')
//         $(this).removeClass('button_shadow-red')
//         $(this).removeClass('button_white-red')
//       }}
//   });
// });