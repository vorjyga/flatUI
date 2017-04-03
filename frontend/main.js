'use strict';

import './main.styl';
import '../node_modules/jquery-ui-bundle/jquery-ui.min';
import '../node_modules/jquery-toggles/toggles.min'



function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./blocks/', true, /\.js$/));

