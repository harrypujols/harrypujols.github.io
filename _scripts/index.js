const FRAMEWORK = {};

import components from './methods/components';
import breakpoint from './methods/breakpoint';
import resizestop from './methods/resizestop';
import scrolldirection from './methods/scrolldirection';
import scrollstop from './methods/scrollstop';

import size from './components/size';
import modeswitch from './components/modeswitch';

import run from './app/run';

(( window, APP ) => {

  APP.methods = {
    components,
    breakpoint,
    resizestop,
    scrolldirection,
    scrollstop
  }

  APP.components = {
    size,
    modeswitch
  }

  APP.start = {
    run
  }

  APP.start.run( APP );

})( window, FRAMEWORK, undefined );