var cursor = document.querySelector(".cursor")
var cursor_blr = document.querySelector(".cursor-blr")

document.addEventListener("mousemove", function (e) {
    cursor.style.top = e.y + "px";
    cursor.style.left = e.x + "px";
    cursor_blr.style.top = e.y - 250 + "px";
    cursor_blr.style.left = e.x - 250 + "px";
})


gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2 //for repatation
    }

})

gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -80%",
        scrub: 2
    }

})

gsap.from("#about-text, #about-img", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})

gsap.from("#colon-left", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon-left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon-right", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon-left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

})