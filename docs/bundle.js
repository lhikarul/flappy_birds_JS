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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var _js_base_ResourceLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/base/ResourceLoader */ \"./src/js/base/ResourceLoader.js\");\n/* harmony import */ var _js_runtime_Director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/runtime/Director */ \"./src/js/runtime/Director.js\");\n/* harmony import */ var _js_runtime_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/runtime/Background */ \"./src/js/runtime/Background.js\");\n/* harmony import */ var _js_base_DataStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/base/DataStore */ \"./src/js/base/DataStore.js\");\n/* harmony import */ var _js_runtime_Land__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/runtime/Land */ \"./src/js/runtime/Land.js\");\n/* harmony import */ var _js_player_Birds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/player/Birds */ \"./src/js/player/Birds.js\");\n/* harmony import */ var _js_player_StartButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/player/StartButton */ \"./src/js/player/StartButton.js\");\n/* harmony import */ var _js_player_Score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/player/Score */ \"./src/js/player/Score.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 初始化整個遊戲,作為遊戲開始的入口\r\nclass Main {\r\n    constructor() {\r\n        this.canvas = document.getElementById('game_canvas');\r\n        this.ctx = this.canvas.getContext('2d');\r\n        this.dataStore = _js_base_DataStore__WEBPACK_IMPORTED_MODULE_3__[\"DataStore\"].getInstance();\r\n        this.director = _js_runtime_Director__WEBPACK_IMPORTED_MODULE_1__[\"Director\"].getInstance();\r\n        const loader = _js_base_ResourceLoader__WEBPACK_IMPORTED_MODULE_0__[\"ResourceLoader\"].create();\r\n\r\n        loader.onLoaded(this.onResourceFirstLoaded.bind(this))\r\n\r\n    }\r\n    onResourceFirstLoaded(map) {\r\n        this.dataStore.ctx = this.ctx;\r\n        this.dataStore.res = map;\r\n        this.init();\r\n    }\r\n    init () {\r\n        window.innerWidth = 375;\r\n        this.director.isGameOver = false;\r\n       this.dataStore\r\n       .put('background',_js_runtime_Background__WEBPACK_IMPORTED_MODULE_2__[\"Background\"])\r\n       .put('land',_js_runtime_Land__WEBPACK_IMPORTED_MODULE_4__[\"Land\"])\r\n       .put('pencils',[])\r\n       .put('birds',_js_player_Birds__WEBPACK_IMPORTED_MODULE_5__[\"Birds\"])\r\n       .put('startButton',_js_player_StartButton__WEBPACK_IMPORTED_MODULE_6__[\"StartButton\"])\r\n       .put('score',_js_player_Score__WEBPACK_IMPORTED_MODULE_7__[\"Score\"])\r\n       this.registerEvent();\r\n       this.director.createPencil();\r\n       this.director.run();\r\n    }\r\n    registerEvent() {\r\n        this.canvas.addEventListener('click',(e) => {\r\n            e.preventDefault();\r\n            if (this.director.isGameOver) {\r\n                this.init();\r\n            }else {\r\n                this.director.birdsEvent();\r\n            }\r\n        })\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Main.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ \"./src/Main.js\");\n\r\n\r\nnew _Main__WEBPACK_IMPORTED_MODULE_0__[\"Main\"]();\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/image/background.png":
/*!**********************************!*\
  !*** ./src/image/background.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAJYCAMAAACtqHJCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyODdlYzQ3NS1jZjJjLTQ1MTYtOTVmNS1lOTE1NWViMTllNGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTlFMUYzOEFFRkExMTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlFMUYzODlFRkExMTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDc1Y2NhYi0xMWZhLTQwZDYtYmVlMy02Mjc0ZDA2YTA1NjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mjg3ZWM0NzUtY2YyYy00NTE2LTk1ZjUtZTkxNTVlYjE5ZTRl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\");\n\n//# sourceURL=webpack:///./src/image/background.png?");

/***/ }),

