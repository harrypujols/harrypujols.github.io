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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP, data) => {
  if (localStorage.getItem("settings")) {
    let preferences = JSON.parse(localStorage.getItem("settings"));
    console.log("Preferences found:", preferences);
    return preferences;
  } else {
    APP.methods.store(data);
    console.log("No settings found. Using default settings.");
    return data;
  }
});


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((settings) => {
  localStorage.setItem("settings", JSON.stringify(settings));
});


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP) => {
  const defaults = APP.methods.retrieve(APP, APP.data.settings);
  let page = document.querySelector("html");

  page.classList.add(`theme-${defaults.theme}`);
  page.classList.add(`mode-${defaults.mode}`);

  // Uncomment if font size customization is needed
  // page.style.setProperty("--font-size", defaults.fontSize);
});


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((element) => {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.target === element) {
          if (entry.isIntersecting) {
            resolve(true); // Element is in the viewport
          } else {
            resolve(false); // Element is not in the viewport
          }
          observer.disconnect(); // Stop observing once the result is determined
        }
      });
    });

    // Start observing the element
    observer.observe(element);
  });
});


/***/ }),
/* 10 */
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
/* 11 */
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
    this.scrolltrigger = new APP.components.scrolltrigger(element, APP);
  }

  init() {
    this.element.textContent = "";
    this.scrolltrigger.init();

    if (this.scrolltrigger.init() && !this.typing) {
      this.type();
    }
  }

  type() {
    if (this.index < this.text.length) {
      this.typing = true;
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      this.element.classList.add("is-typing");

      https: setTimeout(() => this.type(), 100);
    } else {
      this.typing = false;
      this.element.classList.remove("is-typing");
    }
  }
});


/***/ }),
/* 12 */
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
    this.prefs = APP.methods.retrieve(APP, APP.data.settings);
    this.APP = APP;
  }

  init() {
    // Set initial mode based on preferences
    this.page.classList.add(`mode-${this.prefs.mode}`);

    // Set the range input value based on the stored preferences
    switch (this.prefs.mode) {
      case "light":
        this.element.value = "1";
        break;
      case "system":
        this.element.value = "2";
        break;
      case "dark":
        this.element.value = "3";
        break;
      default:
        this.element.value = "1";
    }

    // Add event listener to the range input field
    this.element.addEventListener("input", (event) => {
      let mode;
      switch (event.target.value) {
        case "1":
          mode = "light";
          break;
        case "2":
          mode = "system";
          break;
        case "3":
          mode = "dark";
          break;
        default:
          mode = "light";
      }

      // Update the settings object
      this.prefs.mode = mode;

      // Save the updated settings using the store method
      this.APP.methods.store(this.prefs);

      // Update the page class
      this.page.classList.remove("mode-light", "mode-system", "mode-dark");
      this.page.classList.add(`mode-${mode}`);
    });
  }
});


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.page = document.documentElement;
    this.prefs = APP.methods.retrieve(APP, APP.data.settings);
    this.APP = APP;
    this.radioButtons = this.element.querySelectorAll(
      'input[type="radio"][name="theme"]'
    );
  }

  init() {
    // Set the initial theme based on preferences
    this.setTheme(this.prefs.theme);

    // Check the radio button that matches the current theme
    this.radioButtons.forEach((radio) => {
      if (radio.value === this.prefs.theme) {
        radio.checked = true;
      }

      // Add event listener to update theme on change
      radio.addEventListener("change", (event) => {
        const newTheme = event.target.value;
        this.setTheme(newTheme);

        // Save the new theme to settings
        this.prefs.theme = newTheme;
        this.APP.methods.store(this.prefs);
      });
    });
  }

  setTheme(theme) {
    // Remove any existing theme classes dynamically
    this.radioButtons.forEach((radio) => {
      this.page.classList.remove(`theme-${radio.value}`);
    });

    // Add the new theme class
    this.page.classList.add(`theme-${theme}`);
  }
});


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.resize = APP.methods.resizestop;
    this.character = this.element.dataset.character || "*";
    this.characterAdjust = this.element.dataset.adjust || 0;
  }

  updateCharacter() {
    const characterCount =
      Math.floor(this.width / this.characterWidth()) - this.characterAdjust;
    const repeatedCharacters = this.character.repeat(characterCount);
    this.element.innerHTML = repeatedCharacters;
  }

  characterWidth() {
    // Create a temporary element to measure the width in ch units
    const tempElement = document.createElement("div");
    tempElement.style.width = "1ch";
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    document.body.appendChild(tempElement);

    const characterWidth = tempElement.offsetWidth;
    document.body.removeChild(tempElement);
    return characterWidth;
  }

  init() {
    this.updateCharacter();

    this.resize(() => {
      this.width = this.element.offsetWidth;
      this.updateCharacter();
    }, 45);
  }
});


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  constructor(element, APP) {
    this.element = element;
    this.APP = APP;
    this.scroll = APP.methods.scrollstop;
    this.links = this.element.querySelectorAll(".js-nav-link");
    this.isInViewport = APP.methods.isInViewport;
    this.intro = document.querySelector("#intro");
  }

  async makeActive() {
    for (const link of this.links) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        const isVisible = await this.isInViewport(target);
        if (isVisible) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      }
    }
  }

  async isVisible() {
    if (this.intro) {
      const isVisible = await this.isInViewport(this.intro);
      if (!isVisible) {
        this.element.classList.add("is-visible");
      } else {
        this.element.classList.remove("is-visible");
      }
    }
  }

  init() {
    // this.makeActive();
    this.isVisible();

    this.scroll(() => {
      this.makeActive();
      this.isVisible();
    }, 15);
  }
});


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"site":{"name":"harrypujols.com"},"settings":{"version":"1.0.0","mode":"system","language":"en","theme":"default"}}');

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.methods.components(APP);
    APP.methods.settings(APP);
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
/* harmony import */ var _methods_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _methods_isinviewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _components_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _components_modeswitch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _components_themeswitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
/* harmony import */ var _components_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(15);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16);
/* harmony import */ var _app_run__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17);
const FRAMEWORK = {};






















