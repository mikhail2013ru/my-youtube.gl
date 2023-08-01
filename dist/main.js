/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCards.js */ \"./js/renderCards.js\");\n/* harmony import */ var _renderCardsTrends_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCardsTrends.js */ \"./js/renderCardsTrends.js\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7OztBQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXlvdXR1YmUuZ2wvLi9qcy9tYWluLmpzP2UzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3JlbmRlckNhcmRzLmpzJ1xyXG5pbXBvcnQgJy4vcmVuZGVyQ2FyZHNUcmVuZHMuanMnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ }),

/***/ "./js/renderCards.js":
/*!***************************!*\
  !*** ./js/renderCards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   createList: () => (/* binding */ createList),\n/* harmony export */   trendingList: () => (/* binding */ trendingList)\n/* harmony export */ });\nconst gloAcademyList = document.querySelector('.glo-academy-list')\r\nconst trendingList = document.querySelector('.trending-list')\r\nconst musicList = document.querySelector('.music-list')\r\n\r\nconst createCard = (dataVideo) => {\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n    \r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card')\r\n    card.innerHTML =`\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n                <span class=\"video-counter\">\r\n                <span class=\"video-date\">${(new Date(dateVideo)).toLocaleString()}</span>\r\n                <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        let card = createCard(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(gloAcademyList, gloAcademy)\r\ncreateList(musicList, music)\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9yZW5kZXJDYXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsUUFBUTtBQUNyRiw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0Esc0NBQXNDLFdBQVc7QUFDakQ7QUFDQTtBQUNBLDJDQUEyQyx1Q0FBdUM7QUFDbEYsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXlvdXR1YmUuZ2wvLi9qcy9yZW5kZXJDYXJkcy5qcz8xNGVjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdsb0FjYWRlbXlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsby1hY2FkZW15LWxpc3QnKVxyXG5jb25zdCB0cmVuZGluZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlbmRpbmctbGlzdCcpXHJcbmNvbnN0IG11c2ljTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdXNpYy1saXN0JylcclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoZGF0YVZpZGVvKSA9PiB7XHJcbiAgICBjb25zdCBpbWdVcmwgPSBkYXRhVmlkZW8uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsXHJcbiAgICBjb25zdCB2aWRlb0lkID0gZGF0YVZpZGVvLmlkLnZpZGVvSWRcclxuICAgIGNvbnN0IHRpdGxlVmlkZW8gPSBkYXRhVmlkZW8uc25pcHBldC50aXRsZVxyXG4gICAgY29uc3QgZGF0ZVZpZGVvID0gZGF0YVZpZGVvLnNuaXBwZXQucHVibGlzaGVkQXRcclxuICAgIGNvbnN0IGNoYW5uZWxUaXRsZSA9IGRhdGFWaWRlby5zbmlwcGV0LmNoYW5uZWxUaXRsZVxyXG4gICAgXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgndmlkZW8tY2FyZCcpXHJcbiAgICBjYXJkLmlubmVySFRNTCA9YFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tdGh1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGluay12aWRlbyB5b3V0dWJlLW1vZGFsXCIgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvJHt2aWRlb0lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ1VybH1cIiBhbHQ9XCJcIiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidmlkZW8tdGl0bGVcIj4ke3RpdGxlVmlkZW99PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1kYXRlXCI+JHsobmV3IERhdGUoZGF0ZVZpZGVvKSkudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpZGVvLWNoYW5uZWxcIj4ke2NoYW5uZWxUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUxpc3QgPSAod3JhcHBlciwgbGlzdFZpZGVvKSA9PiB7XHJcbiAgICB3cmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgbGlzdFZpZGVvLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKGl0ZW0pXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQoY2FyZClcclxuICAgIH0pO1xyXG59XHJcblxyXG5jcmVhdGVMaXN0KGdsb0FjYWRlbXlMaXN0LCBnbG9BY2FkZW15KVxyXG5jcmVhdGVMaXN0KG11c2ljTGlzdCwgbXVzaWMpXHJcblxyXG5leHBvcnQgeyBjcmVhdGVDYXJkLCBjcmVhdGVMaXN0LCB0cmVuZGluZ0xpc3QgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/renderCards.js\n");

/***/ }),

