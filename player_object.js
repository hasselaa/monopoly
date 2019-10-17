'use strict';

module.exports = class player_object {
//	let name; // Why can't we do this? Why does it work without this?

	setName(value){
		this.name = value;
	}
	getName(){
		return this.name;
	}

	setToken(value){
		this.token = value;
	}
	getToken(){
		return this.token;
	}

	setBalance(value){
		this.balance = value;
	}
	getBalance(){
		return this.balance;
	}

	setPosition(value){
		this.position = value;
	}
	getPosition(){
		return this.position;
	}

	pay(value){
		if (this.balance < value) {
			this.balance = 0;
			return false;
		}
		else {
			this.balance -= value;
			return true;
		}
	}
	move(value){
		// This is weird, I know. The player shouldn't know about how to move
		this.position = (this.position + value) % 40;
		return true;
	}
};