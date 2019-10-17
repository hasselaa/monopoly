'use strict';

const {expect} = require('chai');
const player_object = require('../player_object');
const {tile_object, property_object} = require('../property_object');

describe('board_object', ()=> {
	describe('access', ()=> {
		let myBoard = new board_object();
	
		it('has a property_object',()=> {
			//myProperty.setName();
			let result = myBoard.getProperty();
			expect(result).to.equal('Marvin Gardens');
		});
/*
		it('has an owner',()=> {
			owner = new player_object();
			let result = myProperty.getOwner();
			expect(result).to.equal(null);
			myProperty.setOwner(owner);
			result = myProperty.getOwner();
			expect(result).to.equal(owner);
		});*/
	});
});
