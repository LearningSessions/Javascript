////1
function add(a, b) {
    return a + b;
}
//To Try
var add = new add(4, 5); //Create object of function add,Function will not execute
console.log(add);//Return function 

//To Try
var add = add(4, 5);  //Execute Function
console.log(add);//9



////2
function add(a, b) {
    return a + b;
}
//To Try
var a = new add(4, 5);
a.addtwo = function (a, b, c) {
    return a + b + c;
}//This addtwo() function added inside add


var b = new add();
b.addtwo(); //ERROR addtwo is not a function



//To Try
var a = new add();
a.prototype.addtwo = function (a, b, c) {
    return a + b + c;
}
console.log(a);//Home.js:8 Uncaught TypeError: Cannot set property 'addtwo' of undefined

var b = new add();
b.addtwo();//ERROR addtwo is not a function


////3
function add(a, b) {
    return a + b;
}
var a = new add();
a.prototype.add = function (a, b, c) {
    return a + b + c;
}//Uncaught TypeError: Cannot set property 'add' of undefined
a.add(2, 3, 5);