/***/ "./src/image/birds.png":
/*!*****************************!*\
  !*** ./src/image/birds.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAtCAMAAABs8PKvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1N0ZERTA1RUQ2QUUxMUUzQkRFNzg4NkNGQUJDNzlCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OUUxRjM5MkVGQTExMUU3QkZFQkM1Qzc0ODFEQkMyRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OUUxRjM5MUVGQTExMUU3QkZFQkM1Qzc0ODFEQkMyRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQxODY5MjA5LTY5ZjctNGQ2ZS05YmZhLWFlNGJlY2Q5ODEzZSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVlMDZhYjQ2LTM4MGUtMTE3Yi1hYmEwLWQyY2VkMzY3NzM3YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptm5iwYAAAASUExURfr6+tfmzNYwAFM4Rv86Af///zMvSfoAAAAGdFJOU///////ALO/pL8AAADgSURBVHja7JfdEoQgCEZV9P1feXNclsoxoG5i5+OibjrDIfEvtRdHghzkIAc5yEFOlaMt+C1xzd9hzFAQOaKyRf+qHuIq1R3GAQWRY6qUWr16PsYMRZHjxpwYi56PMUIx5IjSN6RRf03rkDMxRiiaHOvtnstEsoRyFp0Ru6pAUeRyHmo5n5fHVaK5INOEOFdkmRAvlht6PVSmPSnIA0WR4//t2YxkhMzMfs0q9U/kFnuyfuD0MEOuD6kKhZKbU6mHbjcjraBAweScl5UHjOv2FUION37IQQ5ykINcax8BBgDpYnvvE62gbgAAAABJRU5ErkJggg==\");\n\n//# sourceURL=webpack:///./src/image/birds.png?");

/***/ }),

/***/ "./src/image/land.png":
/*!****************************!*\
  !*** ./src/image/land.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqAAAABwCAMAAAD2QzLxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyY2U5NjEyYy02NGNhLTQ5NGQtODZhNC05NWQ2NGRlYzU3YmIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTlFMUYzOEVFRkExMTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlFMUYzOERFRkExMTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMDhmYTczYy1lOTZjLTQ4YjAtODg2NS1iOWZjNTE4M2YxMGYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0NDJjNDU2Yi0zN2Y1LTExN2ItYWJhMC1kMmNlZDM2NzczN2MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qGRi5AAAAJ1BMVEVhOE7/+sk6mk5XrD5AylY4m0o6nE9QmjpRmzhQnDr/54z/9qc+rFUIB0Z+AAABw0lEQVR42uzby47CMBBFwRDehP//XhZZWUiR4gh8ndTZounxNLXAAwyDJKmykxQcoMoGOs29yqay5Uc3/bDRRi89CqjRXQC1NqMjRwNqdCdArc3owNGAGt0NUGszOm40oEZ3A9TKjPYa1Gij64BamdH+D2q00XVArcxo78UbbfRqoI+rlNvwvEm5Dee3lBugAlQCVIBKgEqAClAJUAEqASoBKkAlQAXo3KWs2SETzmEXbY4CKKCAAgoooIAeD6i0w1v8ONf8T0s4h11sPQqggAIKqF0ACiig0g4uSRKgAlQKAHofi1q/dm56jtEu4o4CKKCAAgoooIDuE6hLktziJUAF6HcBn5uNOYdd/OAogAIKKKCAAgoooJJbvASoAC2KeNsu5Bx2seYogAIKqCfFLgAFFNDaX+vTa3ZRexRAAQXUk2IXgAIKqPTvABWgEqACVAJUAlRdA/XdBbtIOQqggAIKKKCAAnocoJJbvASoAJUAFaASoBKgAlQCVAJUnQL1PVm7SDgKoIACCiiggAJ6LKDScW7xPvVrF5VHARRQQD0pdgEooIBK+7wkSYAKUAlQCVABKgEqQCVAJUDVI1ApuI8AAwAxgJZMoSTsDAAAAABJRU5ErkJggg==\");\n\n//# sourceURL=webpack:///./src/image/land.png?");

/***/ }),

