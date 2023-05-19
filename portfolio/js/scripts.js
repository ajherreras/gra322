AOS.init();

var rellax = new Rellax('.rellax');

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




function myFunction(x) {
  if (x.matches) { 

    $(document).scroll(function() {
        $('#Logo').css({width: $(this).scrollTop() > 100? "100%":"100%"});
     });

  } else {
    
    $(document).scroll(function() {
        $('#Logo').css({width: $(this).scrollTop() > 100? "80%":"100%"});
     });

  }
}

var x = window.matchMedia("(max-width: 770px)")
myFunction(x)
x.addListener(myFunction)