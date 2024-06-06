const page1Animation=()=>{
    var tl = gsap.timeline();
tl.from("nav h1 , nav h4, nav button",{   
    duration: 0.5,
    y: -100,
    opacity: 0,
    stagger:0.3
})
tl.from("#center-part1 h1, #center-part1 p",{
    duration: 1,
    x:-400,
    opacity: 0,
    stagger:0.4
},"-=0.5");
tl.from("#center-part1 button",{
    duration: 0.3,
   opacity: 0
});
tl.from("#center-part2 img",{
    duration: 0.4,
    opacity: 0,
},"-=0.5");


}

page1Animation();

const page2Animation=()=>{
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#bottom1section",
            start: "top 50%",
            end: "top -10%",
            scroller:"body",
            scrub:2
        }
    });
    tl2.from("#bottom1section img",{
        duration: 1,
        x:400,
        opacity: 0,
        stagger:0.4
    },"-=0.5");
  tl2.from(".section2 ",{
        x: 30,
        duration: 1,
        opacity: 0
    },"-=0.5");
    tl2.from(".element.line1.left",{
        x: -30,
        duration: 1,
        opacity: 0
    },"anim");
    tl2.from(".element.line2.right",{
        x: 30,
        duration: 1,
        opacity: 0
    },"soja");
    tl2.from(".element.line2.left",{
        x: -30,
        duration: 1,
        opacity: 0
    },"soja");
    tl2.from(".element.line1.right",{
        x: 30,
        duration: 1,
        opacity: 0
    },"anim");
  
    


}


page2Animation();