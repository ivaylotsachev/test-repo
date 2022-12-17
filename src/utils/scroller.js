import LocomotiveScroll from "locomotive-scroll";
import { onMounted } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";


  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
    useKeyboard: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    getSpeed: true,
    getDirection: true,
    lerp: 0.05,
  });

  window.onresize = locoScroll.update();

  locoScroll.on("scroll", () => ScrollTrigger.update());

  ScrollTrigger.scrollerProxy("body", {
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

    pinType: document.querySelector("body").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.defaults({
    scroller: document.querySelector("body"),
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // locoScroll.stop();

  gsap.to(".test", {
    scrollTrigger: {
      trigger: "body",
      // toggleActions: "restart pause reverse pause",
      start: "top center",
      markers: true,
      scrub: 0.3,
    },
    x: 400,
    ease: "none",
  });

  return { locoScroll, ScrollTrigger };
