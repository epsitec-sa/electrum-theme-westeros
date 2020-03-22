'use strict';

const CompactMono = require('./theme-configurations/compact-mono.js');
const CompactPink = require('./theme-configurations/compact-pink.js');
const Default = require('./theme-configurations/default.js');
const DefaultCompact = require('./theme-configurations/default-compact.js');
const DefaultGreen = require('./theme-configurations/default-green.js');
const DefaultRed = require('./theme-configurations/default-red.js');
const DefaultPink = require('./theme-configurations/default-pink.js');
const SpecialGreen = require('./theme-configurations/special-green.js');
const SmoothGreen = require('./theme-configurations/smooth-green.js');
const DefaultDark = require('./theme-configurations/default-dark.js');
const DefaultDragula = require('./theme-configurations/default-dragula.js');
const DefaultRetro = require('./theme-configurations/default-retro.js');
const SteampunkRetro = require('./theme-configurations/steampunk-retro.js');

const configList = {
  CompactMono,
  CompactPink,
  Default,
  DefaultCompact,
  DefaultGreen,
  DefaultRed,
  DefaultPink,
  SpecialGreen,
  SmoothGreen,
  DefaultDark,
  DefaultDragula,
  DefaultRetro,
  SteampunkRetro,
};

function addThemeConfig(themeName, themeConfig) {
  configList[themeName] = themeConfig;
}

/******************************************************************************/

module.exports = {addThemeConfig, configList};

/******************************************************************************/
