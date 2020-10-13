gsap.registerPlugin(ScrollTrigger);

console.log("jeg er her");

const godEnergiContainer = document.querySelector("#energi_container");
const godEnergiContainerDiver = document.querySelector("#energi_container > div");
const diverIOverskud = document.querySelectorAll("#overskudIHverdagen > div");


gsap.set("#energi_container", {
    css: {
        className: "animate_animated"
    }
});

ScrollTrigger.create({
    trigger: godEnergiContainer,
    markers: true,
    toggleClass: "coloryellow",
    duration: 2,
    start: "top center",
    end: "bottom 50%",
    once: true,
});



//gsap.from(godEnergiContainerDiver, {
//    x: -300,
//    duration: 1,
//    stagger: 1,
//    scrollTrigger: {
//        trigger: "#energi_container",
//        start: "top top",
//        end: "top top",
//        scub: true,
//    }
//})
var rellax = new Rellax(".rellax", {
    center: true,
});

gsap.from(diverIOverskud, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#overskudIHverdagen",
        start: "10% center",
        end: "center center",
        markers: true,
        scrub: true,
    }
});
