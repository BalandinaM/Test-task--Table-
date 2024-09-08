const buttonCreateLocation = document.querySelector('.location__button');
const body = document.querySelector('body');
const formCreateLocationTemplate = document.querySelector('#createLocation').content.querySelector('.wrap-formEditionLocations');
const formCreateLocation = formCreateLocationTemplate.cloneNode(true);

buttonCreateLocation.addEventListener('click', () => {
  body.append(formCreateLocation);
  const buttonFormCreateLocation = formCreateLocation.querySelector('.form-createLocation__buttonCreate');
  const buttonResetForm = formCreateLocation.querySelector('.form-createLocation__buttonReset');

  buttonFormCreateLocation.addEventListener('click', (e) => {
    e.preventDefault();
    formCreateLocation.remove();
  });

  buttonResetForm.addEventListener('click', () => {
    formCreateLocation.remove();
  })
})

const formChangeLocationTemplate = document.querySelector('#changeLocation').content.querySelector('.wrap-formEditionLocations');
const formChangeLocation = formChangeLocationTemplate.cloneNode(true);
const buttonsChangeLocation = document.querySelectorAll('.editionTools__button--edition');

for (let button of buttonsChangeLocation) {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    body.append(formChangeLocation);
    const buttonSaveLocation = formChangeLocation.querySelector('.form-changeLocation__buttonSave');
    const buttonResetForm = formChangeLocation.querySelector('.form-changeLocation__buttonReset');

    buttonSaveLocation.addEventListener('click', (e) => {
      e.preventDefault();
      formChangeLocation.remove();
    });

    buttonResetForm.addEventListener('click', () => {
      formChangeLocation.remove();
    })
  });
}
