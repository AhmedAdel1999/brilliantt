$(document).ready(function(){
  //the start of navbar box
  $('.navbar .dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
    }, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200)
   });
   //the end of navbar box
    //the start of about box code
      $(".about .container-fluid .row>div .second").on("mouseenter",function(){
          $(this).find(".two").css({"top":"0%"});
          $(this).find(".one").css({"bottom":"-100%"});
      });
      $(".about .container-fluid .row>div .second").on("mouseleave",function(){
        $(this).find(".two").css({"top":"-100%"});
        $(this).find(".one").css({"bottom":"4%"});
    });
    //the end of about box code
    
    
    //the start of fixed box
    $(window).on("scroll",function(){
      if($(this).scrollTop()>50){
        $(".fix").show();
      }
      else{
        $(".fix").hide();
      }
    });
    
    $(".fix").on("click",function(){
      $("html,body").animate({
        scrollTop:$(".information").offset().top
      },800)
    })
    //the end of fixed box
    
    
    //the start of navbar box
    $(window).on("scroll",function(){
      if($(this).scrollTop() > 170){
        $(".navbar").addClass("change");
      }
      else{
        $(".navbar").removeClass("change");
      }
    })
    //the end of navbar box
    
    
    //the start of blog box code
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed:500,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1,
          },
          1000:{
              items:3,
              loop:true
          }
      }
    })
    //the end of blog box code
    
    
    
    
    //the start of project box code
    $(".projects .three .container .row>div>div").on("mouseenter",function(){
      $(this).find(".four").css({"animation":"transmove 0.2s ease-in-out 0s forwards"})
      $(this).find(".three").css({"animation":"transmove 0.2s ease-in-out 0.10s forwards"})
      $(this).find(".two").css({"animation":"transmove 0.2s ease-in-out 0.20s forwards"})
      $(this).find(".one").css({"animation":"transmove 0.2s ease-in-out 0.30s forwards"})
    })
    
    $(".projects .three .container .row>div>div").on("mouseleave",function(){
      $(this).find(".four").css({"animation":"transmove2 0.2s ease-in-out 0s forwards"})
      $(this).find(".three").css({"animation":"transmove2 0.2s ease-in-out 0.10s forwards"})
      $(this).find(".two").css({"animation":"transmove2 0.2s ease-in-out 0.20s forwards"})
      $(this).find(".one").css({"animation":"transmove2 0.2s ease-in-out 0.30s forwards"})
    })
  
  
    $(".projects .two .container div button").on("click",function(){
      $(".projects .two .container div button").removeClass("active");
      $(this).addClass("active");
    })
    //the end of project box code
    
    
    
    //the start of faq box
    $(".faQ .container .row .one .box div").on("click",function(){
      $(this).find("p").slideToggle(400);
      $(this).find("span").toggleClass("rotate")
    })
    //the end of faq box
    
    // the filterizr plugin
    
    // the counter up plugin
    $(".counter").counterUp({
      delay:10,
      time:500
    });
    //the nicescroll plugin
    $("html,body").niceScroll({
      cursorcolor:"#48c7ec"
    });
  
    //the swith box code
    $(".swith-icon").on("click",function(){
      $(".swith-color-box").toggleClass("moveon");
    })
    $('.color').on('click', function(e) {
        var id = $(this).attr("id");
        $("#switch-style").attr("href", "css/" + id + ".css");
        e.preventDefault();
    });
    
    var filterizd= $(".filtr-container").filterizr({
    })
   });