$(function(){  
  $(".close").click(function(){
    $("#top-banner").css("display","none")
  }); 
  $(".toggle").click(function(){
    $("#mobile-menu").css("display","block")
  });
  $(".close02").click(function(){
    $("#mobile-menu").css("display","none")
  });
  
  function slideImg1(){
    var now = $(".pc-banner-pics li:first");
    $(".pc-banner-pics").stop().animate({"left":"-1920px"},700,function(){
      $(this).append(now).css("left","0px");
    })      
  }
  var timer = setInterval(slideImg1,4000);

  $("#pc-banner .next").click(function(){
    if($(".pc-banner-pics").is(":animated")) return false;
    var now = $(".pc-banner-pics li:first");
    $(".pc-banner-pics").animate({"left":"-1920px"},500,function(){
      $(this).append(now).css("left","0px");        
    })
  })

  $("#pc-banner .prev").click(function(){
    if($(".pc-banner-pics").is(":animated")) return false;
    var last = $(".pc-banner-pics li:last");
    $(".pc-banner-pics").prepend(last).css("left","-1920px").animate({"left":0},500);
  })
  
  function slideImg2(){
    var now = $(".mobile-banner-pics li:first");
    $(".mobile-banner-pics").stop().animate({"left":"-500px"},700,function(){
      $(this).append(now).css("left","0px");
    })      
  }
  var timer = setInterval(slideImg2,4000);

  $(".next").click(function(){
    if($(".mobile-banner-pics").is(":animated")) return false;
    var now = $(".mobile-banner-pics li:first");
    $(".mobile-banner-pics").animate({"left":"-500px"},500,function(){
      $(this).append(now).css("left","0px");        
    })
  })

  $(".prev").click(function(){
    if($(".mobile-banner-pics").is(":animated")) return false;
    var last = $(".mobile-banner-pics li:last");
    $(".mobile-banner-pics").prepend(last).css("left","-500px").animate({"left":0},500);
  })
  
  
  $(".lookbook > li:gt(0)").hide()
    setInterval(function(){
        $(".lookbook > li:first").fadeOut(1500).next().fadeIn(1500)
        $(".lookbook > li:first").appendTo(".lookbook")
    },3000)


})