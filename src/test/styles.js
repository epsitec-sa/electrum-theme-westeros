'use strict';

import {expect} from 'mai-chai';
import {Styles, Theme} from '../index.js';

const theme = Theme.create ('default');
const def = theme => ({base: {size: 10}, small: {size: 5}});

describe ('Style', () => {
  describe ('create()', () => {
    it ('returns a function', () => {
      const s = Styles.create (def);
      expect (typeof s).to.equal ('function');
    });
  });

  describe ('create() -> function', () => {
    it ('memoizes its result', () => {
      const s = Styles.create (def);
      const styles1 = s (theme);
      const styles2 = s (theme);
      expect (styles1).to.equal (styles2);
    });

    it ('result contains styles', () => {
      const s = Styles.create (def);
      const styles = s (theme);
      expect (styles.styles).to.have.property ('base');
    });
  });

  describe ('resolve()', () => {
    const styles = Styles.create (def) (theme);
    it ('resolves requested style', () => {
      expect (styles.resolve ('base')).to.deep.equal ({size: 10});
      expect (styles.resolve ('small')).to.deep.equal ({size: 5});
    });
  });

  describe ('get()', () => {
    const styles = Styles.create (def) (theme);
    it ('returns basic style', () => {
      const props = {};
      expect (styles.get (props)).to.deep.equal ([{size: 10}]);
    });

    it ('appends props.kind sub-style to style', () => {
      const props = {kind: 'small'};
      expect (styles.get (props)).to.deep.equal ([{size: 10}, {size: 5}]);
    });

    it ('no-op if props.kind does not map to a sub-style', () => {
      const props = {kind: 'large'};
      expect (styles.get (props)).to.deep.equal ([{size: 10}]);
    });

    it ('appends props.styles to style', () => {
      const props = {styles: {foo: 'bar'}};
      expect (styles.get (props)).to.deep.equal ([{size: 10}, {foo: 'bar'}]);
    });

    it ('appends props.styles (array) to style', () => {
      const props = {styles: [{foo: 'bar'}, {foo: 'foo'}]};
      expect (styles.get (props)).to.deep.equal ([{size: 10}, {foo: 'bar'}, {foo: 'foo'}]);
    });

    it ('resolve includes', () => {
      const props = {styles: {foo: 'bar', includes: ['resetAlign']}};
      expect (JSON.stringify (styles.get (props))).to.equal ('[{"size":10},{"foo":"bar","verticalAlign":"baseline"}]');
    });

    it ('resolve includes, preserves ordering', () => {
      const props = {styles: {includes: ['resetAlign'], foo: 'bar'}};
      expect (JSON.stringify (styles.get (props))).to.equal ('[{"size":10},{"verticalAlign":"baseline","foo":"bar"}]');
    });
  });
});
