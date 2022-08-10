import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()


// GSAP

let tl = gsap.timeline({ defaults: { duration: .8 } })


// Svg
tl.from("svg", {
    opacity: 0,
    xPercent: -100,
})
    .from("svg .tablet", {
        opacity: 0,
        x: -100
    })
    // Content
    .from(".js-content", {
        opacity: 0,
        x: 200,
    }, "-=0.8")

    .from("header, footer", {
        opacity: 0,
    })
