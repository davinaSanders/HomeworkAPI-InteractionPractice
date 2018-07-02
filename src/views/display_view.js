const PubSub = require("../helpers/pub_sub.js");

const ResultView = function (peopleContainer, placesContainer, speciesContainer) {
  this.peopleContainer = peopleContainer;
  this.placesContainer = placesContainer;
  this.speciesContainer = speciesContainer;
};

ResultView.prototype.bindEventsResult = function () {

  PubSub.subscribe("Worlds: ghibli-person-ready", (evt) => {
    console.log("hello");
    this.generatePersonDetails(evt.detail, this.peopleContainer);

  });

  PubSub.subscribe("Worlds: ghibli-place-ready", (evt) => {
    this.generateLocationDetails(evt.detail, this.placesContainer);

  });

  PubSub.subscribe("Worlds: ghibli-creature-ready", (evt) => {
    this.generateCreatureDetails(evt.detail, this.speciesContainer);
  });

};

ResultView.prototype.generatePersonDetails = function (person, container) {
  console.log(person);

  const unorderedList = this.createElement('ul');
  unorderedList.style = "list-style-type:none";
  container.appendChild(unorderedList);

  const listHeaderName = this.createElement('lh', person.name);
  unorderedList.appendChild(listHeaderName);

  const listItemGender = this.createElement('li', person.gender);
  console.log(listItemGender);
  unorderedList.appendChild(listItemGender);

  const listItemAge = this.createElement('li', person.age);
  unorderedList.appendChild(listItemAge);

  const listItemEyeColour = this.createElement('li', person.eye_color);
  unorderedList.appendChild(listItemEyeColour);

};


ResultView.prototype.generateLocationDetails = function (place, container) {
  console.log(place);

  const unorderedList = this.createElement('ul');
  unorderedList.style = "list-style-type:none";
  container.appendChild(unorderedList);

  const listHeaderName = this.createElement('lh', place.name);
  unorderedList.appendChild(listHeaderName);

  const listItemClimate = this.createElement('li', place.climate);
  unorderedList.appendChild(listItemClimate);

  const listItemTerrain = this.createElement('li', place.terrain);
  unorderedList.appendChild(listItemTerrain);

  const listItemWater = this.createElement('li', place.surface_water);
  unorderedList.appendChild(listItemWater);

};


ResultView.prototype.generateCreatureDetails = function (creature, container) {
  console.log(creature);

  const unorderedList = this.createElement('ul');
  unorderedList.style = "list-style-type:none";
  container.appendChild(unorderedList);

  const listHeaderName = this.createElement('lh', creature.name);
  unorderedList.appendChild(listHeaderName);

  const listItemClassification = this.createElement('li', creature.classification);
  unorderedList.appendChild(listItemClassification);

  const listItemEye = this.createElement('li', creature.eye_colors);
  unorderedList.appendChild(listItemEye);

  const listItemHair = this.createElement('li', creature.hair_colors);
  unorderedList.appendChild(listItemHair);

};

ResultView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = ResultView;
