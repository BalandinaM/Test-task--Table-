const navMenu = document.querySelector('.main__nav');
const buttonNavMenu = navMenu.querySelector('.nav__button');

buttonNavMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('main__nav--close')) {
    navMenu.classList.remove('main__nav--close')
  } else {
    navMenu.classList.add('main__nav--close')
  }
})
