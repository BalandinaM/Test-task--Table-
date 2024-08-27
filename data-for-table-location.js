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
  {
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

//console.log(dataBase);

// const createRowTable = (elem) => {
//   const rowTableTemplate = document.querySelector("#itemTable").content.querySelector('.location__item');
//   const rowTable = rowTableTemplate.cloneNode(true);
//   rowTable.querySelector('.item__level1').querySelector('.item__titleRow').textContent = elem.title;
//   rowTable.querySelector('.item__level1').querySelector('.item__numericData').textContent = elem.info1;
//   rowTable.querySelector('.item__level2').querySelector('.item__titleRow').textContent = elem.location1_1.title;
//   rowTable.querySelector('.item__level2').querySelector('.item__numericData').textContent = elem.location1_1.info1;
//   rowTable.querySelector('.item__level2').querySelector('.item__addInfo').textContent = elem.location1_1.info2;
//   rowTable.querySelector('.item__level3').querySelector('.item__titleRow').textContent = elem.location1_1.location1_1_1.title;
//   rowTable.querySelector('.item__level3').querySelector('.item__numericData').textContent = elem.location1_1.location1_1_1.info1;
//   rowTable.querySelector('.item__level3').querySelector('.item__addInfo').textContent = elem.location1_1.location1_1_1.info2;
//   rowTable.querySelector('.item__level3').querySelector('.item__addInfo--strong').textContent = elem.location1_1.location1_1_1.info3;

//   //console.log(rowTable);
//   return rowTable;
// }


//console.log(typeof(dataBase[0].location1_1));

// for (let elem of dataBase) {//перебираем объекты в массиве
//   //console.log(elem);

// }

// const createRowTable = (elem) => {
//   const rowTableTemplate = document
//     .querySelector("#itemTable")
//     .content.querySelector(".location__item");
//   const rowTable = rowTableTemplate.cloneNode(true);
//   rowTable
//     .querySelector(".item__level1")
//     .querySelector(".item__titleRow").textContent = elem.title;
//   rowTable
//     .querySelector(".item__level1")
//     .querySelector(".item__numericData").textContent = elem.info1;
//   for (let elemObj in elem) {
//     //перебираем элементы в объекте 1 уровень вложенности
//     //console.log(elem.title);
//     //console.log(elem.info1);
//     //console.log(elem[elemObj]);
//     //console.log(typeof(elem[elemObj]));
//     rowTable
//       .querySelector(".item__level1")
//       .querySelector(".item__titleRow").textContent = elem.title;
//     rowTable
//       .querySelector(".item__level1")
//       .querySelector(".item__numericData").textContent = elem.info1;
//     if (typeof elem[elemObj] == "object") {
//       // если элемент объекта является объектом 2 уровень вложенности
//       //console.log(elem[elemObj])
//       let obj = elem[elemObj]; //для удобства использования запишем элемент являющийся объектом в переменную
//       //console.log(obj.title)
//       for (let elem in obj) {
//         console.log(obj.title);
//         rowTable
//           .querySelector(".item__level2")
//           .querySelector(".item__titleRow").textContent = obj.title;
//         rowTable
//           .querySelector(".item__level2")
//           .querySelector(".item__numericData").textContent = obj.info1;
//         rowTable
//           .querySelector(".item__level2")
//           .querySelector(".item__addInfo").textContent = obj.info2;
//         if (typeof obj[elem] == "object") {
//           // если элемент объекта является объектом 3 уровень вложенности
//           //console.log(obj[elem]);
//           let obj2 = obj[elem];
//           for (let elem in obj2) {
//             console.log(obj2.info1);
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__titleRow").textContent = obj2.title;
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__numericData").textContent = obj2.info1;
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__addInfo").textContent = obj2.info2;
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__addInfo--strong").textContent =
//               obj2.info3;
//           }
//         }
//       }
//     }
//   }

//   return rowTable;
// };

// const createRowTable = (elem) => {
//   const rowTableTemplate = document
//     .querySelector("#itemTable")
//     .content.querySelector(".location__item");
//   const rowTable = rowTableTemplate.cloneNode(true);
//   rowTable
//     .querySelector(".item__level1")
//     .querySelector(".item__titleRow").textContent = elem.title;
//   rowTable
//     .querySelector(".item__level1")
//     .querySelector(".item__numericData").textContent = elem.info1;
//   for (let elemObj in elem) {
//     //перебираем элементы в объекте 1 уровень вложенности
//     //console.log(elem.title);
//     //console.log(elem.info1);
//     //console.log(elem[elemObj]);
//     //console.log(typeof(elem[elemObj]));
//     rowTable
//       .querySelector(".item__level1")
//       .querySelector(".item__titleRow").textContent = elem.title;
//     rowTable
//       .querySelector(".item__level1")
//       .querySelector(".item__numericData").textContent = elem.info1;
//     if (typeof elem[elemObj] == "object") {
//       // если элемент объекта является объектом 2 уровень вложенности
//       //console.log(elem[elemObj])
//       let obj = elem[elemObj]; //для удобства использования запишем элемент являющийся объектом в переменную
//       //console.log(obj.title)

//       //const arrRowsSecondLevel = [];

//       for (let elem in obj) {
//         // console.log(obj.title);
//         // console.log(rowTable);


//         const createRowTableSecond = (elem) => {
//           const rowTableSecond = rowTable.querySelector(".item__level2").cloneNode(true);
//           rowTableSecond.querySelector(".item__titleRow").textContent = obj.title;
//           rowTableSecond.querySelector(".item__numericData").textContent = obj.info1;
//           rowTableSecond.querySelector(".item__addInfo").textContent = obj.info2;

//           return rowTableSecond;
//         }

//         let second = createRowTableSecond(elem);
//         rowTable.appendChild(second);
//         // arrRowsSecondLevel.push(second);
//         // console.log(arrRowsSecondLevel);

//         if (typeof obj[elem] == "object") {
//           // если элемент объекта является объектом 3 уровень вложенности
//           //console.log(obj[elem]);
//           let obj2 = obj[elem];
//           for (let elem in obj2) {
//             //console.log(obj2.info1);
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__titleRow").textContent = obj2.title;
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__numericData").textContent = obj2.info1;
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__addInfo").textContent = obj2.info2;
//             rowTable
//               .querySelector(".item__level3")
//               .querySelector(".item__addInfo--strong").textContent =
//               obj2.info3;
//           }
//         }
//       }
//     }
//   }

//   return rowTable;
// };

const createRowTable = (elem) => {
  const rowTableTemplate = document
    .querySelector("#itemTable")
    .content.querySelector(".location__item");
  const rowTable = rowTableTemplate.cloneNode(true);
  rowTable
    .querySelector(".item__level1")
    .querySelector(".item__titleRow").textContent = elem.title;
  rowTable
    .querySelector(".item__level1")
    .querySelector(".item__numericData").textContent = elem.info1;
  for (let elemObj in elem) {
    //перебираем элементы в объекте 1 уровень вложенности
    console.log(elem.title);
    //console.log(elem.info1);
    //console.log(elem[elemObj]);
    //console.log(typeof(elem[elemObj]));
    // rowTable
    //   .querySelector(".item__level1")
    //   .querySelector(".item__titleRow").textContent = elem.title;
    // rowTable
    //   .querySelector(".item__level1")
    //   .querySelector(".item__numericData").textContent = elem.info1;
    if (typeof elem[elemObj] == "object") {
      // если элемент объекта является объектом 2 уровень вложенности
      console.log(elem[elemObj])
      let obj = elem[elemObj]; //для удобства использования запишем элемент являющийся объектом в переменную
      //console.log(obj.title)
      for (let elem in obj) {
        //console.log(obj.title);
        rowTable
          .querySelector(".item__level2")
          .querySelector(".item__titleRow").textContent = obj.title;
        rowTable
          .querySelector(".item__level2")
          .querySelector(".item__numericData").textContent = obj.info1;
        rowTable
          .querySelector(".item__level2")
          .querySelector(".item__addInfo").textContent = obj.info2;
        if (typeof obj[elem] == "object") {
          // если элемент объекта является объектом 3 уровень вложенности
          //console.log(obj[elem]);
          let obj2 = obj[elem];
          for (let elem in obj2) {
            //console.log(obj2.info1);
            rowTable
              .querySelector(".item__level3")
              .querySelector(".item__titleRow").textContent = obj2.title;
            rowTable
              .querySelector(".item__level3")
              .querySelector(".item__numericData").textContent = obj2.info1;
            rowTable
              .querySelector(".item__level3")
              .querySelector(".item__addInfo").textContent = obj2.info2;
            rowTable
              .querySelector(".item__level3")
              .querySelector(".item__addInfo--strong").textContent =
              obj2.info3;
          }
        }
      }
    }
  }

  return rowTable;
};

const rowsTable = [];

dataBase.forEach(element => {
  let elem = createRowTable(element)
  rowsTable.push(elem);
});

//console.log(rowTable)
//console.log(document.querySelector("#itemTable"));

const table = document.querySelector('.location__list');
//table.appendChild(rowTable[0]);

rowsTable.forEach(elem => {
  table.appendChild(elem);
})
