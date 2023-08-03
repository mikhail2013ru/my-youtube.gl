/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCards.js */ \"./js/renderCards.js\");\n/* harmony import */ var _renderCardsTrends_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCardsTrends.js */ \"./js/renderCardsTrends.js\");\n/* harmony import */ var _renderCardsTrends_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_renderCardsTrends_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS15b3V0dWJlLmdsLy4vanMvbWFpbi5qcz9lM2IxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9yZW5kZXJDYXJkcy5qcydcclxuaW1wb3J0ICcuL3JlbmRlckNhcmRzVHJlbmRzLmpzJyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/renderCards.js":
/*!***************************!*\
  !*** ./js/renderCards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   createList: () => (/* binding */ createList)\n/* harmony export */ });\nconst gloAcademyList = document.querySelector('.glo-academy-list')\r\nconst musicList = document.querySelector('.music-list')\r\n\r\nconst createCard = (dataVideo) => {\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n    \r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card')\r\n    card.innerHTML =`\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n                <span class=\"video-counter\">\r\n                <span class=\"video-date\">${(new Date(dateVideo)).toLocaleString()}</span>\r\n                <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        let card = createCard(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(gloAcademyList, gloAcademy)\r\ncreateList(musicList, music)\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9yZW5kZXJDYXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsUUFBUTtBQUNyRiw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0Esc0NBQXNDLFdBQVc7QUFDakQ7QUFDQTtBQUNBLDJDQUEyQyx1Q0FBdUM7QUFDbEYsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXlvdXR1YmUuZ2wvLi9qcy9yZW5kZXJDYXJkcy5qcz8xNGVjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdsb0FjYWRlbXlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsby1hY2FkZW15LWxpc3QnKVxyXG5jb25zdCBtdXNpY0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXVzaWMtbGlzdCcpXHJcblxyXG5jb25zdCBjcmVhdGVDYXJkID0gKGRhdGFWaWRlbykgPT4ge1xyXG4gICAgY29uc3QgaW1nVXJsID0gZGF0YVZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybFxyXG4gICAgY29uc3QgdmlkZW9JZCA9IGRhdGFWaWRlby5pZC52aWRlb0lkXHJcbiAgICBjb25zdCB0aXRsZVZpZGVvID0gZGF0YVZpZGVvLnNuaXBwZXQudGl0bGVcclxuICAgIGNvbnN0IGRhdGVWaWRlbyA9IGRhdGFWaWRlby5zbmlwcGV0LnB1Ymxpc2hlZEF0XHJcbiAgICBjb25zdCBjaGFubmVsVGl0bGUgPSBkYXRhVmlkZW8uc25pcHBldC5jaGFubmVsVGl0bGVcclxuICAgIFxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWNhcmQnKVxyXG4gICAgY2FyZC5pbm5lckhUTUwgPWBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLXRodW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpbmstdmlkZW8geW91dHViZS1tb2RhbFwiIGhyZWY9XCJodHRwczovL3lvdXR1LmJlLyR7dmlkZW9JZH1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWdVcmx9XCIgYWx0PVwiXCIgY2xhc3M9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInZpZGVvLXRpdGxlXCI+JHt0aXRsZVZpZGVvfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpZGVvLWNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tZGF0ZVwiPiR7KG5ldyBEYXRlKGRhdGVWaWRlbykpLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1jaGFubmVsXCI+JHtjaGFubmVsVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVMaXN0ID0gKHdyYXBwZXIsIGxpc3RWaWRlbykgPT4ge1xyXG4gICAgd3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGxpc3RWaWRlby5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZChpdGVtKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGNhcmQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuY3JlYXRlTGlzdChnbG9BY2FkZW15TGlzdCwgZ2xvQWNhZGVteSlcclxuY3JlYXRlTGlzdChtdXNpY0xpc3QsIG11c2ljKVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FyZCwgY3JlYXRlTGlzdCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/renderCards.js\n");

/***/ }),

/***/ "./js/renderCardsTrends.js":
/*!*********************************!*\
  !*** ./js/renderCardsTrends.js ***!
  \*********************************/
/***/ (() => {

eval("const trendingList = document.querySelector('.trending-list')\r\n\r\nconst createCardTrends = (dataVideo) => {\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n    const videoViews = dataVideo.statistics.viewCount\r\n    \r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card-trending')\r\n    card.innerHTML =`\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n              <span class=\"video-counter-trending\">\r\n                <span class=\"video-views\">${videoViews} views</span>\r\n                <span class=\"video-date-trending\">${dateVideo}</span>\r\n              </span>\r\n              <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        let card = createCardTrends(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(trendingList, trending)\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9yZW5kZXJDYXJkc1RyZW5kcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLFFBQVE7QUFDckYsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RCxvREFBb0QsVUFBVTtBQUM5RDtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS15b3V0dWJlLmdsLy4vanMvcmVuZGVyQ2FyZHNUcmVuZHMuanM/ZTkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0cmVuZGluZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlbmRpbmctbGlzdCcpXHJcblxyXG5jb25zdCBjcmVhdGVDYXJkVHJlbmRzID0gKGRhdGFWaWRlbykgPT4ge1xyXG4gICAgY29uc3QgaW1nVXJsID0gZGF0YVZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybFxyXG4gICAgY29uc3QgdmlkZW9JZCA9IGRhdGFWaWRlby5pZC52aWRlb0lkXHJcbiAgICBjb25zdCB0aXRsZVZpZGVvID0gZGF0YVZpZGVvLnNuaXBwZXQudGl0bGVcclxuICAgIGNvbnN0IGRhdGVWaWRlbyA9IGRhdGFWaWRlby5zbmlwcGV0LnB1Ymxpc2hlZEF0XHJcbiAgICBjb25zdCBjaGFubmVsVGl0bGUgPSBkYXRhVmlkZW8uc25pcHBldC5jaGFubmVsVGl0bGVcclxuICAgIGNvbnN0IHZpZGVvVmlld3MgPSBkYXRhVmlkZW8uc3RhdGlzdGljcy52aWV3Q291bnRcclxuICAgIFxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWNhcmQtdHJlbmRpbmcnKVxyXG4gICAgY2FyZC5pbm5lckhUTUwgPWBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLXRodW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImxpbmstdmlkZW8geW91dHViZS1tb2RhbFwiIGhyZWY9XCJodHRwczovL3lvdXR1LmJlLyR7dmlkZW9JZH1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWdVcmx9XCIgYWx0PVwiXCIgY2xhc3M9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInZpZGVvLXRpdGxlXCI+JHt0aXRsZVZpZGVvfTwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1jb3VudGVyLXRyZW5kaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpZGVvLXZpZXdzXCI+JHt2aWRlb1ZpZXdzfSB2aWV3czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tZGF0ZS10cmVuZGluZ1wiPiR7ZGF0ZVZpZGVvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1jaGFubmVsXCI+JHtjaGFubmVsVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVMaXN0ID0gKHdyYXBwZXIsIGxpc3RWaWRlbykgPT4ge1xyXG4gICAgd3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGxpc3RWaWRlby5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZFRyZW5kcyhpdGVtKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGNhcmQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuY3JlYXRlTGlzdCh0cmVuZGluZ0xpc3QsIHRyZW5kaW5nKVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/renderCardsTrends.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;