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

function resolveLocalStyles (props, list, localStyles) {
  if (!localStyles) {
    return;
  }
  if (Array.isArray (localStyles)) {
    localStyles.map (s => resolveLocalStyle (props, list, s));
  } else {
    resolveLocalStyle (props, list, localStyles);
  }
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
  
  get (props, ...moreStyles) {
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
    
    resolveLocalStyles (props, list, localStyles);
    resolveLocalStyles (props, list, moreStyles);
    
    return list;
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
