//Member constructor
function Member (name,fullname,age,sex,phonenumber){
	this.name = name;
	this.fullname = fullname;
	this.age = age;
	this.yearofbirth = 2015 -age;
	this.sex = sex;
	this.phonenumber = phonenumber;
}
//Now we can make an array of people 
var family = new Array();
	family[0] = new Member ("alice","Alice Smith",19,"Female","13200002324");
	family[1] = new Member ("bob","Bob Smith",35,"Male","13049399920");
	family[2] = new Member ("michelle","Michelle Smith",40,"Male","18520304050")
//Print it out
console.log(family);
