const swiper = new Swiper('.swaper-container', {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
  watchOverflow: true,

  navigation: {
    nextEl: '.popular_goods--slider_arrow-right',
    prevEl: '.popular_goods--slider_arrow-left'
  },
});