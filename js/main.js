$(document).ready(function(){
  $('.carousel').slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: false
  });

  $(".nav-mobile .menu").click(function(){
    $('.nav-bar').toggleClass("nav-list");
    return false;
  });

  $(window).scroll(function(){
    $('.nav-bar').removeClass("nav-list");
  });

});