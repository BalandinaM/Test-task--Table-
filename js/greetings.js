const blockGreetingsTemplate = document.querySelector('#greetings').content.querySelector('.wrap-greetings');
const blockGreetings = blockGreetingsTemplate.cloneNode(true);


const body = document.querySelector('body');
body.append(blockGreetings);
const buttonCloseGreetings = blockGreetings.querySelector('.greetings__button');

buttonCloseGreetings.addEventListener('click', () => {
  blockGreetings.remove();
})

// function createOnceFunction() {
//   let hasBeenCalled = false;

//   return function () {
//       if (!hasBeenCalled) {
//         const blockGreetingsTemplate = document.querySelector('#greetings').content.querySelector('.wrap-greetings');
//         const blockGreetings = blockGreetingsTemplate.cloneNode(true);


//         const body = document.querySelector('body');
//         body.append(blockGreetings);
//         const buttonCloseGreetings = blockGreetings.querySelector('.greetings__button');

//         buttonCloseGreetings.addEventListener('click', () => {
//         blockGreetings.remove();
//         })
//           hasBeenCalled = true;
//       } else {
//           console.log('Function can only be called once.');
//       }
//   };
// }

// // Create the once function
// const callOnce = createOnceFunction();

// callOnce();

// window.onload = function () {
//   const blockGreetingsTemplate = document
//     .querySelector("#greetings")
//     .content.querySelector(".wrap-greetings");
//   const blockGreetings = blockGreetingsTemplate.cloneNode(true);

//   const body = document.querySelector("body");
//   body.append(blockGreetings);
//   const buttonCloseGreetings =
//     blockGreetings.querySelector(".greetings__button");

//   buttonCloseGreetings.addEventListener("click", () => {
//     blockGreetings.remove();
//   });
// };