/***/ "./js/renderCardsTrends.js":
/*!*********************************!*\
  !*** ./js/renderCardsTrends.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCards.js */ \"./js/renderCards.js\");\n\r\n\r\nconst createCardTrends = (dataVideo) => {\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n    const videoViews = dataVideo.statistics.viewCount\r\n    \r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card-trending')\r\n    card.innerHTML =`\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n              <span class=\"video-counter-trending\">\r\n                <span class=\"video-views\">${videoViews} views</span>\r\n                <span class=\"video-date-trending\">${dateVideo}</span>\r\n              </span>\r\n              <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        let card = createCardTrends(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(_renderCards_js__WEBPACK_IMPORTED_MODULE_0__.trendingList, trending)\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9yZW5kZXJDYXJkc1RyZW5kcy5qcyIsIm1hcHBpbmdzIjoiOztBQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxRQUFRO0FBQ3JGLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQsb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQSw0Q0FBNEMsYUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyx5REFBWTtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXkteW91dHViZS5nbC8uL2pzL3JlbmRlckNhcmRzVHJlbmRzLmpzP2U5M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJlbmRpbmdMaXN0IH0gZnJvbSBcIi4vcmVuZGVyQ2FyZHMuanNcIlxyXG5cclxuY29uc3QgY3JlYXRlQ2FyZFRyZW5kcyA9IChkYXRhVmlkZW8pID0+IHtcclxuICAgIGNvbnN0IGltZ1VybCA9IGRhdGFWaWRlby5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaC51cmxcclxuICAgIGNvbnN0IHZpZGVvSWQgPSBkYXRhVmlkZW8uaWQudmlkZW9JZFxyXG4gICAgY29uc3QgdGl0bGVWaWRlbyA9IGRhdGFWaWRlby5zbmlwcGV0LnRpdGxlXHJcbiAgICBjb25zdCBkYXRlVmlkZW8gPSBkYXRhVmlkZW8uc25pcHBldC5wdWJsaXNoZWRBdFxyXG4gICAgY29uc3QgY2hhbm5lbFRpdGxlID0gZGF0YVZpZGVvLnNuaXBwZXQuY2hhbm5lbFRpdGxlXHJcbiAgICBjb25zdCB2aWRlb1ZpZXdzID0gZGF0YVZpZGVvLnN0YXRpc3RpY3Mudmlld0NvdW50XHJcbiAgICBcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd2aWRlby1jYXJkLXRyZW5kaW5nJylcclxuICAgIGNhcmQuaW5uZXJIVE1MID1gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby10aHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaW5rLXZpZGVvIHlvdXR1YmUtbW9kYWxcIiBocmVmPVwiaHR0cHM6Ly95b3V0dS5iZS8ke3ZpZGVvSWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ2aWRlby10aXRsZVwiPiR7dGl0bGVWaWRlb308L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8taW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tY291bnRlci10cmVuZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby12aWV3c1wiPiR7dmlkZW9WaWV3c30gdmlld3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpZGVvLWRhdGUtdHJlbmRpbmdcIj4ke2RhdGVWaWRlb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tY2hhbm5lbFwiPiR7Y2hhbm5lbFRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTGlzdCA9ICh3cmFwcGVyLCBsaXN0VmlkZW8pID0+IHtcclxuICAgIHdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBsaXN0VmlkZW8uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmRUcmVuZHMoaXRlbSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChjYXJkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNyZWF0ZUxpc3QodHJlbmRpbmdMaXN0LCB0cmVuZGluZylcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/renderCardsTrends.js\n");

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