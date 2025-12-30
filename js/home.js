// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom cursor following mouse
var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");

if (crsr && main) {
  main.addEventListener("mousemove", function (pos) {
    gsap.to(crsr, {
      x: pos.x,
      y: pos.y,
      duration: 0.3,
      ease: "power2.out",
    });
  });
}

// Check if we're on mobile (where LocomotiveScroll might cause issues)
const isMobile = window.innerWidth < 768;

// Only use LocomotiveScroll on desktop
if (!isMobile) {
  try {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
    });

    // Sync LocomotiveScroll with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
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
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  } catch (error) {
    console.warn("LocomotiveScroll initialization failed:", error);
  }
}

// Page 1 animations - parallax effect on headings
const page1H1 = document.querySelector(".page1 h1");
if (page1H1) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      scroller: isMobile ? "body" : ".main",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
      markers: false, // Set to true for debugging
    },
  });

  tl.to(".page1 h1", { x: -80 }, "anim");
  tl.to(".page1 h2", { x: 52 }, "anim");
  tl.to(".page1 h3", { x: 100 }, "anim");

  const mainVid = document.querySelector(".page1 .main-vid");
  if (mainVid) {
    tl.to(".page1 .main-vid", { width: "90%" }, "anim");
  }
}

// Background color transition to white
const page2Element = document.querySelector(".page2");
if (page2Element) {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: isMobile ? "body" : ".main",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
      markers: false,
    },
  });
  tl2.to(".main", {
    backgroundColor: "#fff",
  });
}

// Background color transition back to dark
const page4Element = document.querySelector(".page4");
if (page4Element) {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: isMobile ? "body" : ".main",
      start: "top 80%",
      end: "top 60%",
      scrub: 1,
      markers: false,
    },
  });
  tl3.to(".main", {
    backgroundColor: "#0f0d0d",
  });
}

// Page 5 box hover animations
var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  // Add smooth hover effects using GSAP
  elem.addEventListener("mouseenter", function () {
    gsap.to(elem.querySelector(".center5"), {
      height: "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  });

  elem.addEventListener("mouseleave", function () {
    gsap.to(elem.querySelector(".center5"), {
      height: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  });
});

// Refresh ScrollTrigger on window resize (debounced)
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    ScrollTrigger.refresh();
  }, 250);
});

// Kill ScrollTriggers on page unload to prevent memory leaks
window.addEventListener("beforeunload", function () {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
