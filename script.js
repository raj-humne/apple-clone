// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

// Tell ScrollTrigger to update when Locomotive scrolls
scroll.on("scroll", ScrollTrigger.update);

// Set up the scrollerProxy — this links Locomotive and ScrollTrigger
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"
});

// Your GSAP timeline
var tl = gsap.timeline();

tl.from(".nav", { y: -50, duration: 0.7, opacity: 0 })
  .from(".shop-ribbon", { y: -50, duration: 0.5, opacity: 0 })
  .from(".hero-content", { y: 50, duration: 1, opacity: 0 })
  .from(".landing-btn", { y: 50, duration: 0.5, opacity: 0 })
  .from(".landing-img", { y: 50, duration: 0.5, opacity: 0 });

// ScrollTrigger animations
gsap.from(".second-content", {
  x: -500,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".second-content",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3
  }
});

gsap.from(".second-btns", {
  x: 500,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".second-btns",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 3
  }
});
gsap.from(".second-img", {
   y: -250,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".second-img",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 3
  }
})

// Refresh both scrolls after setup
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