/***/ "./src/image/pie_down.png":
/*!********************************!*\
  !*** ./src/image/pie_down.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAGkCAMAAABJt/YuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNGY3YTY0ZC1hNzcyLTQ4ZmYtYWMyNy05MTU1ZjBmMTNjMjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NENjExNjlFRjg2MTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0NENjExNjhFRjg2MTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDVhNWIzMi0wODY3LTQ3YWMtYWY0NS02NjQ2YmU4ZmFkOTkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkYzA0OTU0Zi0zN2ZkLTExN2ItYWJhMC1kMmNlZDM2NzczN2MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ztLmcAAAAElBMVEVUOEf6/eCb4a1oyIF/0pT////QdwpeAAAABnRSTlP//////wCzv6S/AAAAwElEQVR42uzLSQ6DMBBFQQbn/leOESDaYBMUKZBFvWX/ru7VqMs1t6dRtwRB96M+93s0kzaD2mgjLQa1UEnqDKqjI6kxqIbq5MigI2qTPYP26JyUDCrRZxIZFNE1srH/R9fJym5Gw7AdUy78jLk+rtCTaGVpKZDApgWqoYmlUCALm+9QHaWycVeCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIOhL9BZgAHdaDdhB3LpDAAAAAElFTkSuQmCC\");\n\n//# sourceURL=webpack:///./src/image/pie_down.png?");

/***/ }),

/***/ "./src/image/pie_up.png":
/*!******************************!*\
  !*** ./src/image/pie_up.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAGkCAMAAABJt/YuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNGY3YTY0ZC1hNzcyLTQ4ZmYtYWMyNy05MTU1ZjBmMTNjMjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NENjExNkRFRjg2MTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0NENjExNkNFRjg2MTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDVhNWIzMi0wODY3LTQ3YWMtYWY0NS02NjQ2YmU4ZmFkOTkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkYzA0OTU0Zi0zN2ZkLTExN2ItYWJhMC1kMmNlZDM2NzczN2MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7EzestAAAAElBMVEVUOEf6/eCb4a1oyIF/0pT////QdwpeAAAABnRSTlP//////wCzv6S/AAAAy0lEQVR42uzL0Q6CQAxFwVbl/39ZAyIL7CIYgzGZ+9ieia6LuPS7zXdd7HmOeAgIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgj5EmaXJzJLk+IVqKPsVJAuW0xdao3ytICPL8gv9DuWBnY6OsBj6P0B7WYw1NEN7WEwttEDvWJQltEJbLOYdVEEtFssKqqIai3UDNdCSRa2AmqhkUf9DG2hk0fp+FQ2DoLPRwJq/09BdgAEAsxgN2NsfnGUAAAAASUVORK5CYII=\");\n\n//# sourceURL=webpack:///./src/image/pie_up.png?");

/***/ }),

