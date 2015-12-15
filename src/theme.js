'use strict';

import {Colors, Spacing, Timing} from './themes/default.js';

import {
  paletteBuilder,
  shapesBuilder,
  stylesBuilder,
  transitionsBuilder,
  typoBuilder
} from './themes/default.js';

/******************************************************************************/

const secretKey = {};

/******************************************************************************/

export class Theme {
  constructor (name, key, config) {
    if (key !== secretKey) {
      throw new Error ('Do not call Theme constructor directly; use Theme.create instead');
    }
    if (!config.typo.font) {
      throw new Error ('Typo has no default font');
    }
    this._name = name;
    this._colors = config.colors;
    this._palette = config.palette;
    this._shapes = config.shapes;
    this._spacing = config.spacing;
    this._styles = config.styles;
    this._timing = config.timing;
    this._transitions = config.transitions;
    this._typo = config.typo;
  }

  get name () {
    return this._name;
  }

  get colors () {
    return this._colors;
  }

  get palette () {
    return this._palette;
  }

  get shapes () {
    return this._shapes;
  }

  get spacing () {
    return this._spacing;
  }

  get styles () {
    return this._styles;
  }

  get timing () {
    return this._timing;
  }

  get transitions () {
    return this._transitions;
  }

  get typo () {
    return this._typo;
  }

  static create (name) {
    if ((typeof name !== 'string') ||
        (name.length === 0)) {
      throw new Error ('name must be a valid string');
    }
    const Palette     = paletteBuilder (Colors);
    const Shapes      = shapesBuilder (Spacing);
    const Transitions = transitionsBuilder (Timing);
    const Typo        = typoBuilder (Spacing);
    const Styles      = stylesBuilder ({Colors, Palette, Shapes, Spacing, Timing, Transitions, Typo});

    return new Theme (name, secretKey, {
      colors: Colors,
      palette: Palette,
      shapes: Shapes,
      spacing: Spacing,
      styles: Styles,
      timing: Timing,
      transitions: Transitions,
      typo: Typo
    });
  }
}

/******************************************************************************/
