//Make a method work for many objects using a new keyword: this, the keyword "this" acts as a placeholder, and will refer to which ever object called that method when the method is actually used.
//Here we define our method using "this", before we even intruduce bob
var setInfo = function (fullName,newAge,newSex) {
	this.name = fullName;
	this.age = newAge;
	this.BirthYear = 2015 - newAge;
	this.Sex = newSex;
}
//Now we make bob
var bob = new Object();
//And down here we just use the method we already made
	bob.setInfo = setInfo;
//Now we can add bob's information , with full name and age.
	bob.setInfo("Bob Smith",50,"Male");

//"this" Works for everyone
var susan = new Object();
	susan.setInfo = setInfo;
	susan.setInfo("Susan Lawrence",35,"Female");

//do some output format.
console.log(bob.name + " is " + bob.age + " years old, and born in " + bob.BirthYear + " !");
console.log(susan.name + " is " + susan.age + " years old, and born in " + susan.BirthYear + " !");
