$(document).ready(function(){
    $(".skills").hover(function(){
      $("td").animate({
        left: '150px',
        // opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });