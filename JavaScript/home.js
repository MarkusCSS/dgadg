window.addEventListener('load',()=>{
  first.style.top=0+ '%';
  second.style.bottom= -50  + '%';
} ,{ passive: true });
home.addEventListener('scroll',()=>{
  if(window.innerWidth>1025 ){
    scrollHome();
  } else{
    scrollHomeMobile();
  }
}, { passive: true });
window.addEventListener('resize',()=>{
  if(window.innerWidth>1025  ){    
  home.addEventListener('scroll', scrollHome);
} else{
 home.addEventListener('scroll',scrollHomeMobile);
}
}, { passive: true });
function scrollHomeMobile(){
 var  slide1 = document.getElementById('slide1');
 var  slide2 = document.getElementById('slide2');
 var  downSecondText = document.querySelector('.downSecondText');
 var  downImg2 = document.querySelector('.downImg2');
 const scrollTop = home.scrollTop;
 const visibleHeight = home.clientHeight;
 const totalHeight = home.scrollHeight;
 const scrollPercentage = (scrollTop / (totalHeight - visibleHeight)) * 100;
 const scrollSlide1Top = slide1.scrollTop;
 const clientSlide1Height = slide1.clientHeight;
 const scrollSlide1Height = slide1.scrollHeight;
 const scrollSlide1Bottom = scrollSlide1Height - (scrollSlide1Top + clientSlide1Height);
 if((scrollPercentage-1) + 1 <= 35){
  slide1.style.bottom= scrollPercentage + '%';
 } else {
  slide1.style.bottom= 35 + '%';
 }
 if((scrollPercentage+1)-1>=100 ){
    setTimeout(()=>{
      downSecondText.classList.remove('animate-text-rev');
      downImg2.classList.remove('animate-img-rev');
      downSecondText.classList.add('animate-text');
      downImg2.classList.add('animate-img');   
      document.querySelector('.downSecondText ').style.display='block';
      document.querySelector('.downSecondText p ').style.display='block';
      document.querySelector('.paragraphImg2-2').style.display='block';
      document.querySelector('.nav__toggle').style.color='white';
    },700);
 } else if(scrollPercentage<100 && document.querySelector('.downSecondText ').style.display=='block' ) {    
   setTimeout(()=>{  
    downSecondText.classList.remove('animate-text');
    downImg2.classList.remove('animate-img');   
    downSecondText.classList.add('animate-text-rev');
    downImg2.classList.add('animate-img-rev');
    document.querySelector('.nav__toggle').style.color='black';
    document.querySelector('.paragraphImg2-2').style.display='none';
},700);
setTimeout(()=>{
document.querySelector('.downSecondText p ').style.display='none';
document.querySelector('.downSecondText ').style.display='none';
},700);
 }
}
function scrollHome (){
      var home = document.getElementById("home");
      var first = document.getElementById("first");
      var second = document.getElementById("second");
 const scrollTop = home.scrollTop;
 const scrollFirstTop = first.scrollTop;
 const scrollSecondTop = second.scrollTop;
 const clientSecondHeight = second.clientHeight;
 const scrollSecondHeight = second.scrollHeight;
 const scrollSecondBottom = scrollSecondHeight - (scrollSecondTop + clientSecondHeight);
 const visibleHeight = home.clientHeight;
 const totalHeight = home.scrollHeight;
 const scrollPercentage = (scrollTop / (totalHeight - visibleHeight)) * 100;
 if((scrollFirstTop-1)+1>=0 && (scrollSecondBottom -1 ) +1<=0 ) {
  first.style.top=((scrollPercentage * 0.75)  ) + '%';
  second.style.bottom=((scrollPercentage*0.75)-50 ) + '%';
    if(scrollPercentage>50){
      document.getElementById('homeText2').style.display='none';
      document.getElementById('homeText3').style.display='block';
     home.style.backgroundSize=49.50 +'%'+ 50 +'%,'+ 50.50+'%'+25+'%,'+ 49.50+'%'+ 50+'%,'+ 50.50+'%'+ 75+'%';
    } else {
     home.style.backgroundSize=49.50 +'%'+ 50 +'%,'+ 50.50+'%'+75+'%,'+ 49.50+'%'+ 50+'%,'+ 50.50+'%'+ 25+'%';
     document.getElementById('homeText2').style.display='block';
     document.getElementById('homeText3').style.display='none';
    }
    }
    if(scrollPercentage>10 && scrollPercentage<90){
      document.getElementById('homeAnimaHide').style.display='block';
    }else{
      document.getElementById('homeAnimaHide').style.display='none';
    }
}
