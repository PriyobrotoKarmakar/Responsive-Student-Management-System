// Initialize GSAP and ScrollTrigger (Native Scroll - No LocomotiveScroll)
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

// Page 1 animations - parallax effect on headings
const page1H1 = document.querySelector(".page1 h1");
if (page1H1) {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1 h1",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
      markers: false,
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
  const center = elem.querySelector(".center5");
  if (center) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(center, {
        height: "100%",
        duration: 0.4,
        ease: "power2.out",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(center, {
        height: "0%",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }
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
