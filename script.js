//locomotive js for smooth Scrolling 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//Gsap to Animate
gsap.from(".nlink",{
    stagger: .2,
    y: 30,
    duration:1,
    ease: Power3,
    opacity: 0,
})

Shery.textAnimate("#headings h1", {
    style: 1,
    y: 10,
    delay: 0.2,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".enim2",{
    y: 100,
    stagger: .2,
    opacity: 0,
    ease: Expo,
    duration:1,
})

Shery.imageEffect("#imgntext img",{
    style: 3,
    config:{"uFrequencyX":{"value":37.4,"range":[0,100]},"uFrequencyY":{"value":48.85,"range":[0,100]},"uFrequencyZ":{"value":14.5,"range":[0,100]},"geoVertex":{"range":[1,64],"value":17.83},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071491892819},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.61,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect(".imgeff img",{
    style: 4,
    config: {"uColor":{"value":false},"uSpeed":{"value":1.82,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.69,"range":[0,5]},"uFrequency":{"value":6.56,"range":[0,10]},"geoVertex":{"range":[1,64],"value":23.6},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499821262600986},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.09,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.58,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":1.22,"range":[0,10]},"scale":{"value":31.3,"range":[0,100]},"speed":{"value":0.52,"range":[0,1]}},
})

gsap.from("#imgntext img",{
    y: "70",
    opacity: 0,
    duration: 2,
    ease: Expo,
})

Shery.imageEffect("#bimg",{
    style: 5,
    gooey: true,
    config: {"a":{"value":1.15,"range":[0,30]},"b":{"value":-0.65,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.315890288136284},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.18,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.45,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":35}},"discard_threshold":{"value":0.57,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.92,"range":[0,100]}},
})



document.querySelector("#ftext button").addEventListener("mouseover", function(){
  gsap.to("#future video",{
    opacity: 1,
    duration: 1,
    ease: Power4,
  })
})

document.querySelector("#ftext button").addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity: 0,
        duration: 1,
        ease: Power4,
      })
})