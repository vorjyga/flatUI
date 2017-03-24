import '../../../node_modules/percircle/dist/js/percircle'
// import '../../../node_modules/create-svg-doughnut/';
import createSVGDoughnut from 'create-svg-doughnut';

$(function () {
  $('#first').percircle({
    progressBarColor: '#e75735',
    text: '0'
  });

});
$(function () {
  $('#second').percircle({
    progressBarColor: '#e75735',
    text: '38'
  });
});
$(function () {
  $('#firth').percircle({
    progressBarColor: '#e75735',
    text: '62'
  });
});
$(function () {
  $('#fourth').percircle({
    progressBarColor: '#e75735',
    text: '89'
  });
});



const values = [3, 5, 5, 7];
const outerRadius = 60;
const innerRadius = 40;

// Doughnut with default colors
const doughnut = createSVGDoughnut(values, outerRadius, innerRadius);

$('.charts').append(doughnut);
