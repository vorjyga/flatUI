$( function() {
  $( ".calendar__body" ).datepicker({
    altFormat: 'dd',
    altField: '.calendar__header',
    firstDay: '1',
    showOtherMonths: true,
    selectOtherMonths:false
  });

  $('.calendar__footer').on('click', function (event) {
    return $( ".calendar__body" ).datepicker('setDate', new Date());
  })

 });