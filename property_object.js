'use strict';

class tile_object {
	constructor (in_name) {
		this.name = in_name;
	}
	
	setName(value){
		this.name = value;
	}
	getName(){
		return this.name;
	}
/*
	setOwner(value){
		this.owner = value;
	}
	getOwner(){
		return this.owner;
	}*/
}

class property_object extends tile_object {
    constructor (in_name) {
		super(in_name)
	}
	set_colour_group() {}
}

module.exports.property_object = property_object;
module.exports.tile_object = tile_object;

