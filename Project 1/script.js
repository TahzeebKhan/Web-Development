let t1 = gsap.timeline();

t1
.from("#nav",{
    opacity: 0,
    y: 100
})

.from("#nav2",{
    opacity: 0,
    y: 20
})

.from("#center p",{
    opacity:0,
    scale:1.3,
    duration:1
})

.from("#center input",{
    opacity:0,
    y:50,
    delay:"-1"
})

.from(["#img1, #img2"],{
   opacity:0,
    x:-90,
    scale:1.3,
    duration:1
})

.to(["#img1, #img2"],{
    opacity:1,
     scale:1.1,
     duration:2,
     repeat:"-1"
 })

.from(["#img3, #img4"],{
    opacity:0,
    x:80,
    scale:1.18,
    duration:1,
    delay:"-3"
 })

 .to(["#img3, #img4"],{
    opacity:1,
    scale:1.1,
    duration:2,
    repeat:"-1"
 })

 .from("#center h4",{
    y:50,
    opacity:0,
    duration:1,
    delay:"-1",
    repeat:-1
 })