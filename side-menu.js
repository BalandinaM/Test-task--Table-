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

const buttonFirstLevelTable = document.querySelector('.level1__button');
const buttonsSecondLevelTable = document.querySelectorAll('.level2__button');
const tablesSecondLevel = document.querySelectorAll('.table__level2');
const tablesThirdLevel = document.querySelectorAll('.table__level3');
const tableEditionTools = document.querySelector('.table__editionTools');

console.log(tablesSecondLevel);

buttonFirstLevelTable.addEventListener('click', () => {

  tableEditionTools.classList.toggle('table__editionTools--hidden');

  for (let elem of tablesSecondLevel) {//убрать класс с низлежащих уровней
    elem.classList.toggle('table__row--hidden')
  }
  buttonFirstLevelTable.classList.toggle('table__button--collapsList');//сменить картинку кнопки 1го уровня

  if (!tableThirdLevel.classList.contains('table__row--hidden')) {//при сворачивании всего первого уровня, свернуть и самый глубокий
    tableThirdLevel.classList.add('table__row--hidden');

    for (elem of buttonsSecondLevelTable) {
      elem.classList.toggle('table__button--collapsList');//и поменять картинку на кнопке второго уровня
    }
  }
})

for (let elem of buttonsSecondLevelTable) {
  elem.addEventListener('click', () => {
    for (let elem of tablesThirdLevel) {
      elem.classList.toggle('table__row--hidden');
    }
    elem.classList.toggle('table__button--collapsList');
  });
}



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

console.log(dataBase);
