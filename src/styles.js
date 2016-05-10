'use strict';

import {resolveLocalStyle} from './resolve-local-style.js';

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
    return this.resolve ('base', props.kind, props.styles, props.style);
  }

  resolve (...names) {
    return resolveLocalStyle (this.styles, names, this._cacheTheme);
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
