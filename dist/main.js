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

eval("const gloAcademyList = document.querySelector('.glo-academy-list')\r\nconst trendingList = document.querySelector('.trending-list')\r\nconst musicList = document.querySelector('.music-list')\r\n\r\nconsole.dir(trending)\r\n\r\nconst createCard = (dataVideo) => {\r\n    // console.log(dataVideo)\r\n\r\n    const imgUrl = dataVideo.snippet.thumbnails.high.url\r\n    const videoId = dataVideo.id.videoId\r\n    const titleVideo = dataVideo.snippet.title\r\n    const dateVideo = dataVideo.snippet.publishedAt\r\n    const channelTitle = dataVideo.snippet.channelTitle\r\n\r\n    const card = document.createElement('div')\r\n    card.classList.add('video-card')\r\n    card.innerHTML = `\r\n            <div class=\"video-thumb\">\r\n                <a class=\"link-video youtube-modal\" href=\"https://youtu.be/${videoId}\">\r\n                <img src=\"${imgUrl}\" alt=\"\" class=\"thumbnail\">\r\n                </a>\r\n            </div>\r\n            <h3 class=\"video-title\">${titleVideo}</h3>\r\n            <div class=\"video-info\">\r\n                <span class=\"video-counter\">\r\n                    <span class=\"video-date\">${(new Date(dateVideo)).toLocaleString()}</span>\r\n                </span>\r\n                <span class=\"video-channel\">${channelTitle}</span>\r\n            </div>`\r\n    return card\r\n}\r\n\r\nconst createList = (wrapper, listVideo) => {\r\n    wrapper.textContent = '';\r\n\r\n    listVideo.forEach(item => {\r\n        const card = createCard(item)\r\n        wrapper.append(card)\r\n    });\r\n}\r\n\r\ncreateList(gloAcademyList, gloAcademy)\r\ncreateList(trendingList, trending)\r\ncreateList(musicList, music)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLFFBQVE7QUFDckYsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQSwrQ0FBK0MsdUNBQXVDO0FBQ3RGO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXlvdXR1YmUuZ2wvLi9qcy9tYWluLmpzP2UzYjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2xvQWNhZGVteUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xvLWFjYWRlbXktbGlzdCcpXHJcbmNvbnN0IHRyZW5kaW5nTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVuZGluZy1saXN0JylcclxuY29uc3QgbXVzaWNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11c2ljLWxpc3QnKVxyXG5cclxuY29uc29sZS5kaXIodHJlbmRpbmcpXHJcblxyXG5jb25zdCBjcmVhdGVDYXJkID0gKGRhdGFWaWRlbykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YVZpZGVvKVxyXG5cclxuICAgIGNvbnN0IGltZ1VybCA9IGRhdGFWaWRlby5zbmlwcGV0LnRodW1ibmFpbHMuaGlnaC51cmxcclxuICAgIGNvbnN0IHZpZGVvSWQgPSBkYXRhVmlkZW8uaWQudmlkZW9JZFxyXG4gICAgY29uc3QgdGl0bGVWaWRlbyA9IGRhdGFWaWRlby5zbmlwcGV0LnRpdGxlXHJcbiAgICBjb25zdCBkYXRlVmlkZW8gPSBkYXRhVmlkZW8uc25pcHBldC5wdWJsaXNoZWRBdFxyXG4gICAgY29uc3QgY2hhbm5lbFRpdGxlID0gZGF0YVZpZGVvLnNuaXBwZXQuY2hhbm5lbFRpdGxlXHJcblxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLWNhcmQnKVxyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlby10aHVtYlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsaW5rLXZpZGVvIHlvdXR1YmUtbW9kYWxcIiBocmVmPVwiaHR0cHM6Ly95b3V0dS5iZS8ke3ZpZGVvSWR9XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ2aWRlby10aXRsZVwiPiR7dGl0bGVWaWRlb308L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aWRlby1kYXRlXCI+JHsobmV3IERhdGUoZGF0ZVZpZGVvKSkudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpZGVvLWNoYW5uZWxcIj4ke2NoYW5uZWxUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgIHJldHVybiBjYXJkXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUxpc3QgPSAod3JhcHBlciwgbGlzdFZpZGVvKSA9PiB7XHJcbiAgICB3cmFwcGVyLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gICAgbGlzdFZpZGVvLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoaXRlbSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZChjYXJkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNyZWF0ZUxpc3QoZ2xvQWNhZGVteUxpc3QsIGdsb0FjYWRlbXkpXHJcbmNyZWF0ZUxpc3QodHJlbmRpbmdMaXN0LCB0cmVuZGluZylcclxuY3JlYXRlTGlzdChtdXNpY0xpc3QsIG11c2ljKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/main.js\n");

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