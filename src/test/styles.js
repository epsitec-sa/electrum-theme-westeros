'use strict';

import {expect} from 'mai-chai';
import {Styles, Theme} from '../index.js';

const theme = Theme.create ('default');

const def1 = (theme) => ({base: {size: 10, face: theme.typo.font}, small: {size: 5}});
const def2 = (theme, props) => ({base: {size: props.size || 10}, small: {size: 5}});

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
    const styles = Styles.create (def1) (theme);
    it ('resolves requested style', () => {
      expect (styles.resolve ('base')).to.deep.equal ({size: 10, face: 'Roboto, sans-serif'});
      expect (styles.resolve ('small')).to.deep.equal ({size: 5});
    });
  });

  describe ('get()', () => {
    const styles = Styles.create (def1) (theme);
    it ('returns basic style', () => {
      const props = {};
      expect (styles.get (props)).to.deep.equal ([{size: 10, face: 'Roboto, sans-serif'}]);
    });

    it ('appends props.kind sub-style to style', () => {
      const props = {kind: 'small'};
      expect (styles.get (props)).to.deep.equal ([{size: 10, face: 'Roboto, sans-serif'}, {size: 5}]);
    });

    it ('no-op if props.kind does not map to a sub-style', () => {
      const props = {kind: 'large'};
      expect (styles.get (props)).to.deep.equal ([{size: 10, face: 'Roboto, sans-serif'}]);
    });

    it ('appends props.styles to style', () => {
      const props = {styles: {foo: 'bar'}};
      expect (styles.get (props)).to.deep.equal ([{size: 10, face: 'Roboto, sans-serif'}, {foo: 'bar'}]);
    });

    it ('appends props.styles (array) to style', () => {
      const props = {styles: [{foo: 'bar'}, {foo: 'foo'}]};
      expect (styles.get (props)).to.deep.equal ([{size: 10, face: 'Roboto, sans-serif'}, {foo: 'bar'}, {foo: 'foo'}]);
    });

    it ('resolve includes', () => {
      const props = {styles: {foo: 'bar', includes: ['resetAlign']}};
      expect (JSON.stringify (styles.get (props))).to.equal (
        '[{"size":10,"face":"Roboto, sans-serif"},{"foo":"bar","verticalAlign":"baseline"}]'
      );
    });

    it ('resolve includes, preserves ordering', () => {
      const props = {styles: {includes: ['resetAlign'], foo: 'bar'}};
      expect (JSON.stringify (styles.get (props))).to.equal (
        '[{"size":10,"face":"Roboto, sans-serif"},{"verticalAlign":"baseline","foo":"bar"}]'
      );
    });
  });
});
