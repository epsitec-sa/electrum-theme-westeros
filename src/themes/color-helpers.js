/******************************************************************************/

// Return the color to use from a value of a property.
// You can use a direct color '#rrggbb' or the key word 'primary' or 'secondary'.
// In this two cases, the color is defined into theme.palette.mark*.
function getMarkColor (theme, value) {
  if (value.startsWith ('#') || value.startsWith ('rgb')) {
    //  Bypass this colors:
    //  #f00
    //  #123456
    //  rgb(100,100,100)
    //  rgba(0,0,0,0.5)
    return value;
  } else {
    const fix = {
      base: theme.palette.markBase,
      primary: theme.palette.markPrimary,
      secondary: theme.palette.markSecondary,
      success: theme.palette.markSuccess,
      pick: theme.palette.markPick,
      drop: theme.palette.markDrop,
      task: theme.palette.markTask,
    };
    return fix[value];
  }
}

/******************************************************************************/

export { getMarkColor };
