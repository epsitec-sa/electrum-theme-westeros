/******************************************************************************/

import {fade, lighten, darken, emphasize, getContrastRatio, getLuminance} from './themes/color-manipulator.js';

import {getMarkColor} from './themes/color-helpers.js';
import {multiply, add, sub, parse, fix} from './themes/unit.js';
import findTheme from './find-theme.js';

import {
  CompactMono,
  CompactPink,
  Default,
  DefaultGreen,
  DefaultPink,
  SpecialGreen,
  SmoothGreen,
} from './theme-configurations.js';

import {Theme} from './theme.js';
import {Styles} from './styles.js';

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
  DefaultGreen,
  DefaultPink,
  SpecialGreen,
  SmoothGreen,
};

/******************************************************************************/

export {Theme};
export {Styles};

export {ColorManipulator};
export {ColorHelpers};
export {findTheme};
export {ThemeConfigurations};
export {Unit};

/******************************************************************************/
