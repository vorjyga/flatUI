$(function () {

  $('.location').each(function () {
    let $center = $('.location__map', $(this)).data('center');
    let $placemark = $('.location__map', $(this)).data('placemark');
    let $id = $('.location__map', $(this)).data('id');
    let zoom = $('.location__map', $(this)).data('zoom');

    ymaps.ready(init);
    let myMap,
      myPlacemark;

    function init(){
      myMap = new ymaps.Map($id, {
        center: $center,
        zoom: zoom
      });

      myPlacemark = new ymaps.Placemark($placemark, {
      });

      myMap.geoObjects.add(myPlacemark);
    }

  });

});



