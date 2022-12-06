/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/eatinside_icon.svg":
/*!***************************************!*\
  !*** ./src/assets/eatinside_icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/eatinside_icon.svg";

/***/ }),

/***/ "./src/assets/header_img.png":
/*!***********************************!*\
  !*** ./src/assets/header_img.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/header_img.png";

/***/ }),

/***/ "./src/assets/og-img.png":
/*!*******************************!*\
  !*** ./src/assets/og-img.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/og-img.png";

/***/ }),

/***/ "./src/assets/takeaway_icon.svg":
/*!**************************************!*\
  !*** ./src/assets/takeaway_icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/takeaway_icon.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _assets_eatinside_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/eatinside_icon.svg */ "./src/assets/eatinside_icon.svg");
/* harmony import */ var _assets_header_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/header_img.png */ "./src/assets/header_img.png");
/* harmony import */ var _assets_og_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/og-img.png */ "./src/assets/og-img.png");
/* harmony import */ var _assets_takeaway_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/takeaway_icon.svg */ "./src/assets/takeaway_icon.svg");





// import './assets/stories-video.mp4';

'use strict';

const bodyElement = document.querySelector('body');
const pageId = bodyElement.getAttribute('data-page-id');

function menu(tab, container, content) {
    const tabs = document.querySelectorAll(`.${tab}`);
    const tabsContainer = document.querySelector(`.${container}`);
    const tabsContent = document.querySelectorAll(`.${content}`);

    tabsContainer.addEventListener('click', function(event) {
        const clicked = event.target.closest(`.${tab}`);

        // When empty space around buttons is clicked it returns Null - this takes care of it
        if (!clicked) return;
        // console.log(clicked);

        // Add active class to the button that is clicked
        tabs.forEach((tab) => tab.classList.remove('menu__tab--active'));
        clicked.classList.add('menu__tab--active');

        // Activate content area
        tabsContent.forEach((tabContent) => tabContent.classList.remove('menu__content--active'));
        document.querySelector(`.menu__content--${clicked.dataset.tab}`)
            .classList.add('menu__content--active');
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    switch(pageId) {
        case 'home':
            menu('menu__tab', 'menu__tabs', 'menu__content');
            break;
        case 'menu':
            menu('menu-2__tab', 'menu-2__tabs', 'menu__content');
            break;
        default:
            // Do Nothing
    }
});

// Google maps
function initMap() {
    const customMapStyles = [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f0bf72"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ];
    // The location of Maaji 48.0103052, 7.811446
    const maaji = { lat: 48.0103052, lng: 7.811446 };
    // The map, centered at Maaji
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: maaji,
        styles: customMapStyles,
    });
    // The marker, positioned at Maaji
    const marker = new google.maps.Marker({
        position: maaji,
        map: map,
    });
}

})();

/******/ })()
;
//# sourceMappingURL=bundle18d11dd2866fb77af598.js.map