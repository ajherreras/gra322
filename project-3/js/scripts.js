$(function(){
    $("video").hover(function(){
      $(this).css("opacity","1");
      this.play();
      },function(){
      $(this).css("opacity",".5");
     this.pause()
    });
  });

  let aboutHeight = document.getElementsByClassName('about')[0].offsetHeight;
  let blankSpace = document.getElementsByClassName('blankSpace')[0];
  blankSpace.style.height = aboutHeight + 5 + "px";