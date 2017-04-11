$(function () {
  $('.slider').each(function () {

    let $handleTooltip = $('.slider_balloon', $(this));
    let scale = $('.slider__scale', $(this));
    let color = $(this).data('color');
    let $handle = $('.slider__handle', $(this));
    let $body = $('.slider__body', $(this));
    let $value = $(this).data('value');


// создаем окно со значением
    $('.slider__body', $(this)).slider({
      value: $(this).data('value'),
      range: scale.length ? 'min' : false,

      create: function () {
//$handleTooltip.length ? function () {
        $handleTooltip.text($(this).slider('value'));
      },
      //: function () {},
      slide: function (event, ui) {
        //$handleTooltip.length ? function (ui) {
        $handleTooltip.text(ui.value);

      }

      //: function () {}
    });
    // $('.ui-slider-range', $(this)).css('background-color', Color);
//задаем цвет для ручки сдайдера
    $handle.css('background-color', color);


  });
});