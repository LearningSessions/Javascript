
function CreateHTMLElement(elementType, elementName, elementText, inputType) {
    var newElement = document.createElement(elementType);
    // if element type is input
    if (elementType === 'input') {
        newElement.setAttribute("type", inputType);
        newElement.setAttribute("name", elementName);
        newElement.setAttribute("required", "required");
    } else if (elementType === 'label') { //if element type is label
        newElement.innerHTML = elementText + " : ";
    }
    return newElement;
}

var divId = document.getElementById("divRegistration");
var sHeading = document.createElement('h3');
sHeading.innerHTML = "Registration Form";
divId.appendChild(sHeading);

//Create element first name
var sElement = CreateHTMLElement('label', "lblfname", "First Name");
divId.appendChild(sElement);
sElement = CreateHTMLElement('input', "txtfname", "", "text");
divId.appendChild(sElement);
sElement = CreateHTMLElement('br');
divId.appendChild(sElement);

//Create element last name
sElement = CreateHTMLElement('label', "lbllname", "Last Name");
divId.appendChild(sElement);
sElement = CreateHTMLElement('input', "txtlname", "", "text");
divId.appendChild(sElement);
sElement = CreateHTMLElement('br');
divId.appendChild(sElement);

//Create element email
sElement = CreateHTMLElement('label', "lblemail", "Email");
divId.appendChild(sElement);
sElement = CreateHTMLElement('input', "txtemail", "", "email");
divId.appendChild(sElement);
sElement = CreateHTMLElement('br');
divId.appendChild(sElement);

//Create element phone no
sElement = CreateHTMLElement('label', "lblphNO", "PhoneNo");
divId.appendChild(sElement);
sElement = CreateHTMLElement('input', "txtphNO", "", "number");
divId.appendChild(sElement);
sElement = CreateHTMLElement('br');
divId.appendChild(sElement);

//Create element date of birth
sElement = CreateHTMLElement('label', "lbldob", "Date of Birth");
divId.appendChild(sElement);
sElement = CreateHTMLElement('input', "txtdob", "", "date");
divId.appendChild(sElement);
sElement = CreateHTMLElement('br');
divId.appendChild(sElement);

////Create element button
sElement = document.createElement("input");
sElement.setAttribute("type", "submit");
sElement.setAttribute("value", "Submit");
sElement.setAttribute("formNoValidate","false");
divId.appendChild(sElement);