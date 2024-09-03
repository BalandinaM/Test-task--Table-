const buttonSettings = document.querySelector('.nav__link-button');
const workSpace = document.querySelector('.main__workspace');

const tableSettingsTemplate = document.querySelector("#settingsLocations").content.querySelector('.settings__title');
const tableSettings = tableSettingsTemplate.cloneNode(true);

buttonSettings.addEventListener('click', () => {
  workSpace.append(tableSettings);
})


