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