import {Koala, Cat} from '../src/animals.js'

// Main function
global.main = function() {
	let steve = new Koala('Steve')
	let bill = new Cat('Bill')

	steve.drink('coffee')
	bill.drink('milk')

	steve.eat();
	bill.eat('fish', 'carrot', 'mouse');
}
