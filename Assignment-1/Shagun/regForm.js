var rg=document.getElementById('registration');
var form=document.createElement('form');
rg.appendChild(form);

var heading=document.createElement('h1');
heading.innerHTML='Registration Form';
form.appendChild(heading);
heading.setAttribute("style","text-align:center;padding-top:50px;color:white;background-color:black")

var FirstName=document.createElement('label');
FirstName.innerHTML=('FirstName:');
form.appendChild(FirstName);


var Textbox=document.createElement('input');
Textbox.setAttribute('type','text');
Textbox.setAttribute("required","true");
Textbox.setAttribute("style","border-color:green")
FirstName.setAttribute("style","text-align:center;padding-top:40px;color:green;")
form.appendChild(Textbox);



var breakElement=document.createElement('br');
form.appendChild(breakElement);
var breakElement=document.createElement('br');
form.appendChild(breakElement);

var LastName=document.createElement('label');
LastName.innerHTML=('LastName:');
form.appendChild(LastName); 

var Textbox=document.createElement('input');
Textbox.setAttribute('type','text');
Textbox.setAttribute("required","true");
Textbox.setAttribute("style","border-color:green")
LastName.setAttribute("style","text-align:center;padding-top:40px;color:green;")
form.appendChild(Textbox);

var breakElement=document.createElement('br');
form.appendChild(breakElement);
var breakElement=document.createElement('br');
form.appendChild(breakElement);

var Email=document.createElement('label');
Email.innerHTML=('Email:');
form.appendChild(Email); 

var Textbox=document.createElement('input');
Textbox.setAttribute('type','Email');
Textbox.setAttribute("placeholder","eg:abc@xyz.com");
Textbox.setAttribute("required","true");
Textbox.setAttribute("style","border-color:green")
Email.setAttribute("style","padding-right:25px;color:green;")
form.appendChild(Textbox);

var breakElement=document.createElement('br');
form.appendChild(breakElement);
var breakElement=document.createElement('br');
form.appendChild(breakElement);

var PhoneNo=document.createElement('label');
PhoneNo.innerHTML=('PhoneNo:');
form.appendChild(PhoneNo); 

var Textbox=document.createElement('input');
Textbox.setAttribute('type','number');
Textbox.setAttribute("required","true");
Textbox.setAttribute("style","border-color:green")
PhoneNo.setAttribute("style","padding-right:5px;color:green;")
form.appendChild(Textbox);

var breakElement=document.createElement('br');
form.appendChild(breakElement);
var breakElement=document.createElement('br');
form.appendChild(breakElement);

var DateOfBirth=document.createElement('label');
DateOfBirth.innerHTML=('DateOfBirth:');
form.appendChild(DateOfBirth); 


var Textbox=document.createElement('input');
Textbox.setAttribute('type','date');
Textbox.setAttribute("required","true");
Textbox.setAttribute("style","border-color:green")
DateOfBirth.setAttribute("style","padding-right:0px;color:green;")
form.appendChild(Textbox);

var breakElement=document.createElement('br');
form.appendChild(breakElement);
var breakElement=document.createElement('br');
form.appendChild(breakElement);

var submit=document.createElement('button');
submit.innerHTML=('Submit');
form.appendChild(submit);
submit.setAttribute("style","margin-left:25px;color:black;");


var reset=document.createElement('button');
reset.innerHTML=('Reset');
form.appendChild(reset);
reset.setAttribute("required","true");
reset.setAttribute("style","margin-left:10px;color:black");






