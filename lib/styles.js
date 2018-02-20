import {resolveLocalStyle} from './resolve-local-style.js';

/******************************************************************************/

const secretKey = {};

/******************************************************************************/

export class Styles {
  constructor(key, def) {
    if (key !== secretKey) {
      throw new Error('Do not call Styles constructor directly; use Styles.create instead');
    }
    if (typeof def !== 'function' || def.length > 2) {
      throw new Error('Styles must be defined by a function taking 0, 1 or 2 arguments: (theme, props) => {}');
    }
    this._def = def;
    this._defUsesProps = def.length === 2;
    this._cacheStyles = null;
    this._cacheTheme = null;
    this._cacheProps = null;
    this._theme = null;
  }

  apply(theme, props) {
    if (this._cacheTheme !== theme) {
      if (this._defUsesProps) {
        // TODO: compare props and decide whether to recompute the styles
        this._cacheStyles = this._def(theme, props);
        this._cacheProps = props;
        this._cacheTheme = null; // recompute styles every time - disable the cache
      } else {
        this._cacheStyles = this._def(theme);
        this._cacheProps = null;
        this._cacheTheme = theme;
      }
      this._theme = theme;
    }
    return this;
  }

  get usesProps() {
    return this._defUsesProps;
  }

  get styles() {
    return this._cacheStyles;
  }

  resolve(...names) {
    return resolveLocalStyle(this.styles, names, this._theme);
  }

  merge(current, ...names) {
    return resolveLocalStyle(this.styles, names, this._theme, current);
  }

  static create(def) {
    if (def === undefined) {
      return () => ({});
    }
    const styles = new Styles(secretKey, def);
    const resolver = (theme, props) => styles.apply(theme, props);
    resolver.styles = styles;
    return resolver;
  }
}

/******************************************************************************/
