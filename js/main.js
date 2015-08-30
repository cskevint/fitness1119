function jcarousel(selector, breakpoints, thumb_widths){
  $(selector)
    .on('jcarousel:create jcarousel:reload', function() {
      var wrapper_width = $(selector).closest('.container').width()
        , thumb_width;
      console.log(wrapper_width);
      switch(true){
        case(wrapper_width >= breakpoints[0]):
          thumb_width = Math.round((breakpoints[0]/100)*thumb_widths[0]);
          $(this).css('width', breakpoints[0]);
          $(this).jcarousel('items').css('width', thumb_width + 'px');
          break;
        case(wrapper_width >= breakpoints[1] && wrapper_width < breakpoints[0]):
          thumb_width = Math.round((breakpoints[1]/100)*thumb_widths[1]);
          $(this).css('width', breakpoints[1]);
          $(this).jcarousel('items').css('width', thumb_width + 'px');
          break;
        case(wrapper_width >= breakpoints[2] && wrapper_width < breakpoints[1]):
          thumb_width = Math.round((breakpoints[2]/100)*thumb_widths[2]);
          $(this).css('width', breakpoints[2]);
          $(this).jcarousel('items').css('width', thumb_width + 'px');
          break;
        case(wrapper_width <= breakpoints[2]):
          $(this).css('width', wrapper_width + 'px');
          $(this).jcarousel('items').css('width', wrapper_width + 'px');
      }
    })
    .jcarousel({
      wrap:'circular'
    })
    .jcarouselAutoscroll({
      interval: 3000,
      autostart: true
    });

  $(selector).closest('.container').find('a.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $(selector).closest('.container').find('a.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
}

$(document).ready(function() {
  var breakpoints = ["1140", "768", "480"];
  var thumb_widths = ["1140", "768", "480"];
  //the timeout gives enough time for the tab to open, and the correct value for jcarousel-wrapper to be obtained
  setTimeout(function(){
    jcarousel('.jcarousel', breakpoints, thumb_widths)
  },1);
});
