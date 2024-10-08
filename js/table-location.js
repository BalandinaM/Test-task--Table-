const dataBase = [
  {
    id: 1,
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

      location1_2_3: {
        title: "Подподотдел 3",
        info1: "54517",
        info2: "---",
        info3: "--++++",
      },
    },
  },
  {
    id: 2,
    title: "Локация 2",
    info1: "215",
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
  },
  {
    id: 3,
    title: "Локация 3",
    info1: "320",
    location1_1: {
      title: "Подотдел 1",
      info1: "87631",
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
  },
  {
    id: 4,
    title: "Локация 4",
    info1: "6975",
    location1_1: {
      title: "Подотдел 1",
      info1: "87631",
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
  },
];

//Заполнение таблицы Локации

const table = document.querySelector('.location__list');
const levelOneTemplate = document.querySelector('#level1').content.querySelector('.location__item');
const levelOne = levelOneTemplate.cloneNode(true);

const levelTwoTemplate = document.querySelector("#level2").content.querySelector('#level2_parent');
const levelTwo = levelTwoTemplate.cloneNode(true);
const levelTwoChildrenTemplate = document.querySelector('#level2_item').content.querySelector('#level2_children');
const levelTwoChildren = levelTwoChildrenTemplate.cloneNode(true);

const levelThirdTemplate = document.querySelector("#level3").content.querySelector('#level3_parent');
const levelThird = levelThirdTemplate.cloneNode(true);
const levelThirdChildrenTemplate = document.querySelector('#level3_item').content.querySelector('#level3_children');
const levelThirdChildren = levelThirdChildrenTemplate.cloneNode(true);


const createRowTable = (elem) => {
  const levelOneTemplate = document
    .querySelector("#level1")
    .content.querySelector(".location__item");
  const levelOne = levelOneTemplate.cloneNode(true);

  levelOne.dataset.id = elem.id;
  levelOne
    .querySelector(".item__level1")
    .querySelector(".item__titleRow").textContent = elem.title;
  levelOne
    .querySelector(".item__level1")
    .querySelector(".item__numericData").textContent = elem.info1;

  for (let elemObj in elem) {
    if (typeof elem[elemObj] == "object") {
      let obj = elem[elemObj];

      const levelTwoTemplate = document
        .querySelector("#level2")
        .content.querySelector("#level2_parent");
      const levelTwo = levelTwoTemplate.cloneNode(true);

      levelOne.appendChild(levelTwo);

      const levelTwoChildrenTemplate = document
        .querySelector("#level2_item")
        .content.querySelector("#level2_children");
      const levelTwoChildren = levelTwoChildrenTemplate.cloneNode(true);

      levelTwoChildren
        .querySelector(".item__level2")
        .querySelector(".item__titleRow").textContent = obj.title;
      levelTwoChildren
        .querySelector(".item__level2")
        .querySelector(".item__numericData").textContent = obj.info1;
      levelTwoChildren
        .querySelector(".item__level2")
        .querySelector(".item__addInfo").textContent = obj.info2;

      levelTwo.appendChild(levelTwoChildren);

      const levelThirdTemplate = document
              .querySelector("#level3")
              .content.querySelector("#level3_parent");
            const levelThird = levelThirdTemplate.cloneNode(true);

            levelTwoChildren
              .querySelector(".item__level2")
              .appendChild(levelThird);

      for (let elem in obj) {
        if (typeof obj[elem] == "object") {

          let obj2 = obj[elem];

            const levelThirdChildrenTemplate = document
              .querySelector("#level3_item")
              .content.querySelector("#level3_children");
            const levelThirdChildren =
              levelThirdChildrenTemplate.cloneNode(true);

            levelThirdChildren.querySelector(".item__titleRow").textContent =
              obj2.title;
            levelThirdChildren.querySelector(".item__numericData").textContent =
              obj2.info1;
            levelThirdChildren.querySelector(".item__addInfo").textContent =
              obj2.info2;
            levelThirdChildren.querySelector(
              ".item__addInfo--strong"
            ).textContent = obj2.info3;

            levelThird.appendChild(levelThirdChildren);
        }
      }
    }
  }

  return levelOne;
};

const rowsTable = [];

dataBase.forEach(element => {
  let elem = createRowTable(element)
  rowsTable.push(elem);
});

rowsTable.forEach(elem => {
  table.appendChild(elem);
});

//Интерактивность таблицы

const arrLocations = document.querySelectorAll('.location__item');

arrLocations.forEach((elem) => {
  const buttonFirstLevel = elem.querySelector(".level1__button");
  buttonFirstLevel.addEventListener("click", () => {
    console.log(elem.dataset.id);
    buttonFirstLevel.classList.toggle("item__button--collapsList");

    let editionTools = elem.querySelector(".item__editionTools");
    editionTools.classList.toggle("item__editionTools--hidden");

    let itemsSecondLevel = elem.querySelectorAll(".item__level2");

    itemsSecondLevel.forEach((elem) => {
      elem.classList.toggle("item__row--hidden");

      let buttonSecondLevel = elem.querySelector(".level2__button");

      buttonSecondLevel.addEventListener("click", () => {
        buttonSecondLevel.classList.toggle("item__button--collapsList");

        let itemThirdLevel = elem.querySelector(".item__level3");
        itemThirdLevel.classList.toggle("item__row--hidden");
      });
    });

    if (!buttonFirstLevel.classList.contains("item__button--collapsList")) {
      editionTools.classList.add("item__editionTools--hidden");

      itemsSecondLevel.forEach((elem) => {
        elem.classList.add("item__row--hidden");

        let buttonSecondLevel = elem.querySelector(".level2__button");
        buttonSecondLevel.classList.remove("item__button--collapsList");

        let itemThirdLevel = elem.querySelector(".item__level3");
        itemThirdLevel.classList.add("item__row--hidden");
      });
    }
  });
});
