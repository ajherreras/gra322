$(function(){
    $("video").hover(function(){
      $(this).css("opacity","1");
      this.play();
      },function(){
      $(this).css("opacity",".5");
     this.pause()
    });
  });

  $('.jarallax').jarallax({
    speed: 0.2,
    type:'scale',
  });

  var rellax = new Rellax('.rellax');