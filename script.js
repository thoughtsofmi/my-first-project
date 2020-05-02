$(".title-702").click(function(){
    $(".p-702").toggle();
    $(".p-702date").toggle();
    $(".chevron-right-1").toggle();
    $(".chevron-down-1").toggle();
  });
  
  $(".title-tiy").click(function(){
    $(".p-tiy").toggle();
    $(".p-tiydate").toggle();
    $(".chevron-right-2").toggle();
    $(".chevron-down-2").toggle();
  });
  
  $(".title-3").click(function(){
    $(".p-3sq").toggle();
    $(".p-3date").toggle();
    $(".chevron-right-3").toggle();
    $(".chevron-down-3").toggle();
  });
  
  $("#profRadios").click(function(){
    $("#button-email").html("Email Professional Request")
  });
  
  $("#personalRadios").click(function(){
    $("#button-email").html("Email Personal Request")
  });
  
  $("#checking-human").click(function(){
    $("#checking-human").removeClass("is-invalid")
  });
  
  $("#email-area").keypress(function(){
    $("#button-email").removeAttr("disabled")
  });
  
  $("#button-email").click(function(){
    window.open( 
      "mailto:ymkim23@gmail.com?subject=Hello&body=" +$("#email-area").val(),
      "_blank"
    )
  });
  
  //$("#button702").click(function(){
    //$("#702map").modal("show")
  //});