/******************************************************************************/

import {darken, lighten, emphasize, fade} from '../color-manipulator.js';

/******************************************************************************/

export default function (colors) {
  return {
    primary1Color: colors.lightBlue500,
    primary2Color: colors.lightBlue700,
    primary3Color: colors.lightBlue100,
    accent1Color: colors.pinkA200,
    accent2Color: colors.pinkA400,
    accent3Color: colors.pinkA100,
    textColor: colors.darkBlack,
    subTextColor: fade (colors.darkBlack, 0.54),
    canvasColor: colors.white,
    paperColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade (colors.darkBlack, 0.3),

    /* colors settings defined by Daniel Roux */

    rootBackground: darken (colors.base, 0.4),

    taskBackground: colors.base,
    taskLogoBackground: colors.light,
    taskButtonBorder: darken (colors.base, 0.3),
    taskButtonBackground: colors.base,
    taskSeparatorBackground: darken (colors.base, 0.4),
    taskLabelText: darken (colors.dark, 1.0),

    taskTabInactiveBackground: colors.base,
    taskTabInactiveText: emphasize (colors.base, 1.0),
    taskTabActiveBackground: emphasize (colors.base, 0.3),
    taskTabActiveText: emphasize (emphasize (colors.base, 0.3), 1.0),

    mainTabBackground: darken (colors.light, 0.2),
    mainTabButtonInactiveBackground: darken (colors.light, 0.1),
    mainTabButtonActiveBackground: colors.light,
    mainTabText: emphasize (colors.light, 0.6),

    viewTabBackground: colors.dark,
    viewTabButtonInactiveBackground: lighten (colors.dark, 0.3),
    viewTabButtonActiveBackground: darken (colors.light, 0.05),
    viewTabGlyph: emphasize (colors.dark, 0.5),
    viewTabRightText: emphasize (colors.dark, 0.5),
    viewTabRightTextBackground: lighten (colors.dark, 0.1),

    actionBackground: colors.light,
    actionBorder: emphasize (colors.light, 0.2),
    actionButtonBackground: colors.base,

    roundButtonText: colors.light,
    roundButtonGlyph: colors.light,
    roundButtonBackground: emphasize (colors.light, 0.2),

    identityButtonText: colors.dark,
    identityButtonGlyph: colors.dark,
    identityButtonBackground: colors.light,

    subactionButtonBackground: darken (colors.light, 0.1),
    subactionButtonText: lighten (colors.dark, 0.5),

    footerBackground: colors.dark,
    footerTextBackground: lighten (colors.dark, 0.1),
    footerText: emphasize (colors.dark, 0.5),

    viewBackground: emphasize (colors.light, 0.05),

    paneNavigatorBackground: emphasize (colors.light, 0.05),
    paneNavigatorInactiveText: emphasize (colors.light, 0.4),
    paneNavigatorInactiveBorder: emphasize (colors.light, 0.2),
    paneNavigatorActiveBorder: emphasize (colors.light, 0.8),
    paneBackground: colors.light,
    paneNavigatorBorderHover: colors.base,
    paneHeaderBackground: lighten (colors.dark, 0.5),
    paneHeaderText: colors.light,
    paneSelectedBackground: lighten (colors.base, 0.6),
    paneSelectedText: lighten (colors.dark, 0.2),

    vnavigatorButtonBackground: darken (colors.base, 0.4),
    vnavigatorButtonInactiveBackground: colors.base,
    vnavigatorButtonActiveBackground: lighten (colors.base, 0.5),

    text: lighten (colors.dark, 0.2),
    highlightedText: emphasize (colors.dark, 0.1),
    highlightedTextBackground: emphasize (colors.base, 0.7),
    infoBackground: darken (colors.light, 0.2),
    buttonBackground: lighten (colors.light, 0.5),
    buttonBorder: lighten (colors.dark, 0.7),
    labelButtonBackground: darken (colors.light, 0.05),
    textFieldBackground: '#fff', // default value for input background
    textFieldReadonlyBackground: darken (colors.light, 0.05),

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
    comboItemFocused: darken (colors.light, 0.05),
    comboItemActive: darken (colors.light, 0.15),
    comboItemHover: darken (colors.light, 0.05),

    calendarBackground: colors.light,
    calendarWeekendBackground: emphasize (colors.light, 0.05),
    calendarActiveBackground: colors.base,
    calendarText: colors.dark,
    calendarDimmedText: lighten (colors.dark, 0.8),
    calendarActiveText: colors.light,
    calendarHeaderText: colors.dark,

    recurrenceHeaderInfoCompactedBackground: emphasize (colors.light, 0.05),
    recurrenceHeaderInfoExtendedBackground: colors.base,
    recurrenceHeaderInfoCompactedText: colors.dark,
    recurrenceHeaderInfoExtendedText: colors.light,
    recurrenceExtendedBoxBackground: lighten (colors.base, 0.5),

    eventBoxBackground: darken (colors.light, 0.15),
    eventBackground: darken (colors.light, 0.05),
    eventOddBackground: darken (colors.light, 0.03),
    eventDowsBackground: darken (colors.light, 0.10),
    eventColumnBackground: colors.light,
    eventHeaderText: colors.dark,
    eventBorder: lighten (colors.dark, 0.8),
    chronoDayBackground: darken (colors.light, 0.15),
    chronoEventMainBackground: colors.base,
    chronoEventStartBackground: '#fbaf3b',
    chronoEventMiddleBackground: darken (colors.light, 0.15),
    chronoEventEndBackground: '#00963c',
    chronoLineSeparator: darken (colors.light, 0.15),
    chronoHover: lighten (colors.base, 0.85),
    chronoNavigatorBackground: darken (colors.base, 0.4),
    chronoNavigatorText: darken (colors.light, 0.3),
    chronoBadge: colors.base,
    chronoLabelSeparator: darken (colors.base, 0.4),
    chronoLabelTooltipBackground: lighten (colors.base, 0.7),

    markBase: colors.base,
    markPrimary: colors.alert,
    markSecondary: colors.warning,
    markSuccess: colors.success,
    markPick: '#fbaf3b',
    markDrop: '#00963c',
    markTask: lighten (colors.base, 0.2),

    menuBackground: colors.dark,
    menuText: lighten (colors.dark, 0.8),
    menuFocusText: lighten (colors.base, 0.4),
    menuItemInactiveBackground: lighten (colors.dark, 0.2),
    menuItemActiveBackground: lighten (colors.dark, 0.4),
    menuItemFocusBackground: colors.dark,

    flyingBalloonBackground: colors.dark,
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
    ticketMessengerBackground: lighten (colors.base, 0.5),
    ticketSelectedMessengerBackground: darken (colors.base, 0.1),
    ticketGlueTitle: emphasize (colors.dark, 1.0),
    ticketHatchOpacity: 0.1,
    ticketDimmed: emphasize (colors.light, 0.3),
    ticketWarningBackground: lighten (colors.warning, 0.3),
    ticketFlashBackground: lighten (colors.base, 0.85),
    ticketDeliveredBackground: lighten (colors.success, 0.8),
    ticketHudContent: colors.light,
    ticketHudBackground: colors.base,
    ticketHudShadow: 'rgba(0, 0, 0, 0.2)',
    ticketBadgeBackground: darken (colors.light, 0.5),
    ticketNumberBackground: 'rgba(0, 0, 0, 0.1)',
    ticketSubpaneBorder: darken (colors.light, 0.3),

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

    splitterBackground: darken (colors.base, 0.4),
    splitterBackgroundHover: lighten (colors.base, 0.3),

    dragAndDropHover: colors.base,
    roadbookBackground: emphasize (colors.light, 0.05),
    roadbookDragAndDropBackground: emphasize (colors.light, 0.2),
    roadbookDragAndDropHover: colors.base,

    tableCellBackground: colors.light,
    tableHoverBackground: lighten (colors.base, 0.85),
    tableSelectedBackground: colors.base,
    tableBorder: darken (colors.light, 0.2),
    tableSelectedText: colors.light,

    chatMeBackground: '#aea',
    chatOtherBackground: '#eca',
  };
}

/******************************************************************************/
