const navMenu = document.querySelector('.main__nav');
const buttonNavMenu = navMenu.querySelector('.nav__button');

buttonNavMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('main__nav--close')) {
    navMenu.classList.remove('main__nav--close')
  } else {
    navMenu.classList.add('main__nav--close')
  }
})

////////////////////////////////////////////////////////

const buttonFirstLevel = document.querySelector('.level1__button');
const buttonsSecondLevel = document.querySelectorAll('.level2__button');
const rowsSecondLevel = document.querySelectorAll('.item__level2');
const rowsThirdLevel = document.querySelectorAll('.item__level3');
const editionTools = document.querySelector('.item__editionTools');


buttonFirstLevel.addEventListener("click", () => {
  editionTools.classList.toggle("item__editionTools--hidden");
  buttonFirstLevel.classList.toggle("item__button--collapsList"); //сменить картинку кнопки 1го уровня

  for (let elem of rowsSecondLevel) {
    //убрать класс с низлежащих уровней
    elem.classList.toggle("item__row--hidden");
  }

  for (let elem of rowsThirdLevel) {
    if (!elem.classList.contains("item__row--hidden")) {
      //при сворачивании всего первого уровня, свернуть и самый глубокий
      elem.classList.add("item__row--hidden");
    }
  }

  for (elem of buttonsSecondLevel) {
    if (elem.classList.contains('item__button--collapsList'))
    elem.classList.remove("item__button--collapsList"); //и поменять картинку на кнопке второго уровня
  }
});

for (let elem of buttonsSecondLevel) {
  elem.addEventListener('click', () => {
    for (let elem of rowsThirdLevel) {
      elem.classList.toggle('item__row--hidden');
    }
    elem.classList.toggle('item__button--collapsList');
  });
}

const childrenLocationItem = document.querySelector('.location__item').children;
console.log(childrenLocationItem);
console.log(childrenLocationItem.children);


const dataBase = [
  (location1 = {
    title: "Локация 1",
    info1: "512",
    location1_1: {
      title: "Подотдел 1",
      info1: "10",
      info2: "Для утерь",

      location1_1_1: {
        title: "Подподотдел 1",
        info1: "2",
        info2: "Виртуальная",
        info3: "Без штрихкода",
      },

      location1_1_2: {
        title: "Подподотдел 2",
        info1: "3",
        info2: "---",
        info3: "---",
      },
    },
    location1_2: {
      title: "Подотдел 2",
      info1: "15",
      info2: "Для находок",

      location1_2_1: {
        title: "Подподотдел 1",
        info1: "12452",
        info2: "В реале",
        info3: "Штрихкод обязателен",
      },

      location1_2_2: {
        title: "Подподотдел 2",
        info1: "58",
        info2: "+++",
        info3: "---",
      },
    },
  }),
];

//console.log(dataBase);
