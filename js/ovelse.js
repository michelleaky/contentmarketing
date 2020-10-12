gsap.registerPlugin(ScrollTrigger);

//gsap.to(".ball-2", {
//    x: 200,
//    y: 200,
//    scale: 1.2,
//    duration: 2,
//    rotation: 360,
//    ease: "back.easeOut.config(1.7)",
//    scrollTrigger: ".ball-2"
//});

gsap.to(".ball-2", {
    x: 200,
    y: 200,
    scale: 1.2,
    duration: 2,
    rotation: 360,
    ease: "back.easeOut.config(1.7)",
    scrollTrigger: {
        trigger: ".ball-2",
        markers: true,
        start: "top center",
        end: "bottom top"
        toggelak
    }
});
