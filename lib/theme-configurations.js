'use strict';

const CompactMono = require('./theme-configurations/compact-mono.js');
const CompactPink = require('./theme-configurations/compact-pink.js');
const Default = require('./theme-configurations/default.js');
const DefaultCompact = require('./theme-configurations/default-compact.js');
const DefaultGreen = require('./theme-configurations/default-green.js');
const DefaultPink = require('./theme-configurations/default-pink.js');
const SpecialGreen = require('./theme-configurations/special-green.js');
const SmoothGreen = require('./theme-configurations/smooth-green.js');
const DefaultDark = require('./theme-configurations/default-dark.js');
const DefaultDragula = require('./theme-configurations/default-dragula.js');

const configList = {
  CompactMono,
  CompactPink,
  Default,
  DefaultCompact,
  DefaultGreen,
  DefaultPink,
  SpecialGreen,
  SmoothGreen,
  DefaultDark,
  DefaultDragula,
};

function addThemeConfig(themeName, themeConfig) {
  configList[themeName] = themeConfig;
}

/******************************************************************************/

module.exports = {addThemeConfig, configList};

/******************************************************************************/
