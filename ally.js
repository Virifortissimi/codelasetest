// My Additional JS For Secondary Student Sign up
$(document).ready(function(){


    $(".blur").hide();
    $(".ally-modal").hide();
    // $("#school_proj_review").hide();

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
  
    //   $("#next2").click(function(e){
    //   e.preventDefault();
    //   $("#school_project_info").slideUp(1000);
    //       $("#school_proj_doc_upload").slideDown(1000);
    // });
  
    //   $("#back3").click(function(e){
    //   e.preventDefault();
    //       $("#school_proj_doc_upload").slideUp(1000);
    //       $("#school_project_info").slideDown(1000);
    // });
});


