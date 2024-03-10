function loadingStop () {
  document.getElementById('loading').style.width='0vw';
  document.getElementById('loading').style.height='0vh';
}
setTimeout(loadingStop,2300);
const showMenu = (toggleId, navId) =>{
const toggle = document.getElementById(toggleId);
const nav = document.getElementById(navId);
const allLink = document.querySelectorAll('.nav__link');
if(toggle && nav ){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu');
            });
            allLink.forEach(link=>link.addEventListener('click',()=>{
              if (nav.classList.contains('show-menu')) {
                nav.classList.remove('show-menu');         // Dodati display block i none na odgovarajuce elemente.
            }
            }));
            window.addEventListener('resize',()=>{
            if(window.innerWidth > 1024 && nav.classList.contains('show-menu') ) {
              nav.classList.remove('show-menu');
            }
          });
          window.addEventListener('resize',()=>{
            var divOffers = document.getElementById('offers');
           if( divOffers.style.display === 'block' && window.innerWidth<=1024 ){
           blockAndLow();
            } else if(divOffers.style.display === 'block' && window.innerWidth>1024 ){
             blockAndHigh();
            } else if (divOffers.style.display !== 'block' && window.innerWidth<=1024 ){
              noneAndLow();
            } else if(divOffers.style.display !== 'block' && window.innerWidth>1024){
             noneAndHigh();
            }
            }
          );
    }
}
showMenu('nav-toggle','nav-menu');
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView:'auto' ,
    speed: 1000,
  });
  let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    effect: "fade",
    loop:true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    thumbs: {
      swiper: swiper
    },
  });
const btnOpenvideo =document.querySelectorAll('.islands__video-content');
const islandsPopup =document.getElementById('popup');
function poPup(){
    islandsPopup.classList.add('show-popup');
}
btnOpenvideo.forEach(b=> b.addEventListener('click', poPup));
const video = document.getElementById('youtube');
const btnCloseVideo = document.getElementById('popup-close');
var isFullscreen = false;
video.addEventListener("dblclick", function() {
  if (!isFullscreen) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Za Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Za Chrome, Safari i Opera
      video.webkitRequestFullscreen();
    }
    isFullscreen = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Za Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Za Chrome, Safari i Opera
      document.webkitExitFullscreen();
    }
    isFullscreen = false;
  }
}, { passive: true });
const videoSources = [
    'assets/video/video1.mp4',
    'assets/video/video2.mp4',
    'assets/video/video3.mp4'
];
let currentSourceIndex = 0;
video.addEventListener('ended', () => {
    currentSourceIndex = (currentSourceIndex + 1) % videoSources.length;
    video.src = videoSources[currentSourceIndex];
    video.load();
    video.play();
}, { passive: true });
btnCloseVideo.addEventListener('click',()=>{
  btnClose();
}, { passive: true });
function btnClose(){
  islandsPopup.classList.remove('show-popup');
  video.currentTime = 0; 
  currentSourceIndex = 0;
  video.src = videoSources[currentSourceIndex]; 
}
const controlingImg = document.querySelectorAll('.controls__img');
function ScrollAnimation(){
gsap.from('.islands__subtitle', {opacity:1, duration: .5, delay: 0,y: -120});
    gsap.from('.islands__title', {opacity:1, duration: .5, delay: 0,x: 500});
    gsap.from('.islands__subtitle1', {opacity:1, duration: .5, delay: 0,x: -250});
   /* gsap.from('.islands__button', {opacity:1, duration: .5, delay: 0,x: -250}); */
    gsap.from('.islands__video-content', {opacity:1, duration: .5, delay: 0,y: 250});
    islandsPopup.classList.remove('show-popup');
}
controlingImg.forEach(c =>c.addEventListener('click',ScrollAnimation));
function showLoadingTransition() {
  document.getElementById('loading').style.width='100vw';
  document.getElementById('loading').style.height='100vh';
}
function resetAll(){
    document.getElementById('contact').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('offers').style.display='none';
    document.getElementById('projecte').style.display='none';
 }
 const linkAll = document.querySelectorAll('.nav__link');
