/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Worlds = __webpack_require__(/*! ./models/worlds.js */ \"./src/models/worlds.js\");\nconst InputView = __webpack_require__(/*! ./views/input_view.js */ \"./src/views/input_view.js\");\nconst ResultView = __webpack_require__(/*! ./views/display_view.js */ \"./src/views/display_view.js\");\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const peopleSelect = document.querySelector('#people-dropdown');\n  const placesSelect = document.querySelector('#places-dropdown');\n  const speciesSelect = document.querySelector(\"#species-dropdown\");\n  const inputView = new InputView(peopleSelect, placesSelect, speciesSelect);\n  inputView.bindEventsInput();\n\n\n  const personResult = document.querySelector('#person-result');\n  const locationResult = document.querySelector('#location-result');\n  const creatureResult = document.querySelector('#creature-result');\n  const resultView = new ResultView(personResult, locationResult, creatureResult);\n  resultView.bindEventsResult();\n\n  const worlds = new Worlds();\n    worlds.getPerson();\n    worlds.getPlace();\n    worlds.getCreature();\n    worlds.getDataFilms();\n    worlds.getDataPeople();\n    worlds.getDataPlaces();\n    worlds.getDataSpecies();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url\n}\n\nRequest.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.setRequestHeader('Accept', 'application/json');\n  xhr.addEventListener('load', function() {\n    if(this.status !== 200){\n      console.err(xhr.status);\n      return;\n    }\n    const data = JSON.parse(xhr.responseText);\n    onComplete(data);\n  });\n  xhr.send();\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/worlds.js":
/*!******************************!*\
  !*** ./src/models/worlds.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\nconst Worlds = function(){\n  this.movies = [];\n  this.people = [];\n  this.places = [];\n  this.species = [];\n};\n\nWorlds.prototype.getDataFilms = function () {\n  const request = new Request(\"https://ghibliapi.herokuapp.com/films\");\n  request.get((data) => {\n    this.movies = data;\n    console.log(this.movies);\n    PubSub.publish(\"Worlds: all-ghibli-films-ready\", this.movies);\n  });\n};\n\nWorlds.prototype.getDataPeople = function () {\n  const request = new Request(\"https://ghibliapi.herokuapp.com/people\");\n  request.get((data) => {\n    this.people = data;\n    console.log(this.people);\n    PubSub.publish(\"Worlds: all-ghibli-people-ready\", this.people);\n  });\n\n};\n\n  Worlds.prototype.getDataPlaces = function () {\n    const request = new Request(\"https://ghibliapi.herokuapp.com/locations\");\n    request.get((data) => {\n      this.places = data;\n      console.log(this.places);\n      PubSub.publish(\"Worlds: all-ghibli-places-ready\", this.places);\n    });\n};\n\nWorlds.prototype.getDataSpecies = function () {\n  const request = new Request(\"https://ghibliapi.herokuapp.com/species\");\n  request.get((data) => {\n    this.species = data;\n    console.log(this.species);\n    PubSub.publish(\"Worlds: all-ghibli-species-ready\", this.species);\n  });\n};\n\nWorlds.prototype.getPerson = function () {\n  PubSub.subscribe('InputView:select-person', (evt) => {\n    console.log(evt.detail);\n  const selectedIndex = evt.detail;\n    console.log(\"hello\");\n  const selectedPerson = this.people[selectedIndex];\n  PubSub.publish(\"Worlds: ghibli-person-ready\", selectedPerson)\n});\n\n};\n\nWorlds.prototype.getPlace = function () {\n  PubSub.subscribe('InputView:select-place', (evt) => {\n  const selectedIndex = evt.detail;\n  const selectedPlace = this.places[selectedIndex];\n  PubSub.publish(\"Worlds: ghibli-place-ready\", selectedPlace)\n});\n\n};\n\n\nWorlds.prototype.getCreature = function () {\n  PubSub.subscribe('InputView:select-creature', (evt) => {\n  const selectedIndex = evt.detail;\n  const selectedCreature = this.species[selectedIndex];\n  PubSub.publish(\"Worlds: ghibli-creature-ready\", selectedCreature)\n});\n\n};\n\nmodule.exports = Worlds;\n\n\n//# sourceURL=webpack:///./src/models/worlds.js?");

/***/ }),

