'use strict';
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Would you like to start? ', (answer) => {
  // TODO: Log the answer in a database
  if (answer == 'Yes' || answer == 'YES' || answer == 'yes')
  {
	  console.log(`Starting Game...`);

	rl.question('How many players? ', (answer) => {
	  // TODO: Log the answer in a database
	  console.log(`Players: ${answer}`);

	  rl.close();
	});
  }
  else
  {console.log(`Okay, bye!`);}

  rl.close();
});


module.exports = class monopoly {
	rollDie() {
		return Math.floor((Math.random() * 6) + 1);
	}
	
	sumDieRoll(rollOne, rollTwo = 0) {
		var sum = rollOne + rollTwo;
		return sum;
	}
}