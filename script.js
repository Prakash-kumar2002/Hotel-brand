var tl = gsap.timeline();

gsap
tl
.from("#line1",{
    top:"100%",
    // delay:0.3,
    duration:2,
})
.from("#line2",{
    bottom:"100%",
    // delay:0.3,
    duration:2
},"-=2")

.to("#slider",{
height:"0%",
    delay:0.2,
    duration:2
})
    .from(" #text-div,#right-txt>h1,h6,#right-div-bottom>h3 ", {
        y: 30,
        duration: 2,
        // stagger:2,
        // delay:3,
        ease: Expo.easeInOut,
        opacity: 0,
    })

    .from("img", {
        x: "-100%",
        //    delay:3,
        duration: 1,
        ease: Expo.easeInOut,
    })
    .from(" #nav ,#color-div>i,#right-div-right>a", {
        // y:100,
        // delay:3,
        duration: 1,
        // stagger:2,
        ease: Expo.easeInOut,
        opacity: 0,
    }, "-=2")

    