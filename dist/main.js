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
/***/ (() => {

eval("const gloAcademyList = document.querySelector('.glo-academy-list')\r\nconst trendingList = document.querySelector('.trending-list')\r\nconst musicList = document.querySelector('.music-list')\r\n\r\nconsole.dir(trending)\r\n\r\nconst createCard = (dataVideo) => {\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n    const viewCount = dataVideo.statistics.viewCount\r\n\r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card')\r\n    card.innerHTML = `\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n                <span class=\"video-counter\">\r\n                <span class=\"video-views\"> views</span>\r\n                <span class=\"video-date\">${(new Date(dateVideo)).toLocaleString()}</span>\r\n                </span>\r\n                <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        const card = createCard(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(gloAcademyList, gloAcademy)\r\ncreateList(trendingList, trending)\r\ncreateList(musicList, music)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxRQUFRO0FBQ3JGLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdUNBQXVDO0FBQ2xGO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXlvdXR1YmUuZ2wvLi9qcy9tYWluLmpzP2UzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2xvQWNhZGVteUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xvLWFjYWRlbXktbGlzdCcpXHJcbmNvbnN0IHRyZW5kaW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVuZGluZy1saXN0JylcclxuY29uc3QgbXVzaWNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11c2ljLWxpc3QnKVxyXG5cclxuY29uc29sZS5kaXIodHJlbmRpbmcpXHJcblxyXG5jb25zdCBjcmVhdGVDYXJkID0gKGRhdGFWaWRlbykgPT4ge1xyXG4gICAgY29uc3QgaW1nVXJsID0gZGF0YVZpZGVvLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybFxyXG4gICAgY29uc3QgdmlkZW9JZCA9IGRhdGFWaWRlby5pZC52aWRlb0lkXHJcbiAgICBjb25zdCB0aXRsZVZpZGVvID0gZGF0YVZpZGVvLnNuaXBwZXQudGl0bGVcclxuICAgIGNvbnN0IGRhdGVWaWRlbyA9IGRhdGFWaWRlby5zbmlwcGV0LnB1Ymxpc2hlZEF0XHJcbiAgICBjb25zdCBjaGFubmVsVGl0bGUgPSBkYXRhVmlkZW8uc25pcHBldC5jaGFubmVsVGl0bGVcclxuICAgIGNvbnN0IHZpZXdDb3VudCA9IGRhdGFWaWRlby5zdGF0aXN0aWNzLnZpZXdDb3VudFxyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd2aWRlby1jYXJkJylcclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tdGh1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGluay12aWRlbyB5b3V0dWJlLW1vZGFsXCIgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvJHt2aWRlb0lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ1VybH1cIiBhbHQ9XCJcIiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidmlkZW8tdGl0bGVcIj4ke3RpdGxlVmlkZW99PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby12aWV3c1wiPiB2aWV3czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tZGF0ZVwiPiR7KG5ldyBEYXRlKGRhdGVWaWRlbykpLnRvTG9jYWxlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1jaGFubmVsXCI+JHtjaGFubmVsVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICByZXR1cm4gY2FyZFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVMaXN0ID0gKHdyYXBwZXIsIGxpc3RWaWRlbykgPT4ge1xyXG4gICAgd3JhcHBlci50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGxpc3RWaWRlby5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGl0ZW0pXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmQoY2FyZClcclxuICAgIH0pO1xyXG59XHJcblxyXG5jcmVhdGVMaXN0KGdsb0FjYWRlbXlMaXN0LCBnbG9BY2FkZW15KVxyXG5jcmVhdGVMaXN0KHRyZW5kaW5nTGlzdCwgdHJlbmRpbmcpXHJcbmNyZWF0ZUxpc3QobXVzaWNMaXN0LCBtdXNpYykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.js"]();
/******/ 	
/******/ })()
;