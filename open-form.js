const buttonCreateLocation = document.querySelector('.location__button');
const body = document.querySelector('body');
const formCreateLocationTemplate = document.querySelector('#createLocation').content.querySelector('.wrap-formEditionLocations');
const formCreateLocation = formCreateLocationTemplate.cloneNode(true);

buttonCreateLocation.addEventListener('click', () => {
  body.append(formCreateLocation);
  const buttonCreateLocation = formCreateLocation.querySelector('.form-createLocation__buttonCreate');
  const buttonResetForm = formCreateLocation.querySelector('.form-createLocation__buttonReset');

  buttonCreateLocation.addEventListener('click', (event) => {
    event.preventDefault();
    formCreateLocation.remove();
  });

  buttonResetForm.addEventListener('click', () => {
    formCreateLocation.remove();
  })
})

const formChangeLocationTemplate = document.querySelector('#changeLocation').content.querySelector('.wrap-formEditionLocations');
const formChangeLocation = formChangeLocationTemplate.cloneNode(true);
const buttonsChangeLocation = document.querySelectorAll('.editionTools__button--edition');
console.log(buttonsChangeLocation);


for (let button of buttonsChangeLocation) {
  button.addEventListener("click", () => {
    body.append(formChangeLocation);
    const buttonSaveLocation = formChangeLocation.querySelector('.form-changeLocation__buttonSave');
    const buttonResetForm = formChangeLocation.querySelector('.form-changeLocation__buttonReset');

    buttonSaveLocation.addEventListener('click', (event) => {
      event.preventDefault();
      formChangeLocation.remove();
    });

    buttonResetForm.addEventListener('click', () => {
      formChangeLocation.remove();
    })
  });
}
