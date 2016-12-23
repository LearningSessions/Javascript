/**
 * Created by nupur.shinde on 23/12/16.
 */

var x = document.getElementById("form_sample");
var createform = document.createElement('form');
createform.setAttribute("onsubmit", "success()");
x.appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr');
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var fnamelabel = document.createElement('label');
fnamelabel.innerHTML = "First Name : ";
createform.appendChild(fnamelabel);

var fnameElement = document.createElement('input');
fnameElement.setAttribute("type", "text");
fnameElement.setAttribute("name", "fname");
fnameElement.setAttribute("required", "required");
createform.appendChild(fnameElement);

var lnamelabel = document.createElement('label');
lnamelabel.innerHTML = "Last Name : ";
createform.appendChild(lnamelabel);

var lnameElement = document.createElement('input');
lnameElement.setAttribute("type", "text");
lnameElement.setAttribute("name", "lname");
lnameElement.setAttribute("required", "required");
createform.appendChild(lnameElement);


var emaillabel = document.createElement('label');
emaillabel.innerHTML = "Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input');
emailelement.setAttribute("type", "email");
emailelement.setAttribute("name", "demail");
emailelement.setAttribute("required", "required");
createform.appendChild(emailelement);


var phonelabel = document.createElement('label');
phonelabel.innerHTML = "Phone No : ";
createform.appendChild(phonelabel);

var phoneElement = document.createElement('input');
phoneElement.setAttribute("type", "number");
phoneElement.setAttribute("name", "phone");
phoneElement.setAttribute("required", "required");
createform.appendChild(phoneElement);



var doblabel = document.createElement('label');
doblabel.innerHTML = "Date of Birth : ";
createform.appendChild(doblabel);

var DOBelement = document.createElement('input');
DOBelement.setAttribute("type", "date");
DOBelement.setAttribute("name", "dob");
DOBelement.setAttribute("required","required");
createform.appendChild(DOBelement);

var submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);



function success(){
        alert("successfully registered");
}