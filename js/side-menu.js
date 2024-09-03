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

// const buttonFirstLevel = document.querySelector('.level1__button');
// const buttonsSecondLevel = document.querySelectorAll('.level2__button');
// const rowsSecondLevel = document.querySelectorAll('.item__level2');
// const rowsThirdLevel = document.querySelectorAll('.item__level3');
// const editionTools = document.querySelector('.item__editionTools');


// buttonFirstLevel.addEventListener("click", (e) => {
//   console.log(e.target);
//   editionTools.classList.toggle("item__editionTools--hidden");
//   buttonFirstLevel.classList.toggle("item__button--collapsList"); //сменить картинку кнопки 1го уровня

//   for (let elem of rowsSecondLevel) {
//     //убрать класс с низлежащих уровней
//     elem.classList.toggle("item__row--hidden");
//   }



//   for (let elem of rowsThirdLevel) {
//     if (!elem.classList.contains("item__row--hidden")) {
//       //при сворачивании всего первого уровня, свернуть и самый глубокий
//       elem.classList.add("item__row--hidden");
//     }
//   }

//   for (elem of buttonsSecondLevel) {
//     if (elem.classList.contains('item__button--collapsList'))
//     elem.classList.remove("item__button--collapsList"); //и поменять картинку на кнопке второго уровня
//   }
// });

// for (let elem of buttonsSecondLevel) {
//   elem.addEventListener('click', (e) => {
//     console.log(e.target);
//     for (let elem of rowsThirdLevel) {
//       elem.classList.toggle('item__row--hidden');
//     }
//     elem.classList.toggle('item__button--collapsList');
//   });
// }

// const locationItem = document.querySelector('.location__item');
// //const array = locationItem.querySelectorAll('.')

const buttonsFirstLevel = document.querySelectorAll(".level1__button");
const itemsFirstLevel = document.querySelectorAll(".location__item");

for (let buttonFirstLevel of buttonsFirstLevel) {
  buttonFirstLevel.addEventListener("click", () => {
    buttonFirstLevel.classList.toggle("item__button--collapsList");
    // if (buttonFirstLevel.classList.contains("item__button--collapsList")) {
    //   buttonFirstLevel.classList.remove("item__button--collapsList");
    // } else {
    //   buttonFirstLevel.classList.add("item__button--collapsList");
    // }

    // if (!buttonFirstLevel.classList.contains("item__button--collapsList")) {
    //   for (let itemFirstLevel of itemsFirstLevel) {
    //     let itemsSecondLevel = itemFirstLevel.querySelectorAll(".item__level2");
    //     for (let itemSecondLevel of itemsSecondLevel) {
    //       itemSecondLevel.classList.add("item__row--hidden");

    //       let buttonSecondLevel = itemSecondLevel.querySelector(".level2__button");
    //       buttonSecondLevel.classList.toggle('item__button--collapsList');
    //     }

    //   }
    // }
  });
}

for (let itemFirstLevel of itemsFirstLevel) {
  itemFirstLevel.addEventListener("click", () => {
    let editionTools = itemFirstLevel.querySelector(".item__editionTools");
    editionTools.classList.toggle("item__editionTools--hidden");

    let itemsSecondLevel = itemFirstLevel.querySelectorAll(".item__level2");

    for (let itemSecondLevel of itemsSecondLevel) {
      itemSecondLevel.classList.toggle("item__row--hidden");
      let buttonSecondLevel = itemSecondLevel.querySelector(".level2__button");

      buttonSecondLevel.addEventListener("click", () => {
        buttonSecondLevel.classList.toggle("item__button--collapsList");

        itemSecondLevel.addEventListener("click", (e) => {
          e.stopPropagation();
        });

        let itemThirdLevel = itemSecondLevel.querySelector(".item__level3");
        itemThirdLevel.classList.toggle("item__row--hidden");
      });
    }
  });
}


//хреновенько работает


// for (let buttonFirstLevel of buttonsFirstLevel) {
//   buttonFirstLevel.addEventListener("click", () => {
//     if (buttonFirstLevel.classList.contains("item__button--collapsList")) {
//       for (let itemFirstLevel of itemsFirstLevel) {
//         let itemsSecondLevel = itemFirstLevel.querySelectorAll(".item__level2");
//         for (let itemSecondLevel of itemsSecondLevel) {
//           itemSecondLevel.classList.add("item__row--hidden");

//           let buttonSecondLevel =
//             itemSecondLevel.querySelector(".level2__button");
//           buttonSecondLevel.classList.remove("item__button--collapsList");

//           let itemThirdLevel = itemSecondLevel.querySelector(".item__level3");
//           itemThirdLevel.classList.add("item__row--hidden");
//         }
//       }
//     }
//   });
// }


//  = currentSecondLevel.querySelector();
    // console.log(buttonCurrentSecondLevel);
    // let currentThirdLevel = elem.querySelectorAll('.item__level3');

    // for (let elem of currentSecondLevel) {
    //   elem.classList.remove('item__row--hidden');



    //   let buttonsSecondLevel = elem.querySelectorAll('.level2__button');
    //   console.log(buttonsSecondLevel);

    //   for (let elem of buttonsSecondLevel) {
    //     elem.addEventListener('click', () => {
    //       console.log('button second level!');


    //     })
    //   }

    //   for (let elem of currentSecondLevel) {
    //         elem.addEventListener('click', (e) => {


    //           for (let elem of currentThirdLevel) {
    //         elem.classList.toggle('item__row--hidden');
    //       }e.stopPropagation();
    //           console.log('stopPropagation');
    //         })
    //       }

    // }

