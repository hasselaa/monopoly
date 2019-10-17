const readline = require('readline');
const player = require('./player_object.js');
const {board_object} = require('./board_object.js');
const property = require('./property_object.js');
const monopoly = require('./monopoly.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let mono = new monopoly();
let P1 = new player();
let P2 = new player();
let the_board = new board_object("US");

initGame();

function initGame() {
	
	//var start = rl.question('Would you like to start? ', (answer) => {
	//	if (answer == 'Yes' || answer == 'YES' || answer == 'yes')
	//	{start = true;}
	//	else {start = false;}
	//	rl.close();
    //});
	  
	//if (start)
	//{
		console.log(`Starting Game...`);
		
		var lastVal1 = 0;
		var lastVal2 = 0;
		
		getUserNameInput(P1, '1');
		getUserNameInput(P2, '2');		
			
		//P1.setName('Amy');
		P1.setBalance(1500);
		P1.setPosition(0);
		
		//P2.setName('Matt');		
		P2.setBalance(1500);
		P2.setPosition(0);
		
		var turnIdx = 0;
		
		for(var i = 0; i < 10; i++)
		{
			lastVal1 = mainLoop(P1, lastVal1);
			lastVal2 = mainLoop(P2, lastVal2);
		}
	//}
	//else {console.log(`Okay, bye!`);}
}

function mainLoop(player, lastVal)
{
	var dieVal1 = mono.rollDie();
	var dieVal2 = mono.rollDie();
	
	var rollSum = mono.sumDieRoll(dieVal1, dieVal2);
	console.log(player.name + ' moves ' + rollSum + ' places.');
	player.move(rollSum);
	result = player.getPosition();
	console.log(result);
	console.log(player.name + '\'s position is now ' + the_board.getProperty(result));
	if (player.getPosition() < lastVal)
	{
		passedGo(player);
		console.log(player.name + ' has passed go.  Awarded $200.');
		console.log('Current Funds: $' + player.getBalance());
	}
	
	console.log();
	return player.getPosition();
}

function passedGo(player)
{
	player.setBalance(player.getBalance() + 200);
}

function getUserNameInput(Player, num) 
{
	var name = rl.question('Player' + num + ': ', (answer) => {
			console.log(`Players: ${answer}`);
			rl.close();
	});
	Player.setName(name);
	console.log(`Welcome, ` + Player.getName() + `!`);
}

