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
		let _monopoly = new monopoly();
		
	});
});
