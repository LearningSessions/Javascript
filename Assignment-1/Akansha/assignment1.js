var mainDiv = document.getElementById('main');
var regForm = document.getElementById('regForm');
mainDiv.appendChild(regForm);
var form = document.createElement('form');
regForm.appendChild(form);

var h1 = document.createElement('h1');
h1.setAttribute('align','center');
h1.innerHTML = "REGISTRATION FORM";
form.appendChild(h1);

var table = document.createElement('table');
table.setAttribute('align','center');
form.appendChild(table);

var tr1 = document.createElement('tr');
table.appendChild(tr1);

var td1 = document.createElement('td');
tr1.appendChild(td1);

var td2 = document.createElement('td');
tr1.appendChild(td2);

var firstName=document.createElement('label');
firstName.innerHTML = "FIRST NAME :"
td1.appendChild(firstName);

var tb = document.createElement('input');
tb.setAttribute('type','text');
tb.setAttribute('required','true');
td2.appendChild(tb);

var tr2 = document.createElement('tr');
table.appendChild(tr2);

var td3 = document.createElement('td');
tr2.appendChild(td3);

var td4 = document.createElement('td');
tr2.appendChild(td4);

var lastName = document.createElement('label');
lastName.innerHTML = "LAST NAME :"
td3.appendChild(lastName);

var tb1 = document.createElement('input');
tb1.setAttribute('type','text');
tb1.setAttribute("required","true");
td4.appendChild(tb1);

var tr3 = document.createElement('tr');
table.appendChild(tr3);

var td5 = document.createElement('td');
tr3.appendChild(td5);

var td6 = document.createElement('td');
tr3.appendChild(td6);

var contact = document.createElement('label');
contact.innerHTML = "CONTACT :";
td5.appendChild(contact);

var tb2 = document.createElement('input');
tb2.setAttribute('type','number');
tb2.setAttribute('name','num');
tb2.setAttribute('required','true');
td6.appendChild(tb2);

var tr4 = document.createElement('tr');
table.appendChild(tr4);

var td7 = document.createElement('td');
tr4.appendChild(td7);

var td8 = document.createElement('td');
tr4.appendChild(td8);

var email = document.createElement('label');
email.innerHTML = "EMAIL :";
td7.appendChild(email);

var tb3 = document.createElement('input');
tb3.setAttribute('type','email');
tb3.setAttribute('required','true');
td8.appendChild(tb3);

var tr5 = document.createElement('tr');
table.appendChild(tr5);

var td9 = document.createElement('td');
tr5.appendChild(td9);

var td10 = document.createElement('td');
tr5.appendChild(td10);

var dob = document.createElement('label');
dob.innerHTML = "DATE OF BIRTH :";
td9.appendChild(dob);

var tb4 = document.createElement('input');
tb4.setAttribute('type','date');
tb4.setAttribute('required','true');
td10.appendChild(tb4);

var tr6 = document.createElement('tr');
table.appendChild(tr6);

var td11 = document.createElement('td');
td11.setAttribute('colspan','2');
tr6.appendChild(td11);

var submit = document.createElement('input');
submit.setAttribute('type','button');
submit.setAttribute('value','REGISTER');
submit.setAttribute('onclick','alert("Thanks! You are registered!!")');
td11.appendChild(submit);








