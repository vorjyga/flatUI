import '../../../node_modules/percircle/dist/js/percircle'
import createSVGDoughnut from 'create-svg-doughnut';


$(function () {
  $('.chart').each(function () {
    let $id = $(this).data('id');
    let $percent = $(this).data('percent1');
    if ($percent == 0) {$percent = '0'};

    $(('#' + $id)).percircle({
      progressBarColor: '#e75735',
      text: $percent,
      percent: $percent
    })


  })
});



const values = [3, 5, 5, 7];
const outerRadius = 60;
const innerRadius = 40;

// Doughnut with default colors
const doughnut = createSVGDoughnut(values, outerRadius, innerRadius);

$('.charts-block').append(doughnut);