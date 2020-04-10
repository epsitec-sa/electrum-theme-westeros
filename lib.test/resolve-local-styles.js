'use strict';

/* global describe it */

const {expect} = require('chai');

const {resolveIncludes} = require('../lib/resolve-local-style.js');
const {mergeStyleProperties} = require('../lib/resolve-local-style.js');

/******************************************************************************/

describe('resolve', () => {
  describe('resolveIncludes()', () => {
    it('resolves multiple includes', () => {
      const style = {x: 10, includes: ['a', 'b'], y: 20};
      const theme = {
        styles: {
          a: {v: 'A'},
          b: {w: 'B'},
        },
      };
      const result = resolveIncludes(style, theme);
      expect(result).to.deep.equal({x: 10, v: 'A', w: 'B', y: 20});
      expect(style).to.deep.equal({x: 10, includes: ['a', 'b'], y: 20});
    });

    it('accepts missing includes', () => {
      const style = {x: 10, includes: ['a'], y: 20};
      const theme = {styles: {}};
      const result = resolveIncludes(style, theme);
      expect(result).to.deep.equal({x: 10, y: 20});
    });

    it('accepts empty includes', () => {
      const style = {x: 10, includes: [], y: 20};
      const theme = {styles: {}};
      const result = resolveIncludes(style, theme);
      expect(result).to.deep.equal({x: 10, y: 20});
    });

    it('resolves include with override, applied in order', () => {
      const style = {x: 10, includes: ['a'], y: 20};
      const theme = {
        styles: {
          a: {v: 'A', x: 11, y: 22},
        },
      };
      const result = resolveIncludes(style, theme);
      expect(result).to.deep.equal({x: 11, v: 'A', y: 20});
    });

    it('resolves include with functional override', () => {
      const style = {x: 10, includes: ['a'], y: 20};
      const theme = {
        styles: {
          a: {x: (s) => s.x + 1},
        },
      };
      const result = resolveIncludes(style, theme);
      expect(result).to.deep.equal({x: 11, y: 20});
    });
  });

  describe('mergeStyleProperties', () => {
    it('merges simple objects', () => {
      const styleA = {x: 10, y: 20};
      const styleB = {y: 30, z: 40};
      expect(mergeStyleProperties(styleA, styleB)).to.deep.equal({
        x: 10,
        y: 30,
        z: 40,
      });
    });

    it('does modify left-hand side', () => {
      const styleA = {x: 10, y: 20};
      const styleB = {y: 30, z: 40};
      mergeStyleProperties(styleA, styleB);
      expect(styleA).to.deep.equal({x: 10, y: 30, z: 40});
    });

    it('does not modify right-hand side', () => {
      const styleA = {x: 10, y: 20};
      const styleB = {y: 30, z: 40};
      mergeStyleProperties(styleA, styleB);
      expect(styleB).to.deep.equal({y: 30, z: 40});
    });

    it('merges recursively and adds or removes properties as expected', () => {
      const styleA = {
        x: 10,
        foo: {
          y: 20,
          z: {
            src: 'A',
          },
        },
      };

      expect(styleA).to.deep.equal({x: 10, foo: {y: 20, z: {src: 'A'}}});
      mergeStyleProperties(styleA, {foo: {}});
      expect(styleA).to.deep.equal({x: 10, foo: {y: 20, z: {src: 'A'}}});
      mergeStyleProperties(styleA, {foo: {z: {}}});
      expect(styleA).to.deep.equal({x: 10, foo: {y: 20, z: {src: 'A'}}});
      mergeStyleProperties(styleA, {foo: {z: {dst: 'B'}}});
      expect(styleA).to.deep.equal({
        x: 10,
        foo: {y: 20, z: {src: 'A', dst: 'B'}},
      });
      mergeStyleProperties(styleA, {foo: {z: {dst: 'C'}, w: 0}});
      expect(styleA).to.deep.equal({
        x: 10,
        foo: {y: 20, z: {src: 'A', dst: 'C'}, w: 0},
      });
      mergeStyleProperties(styleA, {foo: {z: {src: null}, w: undefined}});
      expect(styleA).to.deep.equal({x: 10, foo: {y: 20, z: {dst: 'C'}}});
    });
  });
});

/******************************************************************************/
