const FRAMEWORK = {};

import components from "./methods/components";
import breakpoint from "./methods/breakpoint";
import resizestop from "./methods/resizestop";
import scrolldirection from "./methods/scrolldirection";
import scrollstop from "./methods/scrollstop";
import retrieve from "./methods/retrieve";
import store from "./methods/store";
import settings from "./methods/settings";

import size from "./components/size";
import typewriter from "./components/typewriter";
import modeswitch from "./components/modeswitch";
import divider from "./components/divider";

import data from "./data/data.json";

import run from "./app/run";

((window, APP) => {
  APP.methods = {
    components,
    breakpoint,
    resizestop,
    scrolldirection,
    scrollstop,
    retrieve,
    store,
    settings,
  };

  APP.components = {
    size,
    modeswitch,
    typewriter,
    modeswitch,
    divider,
  };

  APP.data = data;

  APP.start = {
    run,
  };

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
