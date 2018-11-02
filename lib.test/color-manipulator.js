/* global describe it */

import {expect} from 'chai';
import {ColorManipulator} from '..';

const {fade, darken, lighten, emphasize, getLuminance} = ColorManipulator;

describe('color-manipulator', () => {
  describe('fade()', () => {
    it('produces a faded color', () => {
      const color = '#00ff00';
      expect(fade(color)).to.equal('rgba(0,255,0,0)');
      expect(fade(color, 0.2)).to.equal('rgba(0,255,0,0.2)');
    });
  });

  describe('lighten()', () => {
    it('produces a lighter color', () => {
      const color = '#002000';
      expect(lighten(color, 0.0)).to.equal('rgb(0,32,0)');
      expect(lighten(color, 0.5)).to.equal('rgb(127,143,127)');
    });
  });

  describe('darken()', () => {
    it('produces a darker color', () => {
      const color = '#00ff00';
      expect(darken(color, 0.2)).to.equal('rgb(0,204,0)');
    });
  });

  describe('emphasize()', () => {
    it('produces a darker color for an initial light color', () => {
      const color = '#00ff00';
      expect(emphasize(color, 0.2)).to.equal('rgb(0,204,0)');
    });
    it('produces a lighter color for an initial dark color', () => {
      const color = '#002000';
      expect(emphasize(color, 0.2)).to.equal('rgb(51,76,51)');
    });
  });

  describe('luminance()', () => {
    it('computes color luminance', () => {
      const green = '#0f0';
      const red = '#f00';
      const white = '#fff';
      expect(getLuminance(green)).to.equal(0.715);
      expect(getLuminance(red)).to.equal(0.213);
      expect(getLuminance(white)).to.equal(1);
    });
  });
});