/***/ "./src/image/start_button.png":
/*!************************************!*\
  !*** ./src/image/start_button.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkRCMDA5MUNFRkE0MTFFN0JGRUJDNUM3NDgxREJDMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkRCMDA5MURFRkE0MTFFN0JGRUJDNUM3NDgxREJDMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2REIwMDkxQUVGQTQxMUU3QkZFQkM1Qzc0ODFEQkMyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2REIwMDkxQkVGQTQxMUU3QkZFQkM1Qzc0ODFEQkMyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlDrqF8AAABCUExURf/+8////v///f/+7f/+7P/+9P/+7///+v//9//+8v///P//9v//+//+8f/+7v/+9f//////+P//+f/+8P/+6////5SMZ68AAAAWdFJOU////////////////////////////wAB0sDkAAABNUlEQVR42sTXyxKDIAwFUAStb602/v+v1mkZa0cgCXdhNq48i6uExGy+GkeTGTZ1Gf9c6FNtkQuUX4AeXR6w0lFzFjD/AJrqDMDQuTRJBAEqGxBQhBkDiKoCBIRhJoA9TAsCkjDTgCBMDmDD5AFyNQikwxQBqTBlwB7mAALRMOVAJEwFQDRaEKCyf2JAIEwtcAlTD5BbQeA/zCzgHGYesIdZgAAZFCCLAg0KVLcDzd0hop/RgT/Sy0K/sluww2QK6DhPA9RQLl1RCVz7sgr4b2Z6IHg3yYHI7SgFAleKChgtdL2nZhQJkJySeICZ0ziAnRQZgJ9Vk4CrsVFXNK/HAeHGEAPEO0sEkAz6CcAp9jYPVOf3Z8366oH+1LF1u6sHuiO8JXN3nrljywFbta//bb2p6y3AAFmuPPGHrpxGAAAAAElFTkSuQmCC\");\n\n//# sourceURL=webpack:///./src/image/start_button.png?");

/***/ }),

/***/ "./src/js/base/DataStore.js":
/*!**********************************!*\
  !*** ./src/js/base/DataStore.js ***!
  \**********************************/
/*! exports provided: DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataStore\", function() { return DataStore; });\n// 變數緩存器, 所有的數據統一由 DataStore 管理\r\n\r\nclass DataStore {\r\n    static getInstance () {\r\n        if (!DataStore.instance) {\r\n            DataStore.instance = new DataStore();\r\n        }\r\n        return DataStore.instance;\r\n    }\r\n    constructor() {\r\n        this.map = new Map();\r\n    }\r\n    put (key,value) {\r\n        // 判斷 function\r\n        if (value && typeof value === \"function\") {\r\n            value = new value();\r\n        }\r\n        this.map.set(key,value);\r\n        return this;\r\n    }\r\n    get (key) {\r\n        return this.map.get(key);\r\n    }\r\n    destory () {\r\n        for (let value of this.map.values()) {\r\n            value = null;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/base/DataStore.js?");

/***/ }),

/***/ "./src/js/base/ResourceLoader.js":
/*!***************************************!*\
  !*** ./src/js/base/ResourceLoader.js ***!
  \***************************************/
/*! exports provided: ResourceLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceLoader\", function() { return ResourceLoader; });\n/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resources */ \"./src/js/base/Resources.js\");\n\r\n\r\nclass ResourceLoader {\r\n    constructor() {\r\n        this.map = new Map(_Resources__WEBPACK_IMPORTED_MODULE_0__[\"Resources\"]);\r\n\r\n        for (let [key,value] of this.map) {\r\n            const img = new Image();\r\n            img.src = value;\r\n\r\n            this.map.set(key,img);\r\n        }\r\n    }\r\n    onLoaded (callback) {\r\n        let loadedCount = 0;\r\n        for (let img of this.map.values()) {\r\n            img.onload = () => {\r\n                loadedCount += 1;\r\n                if (loadedCount >= this.map.size) {\r\n                    callback(this.map);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    static create () {\r\n        return new ResourceLoader();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/base/ResourceLoader.js?");

/***/ }),

/***/ "./src/js/base/Resources.js":
/*!**********************************!*\
  !*** ./src/js/base/Resources.js ***!
  \**********************************/
/*! exports provided: Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Resources\", function() { return Resources; });\n/* harmony import */ var image_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! image/background.png */ \"./src/image/background.png\");\n/* harmony import */ var image_land_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! image/land.png */ \"./src/image/land.png\");\n/* harmony import */ var image_pie_up_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! image/pie_up.png */ \"./src/image/pie_up.png\");\n/* harmony import */ var image_pie_down_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! image/pie_down.png */ \"./src/image/pie_down.png\");\n/* harmony import */ var image_birds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! image/birds.png */ \"./src/image/birds.png\");\n/* harmony import */ var image_start_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! image/start_button.png */ \"./src/image/start_button.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst Resources = [\r\n\t['background', image_background_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\r\n\t['land', image_land_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\r\n\t['pencilUp',image_pie_up_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\r\n\t['pencilDown', image_pie_down_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]],\r\n\t['birds', image_birds_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]],\r\n\t['startButton', image_start_button_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]]\r\n];\n\n//# sourceURL=webpack:///./src/js/base/Resources.js?");

