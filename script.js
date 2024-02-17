function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")

  main.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x + 20+ "px"
  crsr.style.top=dets.y + 20+ "px"
})



  
init();
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top 27%",
    end:"top 0%",
   scrub:1.5
   }
})
var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -100%",
    end:"top -110%",
   scrub:1.5
   }
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -230%",
    end:"top -250%",
   scrub:2,
   }
})
var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -330%",
    end:"top -350%",
   scrub:2,
   }
})

tl.to("#page1 h1",{
   x:-140,
},"anim")
tl.to("#page1 h3",{
  x:100,
},"anim")
tl.to("#page1 video",{
  width:"85%"
},"anim")
tl2.to("#page1,#page2",{
  backgroundColor:" #EFEAE3"
})

tl3.to("#page1,#page2,#page3",{
  backgroundColor:"#607274"
})
tl4.to("#page3,#page4,#page5",{
  backgroundColor:"black"
})

var dabbas = document.querySelectorAll("#dabba")
dabbas.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){ 
     var att = elem.getAttribute("data-image")
  crsr.style.height="270px"
  crsr.style.width="270px"
  crsr.style.borderRadius="0"
  crsr.style.backgroundImage=`url(${att})`
  dabbas.style.backgroundColor=`white`
})
elem.addEventListener("mouseleave",function(){
  crsr.style.height="20px"
  crsr.style.width="20px"
  crsr.style.borderRadius="50%"
  crsr.style.backgroundImage=`none`
  dabbas.style.backgroundColor=`white`
})
})
