

let locoScroll;

function init() {
  gsap.registerPlugin(ScrollTrigger);

  locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
}

init();




const crsr = document.querySelector("#cursor");
const main = document.querySelector("#main");

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

// GSAP animations


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top 27%",
    end: "top 0%",
    scrub: 1
  }
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top -100%",
    end: "top -110%",
    scrub: 1.5
  }
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top -230%",
    end: "top -250%",
    scrub: 2
  }
});

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top -330%",
    end: "top -350%",
    scrub: 2
  }
});





tl.to("#page1 h1", { x: -140 }, "anim");
tl.to("#page1 h3", { x: 100 }, "anim");
tl.to("#page1 img", { width: "85%" }, "anim");

tl2.to("#page1,#page2", { backgroundColor: "#FFFFFF" });
tl3.to("#page1,#page2,#page3", { backgroundColor: "#254D70" });
tl4.to("#page3,#page4,#page5", { backgroundColor: "#1C1D20" });



function applyMagneticEffect(selector = ".magnetic", strength = 40, speed = 0.15) {
  document.querySelectorAll(selector).forEach((el) => {
    el.style.transition = "transform 0.1s ease-out";
    el.style.willChange = "transform";

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const moveX = (relX - rect.width / 2) / rect.width * strength;
      const moveY = (relY - rect.height / 2) / rect.height * strength;

      gsap.to(el, {
        x: moveX,
        y: moveY,
        ease: "power1.out",
        duration: speed
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        ease: "power2.out",
        duration: speed * 2
      });
    });

    // Optional touch scaling
    el.addEventListener("touchstart", () => {
      gsap.to(el, { scale: 1.1, duration: 0.1 });
    });
    el.addEventListener("touchend", () => {
      gsap.to(el, { scale: 1, duration: 0.1 });
    });
  });
}

applyMagneticEffect(); // Call it once




// Dabba hover logic
const dabbas = document.querySelectorAll("#dabba");
dabbas.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    const att = elem.getAttribute("data-image");
    crsr.style.height = "270px";
    crsr.style.width = "270px";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${att})`;
    dabbas.style.backgroundColor = `white`;
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.height = "0px";
    crsr.style.width = "0px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
    dabbas.style.backgroundColor = `white`;
  });
});

// Nav links scroll
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-target");
    locoScroll.scrollTo(document.querySelector(target));
  });
});
  
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#page5",
    start: "bottom bottom", // When the bottom of #page5 hits the bottom of the viewport
    onEnter: () => {
        gsap.to("#dummypage", {
            transform: "translateY(0)", // Move it into view
            opacity: 1, // Fade it in
            duration: 0.5
        });
    },
    onLeaveBack: () => {
        gsap.to("#dummypage", {
            transform: "translateY(100%)", // Move it out of view
            opacity: 0, // Fade it out
            duration: 0.5
        });
    }
});


