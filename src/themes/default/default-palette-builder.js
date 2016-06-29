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

    rootBackground:                   darken (colors.base, 0.4),

    taskBackground:                   colors.base,
    taskLogoBackground:               colors.light,
    taskButtonBorder:                 darken (colors.base, 0.3),
    taskButtonBackground:             colors.base,

    mainTabBackground:                darken (colors.light, 0.2),
    mainTabButtonInactiveBackground:  darken (colors.light, 0.1),
    mainTabButtonActiveBackground:    colors.light,
    mainTabText:                      emphasize (colors.light, 0.6),

    viewTabBackground:                colors.dark,
    viewTabButtonInactiveBackground:  lighten (colors.dark, 0.3),
    viewTabButtonActiveBackground:    darken (colors.light, 0.05),
    viewTabGlyph:                     emphasize (colors.dark, 0.5),

    actionBackground:                 colors.light,
    actionButtonBackground:           colors.base,

    subactionButtonBackground:        darken (colors.light, 0.1),
    subactionButtonText:              lighten (colors.dark, 0.5),

    footerBackground:                 colors.dark,
    footerTextBackground:             lighten (colors.dark, 0.1),
    footerText:                       emphasize (colors.dark, 0.5),

    viewBackground:                   darken (colors.light, 0.05),

    paneNavigatorBackground:          darken (colors.light, 0.05),
    paneNavigatorInactiveText:        emphasize (colors.light, 0.4),
    paneNavigatorInactiveBorder:      emphasize (colors.light, 0.2),
    paneNavigatorActiveBorder:        emphasize (colors.light, 0.8),
    paneBackground:                   colors.light,
    paneNavigatorBorderHover:         colors.base,
    paneHeaderBackground:             lighten (colors.dark, 0.5),
    paneHeaderText:                   colors.light,

    text:                             lighten (colors.dark, 0.2),
    infoBackground:                   darken (colors.light, 0.2),
    buttonBackground:                 lighten (colors.light, 0.5),
    buttonBorder:                     lighten (colors.dark, 0.5),
    labelButtonBackground:            darken (colors.light, 0.05),

    buttonDisableBorder:              emphasize (colors.dark, 0.5),
    buttonDisableBackground:          emphasize (colors.dark, 0.8),
    buttonDisableGlyph:               emphasize (colors.dark, 0.5),
    buttonDisableText:                emphasize (colors.dark, 0.5),

    badgeBackground:                  colors.badge,
    badgeText:                        emphasize (colors.badge, 1.0),

    tooltipBackground:                colors.base,
    tooltipText:                      emphasize (colors.base, 1.0),

    comboActiveBackground:            colors.base,
    comboActiveGlyph:                 emphasize (colors.base, 1.0),

    calendarBackground:               colors.base,
    calendarButtonInactiveBackground: colors.light,
    calendarButtonActiveBackground:   lighten (colors.base, 0.7),
    calendarInactiveText:             emphasize (colors.light, 1.0),
    calendarActiveText:               emphasize (lighten (colors.base, 0.7), 1.0),
    calendarHeaderText:               emphasize (colors.dark, 1.0),

    markPrimary:                      colors.badge,
    markSecondary:                    colors.base,
  };
}
