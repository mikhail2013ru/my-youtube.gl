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

eval("const API_KEY = 'AIzaSyD1dihYAdCCANTZZDJv1Y-9qT1axMRw4EI'\r\n\r\nconst gloAcademyList = document.querySelector('.glo-academy-list')\r\n\r\nconst createCard = (dataVideo) => {\r\n    console.log(dataVideo)\r\n\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n\r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card')\r\n    card.innerHTML = `\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n                <span class=\"video-counter\">\r\n                    <span class=\"video-date\">${dateVideo}</span>\r\n                </span>\r\n                <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        const card = createCard(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(gloAcademyList, gloAcademy)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkUsUUFBUTtBQUNyRiw0QkFBNEIsT0FBTztBQUNuQztBQUNBO0FBQ0Esc0NBQXNDLFdBQVc7QUFDakQ7QUFDQTtBQUNBLCtDQUErQyxVQUFVO0FBQ3pEO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXkteW91dHViZS5nbC8uL2pzL21haW4uanM/ZTNiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElfS0VZID0gJ0FJemFTeUQxZGloWUFkQ0NBTlRaWkRKdjFZLTlxVDFheE1SdzRFSSdcclxuXHJcbmNvbnN0IGdsb0FjYWRlbXlMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsby1hY2FkZW15LWxpc3QnKVxyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9IChkYXRhVmlkZW8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGFWaWRlbylcclxuXHJcbiAgICBjb25zdCBpbWdVcmwgPSBkYXRhVmlkZW8uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsXHJcbiAgICBjb25zdCB2aWRlb0lkID0gZGF0YVZpZGVvLmlkLnZpZGVvSWRcclxuICAgIGNvbnN0IHRpdGxlVmlkZW8gPSBkYXRhVmlkZW8uc25pcHBldC50aXRsZVxyXG4gICAgY29uc3QgZGF0ZVZpZGVvID0gZGF0YVZpZGVvLnNuaXBwZXQucHVibGlzaGVkQXRcclxuICAgIGNvbnN0IGNoYW5uZWxUaXRsZSA9IGRhdGFWaWRlby5zbmlwcGV0LmNoYW5uZWxUaXRsZVxyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd2aWRlby1jYXJkJylcclxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tdGh1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGluay12aWRlbyB5b3V0dWJlLW1vZGFsXCIgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvJHt2aWRlb0lkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ1VybH1cIiBhbHQ9XCJcIiBjbGFzcz1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidmlkZW8tdGl0bGVcIj4ke3RpdGxlVmlkZW99PC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tZGF0ZVwiPiR7ZGF0ZVZpZGVvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlkZW8tY2hhbm5lbFwiPiR7Y2hhbm5lbFRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgcmV0dXJuIGNhcmRcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTGlzdCA9ICh3cmFwcGVyLCBsaXN0VmlkZW8pID0+IHtcclxuICAgIHdyYXBwZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICBsaXN0VmlkZW8uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChpdGVtKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGNhcmQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuY3JlYXRlTGlzdChnbG9BY2FkZW15TGlzdCwgZ2xvQWNhZGVteSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/main.js\n");

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