$(function () {
  $('.stages', $(this)).each(function () {
    let $done = $('.stages').data('done');
    console.log($done);
    for (let i = 1; i <= $done; i++){
      $('#js-circle' + i, $(this)).addClass('stages__done');
      $('#js-connect' + i, $(this)).addClass('stages__done');
    }
  })
})