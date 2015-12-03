'use strict';

/******************************************************************************/

function resolveLocalStyle (styleMap, props, list, localStyle) {
  if (typeof localStyle === 'string') {
    localStyle = styleMap[localStyle]; 
  }
  if (!localStyle) {
    return;
  }
  if (typeof localStyle === 'object') {
    list.push (localStyle);
    return;
  }
  
  throw `Unsupported type for style ${localStyle}`;
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
    const styleMap = this.styles;
    const list = [styleMap.base];
    const kind = props.kind;
    const localStyles = props.styles;
    
    this.with (props, list, kind);
    this.with (props, list, localStyles);
    
    return list;
  }
  
  with (props, list, localStyles) {
    if (!localStyles) {
      return;
    }
    const styleMap = this.styles;
    if (Array.isArray (localStyles)) {
      localStyles.map (style => resolveLocalStyle (styleMap, props, list, style));
    } else {
      resolveLocalStyle (styleMap, props, list, localStyles);
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
