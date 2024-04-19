gsap.registerPlugin(ScrollTrigger);

gsap.from('.column-kasama', {
    y: 400,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".column-kasama",
        start: "top 80%",
        markers: false,
    }
 });

 gsap.from('.btn-padding', {
    xpercent: -100,
    opacity: 0,
    duration: 2,
    ease: "sine.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".btn-padding",
        start: "top 80%",
        markers: false,
    }
 });

 gsap.from('.f-400', {
    xpercent: -100,
    opacity: 0,
    duration: 2,
    ease: "sine.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".font-25",
        start: "top 80%",
        markers: false,
    }
 });

 gsap.from('.pea-padding', {
    xpercent: -100,
    opacity: 0,
    duration: 2,
    ease: "sine.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".pea-padding",
        start: "top 80%",
        markers: false,
    }
 });

 gsap.from('.food', {
    xpercent: -300,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".food",
        start: "top 80%",
        markers: false,
    }
 });

 gsap.from('.col-4', {
    xpercent: -300,
    opacity: 0,
    duration: 2,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
        trigger: ".col-4",
        start: "top 80%",
        markers: false,
    }
 });