const side1 = document.getElementById('side1');
const side2 = document.getElementById('side2');
const project = document.getElementById("projecte");
    project.addEventListener('scroll', () => {
        const scrollTop = project.scrollTop; 
        const clientHeight = project.clientHeight;
        const scrollHeight = project.scrollHeight; 
        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        let set = percentage;
        if(window.innerWidth<768 && window.innerWidth>320){   
        if (percentage>80){  
            set=80;
        side2.style.clipPath=`polygon(${set}% 0%,100% 0%,100% 100% )`;
        side1.style.clipPath=`polygon(0% 0%,0% 100%,${100 - set}% 100% )`;
        } else {
            side2.style.clipPath=`polygon(${set}% 0%,100% 0%,100% 100% )`;
            side1.style.clipPath=`polygon(0% 0%,0% 100%,${100 - set}% 100% )`;
        }
         } else if(window.innerWidth>=768){
            if (percentage>85){  
                set=85;
            side2.style.clipPath=`polygon(${set}% 0%,100% 0%,100% 100% )`;
            side1.style.clipPath=`polygon(0% 0%,0% 100%,${100 - set}% 100% )`;
            } else {
                side2.style.clipPath=`polygon(${set}% 0%,100% 0%,100% 100% )`;
                side1.style.clipPath=`polygon(0% 0%,0% 100%,${100 - set}% 100% )`;
            }
         } else if(window.innerWidth<=320) {
            if (percentage>90){  
                set=90;
            side2.style.clipPath=`polygon(${set}% 0%,100% 0%,100% 100% )`;
            side1.style.clipPath=`polygon(0% 0%,0% 100%,${100 - set}% 100% )`;
            } else {
                side2.style.clipPath=`polygon(${set}% 0%,100% 0%,100% 100% )`;
                side1.style.clipPath=`polygon(0% 0%,0% 100%,${100 - set}% 100% )`;
            }
         }
      });
      const videoList = document.querySelectorAll('#projecte video');
      const videoSources2 = [
        'assets/video/mainVideo1.mp4',
        'assets/video/mainVideo2.mp4'
      ];
      videoList.forEach(video => {
        let limitTransition;
        let currentSourceIndex = parseInt(video.getAttribute('data-source-index'));
        video.addEventListener('ended', () => {
          
          limitTransition = currentSourceIndex;
          currentSourceIndex = (currentSourceIndex +1 ) % videoSources2.length;
          if (project.style.display !== 'block') return;
          if (videoList[videoSources2.length-1] === videoList[limitTransition]) {
            showLoadingTransition();
            setTimeout(()=>{
              resetAll();
              document.getElementById('contact').style.display='block';
              if(window.innerWidth<769){ 
                noneAndLow();
              } else{
                noneAndHigh();
              }
            },700);
            setTimeout(loadingStop, 1700); 
            return;
                    } else{  
                    video.setAttribute('data-source-index', currentSourceIndex );
                    video.src = videoSources2[currentSourceIndex];
                    video.load();
                    video.play();
                  }
                 
                  });
      });
const firstSource = videoList[0].querySelector('#projecte video source:first-child');
const secondSource = videoList[1].querySelector('#projecte video source:first-child');
const projecteElement = document.querySelector('#projecte');
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === 'style') {
      if (projecteElement.style.display === 'block') {
        videoList[0].src = firstSource.src;
        videoList[0].load();
        videoList[1].src = secondSource.src;
        videoList[1].load();
      }
    }
  });
});
observer.observe(projecteElement, { attributes: true });










 





