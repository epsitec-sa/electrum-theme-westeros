'use strict';

/******************************************************************************/

const {
  fade,
  lighten,
  darken,
  emphasize,
  getContrastRatio,
  getLuminance,
} = require('./themes/color-manipulator.js');

const {getMarkColor} = require('./themes/color-helpers.js');
const {multiply, add, sub, parse, fix} = require('./themes/unit.js');
const findTheme = require('./find-theme.js');

const {
  CompactMono,
  CompactPink,
  Default,
  DefaultCompact,
  DefaultGreen,
  DefaultPink,
  SpecialGreen,
  SmoothGreen,
  Shop,
  Horizon,
} = require('./theme-configurations.js');

const {Theme} = require('./theme.js');
const {Styles} = require('./styles.js');

/******************************************************************************/

const ColorManipulator = {
  fade,
  lighten,
  darken,
  emphasize,
  getContrastRatio,
  getLuminance,
};

const Unit = {multiply, add, sub, parse, fix};
const ColorHelpers = {getMarkColor};

const ThemeConfigurations = {
  CompactMono,
  CompactPink,
  Default,
  DefaultCompact,
  DefaultGreen,
  DefaultPink,
  SpecialGreen,
  SmoothGreen,
  Shop,
  Horizon,
};

/******************************************************************************/

module.exports = {
  Theme,
  Styles,

  ColorManipulator,
  ColorHelpers,
  findTheme,
  ThemeConfigurations,
  Unit,
};

/******************************************************************************/
