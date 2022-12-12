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

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "TIMEOUT_SEC": () => (/* binding */ TIMEOUT_SEC)
/* harmony export */ });
const API_URL = '../menu.json';
const TIMEOUT_SEC = 10;


/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlMenu": () => (/* binding */ controlMenu)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/js/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/js/view.js");



const controlMenu = async function() {
    try {
        _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderSpinner();
        await _model_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu();
        const menuCats = _model_js__WEBPACK_IMPORTED_MODULE_0__.state.menuCategories;
        _view__WEBPACK_IMPORTED_MODULE_1__["default"].renderCatBar(menuCats);
        _view__WEBPACK_IMPORTED_MODULE_1__["default"].render(_model_js__WEBPACK_IMPORTED_MODULE_0__.state);
    } catch(err) {
        console.error(err);
    }
}

const init = function() {
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].addHandlerMenu(controlMenu);
}

init();


/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AJAX": () => (/* binding */ AJAX)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");


const timeout = function(seconds) {
    return new Promise(function(_, reject) {
        setTimeout(() => {
            reject(`Request took too long! Timeout after ${seconds} seconds.`);
        }, seconds * 1000);
    });
};

const AJAX = async function(url) {
    try {
        const fetchRequest = fetch(url);
        const response = await Promise.race([
            fetchRequest,
            timeout(_config_js__WEBPACK_IMPORTED_MODULE_0__.TIMEOUT_SEC)
        ]);
        const data = await response.json();
        if (!response.ok) throw new Error(`${data.message} (${response.status})`);
        return data;
    } catch(err) {
        throw err;
    }
};


/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu),
/* harmony export */   "state": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./src/js/config.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/js/helpers.js");



const state = {
    menuCategories: ["vorspeisen", "maaji"],
    menu: {}
};

const createDishObject = function(data) {
    const dish = data;
    return {
        dishName: dish.dish_name,
        dishNo: dish.dish_no,
        dishPrice: dish.dish_price,
        dishIngredients: dish.dish_ingredients,
        dishExtras: dish.dish_extras
    }
}

const loadMenu = async function() {
    try {
        const data = await (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.AJAX)(_config_js__WEBPACK_IMPORTED_MODULE_0__.API_URL);

        // data.vorspeisen.forEach(dish => {
        //     let newDish = createDishObject(dish);
        //     state.menu.vorspeisen.push(newDish);
        // });

        state.menu = data;

    } catch(err) {
        throw err;
    }
}


/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class View {

    #data;
    #errorMessage = "Bad Request. Please try again!";

    #bodyElement = document.querySelector('body');
    #pageId = this.#bodyElement.getAttribute('data-page-id');
    #menuCatElem = document.querySelector('.menu__tabs');
    #menuItemsElem = document.querySelector('.menu__content-container');

    render(data) {
        if (!data) return this.renderError();
        this.#data = data;

        const markup = this.#data.menuCategories.map(cat => this.#generateMarkup(this.#data.menu[cat], cat)).join('');

        this.#clear(this.#menuItemsElem);
        this.#menuItemsElem.insertAdjacentHTML('afterbegin', markup);
    }

    renderCatBar(data) {
        if (!data) return this.renderError();
        this.#data = data;

        const markup = this.#data.map(this.#generateCatBarMarkup).join('');

        this.#clear(this.#menuCatElem);
        this.#menuCatElem.insertAdjacentHTML('afterbegin', markup);
    }

    renderSpinner() {
        const markup = `
            <div class="spinner">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-loader" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                   <line x1="12" y1="6" x2="12" y2="3"></line>
                   <line x1="16.25" y1="7.75" x2="18.4" y2="5.6"></line>
                   <line x1="18" y1="12" x2="21" y2="12"></line>
                   <line x1="16.25" y1="16.25" x2="18.4" y2="18.4"></line>
                   <line x1="12" y1="18" x2="12" y2="21"></line>
                   <line x1="7.75" y1="16.25" x2="5.6" y2="18.4"></line>
                   <line x1="6" y1="12" x2="3" y2="12"></line>
                   <line x1="7.75" y1="7.75" x2="5.6" y2="5.6"></line>
                </svg>
            </div>
        `;

        this.#clear(this.#menuCatElem);
        this.#menuCatElem.insertAdjacentHTML('afterbegin', markup);
    }

    renderError() {
        const markup = `
            <div class="error">
                ${this.#errorMessage}
            </div>
        `;
    }

    #clear(elem) {
        elem.innerHTML = '';
    }

    #generateCatBarMarkup(cat) {
        return `
            <button class="btn btn--round menu__tab ${cat === 'vorspeisen' ? 'menu__tab--active' : ''} menu__tab--${cat}" data-tab="${cat}">${cat}</button>
        `;
    }

    #generateMarkup(data, cat) {
        return `
            <div class="menu__content ${cat === 'vorspeisen' ? 'menu__content--active' : ''} menu__content--${cat}">
                <div class="row">
                    ${data.map(this.#generateDishMarkup).join('')}
                </div>
            </div>
        `;
    }

    #generateDishMarkup(dish) {
        return `
            <div class="col-6 col-md-12">
                <div class="menu-2__item">
                    <div class="menu-2__item-desc">
                        <span class="menu-2__item-price u-margin-bottom-xs">${dish.dishPrice}€</span>
                        <h3 class="u-margin-bottom-xs">${dish.dishName}</h3>
                        <p class="menu-2__item-ingredients">
                            ${dish.dishIngredients.map(ing => ing).join(', ')}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }


    async addHandlerMenu(handler) {
        function menu(tab, container, content) {
            handler().then(() => {
                const tabs = document.querySelectorAll(`.${tab}`);
                const tabsContainer = document.querySelector(`.${container}`);
                const tabsContent = document.querySelectorAll(`.${content}`);

                tabsContainer.addEventListener('click', function(e) {
                    const clicked = e.target.closest(`.${tab}`);
                    if (!clicked) return;

                    // Add active class to the button that is clicked
                    // tabs.forEach((tab) => tab.classList.remove('menu__tab--active'));
                    tabs.forEach((tab) => {
                        tab.classList.remove('menu__tab--active');
                    });
                    clicked.classList.add('menu__tab--active');
                    console.log(tabs);

                    // Activate content area
                    tabsContent.forEach((tabContent) => tabContent.classList.remove('menu__content--active'));
                    document.querySelector(`.menu__content--${clicked.dataset.tab}`).classList.add('menu__content--active');
                });
            });
        }

        window.addEventListener('load', () => {
            switch(this.#pageId) {
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
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new View());


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
/* harmony import */ var _js_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/controller */ "./src/js/controller.js");





// import './assets/stories-video.mp4';


'use strict';

_js_controller__WEBPACK_IMPORTED_MODULE_5__.controlMenu();
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

        // Add active class to the button that is clicked
        tabs.forEach((tab) => tab.classList.remove('menu__tab--active'));
        clicked.classList.add('menu__tab--active');

        // Activate content area
        tabsContent.forEach((tabContent) => tabContent.classList.remove('menu__content--active'));
        document.querySelector(`.menu__content--${clicked.dataset.tab}`).classList.add('menu__content--active');
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
    switch(pageId) {
        case 'home':
            // menu('menu__tab', 'menu__tabs', 'menu__content');
            break;
        case 'menu':
            menu('menu-2__tab', 'menu-2__tabs', 'menu__content');
            break;
        default:
            // Do Nothing
    }
});

// Google maps
/*
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
*/

})();

/******/ })()
;
//# sourceMappingURL=bundleedfb69ef633c710c43fc.js.map