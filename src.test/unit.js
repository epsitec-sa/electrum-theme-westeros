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
    it ('add known units', () => {
      expect (Unit.add (2, 3)).to.deep.equal ({value: 5, unit: 'px'});
      expect (Unit.add (2.2, 3.3)).to.deep.equal ({value: 5.5, unit: 'px'});
      expect (Unit.add ('2px', '3px')).to.deep.equal ({value: 5, unit: 'px'});
      expect (Unit.add ('2.2px', '3.3px')).to.deep.equal ({value: 5.5, unit: 'px'});
      expect (Unit.add ('2.2rem', '3.3rem')).to.deep.equal ({value: 5.5, unit: 'rem'});
      expect (Unit.add ('2.2em', '3.3em')).to.deep.equal ({value: 5.5, unit: 'em'});
      expect (Unit.add ('75%', '5%')).to.deep.equal ({value: 80, unit: '%'});
    });
    it ('throws on unexpected input', () => {
      expect (() => Unit.add ('2pt', '3pt')).to.throw ('5pt');
      expect (() => Unit.add ('2px', 3)).to.throw ('5px');
      expect (() => Unit.add ('5px', '10%')).to.throw ('5.5px');
    });
  });

  describe ('sub()', () => {
    it ('add known units', () => {
      expect (Unit.sub (3, 2)).to.deep.equal ({value: 1, unit: 'px'});
      expect (Unit.sub (3.3, 2.2)).to.deep.equal ({value: 1.1, unit: 'px'});
      expect (Unit.sub ('3px', '2px')).to.deep.equal ({value: 1, unit: 'px'});
      expect (Unit.sub ('3.3px', '2.2px')).to.deep.equal ({value: 1.1, unit: 'px'});
      expect (Unit.sub ('3.3rem', '2.2rem')).to.deep.equal ({value: 1.1, unit: 'rem'});
      expect (Unit.sub ('3.3em', '2.2em')).to.deep.equal ({value: 1.1, unit: 'em'});
      expect (Unit.sub ('75%', '5%')).to.deep.equal ({value: 70, unit: '%'});
    });
    it ('throws on unexpected input', () => {
      expect (() => Unit.sub ('2pt', '3pt')).to.throw ('5pt');
      expect (() => Unit.sub ('2px', 3)).to.throw ('5px');
      expect (() => Unit.sub ('5px', '10%')).to.throw ('5.5px');
    });
  });

  describe ('parse()', () => {
    it ('parses known units', () => {
      expect (Unit.parse (5)).to.deep.equal ({value: 5, unit: 'px'});
      expect (Unit.parse (5.1)).to.deep.equal ({value: 5.1, unit: 'px'});
      expect (Unit.parse ('5px')).to.deep.equal ({value: 5, unit: 'px'});
      expect (Unit.parse ('5.1px')).to.deep.equal ({value: 5.1, unit: 'px'});
      expect (Unit.parse ('5rem')).to.deep.equal ({value: 5, unit: 'rem'});
      expect (Unit.parse ('5em')).to.deep.equal ({value: 5, unit: 'em'});
      expect (Unit.parse ('75%')).to.deep.equal ({value: 75, unit: '%'});
    });
    it ('throws on unexpected input', () => {
      expect (() => Unit.parse ('5pt')).to.throw ('5pt');
    });
  });
});
