'use strict';

//burger-btn
(function () {
  const burgerBtn = document.querySelector('.burger');
  const mobileNav = document.querySelector('.nav');
  const body = document.querySelector('body');
  const header = document.querySelector('.header');

  //при нажатии на якорную ссылку или на ссылку адрес/тлф - мобильное меню также должно закрываться
  //для этого я дал класс js-header-close чтобы получить нужный массив ссылок, при нажатии на которые header будет закрываться
  //получим все ссылки в mobile-header
  const links = Array.from(document.querySelectorAll('.js-header-close'));

  //присваиваем все классы одной функцией:
  function closeHeader() {
    burgerBtn.classList.toggle('burger_active');
    mobileNav.classList.toggle('nav_active');
    body.classList.toggle('stop-scroll');
    header.classList.toggle('header_active');
  }

  //клик по бургеру:
  burgerBtn.addEventListener('click', closeHeader);

  //клик по ссылкам в mobile-header должен работать и отключаться в зависимости от разрешения
  function checkCurrentWidth() {

    if (window.screen.width < 768) {
      links.forEach((el) => {
        el.addEventListener('click', closeHeader);
      });
    } else {
      links.forEach((el) => {
        el.removeEventListener('click', closeHeader);
      });
    }

  }

  checkCurrentWidth();

  //будем следить за поворотом экрана пользователем:
  window.addEventListener('resize', checkCurrentWidth);

})();

//active navigation shows where user now:
(function () {
  const nav = document.querySelector('.nav__list');
  const links = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.js-section').forEach((el, i) => {

      if (el.offsetTop - nav.clientHeight <= scrollDistance) {
        links.forEach((el) => {
          if (el.classList.contains('nav__link_active')) {
            el.classList.remove('nav__link_active');
          }
        });

        links[i].classList.add('nav__link_active');
      }
    });
  });
})();

//removing blocks with H1 and check-in button
(function () {
  //будем перемещать эти два узла:
  const firstTop = document.querySelector('.first__top');
  const checkIn = document.querySelector('.first__check-in');
  //в эти два объекта:
  const leftSide = document.querySelector('.first__left-side');
  const firstContainer = document.querySelector('.first__wrapper');

  //определим контрольные точки где будет меняться расположение узлов первой секции:
  const widthMax = window.matchMedia('(min-width: 767px)');
  const widthMin = window.matchMedia('(max-width: 768px)');

  //проверим ширину экрана пользователя при загрузке страницы:
  (function () {
    let screenWidth = window.screen.width;

    if (screenWidth > 768) {
      firstContainer.prepend(firstTop);
      firstContainer.appendChild(checkIn);
    }
  })();

  //вешаю обработчик событий на window
  window.addEventListener('resize', changeFirstSection);

  function changeFirstSection() {
    /*контрольная точка 767рх - при увеличении экрана с мобилки, JS удаляет узлы из firstTop and checkIn и добавляет их в leftSide:*/
    if (window.matchMedia('(min-width: 767px)').matches) {
      leftSide.prepend(firstTop);
      leftSide.appendChild(checkIn);
    } else if (window.matchMedia('(max-width: 768px)')) {
      /*теперь нужно переместить DOM элементы из ПК версии в мобильную в случае если пользователь переворачивает экран или меняет разрешение*/
      firstContainer.prepend(firstTop);
      firstContainer.appendChild(checkIn);
    }
  }
  return changeFirstSection();
})();


// js-swiper

const swiper1 = new Swiper('.js-swiper', {
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