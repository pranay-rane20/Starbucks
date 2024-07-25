// New without loco



// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();




// loader

function loader() {
    document.addEventListener("DOMContentLoaded", function () {
        const counter3 = document.querySelector(".counter-3");
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 10; j++) {
                const div = document.createElement("div");
                div.className = "num";
                div.textContent = j;
                counter3.appendChild(div);
            }
        }

        const finalDiv = document.createElement("div");
        finalDiv.className = "num";
        finalDiv.textContent = "0";
        counter3.appendChild(finalDiv);

        function animate(counter, duration, delay = 0) {
            const numHeight = counter.querySelector(".num").clientHeight;
            const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

            gsap.to(counter, {
                y: -totalDistance,
                duration: duration,
                delay: delay,
                ease: "power2.inOut",
            })
        }

        animate(counter3, 5);
        animate(document.querySelector(".counter-2"), 6);
        animate(document.querySelector(".counter-1"), 2, 4)
    })

    gsap.to(".digit", {
        top: "-150px",
        stagger: {
            amount: 0.25,
        },
        delay: 6,
        duration: 1,
        ease: "power4.inOut",
    })

    gsap.from(".loader-1", {
        width: 0,
        duration: 6,
        ease: "power2.inOut",
    })

    gsap.from(".loader-2", {
        width: 0,
        delay: 1.9,
        duration: 2,
        ease: "power2.inOut",
    })

    gsap.to(".loader", {
        background: "none",
        delay: 6,
        duration: 0.1
    })

    gsap.to(".loader-1", {
        rotate: 90,
        y: -50,
        duration: 0.5,
        delay: 6
    })

    gsap.to(".loader-2", {
        x: -75,
        y: 75,
        duration: 0.5,
    }, "<")

    gsap.to(".loader", {
        scale: 40,
        duration: 1,
        delay: 7,
        ease: "power2.inOut"
    })

    gsap.to(".loader", {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        delay: 7,
        ease: "power2.inOut"
    })

    gsap.to(".loading-screen", {
        opacity: 0,
        display: "none",
        duration: 0.5,
        delay: 7.5,
        ease: "power1.inOut"
    })
}

loader();



const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector(".ocfe");
const pcfe = document.querySelector(".pcfe");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")


//cursor
function spark(event) {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x', getRandomTransitionValue());
    i.style.setProperty('--y', getRandomTransitionValue());

    document.body.appendChild(i);
    setTimeout(() => {
        document.body.removeChild(i);
    }, 1000)

}

function getRandomTransitionValue() {
    return `${Math.random() * 250 - 100}px`;
}

document.addEventListener('mousemove', spark);


//menu//
var menu = document.querySelector(".links i")
var cross = document.querySelector("#full i")
console.log(menu)
menu.addEventListener("click", (dets) => {
    console.log(dets)
})

var time = gsap.timeline()
time.to("#full", {
    right: 0,
    duration: 0.4,
})

time.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.28,
    opacity: 0,
})

time.from("#full i", {
    opacity: 0
})

time.pause()

menu.addEventListener("click", function () {
    time.play()
})

cross.addEventListener("click", function () {
    time.reverse()
})


// ---------------------------------------------------------
// 3rd page
gcfe.addEventListener("click", () => {
    green.style.opacity = "1"
    green.style.transform = "rotate(0deg)"
    b1.style.backgroundColor = "#00854C";

    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
    orange.style.opacity = '0'
    orange.style.transform = 'rotate(-90deg)'
})

ocfe.addEventListener("click", () => {
    orange.style.opacity = '1'
    orange.style.transform = 'rotate(0deg)'
    b2.style.backgroundColor = "#EDDCD9";


    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
    green.style.opacity = '0'
    green.style.transform = 'rotate(-90deg)'
})

pcfe.addEventListener("click", () => {
    pink.style.opacity = '1'
    pink.style.transform = 'rotate(0deg)'
    b3.style.backgroundColor = "#771D5D";

    orange.style.opacity = '0'
    orange.style.transform = 'rotate(-90deg)'
    green.style.opacity = '0'
    green.style.transform = 'rotate(-90deg)'
})


// ---------------------------------------------------------------
Shery.imageEffect(".img", {
    style: 2, //Select Style

    // debug: true, // Debug Panel
    config:
        { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -10 }, "mousemove": { "value": 2 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 10212607 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 5, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 8, "range": [-100, 100] }, "zindex": { "value": "96999", "range": [-9999999, 9999999] }, "aspect": { "value": 0.7368421184719428 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
    /* Config made from debug panel */
    ,
    // preset: "./presets/wigglewobble.json",
});
// -------------------------------------------------------------------


// hit - 2

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let hit_3 = document.querySelector('.hit_3');
let items = document.querySelectorAll('.hit_3 .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    hit_3.classList.remove('prev');
    hit_3.classList.add('next');
    active = active + 1 >= countItem ? 0 : active + 1;
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    hit_3.classList.remove('next');
    hit_3.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.hit_3 .item.active');
    if (itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.hit_3 .item.other_1');
    if (itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.hit_3 .item.other_2');
    if (itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);




// hit - 3 js

var tl0 = gsap.timeline({
    delay: .5,
    duration: 1
});
tl0



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hit-3",
        // markers:true,
        scroller: "body",
        start: "50% 50%",
        end: "120% 50%",
        scrub: 2,
        pin: true,
    }
});
tl
    .to("#lineone", {
        marginTop: "-120vh",
    }, 'baba')
    .to("#linetwo", {
        marginTop: "20vh",
    }, 'baba')
    .from(".textarea #slider-text", {
        // marginTop: "-90vh",
        marginLeft: "-10vw",
        opacity: 0
    }, 'baba')
    .from(".textarea #slider-text2", {
        // marginTop: "-90vh",
        marginRight: "50vw",
        opacity: 0
    }, 'baba')
    .from(".textarea p", {
        opacity: 0
    })
    .from(".textarea a", {
        opacity: 0
    })
    .from(".textarea h2", {
        opacity: 0
    })




// hit - 4 styling
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hit-4",
        //  markers:true,
        scroller: "body",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true
    }
});
tl
    .to("#center", {
        height: "100vh",
    }, 'a')
    .to("#top", {
        top: "-50%",
    }, 'a')
    .to("#bottom", {
        bottom: "-50%",
    }, 'a')
    .to("#top-h1", {
        top: "60%"
    }, 'a')
    .to("#bottom-h1", {
        bottom: "-30%"
    }, 'a')
    .to("#center-h1", {
        top: "-30%"
    }, 'a')
    .to(".page4-content", {
        delay: -0.2,
        marginTop: "0%"
    })



//hit-5
var t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#hit-5",
        scroller: "body",
        // markers:true,
        start: "28% 88%",
        end: "50% 50%",
        scrub: 4,
        // pin:true,
    }
});
t5.from("#hit-5 h1", {
    scale: 1.5,
    color: "#0bff71"
})
t5.
    from(".up .menu-card", {
        opacity: 0,
        top: "50%"
    })
t5.
    from(".down .menu-card", {
        opacity: 0,
        top: "50%"
    })


// svg//
var initialPath = `M 8 50 Q 689 50  1370 50`;

var finalPath = `M 8 50 Q 689 50  1370 50`;

const string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    path = `M 8 50 Q ${dets.x} ${dets.y - 490}  1370 50`,
        gsap.to("svg path", {
            attr: { d: path },
            duration: 0.2,
            ease: "power3.out"
        })
})
string.addEventListener("click", (dets) => {
    console.log(dets.x)
    console.log(dets.y)
})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})


