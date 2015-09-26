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

  $(".truncate").each(function(i, el){
    var pTags = $(el).find("p");
    function toggle(show) {
      pTags.each(function(i, p){
        if(show) {
          $(p).show();
        } else {
          $(p).hide();
        }
      });
    }

    if(pTags.length > 1) {
      var first = pTags.splice(0, 1);
      var more = $("<a href='#'>More...</a>");
      more.insertAfter(first);
      more.click(function(e){
        toggle(true);
        more.remove();
        return false;
      });
      toggle(false);
    }

  });

});