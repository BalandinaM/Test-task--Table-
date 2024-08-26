const dataBase = [
  {
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
    // location1_2: {
    //   title: "Подотдел 2",
    //   info1: "15",
    //   info2: "Для находок",

    //   location1_2_1: {
    //     title: "Подподотдел 1",
    //     info1: "12452",
    //     info2: "В реале",
    //     info3: "Штрихкод обязателен",
    //   },

    //   location1_2_2: {
    //     title: "Подподотдел 2",
    //     info1: "58",
    //     info2: "+++",
    //     info3: "---",
    //   },
    // },
  },
  {
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
];

console.log(dataBase);

const createRowTable = (elem) => {
  const rowTableTemplate = document.querySelector("#itemTable").content.querySelector('.location__item');
  const rowTable = rowTableTemplate.cloneNode(true);
  rowTable.querySelector('.item__level1').querySelector('.item__titleRow').textContent = elem.title;
  rowTable.querySelector('.item__level1').querySelector('.item__numericData').textContent = elem.info1;
  rowTable.querySelector('.item__level2').querySelector('.item__titleRow').textContent = elem.location1_1.title;
  rowTable.querySelector('.item__level2').querySelector('.item__numericData').textContent = elem.location1_1.info1;
  rowTable.querySelector('.item__level2').querySelector('.item__addInfo').textContent = elem.location1_1.info2;
  rowTable.querySelector('.item__level3').querySelector('.item__titleRow').textContent = elem.location1_1.location1_1_1.title;
  rowTable.querySelector('.item__level3').querySelector('.item__numericData').textContent = elem.location1_1.location1_1_1.info1;
  rowTable.querySelector('.item__level3').querySelector('.item__addInfo').textContent = elem.location1_1.location1_1_1.info2;
  rowTable.querySelector('.item__level3').querySelector('.item__addInfo--strong').textContent = elem.location1_1.location1_1_1.info3;

  //console.log(rowTable);
  return rowTable;
}

const rowTable = [];

dataBase.forEach(element => {
  let elem = createRowTable(element)
  rowTable.push(elem);
});

console.log(rowTable)
//console.log(document.querySelector("#itemTable"));

const table = document.querySelector('.location__list');
//table.appendChild(rowTable[0]);

rowTable.forEach(elem => {
  table.appendChild(elem);
})
