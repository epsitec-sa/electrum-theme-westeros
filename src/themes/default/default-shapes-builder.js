'use strict';

import {Unit} from 'electrum-theme';

export default function (spacing) { /*jshint unused:false */
  return {
    defaultBorderRadius: 2,

    /* geometry settings defined by Daniel Roux - to be renamed */

    lineHeight:      spacing.lineHeight,
    containerMargin: spacing.containerMargin,
    lineSpacing:     spacing.lineSpacing,

    taskButtonWidth:  Unit.multiply (spacing.lineHeight, 2.5),
    taskButtonHeight: Unit.multiply (spacing.lineHeight, 3.0),

  };
}
