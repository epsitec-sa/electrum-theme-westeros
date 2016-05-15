'use strict';

function multiply (value, factor) {
  if (typeof value === 'number') {
    return value * factor;
  }
  if (value.endsWith ('px')) {
    const v = value.substring (0, value.length - 2);
    return v * factor + 'px';
  } else if (value.endsWith ('em')) {
    const v = value.substring (0, value.length - 2);
    return v * factor + 'em';
  } else if (value.endsWith ('rem')) {
    const v = value.substring (0, value.length - 3);
    return v * factor + 'rem';
  } else if (value.endsWith ('%')) {
    const v = value.substring (0, value.length - 1);
    return v * factor + '%';
  } else {
    throw new Error (`Value '${value}' has an unexpected format`);
  }
}

function add (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (a.endsWith ('px') && b.endsWith ('px')) {
    const aa = parseInt (a.substring (0, a.length - 2));
    const bb = parseInt (b.substring (0, b.length - 2));
    return (aa + bb) + 'px';
  } else {
    throw new Error (`Values '${a}' or '${b}' has an unexpected format`);
  }
}

function sub (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  if (a.endsWith ('px') && b.endsWith ('px')) {
    const aa = parseInt (a.substring (0, a.length - 2));
    const bb = parseInt (b.substring (0, b.length - 2));
    return (aa - bb) + 'px';
  } else {
    throw new Error (`Values '${a}' or '${b}' has an unexpected format`);
  }
}

module.exports = {
  multiply, add, sub
};
