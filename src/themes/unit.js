'use strict';

/******************************************************************************/

const units = ['px', 'rem', 'em', '%', 'vmax', 'vmin', 'vh', 'vw'];

/******************************************************************************/

function fix (value, decimals) {
  if (decimals) {
    if (decimals === 0) {
      return value.round ();
    } else {
      return value.toFixed (decimals);
    }
  } else {
    return value;
  }
}

/******************************************************************************/

function parse (value) {
  if (typeof value === 'number') {
    return {value, unit: 'px'};
  }
  for (let unit of units) {
    if (value.endsWith (unit)) {
      value = value.substring (0, value.length - unit.length);
      if (value.includes ('.')) {
        value = parseFloat (value);
      } else {
        value = parseInt (value);
      }
      return {value, unit};
    }
  }
  throw new Error (`Value '${value}' has an unexpected format`);
}

/******************************************************************************/

function multiply (value, factor) {
  if (typeof value === 'number') {
    return value * factor;
  }
  const num = parse (value);
  return num.value * factor + num.unit;
}

/******************************************************************************/

function add (a, b, decimals = null) {
  if ((typeof a === 'number') === (typeof b === 'number')) {
    if (typeof a === 'number' && typeof b === 'number') {
      return fix (a + b, decimals);
    }
    const numA = parse (a);
    const numB = parse (b);
    if (numA.unit === numB.unit) {
      return fix (numA.value + numB.value, decimals) + numA.unit;
    }
  }
  throw new Error (`Values '${a}' and '${b}' have incompatible format`);
}

/******************************************************************************/

function sub (a, b, decimals = null) {
  if ((typeof a === 'number') === (typeof b === 'number')) {
    if (typeof a === 'number' && typeof b === 'number') {
      return fix (a - b, decimals);
    }
    const numA = parse (a);
    const numB = parse (b);
    if (numA.unit === numB.unit) {
      return fix (numA.value - numB.value, decimals) + numA.unit;
    }
  }
  throw new Error (`Values '${a}' and '${b}' have incompatible format`);
}

/******************************************************************************/

module.exports = {
  multiply, add, sub, parse, fix
};
