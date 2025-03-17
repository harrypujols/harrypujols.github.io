/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (( APP ) => {
  let components = document.querySelectorAll('[data-js]')
  components.forEach(( component ) => {
    Object.entries( APP.components ).forEach(( entry ) => {
      let [key, value] = entry
      if ( key == component.dataset.js ) {
        let directive = new value( component, APP )
        directive.init()
      }
    })
  })
});


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return   window.getComputedStyle( document.querySelector('body'), ':before')
          .getPropertyValue('content').replace(/\"/g, '')
});


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((callback, delay=66) => {
  var isResizing

  window.addEventListener('resize', ()=> {
    window.clearTimeout(isResizing);

    isResizing = setTimeout(()=> {
      callback();
    }, delay)
  }, false);
});


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((up, down) => {
  var position = window.pageYOffset
  || document.documentElement.scrollTop
  || document.body.scrollTop || 0
  var scroll

  window.addEventListener('scroll', ()=> {
    scroll = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop || 0

    if ( scroll > position ) {
      if( typeof down === 'function' && down() ) {
        down();
      }

    } else {
      if( typeof up === 'function' && up() ) {
        up();
      }
    }
    position = scroll;
  })
});


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((onStop, onScroll=false, delay=66) => {
  var isScrolling

  window.addEventListener('scroll', ()=> {

    if( typeof onScroll === 'function' && onScroll() ) {
      onScroll();
    }

    window.clearTimeout(isScrolling)

    isScrolling = setTimeout(()=> {
      if( typeof onStop === 'function' && onStop() ) {
        onStop();
      }
    }, delay);

  }, false);
});


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP, settings) => {
  console.log("Is this on?");

  if (localStorage.getItem("settings")) {
    let preferences = JSON.parse(localStorage.getItem("settings"));
    console.log("Preferences found:", preferences);
    return preferences;
  } else {
    APP.methods.store(settings);
    console.log("No settings found. Using default settings.");
    return settings;
  }
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((data) => {
  localStorage.setItem("settings", JSON.stringify(data));
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
    constructor ( element, APP ) {
      this.element = element
      this.breakpoint = APP.methods.breakpoint
    }
  
    init ( ) {
      this.element.innerHTML = this.breakpoint()
      window.addEventListener('resize', () => {
        this.element.innerHTML = this.breakpoint()
      })
    }
  });

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.inputs = document.getElementsByName("mode-switch");
    this.prefs = {};
    this.prefs.theme = "system";
  }

  switch() {
    this.element.addEventListener("click", (event) => {
      this.inputs.forEach((input) => {
        if (input !== event.target) {
          input.checked = false;
        }
      });

      if (event.target.checked === true) {
        this.prefs.theme = event.target.value;
      } else {
        this.prefs.theme = "system";
      }

      this.page.className = "";
      this.page.classList.add(this.prefs.theme);
      localStorage.setItem("prefs", JSON.stringify(this.prefs));
    });
  }

  store() {
    var retrieve = localStorage.getItem("prefs");

    if (retrieve == null || retrieve == "undefined") {
      localStorage.setItem("prefs", JSON.stringify(this.prefs));
    } else {
      if (JSON.parse(retrieve)["theme"] == null) {
        localStorage.clear();
        localStorage.setItem("prefs", JSON.stringify(this.prefs));
      } else {
        this.prefs = JSON.parse(retrieve);
      }
    }

    if (this.inputs.length > 0) {
      this.inputs.forEach((input) => {
        if (input.value === this.prefs.theme) {
          input.checked = true;
        }
      });
    }

    this.page.className = "";
    this.page.classList.add(this.prefs.theme);
  }

  init() {
    this.store();

    if (this.inputs.length > 0) {
      this.switch();
    }
  }
});


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.text = this.element.textContent;
    this.index = 0;
    this.typing = false;
  }

  init() {
    this.element.textContent = "";
    this.type();
  }

  type() {
    if (this.index < this.text.length) {
      this.typing = true;
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 100);
    } else {
      this.typing = false;
    }
  }
});


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"site":{"name":"harrypujols.com"},"settings":{"version":"1.0.0","mode":"system","language":"en","theme":"default"}}');

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.methods.components(APP);
  });
});


/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methods_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _methods_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _methods_resizestop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _methods_scrolldirection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _methods_scrollstop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _methods_retrieve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _methods_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _components_modeswitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
const FRAMEWORK = {};

















((window, APP) => {
  console.log("Initializing APP...");

  APP.methods = {
    components: _methods_components__WEBPACK_IMPORTED_MODULE_0__["default"],
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_1__["default"],
    resizestop: _methods_resizestop__WEBPACK_IMPORTED_MODULE_2__["default"],
    scrolldirection: _methods_scrolldirection__WEBPACK_IMPORTED_MODULE_3__["default"],
    scrollstop: _methods_scrollstop__WEBPACK_IMPORTED_MODULE_4__["default"],
    retrieve: _methods_retrieve__WEBPACK_IMPORTED_MODULE_5__["default"],
    store: _methods_store__WEBPACK_IMPORTED_MODULE_6__["default"],
  };

  APP.components = {
    size: _components_size__WEBPACK_IMPORTED_MODULE_7__["default"],
    modeswitch: _components_modeswitch__WEBPACK_IMPORTED_MODULE_8__["default"],
    typewriter: _components_typewriter__WEBPACK_IMPORTED_MODULE_9__["default"],
  };

  APP.data = _data_data_json__WEBPACK_IMPORTED_MODULE_10__;

  APP.start = {
    run: _app_run__WEBPACK_IMPORTED_MODULE_11__["default"],
  };

  // Retrieve settings on initialization
  console.log("Calling retrieve method...");
  APP.data.settings = APP.methods.retrieve(APP, APP.data.settings);
  console.log("Settings retrieved:", APP.data.settings);

  APP.start.run(APP);
  console.log("APP started.");
})(window, FRAMEWORK, undefined);

})();

/******/ })()
;