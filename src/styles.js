'use strict';

/******************************************************************************/

function appendIncludes (result, includes) {
  for (let include of includes) {
    if (include) {
      Object.assign (result, include);
    }
  }
  return result;
}

function resolveIncludes (style, theme) {
  if (style.includes) {
    let result = {};
    const names = Object.getOwnPropertyNames (style);
    for (let name of names) {
      if (name === 'includes') {
        result = appendIncludes (result, style.includes.map (include => theme.styles[include]));
      } else {
        result[name] = style[name];
      }
    }
    return result;
  }
  return style;
}

function resolveLocalStyle (styleMap, localStyle, theme, list) {
  if (Array.isArray (localStyle)) {
    let result = {};
    localStyle.forEach (x => {
      result = {...result, ...resolveLocalStyle (styleMap, x, theme, list)};
    });
    return result;
  }
  if (typeof localStyle === 'string') {
    localStyle = styleMap[localStyle];
  }
  if (!localStyle) {
    return {};
  }
  if (typeof localStyle === 'object') {
    const style = resolveIncludes (localStyle, theme);
    if (list) {
      list.push (style);
    }
    return style;
  }

  throw `Unsupported type for style ${localStyle}`;
}

/******************************************************************************/

const secretKey = {};

/******************************************************************************/

export class Styles {
  constructor (key, def) {
    if (key !== secretKey) {
      throw new Error ('Do not call Styles constructor directly; use Styles.create instead');
    }
    if (typeof def !== 'function' ||
        def.length < 1 ||
        def.length > 2) {
      throw new Error ('Styles must be defined by a function taking 1 or 2 arguments');
    }
    this._def = def;
    this._defUsesProps = def.length === 2;
  }

  apply (theme, props) {
    if (this._cacheTheme !== theme) {
      if (this._defUsesProps) {
        this._cacheStyles = this._def (theme, props);
        this._cacheTheme = null; // recompute styles every time - disable the cache
      } else {
        this._cacheStyles = this._def (theme);
        this._cacheTheme = theme;
      }
    }
    return this;
  }

  get styles () {
    return this._cacheStyles;
  }

  get (props) {
    const list = [];
    this.with (list, 'base');
    this.with (list, props.kind);
    this.with (list, props.styles);
    this.with (list, props.style);
    return list;
  }

  resolve (...names) {
    return resolveLocalStyle (this.styles, names, this._cacheTheme);
  }

  with (list, ...local) {
    resolveLocalStyle (this.styles, local, this._cacheTheme, list);
  }

  static create (def) {
    if (def === undefined) {
      return () => ({});
    }
    const styles = new Styles (secretKey, def);
    return (theme, props) => styles.apply (theme, props);
  }
}

/******************************************************************************/
