$(function () {
  $('.slider').each(function () {


    let $handle = $('.slider__handle', $(this));
    let $body = $('.slider__body', $(this));
    let color = $(this).data('color');
    let scale = $('.slider__scale', $(this));

    $body.slider({
      range: scale.length ? 'min' : false,
    });

//задаем цвет для ручки сдайдера
    $handle.css('background-color', color);

// создаем окно со значениями слайдера
    $handle.on('mousedown', function () {
      $(this).addClass('handle_popup');
    });
    $handle.on('mouseup', function () {
      $(this).removeClass('handle_popup')
    })
  });
});