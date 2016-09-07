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

    rootBackground:                     darken (colors.base, 0.4),

    taskBackground:                     colors.base,
    taskLogoBackground:                 colors.light,
    taskButtonBorder:                   darken (colors.base, 0.3),
    taskButtonBackground:               colors.base,
    taskSeparatorBackground:            darken (colors.base, 0.4),
    taskLabelText:                      darken (colors.dark, 1.0),

    taskTabInactiveBackground:          colors.base,
    taskTabInactiveText:                emphasize (colors.base, 1.0),
    taskTabActiveBackground:            emphasize (colors.base, 0.3),
    taskTabActiveText:                  emphasize (emphasize (colors.base, 0.3), 1.0),

    mainTabBackground:                  darken (colors.light, 0.2),
    mainTabButtonInactiveBackground:    darken (colors.light, 0.1),
    mainTabButtonActiveBackground:      colors.light,
    mainTabText:                        emphasize (colors.light, 0.6),

    viewTabBackground:                  colors.dark,
    viewTabButtonInactiveBackground:    lighten (colors.dark, 0.3),
    viewTabButtonActiveBackground:      darken (colors.light, 0.05),
    viewTabGlyph:                       emphasize (colors.dark, 0.5),

    actionBackground:                   colors.light,
    actionBorder:                       emphasize (colors.light, 0.2),
    actionButtonBackground:             colors.base,

    roundButtonText:                    colors.light,
    roundButtonGlyph:                   colors.light,
    roundButtonBackground:              emphasize (colors.light, 0.2),

    identityButtonText:                 colors.dark,
    identityButtonGlyph:                colors.dark,
    identityButtonBackground:           colors.light,

    subactionButtonBackground:          darken (colors.light, 0.1),
    subactionButtonText:                lighten (colors.dark, 0.5),

    footerBackground:                   colors.dark,
    footerTextBackground:               lighten (colors.dark, 0.1),
    footerText:                         emphasize (colors.dark, 0.5),

    viewBackground:                     darken (colors.light, 0.05),

    paneNavigatorBackground:            darken (colors.light, 0.05),
    paneNavigatorInactiveText:          emphasize (colors.light, 0.4),
    paneNavigatorInactiveBorder:        emphasize (colors.light, 0.2),
    paneNavigatorActiveBorder:          emphasize (colors.light, 0.8),
    paneBackground:                     colors.light,
    paneNavigatorBorderHover:           colors.base,
    paneHeaderBackground:               lighten (colors.dark, 0.5),
    paneHeaderText:                     colors.light,

    vnavigatorButtonBackground:         darken (colors.base, 0.4),
    vnavigatorButtonInactiveBackground: colors.base,
    vnavigatorButtonActiveBackground:   lighten (colors.base, 0.5),

    text:                               lighten (colors.dark, 0.2),
    infoBackground:                     darken (colors.light, 0.2),
    buttonBackground:                   lighten (colors.light, 0.5),
    buttonBorder:                       lighten (colors.dark, 0.5),
    labelButtonBackground:              darken (colors.light, 0.05),
    textFieldBackground:                '#fff',  // default value for input background

    buttonDisableBorder:                emphasize (colors.dark, 0.5),
    buttonDisableBackground:            emphasize (colors.dark, 0.8),
    buttonDisableGlyph:                 emphasize (colors.dark, 0.5),
    buttonDisableText:                  emphasize (colors.dark, 0.5),

    badgeBackground:                    colors.alert,
    badgeText:                          emphasize (colors.alert, 1.0),

    messageInfoBackground:              colors.base,
    messageWarningBackground:           colors.warning,
    messageInfoText:                    emphasize (colors.base, 1.0),
    messageWarningText:                 emphasize (colors.warning, 1.0),

    comboActiveBackground:              colors.base,
    comboActiveGlyph:                   emphasize (colors.base, 1.0),

    calendarBackground:                 colors.light,
    calendarButtonInactiveBackground:   colors.light,
    calendarButtonActiveBackground:     colors.base,
    calendarButtonWeekendBackground:    emphasize (colors.light, 0.05),
    calendarInactiveText:               colors.dark,
    calendarActiveText:                 colors.light,
    calendarHiddenText:                 emphasize (colors.dark, 0.7),
    calendarHeaderText:                 colors.dark,

    markPrimary:                        colors.alert,
    markSecondary:                      colors.warning,

    menuBackground:                     colors.dark,
    menuItemBackground:                 lighten (colors.dark, 0.1),
    menuItemText:                       emphasize (colors.dark, 0.5),

    flyingBalloonBackground:            colors.dark,
    flyingBalloonText:                  colors.light,

    ticketsBackground:                  emphasize (colors.light, 0.05),
    ticketBackground:                   colors.light,
    ticketHeaderBackground:             lighten (colors.base, 0.6),
    ticketShadow:                       emphasize (colors.light, 0.1),

    warningBackground:                  colors.warning,
    warningText:                        colors.dark,

    dialogBackground:                   colors.light,

    floatingBackground:                 colors.light,
    floatingSecondary:                  emphasize (colors.light, 0.3),

    boxBackground:                      colors.light,
  };
}