/***/ }),

/***/ "./src/js/base/Sprite.js":
/*!*******************************!*\
  !*** ./src/js/base/Sprite.js ***!
  \*******************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sprite\", function() { return Sprite; });\n/* harmony import */ var _DataStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataStore */ \"./src/js/base/DataStore.js\");\n\r\n\r\n// 負責初始化精靈加載的資源、大小、位置\r\nclass Sprite {\r\n    constructor(\r\n        img = null,\r\n        srcX = 0,\r\n        srcY = 0,\r\n        srcW = 0,\r\n        srcH = 0,\r\n        x = 0,\r\n        y = 0,\r\n        width = 0,\r\n        height = 0\r\n    ) {\r\n        this.dataStore = _DataStore__WEBPACK_IMPORTED_MODULE_0__[\"DataStore\"].getInstance();\r\n        this.ctx = this.dataStore.ctx,\r\n        this.img = img,\r\n        this.srcX =srcX,\r\n        this.srcY = srcY,\r\n        this.srcW = srcW,\r\n        this.srcH = srcH,\r\n        this.x = x,\r\n        this.y = y,\r\n        this.width = width,\r\n        this.height = height\r\n    }\r\n    static getImage (key) {\r\n        return _DataStore__WEBPACK_IMPORTED_MODULE_0__[\"DataStore\"].getInstance().res.get(key);\r\n    }\r\n    draw (img = this.img,\r\n          srcX = this.srcX,\r\n          srcY = this.srcY,\r\n          srcW = this.srcW,\r\n          srcH = this.srcH,\r\n          x = this.x,\r\n          y = this.y,\r\n          width = this.width,\r\n          height = this.height) {\r\n        this.ctx.drawImage(\r\n            img,\r\n            srcX,\r\n            srcY,\r\n            srcW,\r\n            srcH,\r\n            x,\r\n            y,\r\n            width,\r\n            height\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/base/Sprite.js?");

/***/ }),

/***/ "./src/js/player/Birds.js":
/*!********************************!*\
  !*** ./src/js/player/Birds.js ***!
  \********************************/
/*! exports provided: Birds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Birds\", function() { return Birds; });\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n\r\n\r\nclass Birds extends _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\r\n    constructor() {\r\n        const image = _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"].getImage('birds');\r\n        super(\r\n            image,\r\n            0,0,\r\n            image.width,image.height,\r\n            0,0,\r\n            image.width,image.height\r\n        )\r\n\r\n        // 通過陣列儲存 bird 的狀態\r\n        // bird width 34,bird height 24, 上下邊距 10, 左右邊距 9\r\n        this.clippingX = [\r\n            9,\r\n            9+34+18,\r\n            9+34+18+34+18\r\n        ];\r\n        this.clippingY =[10,10,10];\r\n        this.clippingWidth = [34,34,34];\r\n        this.clippingHeight = [24,24,24];\r\n        const birdX = window.innerWidth/4;\r\n        this.birdsX = [birdX,birdX,birdX];\r\n        const birdY = window.innerHeight / 2;\r\n        this.birdsY = [birdY,birdY,birdY];\r\n        const birdWidth = 34;\r\n        this.birdsWidth = [birdWidth,birdWidth,birdWidth];\r\n        const birdHeight = 24;\r\n        this.birdsHeight = [birdHeight,birdHeight,birdHeight];\r\n        this.y = [birdY,birdY,birdY];\r\n        this.index = 0;\r\n        this.count = 0;\r\n        this.time = 0;\r\n    }\r\n    draw () {\r\n        const speed = 0.2;\r\n        this.count = this.count + speed;\r\n\r\n        if (this.index >= 2) {\r\n            this.count = 0;\r\n        }\r\n        this.index = Math.floor(this.count);\r\n\r\n        const g = 0.98 / 2.4;\r\n        const offsetUp = 30;\r\n        const offsetY = (g * this.time * (this.time - offsetUp)) / 2;\r\n \r\n        for (let i=0; i<=2; i++) {\r\n            this.birdsY[i] = this.y[i] + offsetY;\r\n        }\r\n        this.time += 1;\r\n    \r\n        super.draw(\r\n            this.img,\r\n            this.clippingX[this.index],this.clippingY[this.index],\r\n            this.clippingWidth[this.index],this.clippingHeight[this.index],\r\n            this.birdsX[this.index],this.birdsY[this.index],\r\n            this.birdsWidth[this.index],this.birdsHeight[this.index]\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/player/Birds.js?");

/***/ }),

