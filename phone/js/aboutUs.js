$(document).ready(function () {
    new Swiper("#banner", {
        initialSlide: Math.floor(3 / 2),
        autoplay: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        effect: 'creative',
        loop: true,
        grabCursor: true,
        creativeEffect: {
            prev: {
                translate: [-88, 0, 0],
                scale: 0.8,
                shadow: false
            },
            next: {
                translate: [88, 0, 0],
                scale: 0.8,
                shadow: false
            },
            limitProgress: Math.floor(3 / 2),
            shadowPerProgress: true
        },
        pagination: {
            el: '.banner_page',
            clickable: true,
        },
    })
})