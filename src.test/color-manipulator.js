'use strict';

import {expect} from 'mai-chai';
import {ColorManipulator} from 'electrum-theme';

const {fade, darken, lighten, luminance} = ColorManipulator;

describe ('color-manipulator', () => {
  describe ('fade()', () => {
    it ('produces a faded color', () => {
      const color = '#00ff00';
      expect (fade (color)).to.equal ('rgba(0,255,0)');
      expect (fade (color, 0.2)).to.equal ('rgba(0,255,0,0.2)');
    });
  });

  describe ('lighten()', () => {
    it ('produces a lighter color', () => {
      const color = '#002000';
      expect (lighten (color, 0.0)).to.equal ('rgba(0,32,0,0.15)');
      expect (lighten (color, 0.5)).to.equal ('rgba(0,48,0,0.15)');
    });
  });

  describe ('darken()', () => {
    it ('produces a darker color', () => {
      const color = '#00ff00';
      expect (darken (color, 0.2)).to.equal ('rgb(0,204,0)');
    });
  });
  
  describe ('luminance()', () => {
    it ('computes color luminance', () => {
      const green = '#0f0';
      const red = '#f00';
      const white = '#fff';
      expect (luminance (green)).to.equal (0.7152);
      expect (luminance (red)).to.equal (0.2126);
      expect (luminance (white)).to.equal (1);
    });
  });
});
