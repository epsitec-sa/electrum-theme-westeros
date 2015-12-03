'use strict';

/******************************************************************************/

export class Styles {
  constructor (def) {
    if (typeof def !== 'function' ||
        def.length !== 1) {
      throw new Error ('Styles must be defined by a function taking 1 argument');
    }
    this._def = def;
  }
  
  get (theme) {
    if (this._cacheTheme !== theme) {
      this._cacheStyles = this._def (theme);
      this._cacheTheme = theme;
    }
    return this._cacheStyles;
  }
  
  static build (def) {
    if (def === undefined) {
      return theme => ({});
    }
    const styles = new Styles (def);
    return theme => styles.get (theme);
  }
}

/******************************************************************************/
