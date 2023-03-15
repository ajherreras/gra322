$('.menu-button').click(function(){
    $('nav').toggleClass('open');
});

AOS.init();

$('.jarallax').jarallax({
    speed: 0.2,
    type: 'scale',
  });

  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    controls: false
  });