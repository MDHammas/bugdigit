const originalBtn = document.querySelector(".original-btn");

// wow js animations
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();

// custom cursor
let mouseCursor = document.querySelector(".cursor");
window.addEventListener('DOMContentLoaded', cursor);
window.addEventListener('mousemove', cursor);
document.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
document.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
       jQuery('.cursor').remove();
         } else {
       mouseCursor.style.display = 'block';
      }
       function cursor(e){
        mouseCursor.style.top = "calc(" +e.clientY + "px - 10px)";
        mouseCursor.style.left = "calc(" +e.clientX + "px - 10px)";
}

const navLogo = document.querySelector("#nav-logo");
const toggle = document.querySelector("#toggle");
const homeHeaderButton = document.querySelector(".home-header-button");
const offerButton = document.querySelector(".offer-button");
const footerLogo = document.querySelector(".footer-logo");
const footerButton = document.querySelector(".footer-button");
const footerIcons = document.querySelectorAll(".footer-icons a");
const facebookIcon = footerIcons[0];
const instaIcon = footerIcons[1];
const linkedinIcon = footerIcons[2];
const pagesNames = document.querySelectorAll(".pages-names ul li a");
const pageabout = pagesNames[0];
const pageportfolio = pagesNames[1];
const pagecontact = pagesNames[2];
const arrowsButton = document.querySelectorAll(".arrows button");
const arrowButtonOne = arrowsButton[0];
const arrowButtonTwo = arrowsButton[1];
const navOverlayMenus = document.querySelectorAll('nav.overlay-menu ul li a');
const firstNavLink = navOverlayMenus[0];
const secondNavLink = navOverlayMenus[1];
const thirdNavLink = navOverlayMenus[2];
const fourthNavLink = navOverlayMenus[3];
const portfolioTabs = document.querySelectorAll('#nav-tab button');
const tabZero = portfolioTabs[0];
const tabOne = portfolioTabs[1];
const tabTwo = portfolioTabs[2];
const tabThree = portfolioTabs[3];
const tabFour = portfolioTabs[4];
const tabFive = portfolioTabs[5];
const getInTouch = document.querySelector("a.get-in-touch");
const submit = document.querySelector("button.contact-form-submit");
const iconListOne = document.querySelector(".icon-list.list-1");
const iconListTwo = document.querySelector(".icon-list.list-2");
const iconListThree = document.querySelector(".icon-list.list-3");
const facebook = document.querySelector(".facebook");
const insta = document.querySelector(".insta");
const linkedin = document.querySelector(".linkedin");

const cursorChangeElements = [ facebookIcon,arrowButtonOne, arrowButtonTwo, originalBtn, instaIcon, linkedinIcon, pageabout, pageportfolio, pagecontact, navLogo, firstNavLink,
  secondNavLink, thirdNavLink, fourthNavLink, homeHeaderButton, offerButton, footerButton,
  footerLogo, toggle, footerIcons, pagesNames, tabZero, tabOne, tabTwo, tabThree, tabFour,
  tabFive, facebook, insta, linkedin, iconListOne, iconListTwo, iconListThree, getInTouch, submit];

  cursorChangeElements.forEach(element => {
    if (element && typeof element.addEventListener === 'function') {

        element.addEventListener('mouseover', function(){

            window.addEventListener('DOMContentLoaded', cursor);
window.addEventListener('mousemove', cursor);
document.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
document.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
      jQuery('.cursor').remove();
    } else {
      mouseCursor.style.display = 'block';
    }
            function cursor(e){
                mouseCursor.style.top = "calc(" +e.clientY + "px - 18px)";
                mouseCursor.style.left = "calc(" +e.clientX + "px - 18px)";
                mouseCursor.classList.add("div-cursor-two");
                TweenMax.to(mouseCursor, 0.1, { ease: Power2.easeInOut });
            }
        });
        element.addEventListener('mouseleave', function(){
            window.addEventListener('DOMContentLoaded', cursor);
window.addEventListener('mousemove', cursor);
document.addEventListener('mouseenter', () => mouseCursor.style.display = 'block');
document.addEventListener('mouseleave', () => mouseCursor.style.display = 'none');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
      jQuery('.cursor').remove();
    } else {
                mouseCursor.style.display = 'block';}
                function cursor(e){
                mouseCursor.style.top = "calc(" +e.clientY + "px - 10px)";
                mouseCursor.style.left = "calc(" +e.clientX + "px - 10px)";
                mouseCursor.classList.remove("div-cursor-two");
                TweenMax.to(mouseCursor, 0.1, { ease: Power2.easeInOut });
            }
        });
    }
});

