'use strict';

const {expect} = require('chai');
const monopoly = require('../monopoly');

describe('monopoly', ()=> {
	let _monopoly = new monopoly();
	describe('rollDie', ()=> {
		//arrange
		var test = [{expected_low: 1, expected_high: 6}];
		
		//act
		it ('rolls the dice and returns a value between 1-6', ()=> {
			//assert
			const result = _monopoly.rollDie();
			expect(result).to.be.above(test[0].expected_low-1);
			expect(result).to.be.below(test[0].expected_high+1);
		});
	});
	
	describe('sum', ()=> {
		var tests = [
				{rollOne: 1, rollTwo: 6, expected: 7},
				{rollOne: 5, rollTwo: null, expected: 5}	
			];
		
		tests.forEach((test) =>{
			it ('outputs a total roll value of ' 
			+ test.expected 
			+ ' when inputs are '
			+ test.rollOne + ' and ' + test.rollTwo, ()=> {
				const result = _monopoly.sumDieRoll(test.rollOne, test.rollTwo);
				expect(result).to.equal(test.expected);
			});
		});
		
		
		
	});
});
