'use strict';

/******************************************************************************/

// Return the color to use from a value of a property.
// You can use a direct color '#rrggbb' or the key word 'primary' or 'secondary'.
// In this cases, the color is defined into theme.palette.
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
