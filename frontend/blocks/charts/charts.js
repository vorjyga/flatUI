import '../../../node_modules/percircle/dist/js/percircle'
import createSVGDoughnut from 'create-svg-doughnut';

const percent = $(this).data('percent')
$(function () {
  $('#first').percircle({
    progressBarColor: '#e75735',
    text: percent
  });

});
$(function () {
  $('#second').percircle({
    progressBarColor: '#e75735',
    text: percent
  });
});
$(function () {
  $('#firth').percircle({
    progressBarColor: '#e75735',
    text: percent
  });
});
$(function () {
  $('#fourth').percircle({
    progressBarColor: '#e75735',
    text: percent
  });
});



const values = [3, 5, 5, 7];
const outerRadius = 60;
const innerRadius = 40;

// Doughnut with default colors
const doughnut = createSVGDoughnut(values, outerRadius, innerRadius);

$('.charts-block').append(doughnut);
