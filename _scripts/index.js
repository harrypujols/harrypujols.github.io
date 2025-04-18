const FRAMEWORK = {};

import components from "./methods/components";
import breakpoint from "./methods/breakpoint";
import resizestop from "./methods/resizestop";
import scrolldirection from "./methods/scrolldirection";
import scrollstop from "./methods/scrollstop";
import retrieve from "./methods/retrieve";
import store from "./methods/store";
import settings from "./methods/settings";
import isinviewport from "./methods/isinviewport";

import size from "./components/size";
import typewriter from "./components/typewriter";
import modeswitch from "./components/modeswitch";
import themeswitch from "./components/themeswitch";
import divider from "./components/divider";
import navigation from "./components/navigation";

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
    themeswitch,
    divider,
    isinviewport,
    navigation,
  };

  APP.data = data;

  APP.start = {
    run,
  };

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