/***/ "./src/js/player/Score.js":
/*!********************************!*\
  !*** ./src/js/player/Score.js ***!
  \********************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Score\", function() { return Score; });\n/* harmony import */ var _base_DataStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/DataStore */ \"./src/js/base/DataStore.js\");\n\r\nclass Score {\r\n    constructor() {\r\n        this.ctx = _base_DataStore__WEBPACK_IMPORTED_MODULE_0__[\"DataStore\"].getInstance().ctx;\r\n        this.scoreNumber = 0;\r\n        this.isScore = true;\r\n    }\r\n\r\n    draw () {\r\n        this.ctx.font = '25px Arial';\r\n        this.ctx.fillStyle = '#ffcbeb';\r\n        this.ctx.fillText(\r\n            this.scoreNumber,\r\n            window.innerWidth / 2,\r\n            window.innerHeight / 18,\r\n            1000\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/player/Score.js?");

/***/ }),

/***/ "./src/js/player/StartButton.js":
/*!**************************************!*\
  !*** ./src/js/player/StartButton.js ***!
  \**************************************/
/*! exports provided: StartButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StartButton\", function() { return StartButton; });\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n\r\n\r\nclass StartButton extends _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\r\n    constructor() {\r\n        const image = _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"].getImage(\"startButton\");\r\n        super(\r\n            image,\r\n            0,0,\r\n            image.width,image.height,\r\n            (window.innerWidth - image.width) / 2,\r\n            (window.innerHeight - image.height) / 2.5,\r\n            image.width,image.height\r\n\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/player/StartButton.js?");

/***/ }),

/***/ "./src/js/runtime/Background.js":
/*!**************************************!*\
  !*** ./src/js/runtime/Background.js ***!
  \**************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Background\", function() { return Background; });\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n\r\n\r\nclass Background extends _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\r\n    constructor() {\r\n        const image = _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"].getImage('background');\r\n        super(\r\n                image,\r\n                0,0,\r\n                image.width,image.height,\r\n                0,0,\r\n                window.innerWidth,window.innerHeight\r\n            );\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/runtime/Background.js?");

/***/ }),

/***/ "./src/js/runtime/Director.js":
/*!************************************!*\
  !*** ./src/js/runtime/Director.js ***!
  \************************************/
