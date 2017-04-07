$(function () {
  $('.slider').each(function () {

    let $handleTooltip = $('.slider_balloon', $(this));
    let scale = $('.slider__scale', $(this));
    let color = $(this).data('color');
    let $handle = $('.slider__handle', $(this));
    let $body = $('.slider__body', $(this));


// создаем окно со значением
    $('.slider__body', $(this)).slider({
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

// создаем окно со значениями слайдера
//     if($handleTooltip.length) {
//       $handle.on('mousedown', function (event) {
//         $handleTooltip.addClass('slider_balloon_active')
//       });
//       $(this).on('mousedown', function (event) {
//         $handleTooltip.addClass('slider_balloon_active')
//       });
//       $('body').on('mouseup', function (event) {
//         $handleTooltip.removeClass('slider_balloon_active')
//       });
//     }
  });
});

/* $( function() {
 var handle = $( "#custom-handle" );
 $( "#slider" ).slider({
 create: function() {
 handle.text( $( this ).slider( "value" ) );
 },
 slide: function( event, ui ) {
 handle.text( ui.value );
 }
 });
 } );*/