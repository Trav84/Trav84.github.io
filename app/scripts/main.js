/* jshint devel:true */
'use strict';

//1) Create a function that takes an object and console.logs each property int he object.
function logObject (myObject) {

	if(myObject === 'undefined') {
		throw "You must enter an object";
	}

	if(typeof myObject !== 'object') {
		throw "You must enter an object";
	}

	for(var key in myObject) {
		console.log(key, myObject[key]);
	}
}

//2) Create a function that takes an object and console.logs that object.
// Then delete the rollno property of the object and console.log the object again.

function removeProp(myObject) {

	if(myObject === 'undefined') {
		throw "You must enter an object";
	}

	if(typeof myObject !== 'object') {
		throw "You must enter an object";
	}

	console.log(myObject);
	delete myObject.rollno;
	console.log(myObject);
}

//3) Create a function that takes an object and 
//returns the number of properties on that object that start with the letter "a" or "A"

function startsWithA(myObject) {

	if(myObject === 'undefined') {
		throw "You must enter an object";
	}

	if(typeof myObject !== 'object') {
		throw "You must enter an object";
	}

	var counter = 0;

	for(var key in myObject) {
		if (key[0] === 'a' || key === 'A') {
			counter++;
		}
	}

	return counter;
}

//4) Create a function that takes a cylinder object and returns the volume of that cylinder. 
//The cylinder object will have radius and height properties.

function cylinderVolume(myCylinderObject) {

	if(myCylinderObject === 'undefined') {
		throw "You must enter an object";
	}

	if(typeof myCylinderObject !== 'object') {
		throw "You must enter an object";
	}

	var radius = 0;
	var height = 0;

	for(var key in myCylinderObject) {

		if(key === 'radius') {
			radius = myCylinderObject[key];
		} else if (key === 'height') {
			height = myCylinderObject[key];
		} 
	}

	return (radius*radius) * height * 3.14;

}

// 5) Create a function that takes a firstName, lastName and age and returns an object with firstName, 
// lastName and age properties as well as a friends property that contains a list of friend names.
// Add at least 3 friends to the friends list.

function createObject(firstName, lastName, a) {

	if(typeof firstName === 'undefined' || typeof lastName === 'undefined' || typeof a === 'undefined') {
		throw "You did not enter a valid string/number";
	}

	if(typeof firstName !== 'string' || typeof lastName !== 'string') {
		throw "You did not enter a valid string";
	}

	if(typeof a !== 'number') {
		throw "The last arguement must be a valid number";
	}

	var person = { 
		firstName: firstName,
		lastName: lastName,
		age: a,
		friends: ['Frank','Bob','Sam']
	};
	return person;
}

//6) Create a function that takes the result of the last problem and a friend name and adds 
//that friend to the friends property of the object.

function addFriend(result, friendName) {

	if(result === 'undefined') {
		throw "You must enter an object";
	}

	if(typeof result !== 'object') {
		throw "You must enter an object";
	}

	if(typeof friendName === 'undefined') {
		throw "You must enter a string for the second arguement";
	}

	if(typeof friendName !== 'string') {
		throw "You must enter a string for the second arguement";
	}

	return result.friends.push(friendName);
}

$( document ).ready(function() {

	$( ".arrow-container" ).click(function(event) {

		$('.right-section').scrollTop(0);

	});
});
