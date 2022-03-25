//using change language
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
//using menu tab feature
$(document).ready(function(){

    $('.content:first').show();
    $('.feature-header li:first').addClass('active');

    $('.feature-header li').click(function(){
        index = $(this).index();
        $('.feature-header li').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        $('.content').eq(index).show();
    })
});



//click ontop
var mybutton = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Bind your button click, scroll direction and effect speed
document.getElementById("back-to-top").onclick = function() {
  scrollTo(0, 8000); // it will take 8 seconds to reach to top.

}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
  var e = document.documentElement;
  if (e.scrollTop === 0) {
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t + 1 === e.scrollTop-- ? e : document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
  if (duration <= 0) return;
  if (typeof from === "object") from = from.offsetTop;
  if (typeof to === "object") to = to.offsetTop;

  scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo;
    return;
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
  t01 += speed * step;
  setTimeout(function() {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
  }, step);
}

function easeOutCuaic(t) {
  t--;
  return t * t * t + 1;
}



// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   const countAnimate = document.querySelectorAll('#animateX').length;
//     for (let i = 0; i < countAnimate; i++) {
//       document.querySelectorAll('#animateX')[i].classList.add('animate__animated', 'animate__bounceOutLeft' , "animate__fadeInUp");
//     }

//   // element.addEventListener('animationend', () => {
//   //   // do something
//   // });
// }

// document.addEventListener('scroll', function(e) {
//   lastKnownScrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;

//     const countAnimate = document.querySelectorAll('#animateX').length;
//     for (let i = 0; i < countAnimate; i++) {
//       document.querySelectorAll('#animateX')[i].classList.remove('animate__fadeInUp');
//     }
//   }

// });