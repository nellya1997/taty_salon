const portfolioArray = document.querySelectorAll('[data-modal]');
const scrollBar = window.innerWidth - document.body.clientWidth;

portfolioArray.forEach((image) => {
  image.addEventListener('click', () => {
    modalBackground.style.display = 'block';
    modalBackground.firstElementChild.style.width = 'max-content';
    modalBackground.firstElementChild.style.padding = '0';
    modalBackground.parentElement.style.overflow = 'hidden';
    
    if (window.screen.width > 768) {
      document.body.style.marginRight = `${scrollBar}px`;
      document.querySelector('.header').style.paddingRight = `${scrollBar}px`;
    }
    state.activeModalBlock.innerHTML = image.innerHTML;
  });
});