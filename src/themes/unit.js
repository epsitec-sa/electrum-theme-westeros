'use strict';

/******************************************************************************/

const units = ['px', 'rem', 'em', '%', 'vmax', 'vmin', 'vh', 'vw'];

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

function add (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  const numA = parse (a);
  const numB = parse (b);
  if (numA.unit === numB.unit) {
    return (numA.value + numB.value) + numA.unit;
  } else {
    throw new Error (`Values '${a}' and '${b}' have incompatible format`);
  }
}

/******************************************************************************/

function sub (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  const numA = parse (a);
  const numB = parse (b);
  if (numA.unit === numB.unit) {
    return (numA.value - numB.value) + numA.unit;
  } else {
    throw new Error (`Values '${a}' and '${b}' have incompatible format`);
  }
}

/******************************************************************************/

module.exports = {
  multiply, add, sub, parse
};
