$(function () {
  $('.button').on('click', function () {
    if ( $(this).hasClass('button_a'))
    {
      if (!$(this).hasClass('button_shadow-green') && $(this).hasClass('button_green')) {
        $(this).addClass('button_shadow-green')
      }
      else if ($(this).hasClass('button_green') && $(this).hasClass('button_shadow-green')) {
        $(this).removeClass('button_green')
        $(this).addClass('button_white-green')
      }
      else {
        $(this).removeClass('button_white-green')
        $(this).addClass('button_green')
        $(this).removeClass('button_shadow-green')
      }
    }
    else  {
      if (!$(this).hasClass('button_shadow-red') && $(this).hasClass('button_red')) {
        $(this).addClass('button_shadow-red')
      }
      else if ($(this).hasClass('button_red') && $(this).hasClass('button_shadow-red')) {
        $(this).removeClass('button_red')
        $(this).addClass('button_white-red')
      }
      else {
        $(this).addClass('button_red')
        $(this).removeClass('button_shadow-red')
        $(this).removeClass('button_white-red')
      }}
  });
});