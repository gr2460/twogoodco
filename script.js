const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    let videocon=document.querySelector("#video-container");
let playbtn=document.querySelector("#play");
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })
})

videocon.addEventListener("mousemove",function(debt){
    gsap.to(playbtn,{
        left:debt.x-50,
        top:debt.y-80
    })
})
}
videoconAnimation()
function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:30,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.3
    
    
    })
    gsap.from("#page1 #video-container",{
        scale:0,
        opacity:0,
        delay:0.5,
        duration:0.5,
    
    
    })

}
loadingAnimation()

function cursorAnimation() {
    document.addEventListener("mousemove",function (dets) {
        gsap.to("#cursor",{
            left: dets.x,
            top:dets.y
        });
    });
}
cursorAnimation()

document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
  
