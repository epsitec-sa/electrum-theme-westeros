'use strict';

/******************************************************************************/

function appendIncludes(current, includes) {
  includes.forEach(include => {
    if (include) {
      mergeStyleProperties(current, include);
    }
  });
  return current;
}

function resolveIncludes(style, theme) {
  if (style.hasOwnProperty('includes')) {
    let merge = {};
    Object.keys(style).forEach(name => {
      if (name === 'includes') {
        merge = appendIncludes(
          merge,
          style.includes.map(include => theme.styles[include])
        );
      } else {
        merge[name] = style[name];
      }
    });
    return merge;
  } else {
    return style;
  }
}

/******************************************************************************/

function resolveFunctionProperty(current, item) {
  if (typeof item === 'function') {
    // The function is applied immediately and operates on the
    // current style; a read-only function without side effects
    // is expected here.
    return item(current);
  } else {
    return item;
  }
}

function mergeStyleProperty(style, name, value) {
  // Merging with an undefined value removes the property from the
  // target style.
  if (value === null || value === undefined) {
    delete style[name];
    return;
  }

  // Browser states (hover, etc.) are defined inside a child object.
  // Simply replacing the old property with the new one is not what
  // we want: we have to merge new and old properties, recursively.
  if (typeof value === 'object') {
    let item = style[name] || {};
    if (typeof item !== 'object') {
      throw new Error(`Trying to merge incompatible style property '${name}'`);
    }
    style[name] = mergeStyleProperties(item, value);
  } else {
    style[name] = value;
  }
}

function mergeStyleProperties(left, right) {
  // On the left is the target style which will be patched; on the
  // right, the read-only source style.
  Object.keys(right).forEach(name => {
    mergeStyleProperty(left, name, resolveFunctionProperty(left, right[name]));
  });
  return left;
}

/******************************************************************************/

function resolveLocalStyle(styleMap, localStyle, theme, current = {}) {
  // * styleMap contains the various sub-styles stored in the styles object.
  // * localStyle can be one of several:
  //   1. An array of items -- every item will be resolved recursively
  //   2. The name of a sub-style, which will be included
  //   3. An undefined or null style, which will be ignored
  //   4. A style object, which will be merged
  // * theme is a reference to the theme engine; it is needed to resolve
  //   includes of globally defined styles
  // * current will accumulate the resolved style properties

  // 1. Recursively resolve all local styles:
  if (Array.isArray(localStyle)) {
    localStyle.forEach(x => {
      current = resolveLocalStyle(styleMap, x, theme, current);
    });
    return current;
  }

  // 2. Resolve named local style:
  if (typeof localStyle === 'string') {
    localStyle = styleMap[localStyle];
  }

  // 3. Handle unknown/unresolved/null local style:
  if (!localStyle) {
    return current;
  }

  // 4. Merge local style properties with current style:
  if (typeof localStyle === 'object') {
    const style = resolveIncludes(localStyle, theme);
    mergeStyleProperties(current, style);
    return current;
  }

  throw `Unsupported type for style ${localStyle}`;
}

/******************************************************************************/

module.exports = {
  resolveIncludes,
  mergeStyleProperties,
  resolveLocalStyle,
};

/******************************************************************************/
