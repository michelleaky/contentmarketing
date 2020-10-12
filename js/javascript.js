gsap.registerPlugin(ScrollTrigger);

console.log("jeg er her");

const godEnergiContainer = document.querySelector("#energi_container");

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

var rellax = new Rellax(".rellax", {
    center: true,
});
