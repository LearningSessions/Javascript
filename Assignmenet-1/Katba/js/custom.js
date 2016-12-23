var x = document.getElementById("form_sample");

// Create New Element Form
var createform = document.createElement('form');
createform.setAttribute("action", ""); 
createform.setAttribute("method", "post");

// Heading of Form
var heading = document.createElement('h2'); 
heading.innerHTML = "Registration Form ";
createform.appendChild(heading);

// Giving Horizontal Row After Heading
var line = document.createElement('hr');
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//Append First Name
var fnamediv = document.createElement('div');

var fnamelabel = document.createElement('label');
fnamelabel.setAttribute("class", "label");
fnamelabel.innerHTML = "First Name : ";
fnamediv.appendChild(fnamelabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("id", "firstName");
inputelement.setAttribute("required", "true");
inputelement.setAttribute("class", "inputArea");
fnamediv.appendChild(inputelement);

createform.appendChild(fnamediv);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//Append Last Name
var lnamediv = document.createElement('div');

var lnamelabel = document.createElement('label');
lnamelabel.setAttribute("class", "label");
lnamelabel.innerHTML = "Last Name : ";
lnamediv.appendChild(lnamelabel);

var inputelement = document.createElement('input');
inputelement.setAttribute("type", "text");
inputelement.setAttribute("id", "lastName");
inputelement.setAttribute("required", "true");
inputelement.setAttribute("class", "inputArea");
lnamediv.appendChild(inputelement);

createform.appendChild(lnamediv);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//Append Phone Number
var phndiv = document.createElement('div');

var phnlabel = document.createElement('label');
phnlabel.setAttribute("class", "label");
phnlabel.innerHTML = "Phone Number : ";
phndiv.appendChild(phnlabel);

var numberElement = document.createElement('input');
numberElement.setAttribute("type", "number");
numberElement.setAttribute("id", "phoneNumber");
numberElement.setAttribute("required", "true");
numberElement.setAttribute("class", "inputArea");
phndiv.appendChild(numberElement);

createform.appendChild(phndiv);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//Append Email Address
var emaildiv = document.createElement('div');

var emaillabel = document.createElement('label');
emaillabel.setAttribute("class", "label");
emaillabel.innerHTML = "Email Address : ";
emaildiv.appendChild(emaillabel);

var emailElement = document.createElement('input');
emailElement.setAttribute("type", "email");
emailElement.setAttribute("id", "email");
emailElement.setAttribute("required", "true");
emailElement.setAttribute("class", "inputArea");
emaildiv.appendChild(emailElement);

createform.appendChild(emaildiv);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//Append Date of birth
var dobdiv = document.createElement('div');

var doblabel = document.createElement('label');
doblabel.setAttribute("class", "label");
doblabel.innerHTML = "Date of Birth : ";
dobdiv.appendChild(doblabel);

var dobElement = document.createElement('input');
dobElement.setAttribute("type", "date");
dobElement.setAttribute("id", "dateOfBirth");
dobElement.setAttribute("required", "true");
dobElement.setAttribute("class", "inputArea");
dobdiv.appendChild(dobElement);

createform.appendChild(dobdiv);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

//Append Button
var buttondiv = document.createElement('div');

var resetElement = document.createElement('input');
resetElement.setAttribute("type", "reset");
resetElement.setAttribute("id", "reset");
resetElement.setAttribute("value", "Clear");
resetElement.setAttribute("class", "inputButton");
buttondiv.appendChild(resetElement);

var columnbreak = document.createElement('span');
columnbreak.setAttribute("class", "columnbreak");
buttondiv.appendChild(columnbreak);

var submitElement = document.createElement('input');
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("id", "submit");
submitElement.setAttribute("value", "Submit");
submitElement.setAttribute("class", "inputButton");
submitElement.onsubmit=submitForm();
buttondiv.appendChild(submitElement);

createform.appendChild(buttondiv);

x.appendChild(createform);

function submitForm(){
	alert("Thank you for registering!!!");
}