/***/ "./src/views/display_view.js":
/*!***********************************!*\
  !*** ./src/views/display_view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst ResultView = function (peopleContainer, placesContainer, speciesContainer) {\n  this.peopleContainer = peopleContainer;\n  this.placesContainer = placesContainer;\n  this.speciesContainer = speciesContainer;\n};\n\nResultView.prototype.bindEventsResult = function () {\n\n  PubSub.subscribe(\"Worlds: ghibli-person-ready\", (evt) => {\n    console.log(\"hello\");\n    this.generatePersonDetails(evt.detail, this.peopleContainer);\n\n  });\n\n  PubSub.subscribe(\"Worlds: ghibli-place-ready\", (evt) => {\n    this.generateLocationDetails(evt.detail, this.placesContainer);\n\n  });\n\n  PubSub.subscribe(\"Worlds: ghibli-creature-ready\", (evt) => {\n    this.generateCreatureDetails(evt.detail, this.speciesContainer);\n  });\n\n};\n\nResultView.prototype.generatePersonDetails = function (person, container) {\n  console.log(person);\n\n  const unorderedList = this.createElement('ul');\n  container.appendChild(unorderedList);\n\n  const listHeaderName = this.createElement('lh', person.name);\n  unorderedList.appendChild(listHeaderName);\n\n  const listItemGender = this.createElement('li', person.gender);\n  console.log(listItemGender);\n  unorderedList.appendChild(listItemGender);\n\n  const listItemAge = this.createElement('li', person.age);\n  unorderedList.appendChild(listItemAge);\n\n  const listItemEyeColour = this.createElement('li', person.eye_color);\n  unorderedList.appendChild(listItemEyeColour);\n\n};\n\n\nResultView.prototype.generateLocationDetails = function (place, container) {\n  console.log(place);\n\n  const unorderedList = this.createElement('ul');\n  container.appendChild(unorderedList);\n\n  const listHeaderName = this.createElement('lh', place.name);\n  unorderedList.appendChild(listHeaderName);\n\n  const listItemClimate = this.createElement('li', place.climate);\n  unorderedList.appendChild(listItemClimate);\n\n  const listItemTerrain = this.createElement('li', place.terrain);\n  unorderedList.appendChild(listItemTerrain);\n\n  const listItemWater = this.createElement('li', place.surface_water);\n  unorderedList.appendChild(listItemWater);\n\n};\n\n\nResultView.prototype.generateCreatureDetails = function (creature, container) {\n  console.log(creature);\n\n  const unorderedList = this.createElement('ul');\n  container.appendChild(unorderedList);\n\n  const listHeaderName = this.createElement('lh', creature.name);\n  unorderedList.appendChild(listHeaderName);\n\n  const listItemClassification = this.createElement('li', creature.classification);\n  unorderedList.appendChild(listItemClassification);\n\n  const listItemEye = this.createElement('li', creature.eye_colors);\n  unorderedList.appendChild(listItemEye);\n\n  const listItemHair = this.createElement('li', creature.hair_colors);\n  unorderedList.appendChild(listItemHair);\n\n};\n\nResultView.prototype.createElement = function (elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n};\n\nmodule.exports = ResultView;\n\n\n//# sourceURL=webpack:///./src/views/display_view.js?");

/***/ }),

/***/ "./src/views/input_view.js":
/*!*********************************!*\
  !*** ./src/views/input_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\nconst InputView = function (peopleContainer, placesContainer, speciesContainer) {\n  this.peopleContainer = peopleContainer;\n  this.placesContainer = placesContainer;\n  this.speciesContainer = speciesContainer;\n};\n\n\nInputView.prototype.bindEventsInput = function () {\n\n  PubSub.subscribe(\"Worlds: all-ghibli-people-ready\", (evt) => {\n    this.generateDropDown(evt.detail, this.peopleContainer);\n  });\n\n  PubSub.subscribe(\"Worlds: all-ghibli-places-ready\", (evt) => {\n    this.generateDropDown(evt.detail, this.placesContainer);\n  });\n\n  PubSub.subscribe(\"Worlds: all-ghibli-species-ready\", (evt) => {\n    this.generateDropDown(evt.detail, this.speciesContainer);\n  });\n\n  //listeners\n\n  this.peopleContainer.addEventListener('change', (evt) => {\n  const selectedIndex = evt.target.value;\n  PubSub.publish('InputView:select-person', selectedIndex);\n  });\n\n  this.placesContainer.addEventListener('change', (evt) => {\n  const selectedIndex = evt.target.value;\n  PubSub.publish('InputView:select-place', selectedIndex);\n  });\n\n  this.speciesContainer.addEventListener('change', (evt) => {\n  const selectedIndex = evt.target.value;\n  PubSub.publish('InputView:select-creature', selectedIndex);\n  });\n\n};\n\nInputView.prototype.generateDropDown = function (ghFeatures, container) {\n      ghFeatures.forEach((ghFeature, index) => {\n      const option = document.createElement(\"option\");\n      option.textContent = ghFeature.name;\n      option.value = index;\n      container.appendChild(option);\n    });\n\n};\n\nmodule.exports = InputView;\n\n\n//# sourceURL=webpack:///./src/views/input_view.js?");

/***/ })

/******/ });