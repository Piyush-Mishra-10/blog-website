"use strict";/*https://www.w3schools.com/js/js_strict.asp*/

/* add event listener on multiple element*/


const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/* MOBILE NAVBAR TOOLBAR**/




const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNav);


/* header animation
when scrolled down to 100 px header will active*/

const header = document.querySelector("[ data-header]");

const backTopBtn=document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backTopBtn.classList.add("active");
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

/*
SLIDER 
 
*/


const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");


let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));

//The Number() method converts a value to a number.
//For booleans, Number() returns 0 or 1.

/*For dates, Number() returns milliseconds since January 1, 1970 00:00:00.

For strings, Number() returns a number or NaN.
-------------------
2.

getComputedStyle() method  The computed style is the style used on the element after all styling sheet have been applied.

--------------
example :

const para = document.querySelector("p");
const compStyles = window.getComputedStyle(para);
para.textContent =
  `My computed font-size is ${compStyles.getPropertyValue("font-size")},\n` +
  `and my computed line-height is ${compStyles.getPropertyValue(
    "line-height",
  )}.`;

  output:
  My computed font-size is 40px, and my computed line-height is 80px.



  getPropertyValue used to get the property value of css   applied on element





*/

let totalSlidableItems = sliderContainer.childElementCount-totalSliderVisibleItems;
let currentSlidePos=0;
const moveSliderItem=function(){
    sliderContainer.style.transform=`translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}


/**
 * -------------------------------------------------
 * The offsetLeft property returns the left position (in pixels) relative to the parent.

The returned value includes:

the left position, and margin of the element
the left padding, scrollbar and border of the parent
The offsetLeft property is read-only.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * -----NEXT SLIDE-----
 * 
 * 
 */

const slideNext=function(){

    const slideEnd=currentSlidePos>=totalSlidableItems;
if(slideEnd)
{
    currentSlidePos=0;
}
else{
    currentSlidePos++;
}

moveSliderItem();


}

sliderNextBtn.addEventListener("click", slideNext);


/* 
* -----PREv SLIDE-----
* 
* 
*/

const slidePrev =function(){

   
if(currentSlidePos<=0)
{
   currentSlidePos=totalSlidableItems;
}
else{
   currentSlidePos--;
}

moveSliderItem();


}

sliderPrevBtn.addEventListener("click", slidePrev);

window.addEventListener("resize",function(){
    let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    let totalSlidableItems = sliderContainer.childElementCount-totalSliderVisibleItems;
    moveSliderItem();
});

