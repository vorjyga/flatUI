$(function () {

  let regexpName = new RegExp(/^[A-Za-zА-Яа-яЁё\s]+$/);
  let regexpEmail = new RegExp(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/);


//проверка поле name
  $('.inputs__name_field', $(this)).on('keyup', function () {
    let input = $(this).val();
    console.log(input);
    if (input.match(regexpName) && input.length > 2){
      $('#nameError').css('display', 'none');
      $('#nameThanks').css('display', 'flex');
    }
    else {
      $('#nameThanks').css('display', 'none');
      $('#nameError').css('display', 'flex');}
  });

//проверка email
  $('.inputs__email_field', $(this)).on('keyup', function () {
    let input = $(this).val();
    if (input.match(regexpEmail) && input.length > 2){
      $('#emailError').css('display', 'none');
      $('#emailThanks').css('display', 'flex');
    }
    else {
      $('#emailThanks').css('display', 'none');
      $('#emailError').css('display', 'flex');}
  })

});
