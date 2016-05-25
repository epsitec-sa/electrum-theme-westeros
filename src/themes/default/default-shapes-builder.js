'use strict';

import Unit from '../unit.js';

export default function (spacing) { /*jshint unused:false */
  return {
    defaultBorderRadius: 2,

    /* geometry settings defined by Daniel Roux */

    lineHeight:            spacing.lineHeight,
    containerMargin:       spacing.containerMargin,
    lineSpacing:           spacing.lineSpacing,

    taskButtonWidth:       Unit.multiply (spacing.lineHeight, 2.5),
    taskButtonHeight:      Unit.multiply (spacing.lineHeight, 3.0),
    taskLogoTextSize:      '125%',
    taskLogoGlyphSize:     '200%',
    taskTextSize:          '80%',
    taskGlyphSize:         '125%',
    taskShadow:            '0px 0px 60px rgba(0, 0, 0, 0.50)',

    mainTabHeight:         Unit.multiply (spacing.lineHeight, 1.5),
    mainTabTriangleSize:   Unit.multiply (spacing.lineHeight, 0.2),
    mainTabTextSize:       '125%',

    viewTabHeight:         Unit.multiply (spacing.lineHeight, 1.0),
    viewTabTextSize:       '80%',

    viewSpacing:           Unit.multiply (spacing.containerMargin, 0.25),

    paneShadow:            '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)',

    paneNavigatorHeight:   Unit.multiply (spacing.lineHeight, 1.0),
    paneNavigatorTextSize: '100%',

    footerHeight:          Unit.multiply (spacing.lineHeight, 2.0),
    footerTextSize:        '100%',
    footerGlyphSize:       '150%',

    actionHeight:          Unit.multiply (spacing.lineHeight, 1.5),
    actionRadius:          Unit.multiply (spacing.lineHeight, 0.75),
    actionTextSize:        '100%',
    actionGlyphSize:       '120%',

    buttonTextSize:        '100%',
    labelTextSize:         '100%',
    labelTitleTextSize:    '125%',

    badgeHeight:           Unit.multiply (spacing.lineHeight, 0.5),
    badgeRadius:           Unit.multiply (spacing.lineHeight, 0.1),
    badgeTextSize:         '70%',

    tooltipMargin:         Unit.multiply (spacing.containerMargin, 0.4),
    tooltipTextSize:       '80%',

    calendarMargin:        Unit.multiply (spacing.lineSpacing, 1.0),
    calendarButtonSize:    Unit.multiply (spacing.lineHeight, 1.0),
    calendarTextSize:      '100%',
    calendarGlyphSize:     '110%',

  };
}
