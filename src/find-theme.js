'use strict';

import configurations from './theme-configurations.js';

/******************************************************************************/

export default function find (name) {
  name = name.toLowerCase ().replace ('-', '');
  const keys = Object.keys (configurations);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.toLowerCase  () === name) {
      return configurations[key];
    }
  }
  return configurations.Default;
}

/******************************************************************************/
