'use strict';

import ColorManipulator from '../color-manipulator.js';

export default function (colors) {
  return {
    primary1Color: colors.grey900,
    primary2Color: colors.grey600,
    primary3Color: colors.grey500,
    accent1Color: colors.blueGrey700,
    accent2Color: colors.blueGrey800,
    accent3Color: colors.blueGrey900,
    textColor: colors.white,
    subTextColor: ColorManipulator.fade (colors.white, 0.54),
    canvasColor: '#303030',
    paperColor: colors.grey800,
    borderColor: colors.grey300,
    disabledColor: ColorManipulator.fade (colors.white, 0.3)
  };
}
