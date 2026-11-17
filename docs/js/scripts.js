const FRAMEWORK = {};

import breakpoint from "./directives/breakpoint.js";
import resizestop from "./directives/resizestop.js";
import retrieve from "./directives/retrieve.js";
import render from "./directives/render.js"
import components from "./app/components.js";
import run from "./app/run.js";
import test from "./components/test.js";
import slideshow from "./components/slideshow.js";

((window, APP) => {
  APP.directives = {
    components,
    breakpoint,
    resizestop,
    retrieve,
    render,
  };

  APP.components = {
    test,
    slideshow,
  };

  APP.start = {
    run,
  };

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
