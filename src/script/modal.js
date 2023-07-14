const singUpBtn = document.querySelector('.first__btn')
const modalBg = document.querySelector('.modal-sign-up')
const modal = document.querySelector('.first__modal')
const modalCloseBtn = document.querySelector('.modal__close-btn')
const modalMobile = document.querySelector('.first__btn-mobile')

const modalOpen = function () {
	modal.classList.remove('none')
	document.body.classList.add('no-scroll')
}

const modalClose = function () {
	modal.classList.add('none')
	document.body.classList.remove('no-scroll')
}

singUpBtn.onclick = modalOpen

modalBg.onclick = modalClose

modalCloseBtn.onclick = modalClose

modalMobile.onclick = modalOpen