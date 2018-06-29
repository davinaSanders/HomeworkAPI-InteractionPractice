const PubSub = require('../helpers/pub_sub.js');


const InputView = function (peopleContainer, placesContainer, speciesContainer) {
  this.peopleContainer = peopleContainer;
  this.placesContainer = placesContainer;
  this.speciesContainer = speciesContainer;
};


InputView.prototype.bindEventsInput = function () {

  PubSub.subscribe("Worlds: all-ghibli-people-ready", (evt) => {
    this.generateDropDown(evt.detail, this.peopleContainer);
  });

  PubSub.subscribe("Worlds: all-ghibli-places-ready", (evt) => {
    this.generateDropDown(evt.detail, this.placesContainer);
  });

  PubSub.subscribe("Worlds: all-ghibli-species-ready", (evt) => {
    this.generateDropDown(evt.detail, this.speciesContainer);
  });

  //listeners

  this.peopleContainer.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('InputView:select-person', selectedIndex);
  });

  this.placesContainer.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('InputView:select-place', selectedIndex);
  });

  this.speciesContainer.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('InputView:select-creature', selectedIndex);
  });

};

InputView.prototype.generateDropDown = function (ghFeatures, container) {
      ghFeatures.forEach((ghFeature, index) => {
      const option = document.createElement("option");
      option.textContent = ghFeature.name;
      option.value = index;
      container.appendChild(option);
    });

};

module.exports = InputView;
