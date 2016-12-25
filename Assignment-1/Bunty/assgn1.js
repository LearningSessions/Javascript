
var regForm = document.getElementById("registrationForm");

var form = document.createElement("form");

regForm.appendChild(form);

var header = document.createElement("h2");
header.setAttribute("align","center");
header.innerHTML = "Registration Form";
form.appendChild(header);

var br = document.createElement("br");
form.appendChild(br);

var table = document.createElement("table");
table.setAttribute("align", "center");


var trfn = document.createElement("tr");
var td2 = document.createElement("td");
td2.setAttribute("colspan","2");
var fntxt = document.createElement("input");
fntxt.setAttribute("type", "text");
fntxt.setAttribute("required", "true");
fntxt.setAttribute("pattern","[A-Za-z]+");
fntxt.setAttribute("placeholder","First Name");
td2.appendChild(fntxt);
trfn.appendChild(td2);
table.appendChild(trfn);


var trln = document.createElement("tr");
table.appendChild(trln);
var lntxt = document.createElement("input");
lntxt.setAttribute("type", "text");
lntxt.setAttribute("required", "true");
lntxt.setAttribute("pattern","[A-Za-z]+");
lntxt.setAttribute("placeholder","Last Name");
var lntd2 = document.createElement("td");
lntd2.setAttribute("colspan","2");
lntd2.appendChild(lntxt);
trln.appendChild(lntd2);


var emailtr = document.createElement("tr");
table.appendChild(emailtr)
var email = document.createElement("input");
email.setAttribute("type", "email");
email.setAttribute("required", "true");
email.setAttribute("pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
email.setAttribute("placeholder","Email");
var emailtd2 = document.createElement("td");
emailtd2.setAttribute("colspan","2");
emailtd2.appendChild(email);
emailtr.appendChild(emailtd2);

var ctr = document.createElement("tr");
table.appendChild(ctr);
var ctd2 = document.createElement("td");
ctd2.setAttribute("colspan","2");
var ctrtxt = document.createElement("input");
ctrtxt.setAttribute("type", "text");
ctrtxt.setAttribute("required", "true");
ctrtxt.setAttribute("pattern","[0-9]{10}");
ctrtxt.setAttribute("placeholder", "Contact");
ctd2.appendChild(ctrtxt);
ctr.appendChild(ctd2);

var dobtr = document.createElement("tr");
var dobtd2 = document.createElement("td");
dobtd2.setAttribute("colspan","2");
table.appendChild(dobtr);
var dobtxt = document.createElement("input");
dobtxt.setAttribute("type", "date");
dobtxt.setAttribute("required", "true");
dobtd2.appendChild(dobtxt);
dobtr.appendChild(dobtd2);

var btntr = document.createElement("tr");
var submittd = document.createElement("td");
var resettd = document.createElement("td");
table.appendChild(btntr);
var btnsubmit = document.createElement("input");
btnsubmit.setAttribute("type", "submit");
btnsubmit.setAttribute("value", "Submit");
submittd.appendChild(btnsubmit);
var btnreset = document.createElement("input");
btnreset.setAttribute("type", "reset");
btnreset.setAttribute("value", "Reset");
resettd.appendChild(btnreset);
btntr.appendChild(submittd);
btntr.appendChild(resettd);

form.appendChild(table);
