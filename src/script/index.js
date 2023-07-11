// js-swiper-portfolio

const swiper1 = new Swiper('.js-swiper-portfolio', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });