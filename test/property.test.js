'use strict';

const {expect} = require('chai');
const player_object = require('../player_object');
const {tile_object, property_object} = require('../property_object');

describe('property_object', ()=> {
	describe('access', ()=> {
		let myProperty = new property_object('Marvin Gardens');
	
		it('has a name',()=> {
			//myProperty.setName();
			let result = myProperty.getName();
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
