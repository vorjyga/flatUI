$(document).ready(function () {
  $('.buttons__btn').on('click', function () {
    if ( $(this).hasClass('buttons__btn_a'))
    {
      if (!$(this).hasClass('buttons__btn_shadow-green') && $(this).hasClass('buttons__btn_green')) {
        $(this).addClass('buttons__btn_shadow-green')
      }
      else if ($(this).hasClass('buttons__btn_green') && $(this).hasClass('buttons__btn_shadow-green')) {
        $(this).removeClass('buttons__btn_green')
        $(this).addClass('buttons__btn_white-green')
      }
      else {
        $(this).removeClass('buttons__btn_white-green')
        $(this).addClass('buttons__btn_green')
        $(this).removeClass('buttons__btn_shadow-green')
      }
    }
    else  {
      if (!$(this).hasClass('buttons__btn_shadow-red') && $(this).hasClass('buttons__btn_red')) {
        $(this).addClass('buttons__btn_shadow-red')
      }
      else if ($(this).hasClass('buttons__btn_red') && $(this).hasClass('buttons__btn_shadow-red')) {
        $(this).removeClass('buttons__btn_red')
        $(this).addClass('buttons__btn_white-red')
      }
      else {
        $(this).addClass('buttons__btn_red')
        $(this).removeClass('buttons__btn_shadow-red')
        $(this).removeClass('buttons__btn_white-red')
      }}
  });
});