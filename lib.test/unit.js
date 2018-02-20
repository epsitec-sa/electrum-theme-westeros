/* global describe it */

import {expect} from 'mai-chai';
import {Unit} from 'electrum-theme';

describe('Unit', () => {
  describe('multiply()', () => {
    it('multiplies numbers', () => {
      expect(Unit.multiply(5, 2)).to.equal(10);
    });
    it('multiplies pixels', () => {
      expect(Unit.multiply('5px', 2)).to.equal('10px');
    });
    it('multiplies ems', () => {
      expect(Unit.multiply('5em', 2)).to.equal('10em');
    });
    it('multiplies %', () => {
      expect(Unit.multiply('50%', 2)).to.equal('100%');
    });
  });

  describe('fix()', () => {
    it('fix without decimal numbers', () => {
      expect(Unit.fix(5, null)).to.equal(5);
      expect(Unit.fix(5, 0)).to.equal('5');
      expect(Unit.fix(5, 1)).to.equal('5.0');
      expect(Unit.fix(5, 2)).to.equal('5.00');
      expect(Unit.fix(5, 3)).to.equal('5.000');
    });
    it('fix with .1 numbers', () => {
      expect(Unit.fix(5.1, null)).to.equal(5.1);
      expect(Unit.fix(5.1, 0)).to.equal('5');
      expect(Unit.fix(5.1, 1)).to.equal('5.1');
      expect(Unit.fix(5.1, 2)).to.equal('5.10');
      expect(Unit.fix(5.1, 3)).to.equal('5.100');
    });
    it('fix with .66666 numbers', () => {
      expect(Unit.fix(5.66666, null)).to.equal(5.66666);
      expect(Unit.fix(5.66666, 0)).to.equal('6');
      expect(Unit.fix(5.66666, 1)).to.equal('5.7');
      expect(Unit.fix(5.66666, 2)).to.equal('5.67');
      expect(Unit.fix(5.66666, 3)).to.equal('5.667');
    });
    it('fix with .9 numbers', () => {
      expect(Unit.fix(5.9, null)).to.equal(5.9);
      expect(Unit.fix(5.9, 0)).to.equal('6');
      expect(Unit.fix(5.9, 1)).to.equal('5.9');
      expect(Unit.fix(5.9, 2)).to.equal('5.90');
      expect(Unit.fix(5.9, 3)).to.equal('5.900');
    });
    it('fix with negative numbers', () => {
      expect(Unit.fix(-5.1, null)).to.equal(-5.1);
      expect(Unit.fix(-5.1, 0)).to.equal('-5');
      expect(Unit.fix(-5.1, 1)).to.equal('-5.1');
      expect(Unit.fix(-5.1, 2)).to.equal('-5.10');
      expect(Unit.fix(-5.1, 3)).to.equal('-5.100');
      expect(Unit.fix(-5.9, null)).to.equal(-5.9);
      expect(Unit.fix(-5.9, 0)).to.equal('-6');
      expect(Unit.fix(-5.9, 1)).to.equal('-5.9');
      expect(Unit.fix(-5.9, 2)).to.equal('-5.90');
      expect(Unit.fix(-5.9, 3)).to.equal('-5.900');
    });
    it('fix with strange decimals', () => {
      expect(Unit.fix(5.6666, 2.0)).to.equal('5.67');
      expect(Unit.fix(5.6666, 2.1)).to.equal('5.67');
      expect(Unit.fix(5.6666, 2.9)).to.equal('5.67');
      expect(() => Unit.fix(5.6666, -2)).to.throw();
      expect(() => Unit.fix(5.6666, 100)).to.throw();
      expect(() => Unit.fix(5.1, 'coucou')).to.throw();
    });
  });

  describe('add()', () => {
    it('add known units', () => {
      expect(Unit.add(2, 3)).to.deep.equal(5);
      expect(Unit.add(2.2, 3.3)).to.deep.equal(5.5);
      expect(Unit.add('2px', '3px')).to.deep.equal('5px');
      expect(Unit.add('2.0px', '3.00px')).to.deep.equal('5px');
      expect(Unit.add('2px', '3px', 0)).to.deep.equal('5px');
      expect(Unit.add('2px', '3px', 2)).to.deep.equal('5.00px');
      expect(Unit.add('2px', '3px', 5)).to.deep.equal('5.00000px');
      expect(Unit.add('2.2px', '3.3px')).to.deep.equal('5.5px');
      expect(Unit.add('2.4px', '3.5px')).to.deep.equal('5.9px');
      expect(Unit.add('2.4px', '3.6px')).to.deep.equal('6px');
      expect(Unit.add('2.4px', '3.5px', 0)).to.deep.equal('6px');
      expect(Unit.add('2.4px', '3.5px', 1)).to.deep.equal('5.9px');
      expect(Unit.add('2.4px', '3.5px', 2)).to.deep.equal('5.90px');
      expect(Unit.add('2.4px', '3.6px', 2)).to.deep.equal('6.00px');
      expect(Unit.add('2.2222px', '3.1px', 0)).to.deep.equal('5px');
      expect(Unit.add('2.2222px', '3.1px', 2)).to.deep.equal('5.32px');
      expect(Unit.add('2.9999px', '3.1px', 0)).to.deep.equal('6px');
      expect(Unit.add('2.9999px', '3.1px', 2)).to.deep.equal('6.10px');
      expect(Unit.add('2.9px', '3.1px', 0)).to.deep.equal('6px');
      expect(Unit.add('2.9px', '3.1px', 2)).to.deep.equal('6.00px');
      expect(Unit.add('2.2rem', '3.3rem')).to.deep.equal('5.5rem');
      expect(Unit.add('2.2em', '3.3em')).to.deep.equal('5.5em');
      expect(Unit.add('75%', '5%', null)).to.deep.equal('80%');
    });
    it('add negative numbers', () => {
      expect(Unit.add(-2, 3)).to.deep.equal(1);
      expect(Unit.add(2, -3)).to.deep.equal(-1);
      expect(Unit.add(-2, -3)).to.deep.equal(-5);
      expect(Unit.add(2.2, -3.3)).to.deep.equal(-1.0999999999999996);
      expect(Unit.add('-2px', '3px')).to.deep.equal('1px');
      expect(Unit.add('2px', '-3px')).to.deep.equal('-1px');
      expect(Unit.add('-2px', '-3px')).to.deep.equal('-5px');
    });
    it('throws on unexpected input', () => {
      expect(() => Unit.add('2pt', '3pt')).to.throw();
      expect(() => Unit.add('2px', 3)).to.throw();
      expect(() => Unit.add('5px', '10%')).to.throw();
    });
  });

  describe('sub()', () => {
    it('add known units', () => {
      expect(Unit.sub(3, 2)).to.deep.equal(1);
      expect(Unit.sub(3.3, 2.2, null)).to.deep.equal(1.0999999999999996);
      expect(Unit.sub('3px', '2px')).to.deep.equal('1px');
      expect(Unit.sub('3.0px', '2.00px')).to.deep.equal('1px');
      expect(Unit.sub('3px', '2px', null)).to.deep.equal('1px');
      expect(Unit.sub('3px', '2px', 0)).to.deep.equal('1px');
      expect(Unit.sub('3px', '2px', 2)).to.deep.equal('1.00px');
      expect(Unit.sub('3px', '2px', 5)).to.deep.equal('1.00000px');
      expect(Unit.sub('3.3px', '2.2px')).to.deep.equal('1.0999999999999996px');
      expect(Unit.sub('3.3px', '2.2px', 0)).to.deep.equal('1px');
      expect(Unit.sub('3.3px', '2.2px', 1)).to.deep.equal('1.1px');
      expect(Unit.sub('3.3px', '2.2px', 2)).to.deep.equal('1.10px');
      expect(Unit.sub('3.9px', '2.1px')).to.deep.equal('1.7999999999999998px');
      expect(Unit.sub('3.9px', '2.1px', 0)).to.deep.equal('2px');
      expect(Unit.sub('3.9px', '2.1px', 1)).to.deep.equal('1.8px');
      expect(Unit.sub('3.9px', '2.1px', 2)).to.deep.equal('1.80px');
      expect(Unit.sub('3.2222px', '2.1px', 0)).to.deep.equal('1px');
      expect(Unit.sub('3.2222px', '2.1px', 2)).to.deep.equal('1.12px');
      expect(Unit.sub('3.9999px', '2.1px', 0)).to.deep.equal('2px');
      expect(Unit.sub('3.9999px', '2.1px', 2)).to.deep.equal('1.90px');
      expect(Unit.sub('3.9px', '2.9px', 0)).to.deep.equal('1px');
      expect(Unit.sub('3.9px', '2.9px', 2)).to.deep.equal('1.00px');
      expect(Unit.sub('3rem', '2rem')).to.deep.equal('1rem');
      expect(Unit.sub('3em', '2em')).to.deep.equal('1em');
      expect(Unit.sub('75%', '5%')).to.deep.equal('70%');
    });
    it('sub negative numbers', () => {
      expect(Unit.sub(-2, 3)).to.deep.equal(-5);
      expect(Unit.sub(2, -3)).to.deep.equal(5);
      expect(Unit.sub(-2, -3)).to.deep.equal(1);
      expect(Unit.sub(2.2, -3.3)).to.deep.equal(5.5);
      expect(Unit.sub('-2px', '3px')).to.deep.equal('-5px');
      expect(Unit.sub('2px', '-3px')).to.deep.equal('5px');
      expect(Unit.sub('-2px', '-3px')).to.deep.equal('1px');
    });
    it('throws on unexpected input', () => {
      expect(() => Unit.sub('2pt', '3pt')).to.throw();
      expect(() => Unit.sub('2px', 3)).to.throw();
      expect(() => Unit.sub('5px', '10%')).to.throw();
    });
  });

  describe('parse()', () => {
    it('parses known units', () => {
      expect(Unit.parse(5)).to.deep.equal({value: 5, unit: 'px'});
      expect(Unit.parse(5.1)).to.deep.equal({value: 5.1, unit: 'px'});
      expect(Unit.parse('5px')).to.deep.equal({value: 5, unit: 'px'});
      expect(Unit.parse('5.1px')).to.deep.equal({value: 5.1, unit: 'px'});
      expect(Unit.parse('5rem')).to.deep.equal({value: 5, unit: 'rem'});
      expect(Unit.parse('5em')).to.deep.equal({value: 5, unit: 'em'});
      expect(Unit.parse('75%')).to.deep.equal({value: 75, unit: '%'});
    });
    it('throws on unexpected input', () => {
      expect(() => Unit.parse('5pt')).to.throw('5pt');
    });
  });
});
