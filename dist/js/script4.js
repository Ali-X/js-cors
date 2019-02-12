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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script4.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script4.js":
/*!***************************!*\
  !*** ./src/js/script4.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function () {\n  var table = createTable();\n  fetch('https://tanuhaua.github.io/datas-file-json/github_users.json').then(function (response) {\n    if (response.status === 200) {\n      return response.json();\n    }\n  }).then(function (jsonArr) {\n    jsonArr.forEach(function (elem) {\n      fetch(\"https://api.github.com/users/\".concat(elem['githubName'])).then(function (response) {\n        if (response.status === 200) {\n          return response.json();\n        }\n      }).then(function (infoObj) {\n        var row = createDataRow(elem, infoObj);\n        table.appendChild(row);\n      });\n    });\n  });\n\n  function createTable() {\n    var table = document.createElement('table');\n    table.classList.add('table');\n    var row = document.createElement('tr');\n    row.classList.add('table__header-row');\n    var nameHeader = document.createElement('th');\n    nameHeader.innerText = 'Name';\n    var imageHeader = document.createElement('th');\n    imageHeader.innerText = 'Image';\n    row.appendChild(nameHeader);\n    row.appendChild(imageHeader);\n    table.appendChild(row);\n    document.body.appendChild(table);\n    return table;\n  }\n\n  function createDataRow(elem, infoObj) {\n    var row = document.createElement('tr');\n    var nameCell = document.createElement('td');\n    nameCell.classList.add('table__name-data');\n    nameCell.innerText = elem['fullName'];\n    var imageCell = document.createElement('td');\n    imageCell.classList.add('table__image-data');\n    var image = document.createElement('img');\n    image.classList.add('table__image');\n    image.src = infoObj['avatar_url'];\n    imageCell.appendChild(image);\n    row.appendChild(nameCell);\n    row.appendChild(imageCell);\n    return row;\n  }\n})();\n\n//# sourceURL=webpack:///./src/js/script4.js?");

/***/ })

/******/ });