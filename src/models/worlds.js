const Request = require("../helpers/request.js");
const PubSub = require("../helpers/pub_sub.js");


const Worlds = function(){
  this.movies = [];
  this.people = [];
  this.places = [];
  this.species = [];
};

Worlds.prototype.getDataFilms = function () {
  const request = new Request("https://ghibliapi.herokuapp.com/films");
  request.get((data) => {
    this.movies = data;
    console.log(this.movies);
    PubSub.publish("Worlds: all-ghibli-films-ready", this.movies);
  });
};

Worlds.prototype.getDataPeople = function () {
  const request = new Request("https://ghibliapi.herokuapp.com/people");
  request.get((data) => {
    this.people = data;
    console.log(this.people);
    PubSub.publish("Worlds: all-ghibli-people-ready", this.people);
  });

};

  Worlds.prototype.getDataPlaces = function () {
    const request = new Request("https://ghibliapi.herokuapp.com/locations");
    request.get((data) => {
      this.places = data;
      console.log(this.places);
      PubSub.publish("Worlds: all-ghibli-places-ready", this.places);
    });
};

Worlds.prototype.getDataSpecies = function () {
  const request = new Request("https://ghibliapi.herokuapp.com/species");
  request.get((data) => {
    this.species = data;
    console.log(this.species);
    PubSub.publish("Worlds: all-ghibli-species-ready", this.species);
  });
};

Worlds.prototype.getPerson = function () {
  PubSub.subscribe('InputView:select-person', (evt) => {
    console.log(evt.detail);
  const selectedIndex = evt.detail;
    console.log("hello");
  const selectedPerson = this.people[selectedIndex];
  PubSub.publish("Worlds: ghibli-person-ready", selectedPerson)
});

};

Worlds.prototype.getPlace = function () {
  PubSub.subscribe('InputView:select-place', (evt) => {
  const selectedIndex = evt.detail;
  const selectedPlace = this.places[selectedIndex];
  PubSub.publish("Worlds: ghibli-place-ready", selectedPlace)
});

};


Worlds.prototype.getCreature = function () {
  PubSub.subscribe('InputView:select-creature', (evt) => {
  const selectedIndex = evt.detail;
  const selectedCreature = this.species[selectedIndex];
  PubSub.publish("Worlds: ghibli-creature-ready", selectedCreature)
});

};

module.exports = Worlds;
