function add (a,b) {
	return a+b;
}
//***************************************************
var add = new add(25,35);
console.log(add); //add {}

var add = add(25,35);
console.log(add); //60
  
//***************************************************
var a = new add();
a.addtwo = function(a,b,c) {
	return a+b+c;
}
var b = new add();
b.addtwo(); //NOT A FUNCTION

//***************************************************
var a = new add();
a.prototype.addtwo = function(a,b,c) {
	return a+b+c;
}
var b= new add();
b.addtwo(); //Cannot set property 'addtwo' of undefined

//***************************************************
var a= new add();
a.prototype.add = function(a,b,c) {
	return a+b+c;
}
a.add(2,3,5); //Cannot set property 'add' of undefined
