'use strict';

import ColorManipulator from '../color-manipulator.js';

const {fade, darken, lighten, emphasize} = ColorManipulator;

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

    /* colors settings defined by Daniel Roux */

    rootBackground:                  darken (colors.base, 0.4),

    taskBackground:                  colors.base,
    taskLogoBackground:              colors.light,
    taskButtonBorderColor:           darken (colors.base, 0.3),
    taskButtonBackgroundColor:       colors.base,

    mainTabBackground:               darken (colors.light, 0.2),
    mainTabButtonInactiveBackground: darken (colors.light, 0.1),
    mainTabButtonActiveBackground:   colors.light,

    viewTabBackground:               colors.dark,
    viewTabButtonInactiveBackground: lighten (colors.dark, 0.2),
    viewTabButtonActiveBackground:   darken (colors.light, 0.05),

    actionBackground:                colors.light,
    actionButtonBackground:          colors.base,

    footerBackground:                colors.dark,
    footerTextBackground:            lighten (colors.dark, 0.1),
    footerText:                      emphasize (colors.dark, 0.5),

    viewBackground:                  darken (colors.light, 0.05),

    paneNavigatorBackground:         darken (colors.light, 0.05),
    paneNavigatorInactiveBorder:     emphasize (colors.light, 0.2),
    paneNavigatorActiveBorder:       emphasize (colors.light, 0.8),
    paneBackground:                  colors.light,

    text:                            lighten (colors.dark, 0.2),
    infoBackground:                  darken (colors.light, 0.1),
    buttonBackground:                lighten (colors.light, 0.5),
    buttonBorder:                    lighten (colors.dark, 0.5),
    labelButtonBackground:           darken (colors.light, 0.1),
  };
}
