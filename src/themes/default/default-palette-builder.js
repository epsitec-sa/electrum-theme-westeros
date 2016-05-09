'use strict';

import ColorManipulator from '../color-manipulator.js';

export default function (colors) {
  return {
    primary1Color: colors.lightBlue500,
    primary2Color: colors.lightBlue700,
    primary3Color: colors.lightBlue100,
    accent1Color: colors.pinkA200,
    accent2Color: colors.pinkA400,
    accent3Color: colors.pinkA100,
    textColor: colors.darkBlack,
    subTextColor: ColorManipulator.fade (colors.darkBlack, 0.54),
    canvasColor: colors.white,
    paperColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: ColorManipulator.fade (colors.darkBlack, 0.3),

    /* colors defined by Daniel Roux -- to be renamed */

    // Couleurs de base définies par Gilles :
    base:       '#336799',
    light:      '#ffffff',
    dark:       '#222222',

    // Couleurs turquoises :
    // base:       '#33997e',
    // light:      '#f2fffc',
    // dark:       '#10372c',

    // Couleurs pastels inversées :
    // base:       '#feebff',
    // light:      '#39173b',
    // dark:       '#ffffff',
  };
}
