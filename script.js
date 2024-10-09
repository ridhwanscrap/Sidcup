gsap.to(".navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "150px",
    width: "100%",
    scrollTrigger: {
      trigger: ".navbar",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
  gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });

  gsap.to(".navbar a:hover",{
    backgroundColor: "#95c11e"
  })