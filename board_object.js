'use strict';
const {tile_object, property_object} = require('./property_object');

class board_object {
	
	constructor (in_name) {
		this.name = in_name;
		
		this.tiles = Array(40);

		this.tiles[0]  = new tile_object('Go');
		this.tiles[1]  = new tile_object('Mediterranean Avenue');
		this.tiles[2]  = new tile_object('Community Chest A');
		this.tiles[3]  = new tile_object('Baltic Avenue');
		this.tiles[4]  = new tile_object('Income Tax');
		this.tiles[5]  = new tile_object('Reading RR');
		this.tiles[6]  = new tile_object('Oriental Avenue');
		this.tiles[7]  = new tile_object('Chance A');
		this.tiles[8]  = new tile_object('Vermont Avenue Road');
		this.tiles[9]  = new tile_object('Connecticut Avenue');
		this.tiles[10] = new tile_object('Jail');
		this.tiles[11] = new tile_object('St. Charles Place');
		this.tiles[12] = new tile_object('Electric Company');
		this.tiles[13] = new tile_object('States Avenue');
		this.tiles[14] = new tile_object('Virginia Avenue');
		this.tiles[15] = new tile_object('Pennsylvania RR');
		this.tiles[16] = new tile_object('St. James Place');
		this.tiles[17] = new tile_object('Community Chest B');
		this.tiles[18] = new tile_object('Tennessee Avenue');
		this.tiles[19] = new tile_object('New York Avenue');
		this.tiles[20] = new tile_object('Free Parking');
		this.tiles[21] = new tile_object('Kentucky Avenue');
		this.tiles[22] = new tile_object('Chance B');
		this.tiles[23] = new tile_object('Indiana Avenue');
		this.tiles[24] = new tile_object('Illinois Avenue');
		this.tiles[25] = new tile_object('B&O RR');
		this.tiles[26] = new tile_object('Atlantic Avenue');
		this.tiles[27] = new tile_object('Ventnor Avenue');
		this.tiles[28] = new tile_object('Water Works');
		this.tiles[29] = new tile_object('Marvin Gardens');
		this.tiles[30] = new tile_object('Police');
		this.tiles[31] = new tile_object('Pacific Avenue');
		this.tiles[32] = new tile_object('North Carolina Avenue');
		this.tiles[33] = new tile_object('Community Chest C');
		this.tiles[34] = new tile_object('Pennsylvania Avenue');
		this.tiles[35] = new tile_object('Short Line');
		this.tiles[36] = new tile_object('Chance C');
		this.tiles[37] = new tile_object('Park Place');
		this.tiles[38] = new tile_object('Luxury Tax');
		this.tiles[39] = new tile_object('Boardwalk');
	}
	
	getProperty(value){
		return this.tiles[value];
	}
}
module.exports.board_object = board_object;
