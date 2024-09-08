const navMenu = document.querySelector('.main__nav');
const buttonNavMenu = navMenu.querySelector('.nav__button');
const mainBlock = document.querySelector('.main');
const workSpaceBlock = document.querySelector('.main__workspace');

buttonNavMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('main__nav--close')) {
    navMenu.classList.remove('main__nav--close');
    mainBlock.style.gridTemplateColumns = "290px 1fr";
    workSpaceBlock.style.width = "83.5vw"
  } else {
    navMenu.classList.add('main__nav--close');
    mainBlock.style.gridTemplateColumns = "45px 1fr";
    workSpaceBlock.style.width = "96vw"
  }
});
