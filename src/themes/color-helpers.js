'use strict';

/******************************************************************************/

// Return the color to use from a value of a property.
// You can use a direct color '#rrggbb' or the key word 'primary' or 'secondary'.
// In this two cases, the color is defined into theme.palette.mark*.
function GetMarkColor (theme, value) {
  if (value.startsWith ('#')) {
    return value;
  } else {
    const fix = {
      primary:   theme.palette.markPrimary,
      secondary: theme.palette.markSecondary
    };
    return fix[value];
  }
}

module.exports = {
  GetMarkColor,
};