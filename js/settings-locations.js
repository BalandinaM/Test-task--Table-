const dataForTableSettings = [
  {
    name: "Название",
    sort: 500,
    id: 1001,
    typeField: "Строка",
    showTable: true,
    required: true,
    delete: true,
  },
  {
    name: "Цена",
    sort: 510,
    id: 1002,
    typeField: "Число",
    showTable: false,
    required: true,
    delete: true,
  },
  {
    name: "МОЛ",
    sort: 520,
    id: 1003,
    typeField: "Справочник",
    showTable: false,
    required: true,
    delete: false,
  },
  {
    name: "Фото",
    sort: 530,
    id: 1004,
    typeField: "Файл",
    showTable: true,
    required: true,
    delete: false,
  },
  {
    name: "Цвет",
    sort: 540,
    id: 1005,
    typeField: "Строка",
    showTable: true,
    required: true,
    delete: false,
  },
  {
    name: "Локация",
    sort: 550,
    id: 1006,
    typeField: "Справочник",
    showTable: true,
    required: true,
    delete: false,
  },
  {
    name: "Количество",
    sort: 560,
    id: 1007,
    typeField: "Число",
    showTable: true,
    required: true,
    delete: false,
  },
  {
    name: "Описание",
    sort: 570,
    id: 1008,
    typeField: "Текст",
    showTable: true,
    required: true,
    delete: false,
  },
  {
    name: "Количество",
    sort: 580,
    id: 1009,
    typeField: "Число",
    showTable: true,
    required: true,
    delete: false,
  },
]



const buttonSettings = document.querySelector('.nav__link--settings');
const workSpace = document.querySelector('.main__workspace');
const headerWorkSpace = workSpace.querySelector('.workspace__header');
const bodyWorkSpace = workSpace.querySelector('.workspace__body');

const headerSettingsTemplate = document.querySelector("#settings").content.querySelector('.settings__header');
const headerSettings = headerSettingsTemplate.cloneNode(true);

const infoBlockFooter = document.querySelector('.footer__info');

buttonSettings.addEventListener('click', (e) => {
  e.preventDefault();
  headerWorkSpace.append(headerSettings);
  infoBlockFooter.style.display = 'none';
})


const listAreaSettings = headerSettings.querySelectorAll('.nav-list__link');

const removeClass = () => {
  listAreaSettings.forEach((elem) => {
    elem.classList.remove('nav-list__link--current');
  })
}

const clearWorkSpace = () => {
  bodyWorkSpace.innerHTML = '';
}

const createRowTable = () => {
  let arr = [];

  dataForTableSettings.forEach((elem) => {
    const rowTableTemplate = document
      .querySelector("#tableRow")
      .content.querySelector(".table__row");
    const rowTable = rowTableTemplate.cloneNode(true);
    rowTable.querySelector(".row__cell--name").textContent = elem.name;
    rowTable.querySelector(".row__cell--sort input").value = elem.sort;
    rowTable.querySelector(".row__cell--id").textContent = elem.id;
    rowTable.querySelector(".row__cell--typeField").textContent = elem.typeField;

    elem.showTable == true ?
    rowTable.querySelector('.row__cell--showTable input').checked = true :
    rowTable.querySelector('.row__cell--showTable input').checked = false;

    elem.required == true ?
    rowTable.querySelector('.row__cell--required input').checked = true :
    rowTable.querySelector('.row__cell--required input').checked = false;

    elem.delete == true ?
    rowTable.querySelector('.row__cell--delete input').checked = true :
    rowTable.querySelector('.row__cell--delete input').checked = false;

    arr.push(rowTable);
  });

  return arr;
};

const arrRowsTable = createRowTable();

const showSetiingsLocations = () => {
  const settingsLocationsTemplate = document.querySelector('#settingsLocations').content.querySelector('.settingFieldsTable');
  const settingsLocations = settingsLocationsTemplate.cloneNode(true);
  headerWorkSpace.querySelector('h2.settings__title span').textContent = ' / Локации';
  bodyWorkSpace.append(settingsLocations);

  const buttonsWrapTemplate = document.querySelector('#settingsButtons').content.querySelector('.settings__wrap-buttons');
  const buttonsWrap = buttonsWrapTemplate.cloneNode(true);
  document.querySelector('.footer').insertBefore(buttonsWrap, document.querySelector('.footer__documentation'));


  const bodyTable = settingsLocations.querySelector('.settingFieldsTable__table').querySelector('.table__body');
  arrRowsTable.forEach((elem) => {
    bodyTable.append(elem);
  })
}


listAreaSettings.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    clearWorkSpace();
    removeClass();

    elem.classList.add('nav-list__link--current');
    if (elem.id == 'settingProperty') {
      // console.log('settingProperty')
    }

    if (elem.id == 'settingInventory') {
      // console.log('settingProperty')
    }

    if (elem.id == 'settingStaff') {
      // console.log('settingProperty')
    }

    if (elem.id == 'settingLocation') {
      console.log('settingLocation');
      showSetiingsLocations();
    }

    if (elem.id == 'settingNotifications') {
      // console.log('settingProperty')
    }

    if (elem.id == 'settingReferences') {
      // console.log('settingProperty')
    }

    if (elem.id == 'settingUser') {
      // console.log('settingProperty')
    }
  })
})