((window, APP) => {
  APP.methods = {
    components: _methods_components__WEBPACK_IMPORTED_MODULE_0__["default"],
    breakpoint: _methods_breakpoint__WEBPACK_IMPORTED_MODULE_1__["default"],
    resizestop: _methods_resizestop__WEBPACK_IMPORTED_MODULE_2__["default"],
    scrolldirection: _methods_scrolldirection__WEBPACK_IMPORTED_MODULE_3__["default"],
    scrollstop: _methods_scrollstop__WEBPACK_IMPORTED_MODULE_4__["default"],
    retrieve: _methods_retrieve__WEBPACK_IMPORTED_MODULE_5__["default"],
    store: _methods_store__WEBPACK_IMPORTED_MODULE_6__["default"],
    settings: _methods_settings__WEBPACK_IMPORTED_MODULE_7__["default"],
    isInViewport: _methods_isinviewport__WEBPACK_IMPORTED_MODULE_8__["default"],
  };

  APP.components = {
    size: _components_size__WEBPACK_IMPORTED_MODULE_9__["default"],
    modeswitch: _components_modeswitch__WEBPACK_IMPORTED_MODULE_11__["default"],
    typewriter: _components_typewriter__WEBPACK_IMPORTED_MODULE_10__["default"],
    modeswitch: _components_modeswitch__WEBPACK_IMPORTED_MODULE_11__["default"],
    themeswitch: _components_themeswitch__WEBPACK_IMPORTED_MODULE_12__["default"],
    divider: _components_divider__WEBPACK_IMPORTED_MODULE_13__["default"],
    navigation: _components_navigation__WEBPACK_IMPORTED_MODULE_14__["default"],
  };

  APP.data = _data_data_json__WEBPACK_IMPORTED_MODULE_15__;

  APP.start = {
    run: _app_run__WEBPACK_IMPORTED_MODULE_16__["default"],
  };

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);

})();

/******/ })()
;