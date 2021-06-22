const menuBurger = document.querySelector(".menu-burger");
if (menuBurger) {
    const navMenu = document.querySelector(".nav");
    menuBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        navMenu.classList.toggle('active');
    })
}


const swiper = new Swiper('.cards-container', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});
const swiper2 = new Swiper('.second-slider', {
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        320 : {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});