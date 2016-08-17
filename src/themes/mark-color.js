'use strict';

/******************************************************************************/

function GetMarkColor (theme, mark) {
  if (mark.startsWith ('#')) {
    return mark;
  } else {
    const fix = {
      primary:   theme.palette.markPrimary,
      secondary: theme.palette.markSecondary
    };
    return fix[mark];
  }
}

module.exports = {
  GetMarkColor,
};
