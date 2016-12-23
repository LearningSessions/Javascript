/*
Author : Deep Shah
Assignment : 1

Create a dynamic registration form  which will contain minimum these elements.

First Name
Last Name
Email
Contact No
Date of Birth

Perform basic validation of respective elements. Avoid using HTML. Use Document object.

*/

var form = document.getElementById("Reg_Form");
var createform = document.createElement('form'); 
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post"); 
form.appendChild(createform);

var heading = document.createElement('h2'); 
heading.innerHTML = "Registration Form ";
createform.appendChild(heading);

var line = document.createElement('hr');
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var fnamelabel = document.createElement('label'); 
fnamelabel.innerHTML = "First Name : "; 
createform.appendChild(fnamelabel);

var fnametxt = document.createElement('input'); 
fnametxt.setAttribute("type", "text");
fnametxt.setAttribute("name", "fname");
fnametxt.setAttribute("required", "true");
createform.appendChild(fnametxt);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var lnamelabel = document.createElement('label'); 
lnamelabel.innerHTML = "Last Name : "; 
createform.appendChild(lnamelabel);

var lnametxt = document.createElement('input'); 
lnametxt.setAttribute("type", "text");
lnametxt.setAttribute("name", "lname");
lnametxt.setAttribute("required", "true");
createform.appendChild(lnametxt);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); 
emaillabel.innerHTML = "Email : ";
createform.appendChild(emaillabel);

var emailtxt = document.createElement('input'); 
emailtxt.setAttribute("type", "email");
emailtxt.setAttribute("name", "email");
emailtxt.setAttribute("required", "true");
createform.appendChild(emailtxt);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var cnolabel = document.createElement('label'); 
cnolabel.innerHTML = "Contact No : ";
createform.appendChild(cnolabel);

var cnotxt = document.createElement('input'); 
cnotxt.setAttribute("type", "number");
cnotxt.setAttribute("name", "cno");
cnotxt.setAttribute("required", "true");
createform.appendChild(cnotxt);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var doblabel = document.createElement('label'); 
doblabel.innerHTML = "Date of Birth : ";
createform.appendChild(doblabel);

var dobtxt = document.createElement('input'); 
dobtxt.setAttribute("type", "date");
dobtxt.setAttribute("name", "dob");
dobtxt.setAttribute("required", "true");
createform.appendChild(dobtxt);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var resetbutton = document.createElement('input'); 
resetbutton.setAttribute("type", "reset");
resetbutton.setAttribute("name", "breset");
resetbutton.setAttribute("value", "Reset");
createform.appendChild(resetbutton);

var submitbutton = document.createElement('input'); 
submitbutton.setAttribute("type", "submit");
submitbutton.setAttribute("name", "bsubmit");
submitbutton.setAttribute("value", "Submit");
submitbutton.onSubmit = submitForm();
createform.appendChild(submitbutton);

function submitForm() {
    alert("Thank You For Register. :)");
}