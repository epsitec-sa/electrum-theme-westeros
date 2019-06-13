'use strict';

const {configList} = require('./theme-configurations.js');

/******************************************************************************/

module.exports = function find(name) {
  name = name.toLowerCase().replace('-', '');
  const keys = Object.keys(configList);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.toLowerCase() === name) {
      return configList[key];
    }
  }
  return configList.Default;
};

/******************************************************************************/
