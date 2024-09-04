const buttonSettings = document.querySelector('.nav__link--settings');
const workSpace = document.querySelector('.main__workspace');
const headerWorkSpace = workSpace.querySelector('.workspace__header');
const bodyWorkSpace = workSpace.querySelector('.workspace__body');

const headerSettingsTemplate = document.querySelector("#settings").content.querySelector('.settings__header');
const headerSettings = headerSettingsTemplate.cloneNode(true);

buttonSettings.addEventListener('click', (e) => {
  e.preventDefault();
  headerWorkSpace.append(headerSettings);
})


const listAreaSettings = headerSettings.querySelectorAll('.nav-list__link');
console.log(listAreaSettings);

const removeClass = () => {
  listAreaSettings.forEach((elem) => {
    elem.classList.remove('nav-list__link--current');
  })
}

const clearWorkSpace = () => {
  bodyWorkSpace.innerHTML = '';
}

const showSetiingsLocations = () => {
  const settingsLocationsTemplate = document.querySelector('#settingsLocations').content.querySelector('.settingFieldsTable');
  const settingsLocations = settingsLocationsTemplate.cloneNode(true);
  headerWorkSpace.querySelector('h2.settings__title span').textContent = ' / Локации';
  bodyWorkSpace.append(settingsLocations);
}



listAreaSettings.forEach((elem) => {
  //console.log(elem.id);
  elem.addEventListener('click', (e) => {
    e.preventDefault();
    clearWorkSpace();
    removeClass();

    //e.stopPropagation();
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
