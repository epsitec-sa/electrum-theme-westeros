'use strict';

/******************************************************************************/

function resolveLocalStyle (props, list, localStyle) {
  if (!localStyle) {
    return;
  }
  if (typeof localStyle === 'string') {
    const {state} = props;
    // TODO: get local style from state value
    return; 
  }
  if (typeof localStyle === 'object') {
    list.push (localStyle);
    return;
  }
  
  throw 'Unsupported type for style';
}

/******************************************************************************/

export class Styles {
  constructor (def) {
    if (typeof def !== 'function' ||
        def.length !== 1) {
      throw new Error ('Styles must be defined by a function taking 1 argument');
    }
    this._def = def;
  }
  
  apply (theme) {
    if (this._cacheTheme !== theme) {
      this._cacheStyles = this._def (theme);
      this._cacheTheme = theme;
    }
    return this;
  }
  
  get styles () {
    return this._cacheStyles;
  }
  
  get (props) {
    const styles = this.styles;
    const list = [styles.base];
    const kind = props.kind;
    const localStyles = props.styles;
    
    if (kind) {
      const style = styles[kind];
      if (style) {
        list.push (style);
      } 
    }
    
    Styles.with (props, list, localStyles);
    
    return list;
  }
  
  static with (props, list, styles) {
    if (!styles) {
      return;
    }
    if (Array.isArray (styles)) {
      styles.map (style => resolveLocalStyle (props, list, style));
    } else {
      resolveLocalStyle (props, list, styles);
    }
  }
  
  static build (def) {
    if (def === undefined) {
      return theme => ({});
    }
    const styles = new Styles (def);
    return theme => styles.apply (theme);
  }
}

/******************************************************************************/
