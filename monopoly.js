module.exports = class monopoly {
	rollDie() {
		return Math.floor((Math.random() * 6) + 1);
	}
	
	sumDieRoll(rollOne, rollTwo = 0) {
		var sum = rollOne + rollTwo;
		return sum;
	}
}