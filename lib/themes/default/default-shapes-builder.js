import {multiply} from '../unit.js';
import {add} from '../unit.js';

/******************************************************************************/

export default function(spacing) {
  return {
    defaultBorderRadius: 2,

    /* geometry settings defined by Daniel Roux */

    lineHeight: spacing.lineHeight,
    containerMargin: spacing.containerMargin,
    lineSpacing: spacing.lineSpacing,
    smoothRadius: spacing.smoothRadius,

    taskButtonWidth: multiply(spacing.lineHeight, 2.5),
    taskButtonHeight: multiply(spacing.lineHeight, 2.5),
    taskLogoTextSize: '80%',
    taskLogoGlyphSize: '200%',
    taskTextSize: '80%',
    taskGlyphSize: '125%',
    taskShadow: '0px 0px 60px rgba(0, 0, 0, 0.50)',
    taskSeparatorHeight: multiply(spacing.lineHeight, 0.25),
    taskLabelTopMargin: multiply(spacing.lineSpacing, 4.0),
    taskLabelBottomMargin: multiply(spacing.lineSpacing, 1.0),

    taskTabHeight: multiply(spacing.lineHeight, 1.5),
    taskTabLeftMargin: spacing.containerMargin,
    taskTabTextSize: '100%',
    taskTabGlyphSize: '100%',

    mainTabHeight: multiply(spacing.lineHeight, 1.5),
    mainTabTriangleSize: multiply(spacing.lineHeight, 0.2),
    mainTabTextSize: '125%',

    viewTabHeight: multiply(spacing.lineHeight, 1.0),
    viewTabTextSize: '80%',

    viewSpacing: multiply(spacing.containerMargin, 0.25),

    paneShadow: '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)',

    paneNavigatorHeight: multiply(spacing.lineHeight, 1.0),
    paneNavigatorTextSize: '100%',
    paneHeaderTextSize: '200%',

    vnavigatorButtonSize: multiply(spacing.lineHeight, 1.25),

    footerHeight: multiply(spacing.lineHeight, 2.0),
    footerTextSize: '100%',
    footerGlyphSize: '150%',

    actionHeight: multiply(spacing.lineHeight, 1.5),
    actionRadius: multiply(spacing.lineHeight, 0.75),
    actionTextSize: '100%',
    actionGlyphSize: '120%',
    actionShadow: '0px 0px 50px rgba(0, 0, 0, 0.20)',

    subactionTextSize: '80%',

    buttonTextSize: '100%',
    labelTextSize: '100%',
    labelTitleTextSize: '125%',
    labelBigTextSize: '160%',

    badgeHeight: multiply(spacing.lineHeight, 0.5),
    badgeRadius: multiply(spacing.lineHeight, 0.1),
    badgeTextSize: '70%',

    messageMargin: multiply(spacing.containerMargin, 0.4),
    messageTextSize: '80%',

    calendarMargin: multiply(spacing.lineSpacing, 1.0),
    calendarButtonWidth: multiply(spacing.lineHeight, 1.2),
    calendarButtonHeight: multiply(spacing.lineHeight, 1.0),
    calendarTextSize: '80%',
    calendarDOWTextSize: '80%',
    calendarGlyphSize: '110%',
    calendarShadow: '0px 0px 10px rgba(0, 0, 0, 0.50)',

    eventMargin: multiply(spacing.lineSpacing, 1.0),
    eventPadding: spacing.lineSpacing,
    chronosTopHeight: '48px',
    chronosLineHeight: '32px',
    chronosSeparatorHeight: '16px',
    chronosBarRadius: '6px',
    chronosNavigatorMargin: spacing.lineSpacing,
    chronosLabelWidth: '300px',
    chronosLabelMargin: multiply(spacing.lineSpacing, 2.0),
    chronosSeparatorWidth: '5px',

    markWidth: multiply(spacing.containerMargin, 0.3),

    menuButtonHeight: multiply(spacing.lineHeight, 1.5),
    menuTextSize: '80%',

    flyingBalloonTriangleSize: multiply(spacing.lineHeight, 0.3),
    flyingBalloonTextSize: '80%',
    flyingBalloonPadding: spacing.lineSpacing,
    flyingBalloonRadius: multiply(spacing.lineSpacing, 0.3),
    flyingShadow: '0px 10px 20px rgba(0, 0, 0, 0.30)',

    flyingDialogTriangleSize: multiply(spacing.lineHeight, 1.0),
    flyingDialogRadius: multiply(spacing.lineSpacing, 0.3),

    ticketVerticalSpacing: '2px',
    ticketVerticalSpacingFirst: '1px',
    ticketBacklogVerticalSpacing: '10px',
    ticketBacklogSpacing: '10px',
    ticketHorizontalPadding: spacing.lineSpacing,
    ticketVerticalPadding: spacing.lineSpacing,
    ticketCornerRadius: '10px',
    ticketLineRadius: '3px',
    ticketShadowShift: '2px',
    ticketGlueShadow: '0px 10px 20px rgba(0, 0, 0, 0.16)',
    ticketGlueHilitedShadow: '0px 10px 20px rgba(0, 0, 0, 0.16)',
    ticketGlueTitleSize: '130%',
    ticketHoverThickness: '5px',
    ticketExtendedTextSize: '90%',
    ticketHatchSize: '10px',
    ticketDimmedSize: '75%',
    messengerHeight: '70px',
    insideMessengerHeight: '50px',
    backlogTicketHeight: '35px',
    dispatchTicketWidth: '250px',
    dispatchTicketCompactedWidth: '40px',
    dispatchTicketsHeight: '116px',
    ticketRectRadius: '2px',
    ticketHudShadow: '0px 0px 15px rgba(0, 0, 0, 0.50)',
    ticketCoverTopMargin: '20px',
    ticketBackgroundRightMargin: '10px',
    ticketBackgroundFontWeight: 'bold',
    ticketBackgroundFontSize: '300%',
    ticketGaugeWidth: '8px',
    missionGaugeWidth: '8px',
    missionGaugePadding: '5px',

    thinRadius: '3px',
    thinLeftMargin: multiply(spacing.containerMargin, 0.25),

    identityHeight: '50px',
    identityGlyphSize: '200%',

    warningLeftPadding: spacing.containerMargin,
    warningTextSize: '100%',
    warningGlyphSize: '100%',

    dialogPadding: multiply(spacing.containerMargin, 2.0),
    dialogShadow: '0px 20px 100px rgba(0, 0, 0, 0.8)',
    dialogDistanceFromEdge: '10px',

    floatingShadow: '0px 10px 100px rgba(0, 0, 0, 0.50)',
    floatingPadding: multiply(spacing.containerMargin, 2),
    floatingRadius: '3px',
    floatingHeaderGlyphHeight: '120px',
    floatingHeaderGlyphSize: '600%',
    floatingFooterTextSize: '80%',

    boxRadius: '2px',

    notificationButtonTextSize: '100%',
    notificationButtonGlyphSize: '170%',
    notificationMarkWidth: multiply(spacing.containerMargin, 0.3),

    splitterSize: spacing.lineSpacing,

    dragAndDropRoadbookThickness: '20px',
    dragAndDropTicketThickness: '10px',

    tablePadding: spacing.lineSpacing,
    tableTextSize: '90%',

    glyphsDialogButtonWidth: '200px',
    glyphsDialogButtonMargin: '5px',

    comboShadow: '0px 0px 20px rgba(0, 0, 0, 0.30)',

    selectHorizontalPadding: spacing.containerMargin,
    selectVerticalPadding: spacing.lineSpacing,

    chatPadding: spacing.containerMargin,
    chatVerticalSpacing: spacing.lineSpacing,

    dynamicToolbarButtonWidth: '10px',
    dynamicToolbarButtonHeight: spacing.lineHeight,
    dynamicToolbarMargin: '5px',

    toolbarButtonWidth: spacing.lineHeight,
    toolbarButtonHeight: spacing.lineHeight,

    focusedShadow: '0 0 10px ',

    scrollerThickness: add(multiply(spacing.containerMargin, 0.5), '4px'),

    markdownH1FontSize: '100%',
    markdownH1FontSize: '90%',
    markdownListFontSize: '80%',
    markdownListPadding: multiply(spacing.containerMargin, 1.5),
  };
}
