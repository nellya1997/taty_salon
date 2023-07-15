'use strict';

//burger-btn
(function() {
    const burgerBtn = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    
    burgerBtn.addEventListener('click', function() {
        //burger button animation:
        burgerBtn.classList.toggle('burger_active');
        //navigation move:
        mobileNav.classList.toggle('nav_active');
        //body is being hidden:
        body.classList.toggle('stop-scroll');
        //header contains 100vh  (нужно переписать потому что под хедером должно быть видно страничку);
        header.classList.toggle('header_active');
    });
})();


//active navigation shows where user now:
(function() {
  const nav = document.querySelector('.nav__list');
  const links = document.querySelectorAll('.nav__link');

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('.js-section').forEach((el, i) => {
      
      if(el.offsetTop - nav.clientHeight <= scrollDistance) {
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
      console.log('window bigger 767px');
      leftSide.prepend(firstTop);
      leftSide.appendChild(checkIn);
    } else if (window.matchMedia('(max-width: 768px)')) {
        /*теперь нужно переместить DOM элементы из ПК версии в мобильную в случае если пользователь переворачивает экран или меняет разрешение*/
      console.log('window less 768px');
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