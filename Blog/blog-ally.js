// My Additional JS For Secondary Student Sign up
$(document).ready(function(){


    $(".blur").hide();
    $(".ally-modal").hide();

    $(".assessibility-button a").click(function(e){
        e.preventDefault();
        $(".blur").show(200);
        $(".ally-modal").slideDown(500);
    });
  
      $(".title a").click(function(e){
      e.preventDefault();
        $(".blur").hide(200);
        $(".ally-modal").slideUp(500);
    });
});


