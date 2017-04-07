'use strict';

import './main.styl';
import '../node_modules/jquery-ui-bundle/jquery-ui.min';

function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./blocks/', true, /\.js$/));

