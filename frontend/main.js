'use strict';

import './main.styl';

function importAll (r) {
  r.keys().forEach(r);
}
importAll(require.context('./blocks/', true, /\.js$/));
