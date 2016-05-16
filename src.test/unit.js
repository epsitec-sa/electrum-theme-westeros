'use strict';

import {expect} from 'mai-chai';
import {Unit} from 'electrum-theme';

describe ('Unit', () => {
  describe ('multiply()', () => {
    it ('multiplies numbers', () => {
      expect (Unit.multiply (5, 2)).to.equal (10);
    });

    it ('multiplies pixels', () => {
      expect (Unit.multiply ('5px', 2)).to.equal ('10px');
    });

    it ('multiplies ems', () => {
      expect (Unit.multiply ('5em', 2)).to.equal ('10em');
    });

    it ('multiplies %', () => {
      expect (Unit.multiply ('50%', 2)).to.equal ('100%');
    });
  });

  describe ('add()', () => {
    // TODO: test add()
  });

  describe ('sub()', () => {
    // TODO: test sub()
  });

  describe ('parse()', () => {
    it ('parses known units', () => {
      expect (Unit.parse (5)).to.deep.equal ({value: 5, unit: 'px'});
      expect (Unit.parse (5.1)).to.deep.equal ({value: 5.1, unit: 'px'});
      expect (Unit.parse ('5px')).to.deep.equal ({value: 5, unit: 'px'});
      expect (Unit.parse ('5.1px')).to.deep.equal ({value: 5.1, unit: 'px'});
      expect (Unit.parse ('5rem')).to.deep.equal ({value: 5, unit: 'rem'});
      expect (Unit.parse ('5em')).to.deep.equal ({value: 5, unit: 'em'});
    });
    it ('throws on unexpected input', () => {
      expect (() => Unit.parse ('5pt')).to.throw ('5pt');
    });
  });
});