if(window.innerWidth > 991){
    const mouseCursorr = document.querySelector(".cursor");
    document.addEventListener("mousemove", () => {
    mouseCursorr.style.opacity = '1';
})}

// smoth scroll
if (window.innerWidth > 991){
    
    var html = document.documentElement;
    var body = document.body;
    var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.06, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
  };

 var requestId = null;

 TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
 });

 window.addEventListener("load", onLoad);

 function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
 }

 function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
 }

 function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
 }

 function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
 }
}


// portfolio gallery
(function ($) {
    $(function () {
    });
})(jQuery);


// toggle button
$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('.animation-small').css('animation-name', 'animationsmall');
    $('.animation-capital').css('animation-name', 'animationcapital');
    $('#overlay').toggleClass('open');
    $('#main-navbar').removeClass('mainNavbarClass');
});
$(document).ready(function() {
    $("#toggle").click(function() {
        $(body).toggleClass("stopscroll");
    });
});


// nav background color
$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('#main-navbar').addClass('mainNavbarClass');
    } else {
        $('#main-navbar').removeClass('mainNavbarClass');
    }
});




// testimonial slider
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    speed: 1500,

    navigation: {
        nextEl: '.swiper-button-next',
        speed: 1500,
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    speed: 1500,
    centeredSlides: true,
    slidesPerView: 5,
    touchRatio: 0.1,
    slideToClickedSlide: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    loopedSlides: 4,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;


// spider move on scroll
const legLeft = document.querySelector('.leg-left');
const legRight = document.querySelector('.leg-right');
const moveSpider = document.querySelector('.circle');
window.addEventListener('scroll', () => {

    legLeft.style.animationName = "moveleft";
    legRight.style.animationName = "moveright";

    if (window.innerWidth > 600){
        if (window.scrollY >= 650) {
            legLeft.style.animationName = "moveleft-off";
            legRight.style.animationName = "moveright-off";
            TweenMax.to(moveSpider, 1, { top: 880 });
            } else if (window.scrollY === 0) {
            legLeft.style.animationName = "moveleft-off";
            legRight.style.animationName = "moveright-off";
            TweenMax.to(moveSpider, 1, { top: 200 });
           } else if (window.scrollY <= 100) {
            TweenMax.to(moveSpider, 1, { top: 300 });
           } else if (window.scrollY <= 200) {
            TweenMax.to(moveSpider, 1, { top: 400 });
           } else if (window.scrollY <= 300) {
            TweenMax.to(moveSpider, 1, { top: 500 });
           } else if (window.scrollY <= 400) {
            TweenMax.to(moveSpider, 1, { top: 600 });
           } else if (window.scrollY <= 500) {
            TweenMax.to(moveSpider, 1, { top: 700 });
           } else if (window.scrollY <= 600) {
            TweenMax.to(moveSpider, 1, { top: 800 });
           }else if (window.scrollY <= 625) {
            TweenMax.to(moveSpider, 1, { top: 825 });
           }else if (window.scrollY <= 649) {
            TweenMax.to(moveSpider, 1, { top: 879 });
           }
    };

    if (window.innerWidth < 600){
        if (window.scrollY >= 500) {
            legLeft.style.animationName = "moveleft-off";
            legRight.style.animationName = "moveright-off";
            TweenMax.to(moveSpider, 1, { top: 800 });
            } else if (window.scrollY === 0) {
            legLeft.style.animationName = "moveleft-off";
            legRight.style.animationName = "moveright-off";
            TweenMax.to(moveSpider, 1, { top: 370 });
           } else if (window.scrollY <= 100) {
            TweenMax.to(moveSpider, 1, { top: 470 });
           } else if (window.scrollY <= 200) {
            TweenMax.to(moveSpider, 1, { top: 570 });
           } else if (window.scrollY <= 300) {
            TweenMax.to(moveSpider, 1, { top: 670 });
           } else if (window.scrollY <= 499) {
            TweenMax.to(moveSpider, 1, { top: 799 });
           }
    };
})


// Add a script to toggle the overlay
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('canvas').classList.remove('overlay-hidden');
});