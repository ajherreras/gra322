AOS.init();

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

var onScrollHandler = function() {
    var newImageUrl = yourImageElement.src;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 100) {
       newImageUrl = "img1.jpg"
    }
    if (scrollTop > 200) {
       newImageUrl = "img2.jpg"
    }
    if (scrollTop > 300) {
       newImageUrl = "img3.jpg"
    }
    yourImageElement.src = newImageUrl;
  };
  object.addEventListener ("scroll", onScrollHandler);