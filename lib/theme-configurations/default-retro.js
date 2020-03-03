'use strict';

const Colors = require('../themes/default/default-colors.js');
const Spacing = require('../themes/spacings/rounded-spacing.js');
const Timing = require('../themes/default/default-timing.js');
const Look = require('../themes/looks/retro-look.js');

const paletteBuilder = require('../themes/default/default-palette-builder.js');
const shapesBuilder = require('../themes/default/default-shapes-builder.js');
const transitionsBuilder = require('../themes/default/default-transitions-builder.js');
const typoBuilder = require('../themes/default/default-typo-builder.js');
const stylesBuilder = require('../themes/default/default-styles-builder.js');

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