document.getElementById("li2").addEventListener("click", function(event) {
  showLoadingTransition();
  setTimeout(()=>{
    resetAll();
    document.getElementById('offers').style.display='block';
    if(window.innerWidth<1025){ 
      blockAndLow();
  } else{
    blockAndHigh();
  }
  btnClose();
  },700);
  setTimeout(loadingStop, 1400);
  event.preventDefault(); 
});
document.getElementById("li1").addEventListener("click", function(event) {
  showLoadingTransition();
  setTimeout(()=>{
    resetAll();
    document.getElementById('home').style.display='block';
    if(window.innerWidth<1025){ 
      noneAndLow();
    } else{
      noneAndHigh();
    }
    document.getElementById('home').scrollTo(0,  0);
  },700);
  setTimeout(loadingStop, 1400);
  event.preventDefault(); 
  
});
document.getElementById("li3").addEventListener("click", function(event) {
  showLoadingTransition();
  setTimeout(()=>{
    resetAll();
    document.getElementById('projecte').style.display='block';
    setTimeout(()=>{
      document.getElementById('projectParagraph').style.display='block';
    },1500);
    setTimeout(()=>{
      document.getElementById('projectParagraph').style.display='none';
    },4500);
    if(window.innerWidth<1025){ 
      noneAndLow();
    } else{
      noneAndHigh();
    }
    document.getElementById('projecte').scrollTo(0,  0);
  },700);
  setTimeout(loadingStop, 1400);
  event.preventDefault(); 
});
document.getElementById("li4").addEventListener("click", function(event) {
  showLoadingTransition();
  setTimeout(()=>{
    resetAll();
    document.getElementById('contact').style.display='block';
    if(window.innerWidth<1025){ 
      noneAndLow();
    } else{
      noneAndHigh();
    }
    kontaktToggler();
  },700);
  setTimeout(loadingStop, 1700);
  event.preventDefault(); 
});
const items =document.querySelectorAll('.nav__item');
function noneAndHigh(){
document.querySelector('.nav__menu').style.background='transparent';
document.getElementById('languageSelect').style.background='black';
document.querySelector('.nav__toggle').style.color='black';
linkAll.forEach(link=>link.style.color='white');
linkAll.forEach(link=>link.style.background='black');
linkAll.forEach(link=>link.style.border=`1px solid white`);
items.forEach(item=>item.style.background='trasparent');
}
function noneAndLow(){
  document.querySelector('.nav__menu').style.background='black';
  document.querySelector('.nav__toggle').style.color='black';
  document.getElementById('languageSelect').style.background='black';
  linkAll.forEach(link=>link.style.background='black');
  linkAll.forEach(link=>link.style.border=`0px solid white`);
  linkAll.forEach(link=>link.style.color='white');
  items.forEach(item=>item.style.background='black');
 // console.log('test')
}
function blockAndHigh(){
  document.querySelector('.nav__menu').style.background='transparent';
  document.querySelector('.nav__toggle').style.color='blue';
  document.getElementById('languageSelect').style.background='blue';
  linkAll.forEach(link=>link.style.background='blue');
  linkAll.forEach(link=>link.style.border=`1px solid white`);
  items.forEach(item=>item.style.background='trasparent');
}
function blockAndLow(){
  document.querySelector('.nav__menu').style.background='blue';
  document.querySelector('.nav__toggle').style.color='blue';
  document.getElementById('languageSelect').style.background='blue';
  linkAll.forEach(link=>link.style.background='blue');
  linkAll.forEach(link=>link.style.border=`0px solid white`);
  items.forEach(item=>item.style.background='blue');
}
window.addEventListener('load',()=>{
  if(window.innerWidth>1024) {
    linkAll.forEach(link=>link.style.border=`1px solid white`);
  } else {
    linkAll.forEach(link=>link.style.border=`0px solid white`);
  }
}, { passive: true });
function kontaktToggler() {
  const contactElement = document.getElementById('contact');
  const navToggleElement = document.getElementById('nav-toggle');
  if (window.innerWidth <= 1024 && window.innerWidth > 768 && contactElement.style.display === 'block') {
    navToggleElement.style.color = 'white';
  }
}
function setCenterCoordinates(divElement,targetDiv) {
var rect = divElement.getBoundingClientRect();
var x = rect.right + window.scrollX; 
var y = rect.top + window.scrollY;    
targetDiv.style.left = x -4 - (targetDiv.offsetWidth / 2) + "px";
targetDiv.style.top = y +2 - (targetDiv.offsetHeight / 2) + "px";
}
const showText= element=>{
  let frameText = element.nextElementSibling
  frameText.style.display='block';
  let xClose =frameText.nextElementSibling;
  xClose.style.display='inline-flex';
  setCenterCoordinates(frameText,xClose);
}
const removeText = element =>{
 element.previousElementSibling.style.display='none';
 element.style.display='none';
}
window.addEventListener('resize',()=>{
  let allTextFrames = document.querySelectorAll('.offersText');
  let allXcloseBtn = document.querySelectorAll('.xPosition');
   allTextFrames.forEach(frame=>{
    if(frame.style.display==='block')
  setCenterCoordinates(frame,frame.nextElementSibling);
  });
  kontaktToggler();
 }, { passive: true });
               