$(function () {


  //по каждому клику батона
  $('.search__button').on('click', function (a) {
    a.preventDefault();

    let $input = $('.search__input');
    //добавляем красный бэкграунд поиску


      $input.css("background-color", "#e75735");
      //убираем введеный текст
      $input.val('');
      //сообщаем, что ничего не найдено
      $input.addClass("search__placeholder");
      $input.attr('placeholder', 'Не найдено, давай другое поищем');

  });
  $('.search__input').on('click', function () {

    let $input = $('.search__input');
    //добавляем красный бэкграунд поиску
    $input.css("background-color", "#e5e5e5");

    $input.attr('placeholder', 'чо ищем');
    $input.removeClass("search__placeholder");

  });
});