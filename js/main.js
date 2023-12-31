// init Isotope
var $grid = $('.collection-list').isotope({
    // options
    itemSelector: '.item'
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
  });
  var filterBtns = $('.filter-button-group').find('button');
   function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
   };
$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items :1,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        animateout:'fadeout',
    });
});
