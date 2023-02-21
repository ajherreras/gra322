$(function(){
    $("video").hover(function(){
      $(this).css("opacity","1");
      this.play();
      },function(){
      $(this).css("opacity",".5");
     this.pause()
    });
  });

