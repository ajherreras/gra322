$(function(){
    $("video").hover(function(){
      $(this).css("opacity","1");
      this.play();
      },function(){
      $(this).css("opacity",".5");
     this.pause()
    });
  });

  let heroContainerHeight = document.getElementsByClassName('heroContainer')[0].offsetHeight;
  let blankSpace = document.getElementsByClassName('blankSpace')[0];
  blankSpace.style.height = heroContainerHeight + 400 + "px";