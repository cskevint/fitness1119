//$(function() {
//  $('.jcarousel')
//    .jcarousel({
//      wrap:'circular'
//    })
//    .jcarouselAutoscroll({
//      interval: 3000,
//      target: '+=1',
//      autostart: true
//    });
//
//  $('.jcarousel-prev')
//    .on('jcarouselcontrol:active', function() {
//      $(this).removeClass('inactive');
//    })
//    .on('jcarouselcontrol:inactive', function() {
//      $(this).addClass('inactive');
//    })
//    .jcarouselControl({
//      target: '-=1'
//    });
//
//  $('.jcarousel-next')
//    .on('jcarouselcontrol:active', function() {
//      $(this).removeClass('inactive');
//    })
//    .on('jcarouselcontrol:inactive', function() {
//      $(this).addClass('inactive');
//    })
//    .jcarouselControl({
//      target: '+=1'
//    });
//
//});

$(document).ready(function(){
  $('.carousel').slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false
  });
});