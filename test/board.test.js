'use strict';

const {expect} = require('chai');
const {board_object} = require('../board_object');

describe('board_object', ()=> {
	describe('access', ()=> {
		let myBoard = new board_object();
	
		it('has Marvin Gardens at #29',()=> {
			let result = myBoard.getProperty(29);
			expect(result.name).to.equal('Marvin Gardens');
		});
	});
});
