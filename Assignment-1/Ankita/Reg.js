
var id = document.getElementById("reg_form");
var makeform = document.createElement('form'); 
makeform.setAttribute("onsubmit", "success()");
id.appendChild(makeform);

var heading = document.createElement('h2'); 
makeform.appendChild(heading);
var headingtext=document.createTextNode("Registration Form ");
heading.appendChild(headingtext);

var fname=document.createTextNode("First Name");
makeform.appendChild(fname);
var fnameEle = document.createElement('input');
fnameEle.setAttribute("type", "text");
fnameEle.setAttribute("name", "fname");
fnameEle.setAttribute("required", "required");
makeform.appendChild(fnameEle);

var br=document.createElement("br");
makeform.append(br);
var br=document.createElement("br");
makeform.append(br);

var lname=document.createTextNode("Last Name");
makeform.appendChild(lname);
var lnameEle = document.createElement('input');
lnameEle.setAttribute("type", "text");
lnameEle.setAttribute("name", "lname");
lnameEle.setAttribute("required", "required");
makeform.appendChild(lnameEle);

var br=document.createElement('br');
makeform.appendChild(br);
var br=document.createElement('br');
makeform.appendChild(br);

var phone=document.createTextNode("Phone");
makeform.appendChild(phone);
var phoneEle=document.createElement('input');
phoneEle.setAttribute("type","number");
phoneEle.setAttribute("name","phone");
phoneEle.setAttribute("required","required");
makeform.appendChild(phoneEle);


var br=document.createElement('br');
makeform.appendChild(br);
var br=document.createElement('br');
makeform.appendChild(br);

var dob=document.createTextNode("DOB");
makeform.appendChild(dob);
var dobEle=document.createElement('input');
dobEle.setAttribute("type","date");
dobEle.setAttribute("name","dob");
dobEle.setAttribute("required","required");
makeform.appendChild(dobEle);

var br=document.createElement('br');
makeform.appendChild(br);
var br=document.createElement('br');
makeform.appendChild(br);

var email=document.createTextNode("Email");
makeform.appendChild(email);
var EmailEle=document.createElement('input');
EmailEle.setAttribute("type","email");
EmailEle.setAttribute("name","email");
EmailEle.setAttribute("required","required");
makeform.appendChild(EmailEle);


var br=document.createElement('br');
makeform.appendChild(br);
var br=document.createElement('br');
makeform.appendChild(br);


var submitEle = document.createElement('input');
submitEle.setAttribute("type", "submit");
submitEle.setAttribute("name", "dsubmit");
submitEle.setAttribute("value", "Submit");
submitEle.onsubmit=success();
makeform.appendChild(submitEle);

function success(){
        alert("successfully registered");
}