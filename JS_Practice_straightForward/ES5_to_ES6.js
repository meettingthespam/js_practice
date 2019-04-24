# variables with JS




// Old ES%




// using var will the changing and updating the variable later in the 
// the .js file, 

var age = 25;

console.log(age);

age = 34;

console.log(age);


// but in a function it's local and not a global variable 
function sayAge(){
	var agey = 30;
	console.log(agey);
}

// if you tried to change the variable agey 
// outsife of the funciton, it would be "out of scope"
// which means that it's not a global variable and is not understood 
// to exist outside of the function 
// this will crash the program because agey doesn't exist outside the function
// console.log(agey);
// agey = 31; // this will crash the program
 
 
// ES6

// using const makes the assigned variable immutable 

const this_is = "is A fuckking";


console.log(this_is);
// using let allows the variable to be changed at a later point

let i_am_mutable = "this is a asldjfk";

i_am_mutable = "Billy Goat";




console.log(i_am_mutable)
