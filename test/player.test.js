'use strict';

const {expect} = require('chai');
const player_object = require('../player_object');

describe('player_object', ()=> {
	describe('access', ()=> {
		let myPlayer;
		beforeEach(()=> {
			myPlayer = new player_object();
		})

		it('has a name',()=> {
			myPlayer.setName('Bob');
			let result = myPlayer.getName();
			expect(result).to.equal('Bob');
		});

		it('has a token',()=> {
			myPlayer.setToken('Dog');
			let result = myPlayer.getToken();
			expect(result).to.equal('Dog');
		});

		it('has a balance',()=> {
			myPlayer.setBalance(1500);
			let result = myPlayer.getBalance();
			expect(result).to.equal(1500);
		});

		it('has a position',()=> {
			myPlayer.setPosition(8);
			let result = myPlayer.getPosition();
			expect(result).to.equal(8);
		});
	});

	describe('bank_transactions', ()=> {
		let myPlayer;
		beforeEach(()=> {
			myPlayer = new player_object();
		})

		it('it can pay',()=> {
			myPlayer.setBalance(1500);
			let result = myPlayer.pay(100);
			expect(result).to.equal(true);
			result = myPlayer.getBalance();
			expect(result).to.equal(1400);
		});

		it('it can handle not being able to pay',()=> {
			myPlayer.setBalance(1500);
			let result = myPlayer.pay(2000);
			expect(result).to.equal(false);
			result = myPlayer.getBalance();
			expect(result).to.equal(0);
		});
	});
	describe('player movement functions', ()=> {
		let myPlayer;
		beforeEach(()=> {
			myPlayer = new player_object();
		})

		it('it can move',()=> {
			myPlayer.setPosition(10);
			let result = myPlayer.move(2);
			expect(result).to.equal(true);
			result = myPlayer.getPosition();
			expect(result).to.equal(12);
		});
	});
});
