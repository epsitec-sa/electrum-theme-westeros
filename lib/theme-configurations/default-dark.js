'use strict';

const Colors = require('../themes/colors/dark-colors.js');
const Spacing = require('../themes/spacings/default-spacing.js');
const Timing = require('../themes/timings/default-timing.js');
const Look = require('../themes/looks/dark-look.js');

const paletteBuilder = require('../themes/builders/default-palette-builder.js');
const shapesBuilder = require('../themes/builders/default-shapes-builder.js');
const transitionsBuilder = require('../themes/builders/default-transitions-builder.js');
const typoBuilder = require('../themes/builders/default-typo-builder.js');
const stylesBuilder = require('../themes/builders/default-styles-builder.js');

/******************************************************************************/

module.exports = {
  Colors,
  Spacing,
  Timing,
  Look,
  paletteBuilder,
  shapesBuilder,
  stylesBuilder,
  transitionsBuilder,
  typoBuilder,
};

/******************************************************************************/
