const Worlds = require("./models/worlds.js");
const InputView = require("./views/input_view.js");
const ResultView = require("./views/display_view.js");
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const peopleSelect = document.querySelector('#people-dropdown');
  const placesSelect = document.querySelector('#places-dropdown');
  const speciesSelect = document.querySelector("#species-dropdown");
  const inputView = new InputView(peopleSelect, placesSelect, speciesSelect);
  inputView.bindEventsInput();


  const personResult = document.querySelector('#person-result');
  const locationResult = document.querySelector('#location-result');
  const creatureResult = document.querySelector('#creature-result');
  const resultView = new ResultView(personResult, locationResult, creatureResult);
  resultView.bindEventsResult();

  const worlds = new Worlds();
    worlds.getPerson();
    worlds.getPlace();
    worlds.getCreature();
    worlds.getDataFilms();
    worlds.getDataPeople();
    worlds.getDataPlaces();
    worlds.getDataSpecies();
});
