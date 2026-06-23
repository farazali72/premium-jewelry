$(document).ready(function() {
  var $grid = $('.collection-list');

  setTimeout(function() {
    $grid.isotope({
      itemSelector: '.item',
      layoutMode: 'masonry',
      filter: '*'
    });
  }, 500);

  $('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.filter-button-group button').removeClass('active-filter-btn');
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
    $grid.isotope('layout');
  });
});