/*! exports provided: Director */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Director\", function() { return Director; });\n/* harmony import */ var _base_DataStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/DataStore */ \"./src/js/base/DataStore.js\");\n/* harmony import */ var _UpPencil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpPencil */ \"./src/js/runtime/UpPencil.js\");\n/* harmony import */ var _DownPencil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownPencil */ \"./src/js/runtime/DownPencil.js\");\n\r\n\r\n\r\n\r\n// 負責控制遊戲的邏輯\r\nclass Director {\r\n    static getInstance() {\r\n        if (!Director.instance) {\r\n            Director.instance = new Director()\r\n        }\r\n        return Director.instance;\r\n    }\r\n    static isStrike(bird,pencil) {\r\n        let strike = false;\r\n        if (bird.top > pencil.bottom || \r\n            bird.bottom < pencil.top || \r\n            bird.right < pencil.left || \r\n            bird.left > pencil.right) \r\n        {\r\n            strike = true;\r\n        }\r\n        return !strike;\r\n    }\r\n    constructor() {\r\n        this.dataStore = _base_DataStore__WEBPACK_IMPORTED_MODULE_0__[\"DataStore\"].getInstance();\r\n        this.landSpeed = 2;\r\n    }\r\n    createPencil () {\r\n        const minTop = window.innerHeight / 8;\r\n        const maxTop = window.innerHeight / 2;\r\n        const top = minTop + Math.random() * (maxTop - minTop);\r\n\r\n        this.dataStore.get('pencils').push(new _UpPencil__WEBPACK_IMPORTED_MODULE_1__[\"UpPencil\"](top));\r\n        this.dataStore.get('pencils').push(new _DownPencil__WEBPACK_IMPORTED_MODULE_2__[\"DownPencil\"](top));\r\n    }\r\n    check () {\r\n        const bird = this.dataStore.get('birds')\r\n        const land = this.dataStore.get('land')\r\n        const pencils = this.dataStore.get('pencils');\r\n        const score = this.dataStore.get('score');\r\n\r\n        if (bird.birdsY[0] + bird.birdsHeight[0] >= land.y) {\r\n            this.isGameOver = true;\r\n            return;\r\n        }\r\n        const birdsBorder = {\r\n            top: bird.y[0],\r\n            bottom: bird.birdsY[0] + bird.birdsHeight[0],\r\n            left: bird.birdsX[0],\r\n            right: bird.birdsX[0] + bird.birdsWidth[0]\r\n        }\r\n        const length = pencils.length;\r\n        \r\n        for (let i=0; i < length; i++) {\r\n            const pencil = pencils[i];\r\n            const pencilBorder = {\r\n                top: pencil.y,\r\n                bottom: pencil.y + pencil.height,\r\n                left: pencil.x,\r\n                right : pencil.x + pencil.width\r\n            }\r\n          if (Director.isStrike(birdsBorder,pencilBorder)) {\r\n              this.isGameOver = true;\r\n              return;\r\n          }\r\n        }\r\n\r\n        if (bird.birdsX[0] > pencils[0].x + pencils[0].width && score.isScore) {\r\n            score.isScore = false;\r\n            score.scoreNumber += 1;\r\n        }\r\n\r\n    }\r\n    birdsEvent () {\r\n        for (let i=0; i<=2; i++) {\r\n            this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i];\r\n        }\r\n        this.dataStore.get('birds').time = 0;\r\n    }\r\n    run () {\r\n        this.check();\r\n        if (!this.isGameOver){\r\n            this.dataStore.get('background').draw();\r\n\r\n            const pencils = this.dataStore.get('pencils');\r\n\r\n            if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {\r\n                pencils.shift()\r\n                pencils.shift();\r\n                this.dataStore.get('score').isScore = true;\r\n            }\r\n            \r\n            if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {\r\n                this.createPencil();\r\n            }\r\n\r\n            this.dataStore.get('pencils').forEach(pencil => pencil.draw());\r\n            this.dataStore.get('land').draw();\r\n            this.dataStore.get('birds').draw();\r\n            this.dataStore.get('score').draw();\r\n\r\n            const timer = requestAnimationFrame(() => this.run())\r\n            this.dataStore.put('timer',timer);\r\n        }else {\r\n            this.dataStore.get('startButton').draw();\r\n            cancelAnimationFrame(this.dataStore.get('timer'));\r\n            this.dataStore.destory();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/runtime/Director.js?");

/***/ }),

