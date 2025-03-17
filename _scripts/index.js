const FRAMEWORK = {};

import components from "./methods/components";
import breakpoint from "./methods/breakpoint";
import resizestop from "./methods/resizestop";
import scrolldirection from "./methods/scrolldirection";
import scrollstop from "./methods/scrollstop";
import retrieve from "./methods/retrieve";
import store from "./methods/store";

import size from "./components/size";
import modeswitch from "./components/modeswitch";
import typewriter from "./components/typewriter";

import data from "./data/data.json";

import run from "./app/run";

((window, APP) => {
  console.log("Initializing APP...");

  APP.methods = {
    components,
    breakpoint,
    resizestop,
    scrolldirection,
    scrollstop,
    retrieve,
    store,
  };

  APP.components = {
    size,
    modeswitch,
    typewriter,
  };

  APP.data = data;

  APP.start = {
    run,
  };

  // Retrieve settings on initialization
  console.log("Calling retrieve method...");
  APP.data.settings = APP.methods.retrieve(APP, APP.data.settings);
  console.log("Settings retrieved:", APP.data.settings);

  APP.start.run(APP);
  console.log("APP started.");
})(window, FRAMEWORK, undefined);
