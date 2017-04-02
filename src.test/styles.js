/* global describe it */

import {expect} from 'mai-chai';
import {Styles, Theme} from 'electrum-theme';

const theme = Theme.create ('default');

const def1 = (_) => ({base: {size: 10, face: theme.typo.font}, small: {size: 5}});
const def2 = (_, props) => ({base: {size: props.size || 10}, small: {size: 5}});
const def3 = () => ({a: {x: 10, n: 'a'}, b: {y: 20, n: 'b'}, c: {x: 11, y: 22}});

/******************************************************************************/

describe ('Style', () => {
  describe ('create()', () => {
    it ('returns a function', () => {
      const s = Styles.create (def1);
      expect (typeof s).to.equal ('function');
    });
  });

  describe ('create() -> function', () => {
    it ('memoizes its result', () => {
      const s = Styles.create (def1);
      const styles1 = s (theme).styles;
      const styles2 = s (theme).styles;
      expect (styles1).to.equal (styles2);
    });

    it ('result contains styles', () => {
      const s = Styles.create (def1);
      const styles = s (theme).styles;
      expect (styles).to.have.property ('base');
      expect (styles.base).to.have.property ('size', 10);
    });
  });

  describe ('create() with theme/props -> function', () => {
    it ('does not memoize its result', () => {
      const s = Styles.create (def2);
      const styles1 = s (theme, {size: 20}).styles;
      const styles2 = s (theme, {size: 20}).styles;
      expect (styles1).to.not.equal (styles2);
    });

    it ('result contains styles - without props', () => {
      const s = Styles.create (def2);
      const styles = s (theme, {}).styles;
      expect (styles).to.have.property ('base');
      expect (styles.base).to.have.property ('size', 10);
    });

    it ('result contains styles - with props', () => {
      const s = Styles.create (def2);
      const styles = s (theme, {size: 20}).styles;
      expect (styles).to.have.property ('base');
      expect (styles.base).to.have.property ('size', 20);
    });
  });

  describe ('resolve()', () => {
    it ('resolves requested style', () => {
      const styles = Styles.create (def1) (theme);
      expect (styles.resolve ('base')).to.deep.equal ({size: 10, face: 'Lato, sans-serif'});
      expect (styles.resolve ('small')).to.deep.equal ({size: 5});
    });

    it ('returns {} for an unknown style', () => {
      const styles = Styles.create (def1) (theme);
      expect (styles.resolve ('missing')).to.deep.equal ({});
    });

    it ('resolves and combines multiple styles in order', () => {
      const styles = Styles.create (def3) (theme);
      expect (styles.resolve ('a', 'b')).to.deep.equal ({x: 10, n: 'b', y: 20});
      expect (styles.resolve ('b', 'a')).to.deep.equal ({y: 20, n: 'a', x: 10});
      expect (styles.resolve ('b', 'a', 'c')).to.deep.equal ({y: 22, n: 'a', x: 11});
      expect (styles.resolve ('a', 'b', 'c')).to.deep.equal ({y: 22, n: 'b', x: 11});
    });

    it ('skips unknown styles', () => {
      const styles = Styles.create (def3) (theme);
      expect (styles.resolve ('a', 'Q')).to.deep.equal ({x: 10, n: 'a'});
      expect (styles.resolve ('Q', 'a')).to.deep.equal ({x: 10, n: 'a'});
      expect (styles.resolve ('Q', 'Q')).to.deep.equal ({});
    });

    it ('applies functions', () => {
      const def = (_) => ({
        a: {x: 10, n: 'a'},
        b: {y: s => s.x * 2, n: 'b'}
      });
      const styles = Styles.create (def) (theme);
      expect (styles.resolve ('a', 'b')).to.deep.equal ({x: 10, n: 'b', y: 20});
    });

    it ('merges nested properties', () => {
      const def = (_) => ({
        a: {x: 10, y: {f: 'f', g: 'A'}},
        b: {y: s => ({g: 'B', h: 'h', xx: s.x / 2})}
      });
      const styles = Styles.create (def) (theme);
      expect (styles.resolve ('a', 'b')).to.deep.equal ({x: 10, y: {f: 'f', g: 'B', h: 'h', xx: 5}});
    });

    it ('undefines null properties', () => {
      const def = (_) => ({
        a: {x: 10, y: 10},
        b: {z: 20, x: null}
      });
      const styles = Styles.create (def) (theme);
      expect (styles.resolve ('a', 'b')).to.deep.equal ({y: 10, z: 20});
    });
  });

  describe ('customResolve()', () => {
    function customResolve (styles, props) {
      return styles.resolve ('base', props.kind, props.styles, props.style);
    }

    const styles = Styles.create (def1) (theme);
    it ('returns basic style', () => {
      const props = {};
      expect (customResolve (styles, props)).to.deep.equal ({size: 10, face: 'Lato, sans-serif'});
    });

    it ('appends props.kind sub-style to style', () => {
      const props = {kind: 'small'};
      expect (customResolve (styles, props)).to.deep.equal ({size: 5, face: 'Lato, sans-serif'});
    });

    it ('no-op if props.kind does not map to a sub-style', () => {
      const props = {kind: 'large'};
      expect (customResolve (styles, props)).to.deep.equal ({size: 10, face: 'Lato, sans-serif'});
    });

    it ('appends props.styles to style', () => {
      const props = {styles: {foo: 'bar'}};
      expect (customResolve (styles, props)).to.deep.equal ({size: 10, face: 'Lato, sans-serif', foo: 'bar'});
    });

    it ('executes functions in props.styles', () => {
      const props = {styles: {size: s => s.size + 2}};
      expect (customResolve (styles, props)).to.deep.equal ({size: 12, face: 'Lato, sans-serif'});
    });

    it ('appends props.styles (array) to style', () => {
      const props = {styles: [{foo: 'bar'}, {foo: s => s.foo + '/foo'}]};
      expect (customResolve (styles, props)).to.deep.equal ({size: 10, face: 'Lato, sans-serif', foo: 'bar/foo'});
    });

    it ('resolves includes', () => {
      const props = {styles: {foo: 'bar', includes: [ 'resetAlign' ]}};
      expect (JSON.stringify (customResolve (styles, props))).to.equal (
        '{"size":10,"face":"Lato, sans-serif","foo":"bar","verticalAlign":"baseline"}'
      );
    });

    it ('resolves includes, preserves ordering', () => {
      const props = {styles: {includes: [ 'resetAlign' ], foo: 'bar'}};
      expect (JSON.stringify (customResolve (styles, props))).to.equal (
        '{"size":10,"face":"Lato, sans-serif","verticalAlign":"baseline","foo":"bar"}'
      );
    });
  });
});

/******************************************************************************/
