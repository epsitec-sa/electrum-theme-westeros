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

    it ('multiplies percents', () => {
      expect (Unit.multiply ('50%', 2)).to.equal ('100%');
    });
  });
});
