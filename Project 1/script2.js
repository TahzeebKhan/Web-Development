let tl = gsap.timeline();

tl

.from("lowest",{
    opacity:0,
    duration:1,
    delay:"-1",
    onStart: function(){
        $('#lowest').textillate({
            in: { 
                    effect:'fadeInUp',
                    callback: function(){
                        $('#lowest').textillate('out')
                    } 
                },
            out:{effect:'fadeOutUp'},
            });
    }
})

.from("#second-lowest",{
    opacity:0,
    duration:1,
    delay:"1.2",
    onStart: function(){
        $('#second-lowest').textillate({
            in: { effect:'fadeInUp',
                    callback: function(){
                        $('#second-lowest').textillate('out')
                    } 
                },
                out:{effect:'fadeOutUp'},
            });
    }
})

.from("#second-top",{
    opacity:0,
    delay:"0.5",
    onStart: function(){
        $('#second-top').textillate({
            in: { effect:'fadeInUp',
                    callback: function(){
                        $('#second-top').textillate('out')
                    } 
                },
                out:{effect:'fadeOutUp'},
            });
    }
})

.from("#top",{
    opacity:0,
    delay:"0.8",
    onStart: function(){
        $('#top').textillate({
            in: { effect:'fadeInUp',
                    callback: function(){
                        $('#top').textillate('out')
                    } 
                },
                out:{effect:'fadeOutUp'},
            });
    }
})

.to("#top-screen",{
    top:"-100%",
    delay:1,
    duration:1.2,
    ease:"Power4.easeOut"
})

.from("#topbar",{
    opacity: 0,
    y: 100
})

.from("#nav",{
    opacity: 0,
    y: 20
})

.from("#topimg",{
    opacity:0,
     x:-390,
     scale:1.05,
     duration:1
 })

 .from("#topimg2",{
    opacity:0,
     x:390,
     scale:1.1,
     duration:1,
     delay:"-1"
 })

 .from("#btn1",{
    opacity: 0,
    y: 28
 })

 .to("#btn1",{
    opacity: 0,
    y: 28,
    delay:"3"
 })

 .to("#topimg",{
    opacity:0,
     x:-990,
     duration:2,
    //  delay:"3"
 })

 .to("#topimg2",{
    opacity:0,
     x:-1590,
     duration:3.5,
     delay:"-2"
 })

 .from("#topimg3",{
    opacity:0,
     x:1390,
     scale:1,
     duration:3,
     delay:"-3"
 })

 .from("#topimg4",{
    opacity:0,
     x:1350,
     scale:1,
     duration:3,
     delay:"-3.1"
 })

 .from("#btn2",{
    opacity: 0,
    y: 28
 })

 .to("#btn2",{
    opacity: 0,
    y: 28,
    delay:"3"
 })

 .to("#topimg3",{
    opacity:0,
     x:-900,
     duration:2,
    //  delay:"3"
     
 })

 .to("#topimg4",{
    opacity:0,
     x:-1590,
     duration:3.5,
     delay:"-2"
 })

 .from("#topimg5",{
    opacity:0,
     x:1390,
     scale:1,
     duration:3,
     delay:"-3"
 })

 .from("#topimg6",{
    opacity:0,
     x:1350,
     scale:1,
     duration:3,
     delay:"-3.1"
 })

 .from("#btn3",{
    opacity: 0,
    y: 28
 })

 .to("#btn3",{
    opacity: 0,
    y: 28,
    delay:"3"
 })

 .to("#topimg5",{
    opacity:0,
     x:-900,
     duration:2,
    //  delay:"3"
     
 })

 .to("#topimg6",{
    opacity:0,
     x:-1590,
     duration:3.5,
     delay:"-2"
 })

 .from("#topimg7",{
    opacity:0,
     x:1390,
     scale:1,
     duration:3,
     delay:"-3"
 })

 .from("#topimg8",{
    opacity:0,
     x:1350,
     scale:1,
     duration:3,
     delay:"-3.1"
 })

 .from("#btn4",{
    opacity: 0,
    y: 28
 })

//  .to("#btn4",{
//     opacity: 0,
//     y: 28,
//     delay:"3"
//  })

//  .to("#topimg5",{
//     opacity:0,
//      x:-900,
//      duration:2,
//      delay:"3"
     
//  })

//  .to("#topimg6",{
//     opacity:0,
//      x:-1590,
//      duration:3.5,
//      delay:"-2"
//  }) 