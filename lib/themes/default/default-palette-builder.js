import {darken, lighten, emphasize, fade} from '../color-manipulator.js';

/******************************************************************************/

function _darken (colors, color, coefficient) {
  if (colors.isDarkTheme) {
    return lighten (color, coefficient);
  } else {
    return darken (color, coefficient);
  }
}

function _lighten (colors, color, coefficient) {
  if (colors.isDarkTheme) {
    return darken (color, coefficient);
  } else {
    return lighten (color, coefficient);
  }
}

export default function (colors) {
  return {
    primary1Color: colors.lightBlue500,
    primary2Color: colors.lightBlue700,
    primary3Color: colors.lightBlue100,
    accent1Color: colors.pinkA200,
    accent2Color: colors.pinkA400,
    accent3Color: colors.pinkA100,
    textColor: colors.dark,
    hintTextColor: _lighten (colors, colors.dark, 0.8),
    subTextColor: fade (colors.darkBlack, 0.54),
    canvasColor: colors.white,
    paperColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade (colors.darkBlack, 0.3),

    /* colors settings defined by Daniel Roux */

    rootBackground: _darken (colors, colors.base, 0.4),

    taskBackground: _darken (colors, colors.base, 0.1),
    taskLogoBackground: colors.light,
    taskButtonBorder: _darken (colors, colors.base, 0.3),
    taskButtonBackground: _darken (colors, colors.base, 0.0),
    taskSeparatorBackground: _darken (colors, colors.base, 0.15),
    taskLabelText: _darken (colors, colors.dark, 1.0),

    taskTabInactiveBackground: colors.base,
    taskTabInactiveText: emphasize (colors.base, 1.0),
    taskTabActiveBackground: emphasize (colors.base, 0.3),
    taskTabActiveText: emphasize (emphasize (colors.base, 0.3), 1.0),

    mainTabBackground: _darken (colors, colors.light, 0.2),
    mainTabButtonInactiveBackground: _darken (colors, colors.light, 0.1),
    mainTabButtonActiveBackground: colors.light,
    mainTabText: emphasize (colors.light, 0.6),

    viewTabBackground: colors.dark,
    viewTabButtonInactiveBackground: _lighten (colors, colors.dark, 0.3),
    viewTabButtonActiveBackground: _darken (colors, colors.light, 0.05),
    viewTabGlyph: emphasize (colors.dark, 0.5),
    viewTabRightText: emphasize (colors.dark, 0.5),
    viewTabRightTextBackground: _lighten (colors, colors.dark, 0.1),

    actionBackground: colors.light,
    actionBorder: emphasize (colors.light, 0.2),
    actionButtonBackground: colors.base,

    roundButtonText: colors.light,
    roundButtonGlyph: colors.light,
    roundButtonBackground: emphasize (colors.light, 0.2),

    identityButtonText: colors.dark,
    identityButtonGlyph: colors.dark,
    identityButtonBackground: colors.light,

    subactionButtonBackground: _darken (colors, colors.light, 0.1),
    subactionButtonText: _lighten (colors, colors.dark, 0.5),

    footerBackground: colors.dark,
    footerTextBackground: _lighten (colors, colors.dark, 0.1),
    footerText: emphasize (colors.dark, 0.5),

    viewBackground: emphasize (colors.light, 0.05),

    paneNavigatorBackground: emphasize (colors.light, 0.05),
    paneNavigatorInactiveText: emphasize (colors.light, 0.4),
    paneNavigatorInactiveBorder: emphasize (colors.light, 0.2),
    paneNavigatorActiveBorder: emphasize (colors.light, 0.8),
    paneBackground: colors.light,
    paneNavigatorBorderHover: colors.base,
    paneHeaderBackground: _lighten (colors, colors.dark, 0.7),
    paneHeaderText: colors.light,
    paneSelectedBackground: _lighten (colors, colors.base, 0.6),
    paneSelectedText: _lighten (colors, colors.dark, 0.2),

    vnavigatorButtonBackground: _darken (colors, colors.base, 0.4),
    vnavigatorButtonInactiveBackground: colors.base,
    vnavigatorButtonActiveBackground: _lighten (colors, colors.base, 0.5),

    text: _lighten (colors, colors.dark, 0.2),
    highlightedText: emphasize (colors.dark, 0.1),
    highlightedTextBackground: emphasize (colors.base, 0.7),
    infoBackground: _darken (colors, colors.light, 0.2),
    buttonBackground: _lighten (colors, colors.light, 0.5),
    buttonBorder: _lighten (colors, colors.dark, 0.7),
    labelButtonBackground: _darken (colors, colors.light, 0.05),
    textFieldBackground: _lighten (colors, colors.light, 0.1),
    textFieldReadonlyBackground: _darken (colors, colors.light, 0.05),
    textFieldRequiredBackground: _lighten (colors, colors.alert, 0.8),
    textFieldDisableBackground: emphasize (colors.dark, 0.9),
    textFieldDisableText: emphasize (colors.dark, 0.7),

    buttonDisableBorder: emphasize (colors.dark, 0.5),
    buttonDisableBackground: emphasize (colors.dark, 0.8),
    buttonDisableGlyph: emphasize (colors.dark, 0.5),
    buttonDisableText: emphasize (colors.dark, 0.5),

    badgeBackground: colors.alert,
    badgeText: emphasize (colors.alert, 1.0),

    messageInfoBackground: colors.base,
    messageWarningBackground: colors.warning,
    messageInfoText: emphasize (colors.base, 1.0),
    messageWarningText: emphasize (colors.warning, 1.0),

    comboActiveBackground: colors.base,
    comboActiveGlyph: emphasize (colors.base, 1.0),
    comboItemBackground: colors.light,
    comboItemFocused: _darken (colors, colors.light, 0.05),
    comboItemActive: _darken (colors, colors.light, 0.15),
    comboItemHover: _darken (colors, colors.light, 0.05),

    calendarBackground: colors.light,
    calendarWeekendBackground: emphasize (colors.light, 0.05),
    calendarActiveBackground: colors.base,
    calendarActiveAddBackground: colors.success,
    calendarActiveSubBackground: _lighten (colors, colors.warning, 0.3),
    calendarText: colors.dark,
    calendarDimmedText: _lighten (colors, colors.dark, 0.8),
    calendarActiveText: colors.light,
    calendarActiveAddText: colors.light,
    calendarActiveSubText: colors.light,
    calendarHeaderText: colors.dark,

    recurrenceHeaderInfoCompactedBackground: emphasize (colors.light, 0.05),
    recurrenceHeaderInfoExtendedBackground: colors.base,
    recurrenceHeaderInfoCompactedText: colors.dark,
    recurrenceHeaderInfoExtendedText: colors.light,
    recurrenceExtendedBoxBackground: _lighten (colors, colors.base, 0.5),

    eventBoxBackground: _darken (colors, colors.light, 0.15),
    eventBackground: _darken (colors, colors.light, 0.05),
    eventOddBackground: _darken (colors, colors.light, 0.03),
    eventDowsBackground: _darken (colors, colors.light, 0.10),
    eventColumnBackground: colors.light,
    eventHeaderText: colors.dark,
    eventBorder: _lighten (colors, colors.dark, 0.8),
    chronoDayBackground: _darken (colors, colors.light, 0.15),
    chronoEventMainBackground: colors.base,
    chronoEventStartBackground: '#fbaf3b',
    chronoEventMiddleBackground: _darken (colors, colors.light, 0.15),
    chronoEventEndBackground: '#00963c',
    chronoLineSeparator: _darken (colors, colors.light, 0.15),
    chronoHover: _lighten (colors, colors.base, 0.85),
    chronoNavigatorBackground: _darken (colors, colors.base, 0.4),
    chronoNavigatorText: _darken (colors, colors.light, 0.3),
    chronoBadge: colors.base,
    chronoLabelSeparator: _darken (colors, colors.base, 0.4),
    chronoLabelTooltipBackground: _lighten (colors, colors.base, 0.7),

    markBase: colors.base,
    markPrimary: colors.alert,
    markSecondary: colors.warning,
    markSuccess: colors.success,
    markPick: '#fbaf3b',
    markDrop: '#00963c',
    markTask: _lighten (colors, colors.base, 0.2),

    menuBackground: colors.dark,
    menuText: _lighten (colors, colors.dark, 0.8),
    menuFocusText: _lighten (colors, colors.base, 0.4),
    menuItemInactiveBackground: _lighten (colors, colors.dark, 0.2),
    menuItemActiveBackground: _lighten (colors, colors.dark, 0.4),
    menuItemFocusBackground: colors.dark,

    flyingBalloonBackground: colors.dark,
    flyingBalloonWarningBackground: _darken (colors, colors.alert, 0.1),
    flyingBalloonText: colors.light,

    flyingDialogBackground: colors.light,

    ticketsBackground: emphasize (colors.light, 0.05),
    ticketBackground: colors.light,
    ticketShadow: emphasize (colors.light, 0.2),
    ticketDragAndDropShadow: emphasize (colors.light, 0.1),
    ticketDragAndDropHover: emphasize (colors.light, 0.1),
    ticketHover: colors.base,
    ticketTransitHover: emphasize (colors.base, 0.5),
    ticketGlueBackground: 'rgba(0, 0, 0, 0.08)',
    ticketMessengerBackground: _lighten (colors, colors.base, 0.5),
    ticketSelectedMessengerBackground: _darken (colors, colors.base, 0.1),
    ticketGlueTitle: emphasize (colors.dark, 1.0),
    ticketHatchOpacity: 0.1,
    ticketDimmed: emphasize (colors.light, 0.3),
    ticketWarningBackground: _lighten (colors, colors.warning, 0.3),
    ticketFlashBackground: _lighten (colors, colors.base, 0.85),
    ticketHilitedBackground: _lighten (colors, colors.base, 0.7),
    ticketDeliveredBackground: _lighten (colors, colors.success, 0.8),
    ticketHudContent: colors.light,
    ticketHudBackground: colors.base,
    ticketHudShadow: 'rgba(0, 0, 0, 0.2)',
    ticketBadgeBackground: _darken (colors, colors.light, 0.5),
    ticketNumberBackground: 'rgba(0, 0, 0, 0.1)',
    ticketSubpaneBorder: _darken (colors, colors.light, 0.3),

    warningBackground: colors.warning,
    warningText: colors.dark,

    dialogBackground: colors.light,

    floatingBackground: emphasize (colors.light, 0.05),
    floatingSecondary: emphasize (colors.light, 0.3),

    boxBackground: colors.light,
    boxActiveBackground: emphasize (colors.base, 0.7),

    notificationBackground: colors.dark,
    notificationText: emphasize (colors.dark, 0.5),
    notificationTextHover: emphasize (colors.dark, 0.8),
    notificationMessage: emphasize (colors.dark, 0.8),
    notificationBackgroundHeader: emphasize (colors.dark, 0.1),
    notificationBackgroundNotRead: emphasize (colors.dark, 0.1),
    notificationBackgroundRead: emphasize (colors.dark, 0.1),

    splitterBackground: _darken (colors, colors.base, 0.4),
    splitterBackgroundHover: _lighten (colors, colors.base, 0.3),

    dragAndDropHover: colors.base,
    roadbookBackground: emphasize (colors.light, 0.05),
    roadbookDragAndDropBackground: emphasize (colors.light, 0.2),
    roadbookDragAndDropHover: colors.base,

    tableCellBackground: colors.light,
    tableHoverBackground: _lighten (colors, colors.base, 0.85),
    tableSelectedBackground: colors.base,
    tableBorder: _darken (colors, colors.light, 0.2),
    tableSelectedText: colors.light,
    tableSuccessBackground: _lighten (colors, colors.success, 0.5),
    tableWarningBackground: _lighten (colors, colors.warning, 0.5),
    tableErrorBackground: colors.warning,

    chatMeBackground: '#aea',
    chatOtherBackground: '#eca',

    busyBackground: 'rgba(255, 255, 255, 0.8)',
    busyForeground: colors.dark,

    dynamicToolbarBackground: _lighten (colors, colors.dark, 0.1),
    dynamicToolbarButtonGlyph: _darken (colors, colors.light, 0.4),

    toolbarInactiveBackground: _lighten (colors, colors.dark, 0.1),
    toolbarInactiveText: _lighten (colors, colors.dark, 0.7),
    toolbarActiveBackground: colors.light,
    toolbarActiveText: _darken (colors, colors.light, 0.7),

    focused: fade (colors.base, 0.5),
    checkButtonTextHover: _lighten (colors, colors.base, 0.2),

    pluginToolbarEditBackground: colors.base,
    pluginToolbarReadonlyBackground: _darken (colors, colors.light, 0.2),
    pluginLightButtonGlyph: _lighten (colors, colors.dark, 0.2),
    pluginLightButtonGlyphHover: colors.light,
    pluginLightButtonBackgroundHover: 'rgba(0, 0, 0, 0.15)',
    pluginDarkButtonGlyph: _darken (colors, colors.light, 0.1),
    pluginDarkButtonGlyphHover: colors.light,
    pluginDarkButtonBackgroundHover: 'rgba(255, 255, 255, 0.2)',
  };
}

/******************************************************************************/
