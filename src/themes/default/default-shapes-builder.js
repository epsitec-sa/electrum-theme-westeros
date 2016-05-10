'use strict';

import {Unit} from 'electrum-theme';

export default function (spacing) { /*jshint unused:false */
  return {
    defaultBorderRadius: 2,

    /* geometry settings defined by Daniel Roux - to be renamed */

    lineHeight:            spacing.lineHeight,
    containerMargin:       spacing.containerMargin,
    lineSpacing:           spacing.lineSpacing,

    taskButtonWidth:       Unit.multiply (spacing.lineHeight, 2.5),
    taskButtonHeight:      Unit.multiply (spacing.lineHeight, 3.0),
    taskLogoTextSize:      '125%',
    taskTextSize:          '80%',
    taskShadow:            '0px 0px 60px rgba(0, 0, 0, 0.50)',

    mainTabHeight:         Unit.multiply (spacing.lineHeight, 1.5),
    mainTabTextSize:       '125%',

    viewTabHeight:         Unit.multiply (spacing.lineHeight, 1.0),
    viewTabTextSize:       '80%',

    paneNavigatorHeight:   Unit.multiply (spacing.lineHeight, 1.0),
    paneNavigatorTextSize: '100%',

    footerHeight:          Unit.multiply (spacing.lineHeight, 2.0),
    footerTextSize:        '100%',

    actionHeight:          Unit.multiply (spacing.lineHeight, 1.5),
    actionRadius:          Unit.multiply (spacing.lineHeight, 0.75),
    actionTextSize:        '100%',

    buttonTextSize:        '100%',
    labelTextSize:         '100%',
    labelTitleTextSize:    '125%',

  };
}
