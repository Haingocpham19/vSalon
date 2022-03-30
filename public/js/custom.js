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
    $('.feature-header .for-pc li:first').addClass('active');
    $('.feature-header .for-tablet li:first').addClass('active');


    $('.feature-header .for-pc li').click(function(){
        index = $(this).index();
        $('.feature-header li').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        $('.content').eq(index).show();
    })
    $('.for-tablet ul:first li').click(function(){
      index = $(this).index();
      $('.for-tablet  li').removeClass('active');
      $(this).addClass('active');
      $('.content').hide();
      $('.content').eq(index).show();
    })
      $('.for-tablet ul:last li').click(function(){
        index = $(this).index()+4;
        console.log(index);
        $('.for-tablet  li').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        $('.content').eq(index).show();
    })
});



//click ontop
var fixed = document.querySelector('.fixed');
var mybutton = document.getElementById("back-to-top");
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fixed.style.boxShadow = "0 0 6px #2c1818";
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    fixed.style.boxShadow = "none";
  }
}
// Bind your button click, scroll direction and effect speed
document.getElementById("back-to-top").onclick = function() {
  scrollTo(0, 1000); // it will take 8 seconds to reach to top.

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
//show hide change language
function ShowHideLanguage(selectDom){

  var btn = document.querySelector(selectDom+" svg" );
  console.log(btn);
  var selectFlag = document.querySelector(selectDom +' ul')
  btn.addEventListener('click',function(){
    for (let i = 0; i <= 1; i++) {
      document.querySelectorAll(selectDom +' ul li')[i].style.display = "block";
      document.querySelector(selectDom+ ' li').classList.remove('active');
    }
  })
  selectFlag.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;   
    console.log(target.closest('li'));
    target.closest('li').classList.add('active');
    for (let i = 0; i <= 1; i++) {
      document.querySelectorAll(selectDom+ ' ul li')[i].style.display = "none";
      document.querySelector(selectDom +' li.active').style.display = "block";
    }
  }, false);
}

ShowHideLanguage(".change-language");
ShowHideLanguage(".change-language-mobile");
