gsap.registerPlugin(ScrollTrigger);
var rellax = new Rellax(".rellax", {
    center: true,
});

console.log("jeg er her");

const godEnergiContainer = document.querySelector("#energi_container");
const godEnergiContainerDiver = document.querySelector("#energi_container > div");
const diverIOverskud = document.querySelectorAll("#overskudIHverdagen > div");
const vidsteDuAtSection = document.querySelector("#vidsteDuAtContainer");
const DemDerSkalPoppeUpEnergi = document.querySelector(".popup");
const demDerSkalPoppeUpHverdagspauser = document.querySelector = ("#hverdagensPauser > div");

const demDerSkalPoppeUpGodsamvitighed = document.querySelector = ("#godSamvittighed > div");
const demDerSkalPoppeUpVidste = document.querySelector = ("#vidsteDuAt > div");

//const faktaboks1 = document.querySelector = ("fakta1");
//const faktaboks2 = document.querySelector = (".fakta2");
//const faktaboks3 = document.querySelector = (".fakta3");
//const faktaboks4 = document.querySelector = (".fakta4");
//
//window.addEventListener("load", visStart);
//
//function visStart() {
//    faktaboks1.addEventListener("click", clickFakta1);
//}
//
//
//
//function clickFakta1() {
//    faktaboks1.classList.remove(".pulse");
//    faktaboks1.classList.add(".scale")
//    console.log("jeg har klikket på fakaboks1")
//}






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


ScrollTrigger.create({
    trigger: vidsteDuAtSection,
    markers: true,
    toggleClass: "colorbace",
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

gsap.from(DemDerSkalPoppeUpEnergi, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#start1",
        start: "10% center",
        end: "center center",
        markers: true,
        scrub: true,
    }
});

gsap.from(demDerSkalPoppeUpHverdagspauser, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#hverdagensPauser",
        start: "10% center",
        end: "center center",
        markers: true,
        scrub: true,
    }
});

gsap.from(demDerSkalPoppeUpGodsamvitighed, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#godSamvittighed",
        start: "10% center",
        end: "center center",
        markers: true,
        scrub: true,
    }
});

gsap.from(demDerSkalPoppeUpVidste, {
    opacity: 0,
    y: 100,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: "#vidsteDuAt",
        start: "10% center",
        end: "center center",
        markers: true,
        scrub: true,
    }
});
