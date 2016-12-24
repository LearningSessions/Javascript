/*
Author : Vicky Thakkar

Assignment : 1

Create a dynamic registration form  which will contain minimum these elements.

First Name
Last Name
Email
Contact No
Date of Birth

Perform basic validation of respective elements. Avoid using HTML. Use Document object.
*/

var createform = document.createElement('form'); 
var form = document.getElementById("Registration_Form");
var header = document.createElement('h2');
var firstName = document.createElement('input');
var lastName = document.createElement('input');
var email = document.createElement('input');
var phone = document.createElement('input');
var dob = document.createElement('input');
var submit = document.createElement('input');
var field = document.createElement('fieldset');
var legend = document.createElement('legend');


//form
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
form.appendChild(createform);

//header 
header.innerHTML = "Registration Form ";
createform.appendChild(header);

createform.appendChild(field);
legend.innerHTML = "Enter Details";
field.setAttribute("style","margin-bottom:15px;margin-right:80%;")
field.appendChild(legend);
//FirstName

firstName.setAttribute("type","text");
firstName.setAttribute("placeholder","First Name");
firstName.setAttribute("pattern","[A-Za-z]+");
firstName.setAttribute("required","true");
firstName.setAttribute("autofocus","");
field.appendChild(firstName);
var linebreak = document.createElement('br');
field.appendChild(linebreak);


//LastName

lastName.setAttribute("type","text");
lastName.setAttribute("placeholder","Last Name");
lastName.setAttribute("pattern","[A-Za-z]+");
lastName.setAttribute("required","true");
field.appendChild(lastName);
var linebreak = document.createElement('br');
field.appendChild(linebreak);

//email

email.setAttribute("type","email");
email.setAttribute("placeholder","example@domain.com");
email.setAttribute("pattern","[a-z0-9._%+-]+@[a-z0-9]+.[a-z]{2,3}$");
email.setAttribute("required","true");
field.appendChild(email);
var linebreak = document.createElement('br');
field.appendChild(linebreak);

//phone

phone.setAttribute("type","text");
phone.setAttribute("placeholder","Contact");
phone.setAttribute("pattern","[0-9]{10}");
phone.setAttribute("required","true");
field.appendChild(phone);
var linebreak = document.createElement('br');
field.appendChild(linebreak);

//Date of Birth	

dob.setAttribute("type","date");
dob.setAttribute("required","true");
field.appendChild(dob);
var linebreak = document.createElement('br');
field.appendChild(linebreak);


var field = document.createElement('fieldset');
field.setAttribute("style","margin-bottom:15px;margin-right:80%;")
createform.appendChild(field);

submit.setAttribute("type","submit");
field.appendChild(submit);





