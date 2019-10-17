'use strict';

module.exports = class monopoly {
	rollDie() {
		return Math.floor((Math.random() * 6) + 1);
	}
}