'use strict';

import Unit from '../unit.js';

export default function (spacing) { /*jshint unused:false */
  return {
    defaultBorderRadius: 2,

    /* geometry settings defined by Daniel Roux */

    lineHeight:                spacing.lineHeight,
    containerMargin:           spacing.containerMargin,
    lineSpacing:               spacing.lineSpacing,
    smoothRadius:              spacing.smoothRadius,

    taskButtonWidth:           Unit.multiply (spacing.lineHeight, 2.5),
    taskButtonHeight:          Unit.multiply (spacing.lineHeight, 2.5),
    taskLogoTextSize:          '80%',
    taskLogoGlyphSize:         '200%',
    taskTextSize:              '80%',
    taskGlyphSize:             '125%',
    taskShadow:                '0px 0px 60px rgba(0, 0, 0, 0.50)',
    taskSeparatorHeight:       Unit.multiply (spacing.lineHeight, 0.5),
    taskLabelTopMargin:        Unit.multiply (spacing.lineSpacing, 4.0),
    taskLabelBottomMargin:     Unit.multiply (spacing.lineSpacing, 1.0),

    taskTabHeight:             Unit.multiply (spacing.lineHeight, 1.5),
    taskTabLeftMargin:         spacing.containerMargin,
    taskTabTextSize:           '100%',
    taskTabGlyphSize:          '100%',

    mainTabHeight:             Unit.multiply (spacing.lineHeight, 1.5),
    mainTabTriangleSize:       Unit.multiply (spacing.lineHeight, 0.2),
    mainTabTextSize:           '125%',

    viewTabHeight:             Unit.multiply (spacing.lineHeight, 1.0),
    viewTabTextSize:           '80%',

    viewSpacing:               Unit.multiply (spacing.containerMargin, 0.25),

    paneShadow:                '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)',

    paneNavigatorHeight:       Unit.multiply (spacing.lineHeight, 1.0),
    paneNavigatorTextSize:     '100%',
    paneHeaderTextSize:        '200%',

    vnavigatorButtonSize:      Unit.multiply (spacing.lineHeight, 1.25),

    footerHeight:              Unit.multiply (spacing.lineHeight, 2.0),
    footerTextSize:            '100%',
    footerGlyphSize:           '150%',

    actionHeight:              Unit.multiply (spacing.lineHeight, 1.5),
    actionRadius:              Unit.multiply (spacing.lineHeight, 0.75),
    actionTextSize:            '100%',
    actionGlyphSize:           '120%',
    actionShadow:              '0px 0px 50px rgba(0, 0, 0, 0.20)',

    subactionTextSize:         '80%',

    buttonTextSize:            '100%',
    labelTextSize:             '100%',
    labelTitleTextSize:        '125%',
    labelBigTextSize:          '160%',

    badgeHeight:               Unit.multiply (spacing.lineHeight, 0.5),
    badgeRadius:               Unit.multiply (spacing.lineHeight, 0.1),
    badgeTextSize:             '70%',

    messageMargin:             Unit.multiply (spacing.containerMargin, 0.4),
    messageTextSize:           '80%',

    calendarMargin:            Unit.multiply (spacing.lineSpacing, 1.0),
    calendarButtonWidth:       Unit.multiply (spacing.lineHeight, 1.2),
    calendarButtonHeight:      Unit.multiply (spacing.lineHeight, 1.0),
    calendarTextSize:          '80%',
    calendarDOWTextSize:       '80%',
    calendarGlyphSize:         '110%',
    calendarShadow:            '0px 0px 10px rgba(0, 0, 0, 0.50)',

    markWidth:                 Unit.multiply (spacing.containerMargin, 0.3),

    menuButtonHeight:          Unit.multiply (spacing.lineHeight, 2.0),
    menuTextSize:              '80%',

    flyingBalloonTriangleSize: Unit.multiply (spacing.lineHeight, 0.3),
    flyingBalloonTextSize:     '80%',
    flyingBalloonPadding:      spacing.lineSpacing,

    ticketVerticalSpacing:     '2px',
    ticketHorizontalPadding:   spacing.lineSpacing,
    ticketVerticalPadding:     spacing.lineSpacing,
    ticketCornerRadius:        '10px',
    ticketLineRadius:          '3px',
    ticketShadowShift:         '2px',

    identityHeight:            '50px',
    identityGlyphSize:         '200%',

    warningLeftPadding:        spacing.containerMargin,
    warningTextSize:           '100%',
    warningGlyphSize:          '100%',

    dialogPadding:             Unit.multiply (spacing.containerMargin, 2.0),
    dialogShadow:              '0px 20px 100px rgba(0, 0, 0, 0.8)',

    floatingShadow:            '0px 10px 100px rgba(0, 0, 0, 0.50)',
    floatingPadding:           Unit.multiply (spacing.containerMargin, 2),
    floatingRadius:            '3px',
    floatingHeaderGlyphHeight: '100px',
    floatingHeaderGlyphSize:   '600%',
    floatingFooterTextSize:    '80%',

    boxRadius:                 '2px',
  };
}