/***/ "./src/js/runtime/DownPencil.js":
/*!**************************************!*\
  !*** ./src/js/runtime/DownPencil.js ***!
  \**************************************/
/*! exports provided: DownPencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DownPencil\", function() { return DownPencil; });\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n/* harmony import */ var _Pencil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pencil */ \"./src/js/runtime/Pencil.js\");\n\r\n\r\n\r\nclass DownPencil extends _Pencil__WEBPACK_IMPORTED_MODULE_1__[\"Pencil\"] {\r\n    constructor(top) {\r\n        const image = _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"].getImage('pencilDown');\r\n        super(image,top);\r\n    }\r\n    draw () {\r\n        const gap = window.innerHeight / 5;\r\n        this.y = this.top + gap;\r\n        super.draw();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/runtime/DownPencil.js?");

/***/ }),

/***/ "./src/js/runtime/Land.js":
/*!********************************!*\
  !*** ./src/js/runtime/Land.js ***!
  \********************************/
/*! exports provided: Land */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Land\", function() { return Land; });\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Director */ \"./src/js/runtime/Director.js\");\n\r\n\r\n\r\nclass Land extends _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\r\n    constructor() {\r\n        const image = _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"].getImage('land');\r\n        super(\r\n            image,\r\n            0,0,\r\n            image.width,image.height,\r\n            0,window.innerHeight - image.height,\r\n            image.width,image.height\r\n        )\r\n        this.landX = 0;\r\n        this.landSpeed = _Director__WEBPACK_IMPORTED_MODULE_1__[\"Director\"].getInstance().landSpeed;\r\n    }\r\n    draw () {\r\n        this.landX = this.landX + this.landSpeed;\r\n        if (this.landX > this.img.width - window.innerWidth) {\r\n            this.landX = 0;\r\n        }\r\n        super.draw(\r\n            this.img,\r\n            this.srcX,this.srcY,\r\n            this.srcW,this.srcH,\r\n            -this.landX,this.y,\r\n            this.width,this.height\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/runtime/Land.js?");

/***/ }),

/***/ "./src/js/runtime/Pencil.js":
/*!**********************************!*\
  !*** ./src/js/runtime/Pencil.js ***!
  \**********************************/
/*! exports provided: Pencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pencil\", function() { return Pencil; });\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Director */ \"./src/js/runtime/Director.js\");\n\r\n\r\n\r\nclass Pencil extends _base_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"] {\r\n    constructor(image,top) {\r\n        super(\r\n            image,\r\n            0,0,\r\n            image.width,image.height,\r\n            window.innerWidth,0,\r\n            image.width,image.height\r\n        )\r\n        this.top = top;\r\n    }\r\n    draw () {\r\n        this.x = this.x - _Director__WEBPACK_IMPORTED_MODULE_1__[\"Director\"].getInstance().landSpeed;\r\n        super.draw(\r\n            this.img,\r\n            this.srcX,this.srcY,\r\n            this.srcW,this.srcH,\r\n            this.x,this.y,\r\n            this.width,this.height\r\n        )\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/runtime/Pencil.js?");

/***/ }),

/***/ "./src/js/runtime/UpPencil.js":
/*!************************************!*\
  !*** ./src/js/runtime/UpPencil.js ***!
  \************************************/
/*! exports provided: UpPencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpPencil\", function() { return UpPencil; });\n/* harmony import */ var _Pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pencil */ \"./src/js/runtime/Pencil.js\");\n/* harmony import */ var _base_Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Sprite */ \"./src/js/base/Sprite.js\");\n\r\n\r\n\r\nclass UpPencil extends _Pencil__WEBPACK_IMPORTED_MODULE_0__[\"Pencil\"] {\r\n    constructor(top) {\r\n        const image = _base_Sprite__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"].getImage('pencilUp');\r\n        super(image,top)\r\n    }\r\n    draw () {\r\n        this.y = this.top - this.height;\r\n        super.draw()\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/runtime/UpPencil.js?");

/***/ })

/******/ });