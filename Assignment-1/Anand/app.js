//Data to create Html
var formFields = [{
    "rowId": "row0",
    "label": "First Name: ",
    "propertyName": "fName",
    "requiredAttribute": "required"
},
{
    "rowId": "row1",
    "label": "Last Name: ",
    "propertyName": "lName",
    "requiredAttribute": "required"
},
{
    "rowId": "row2",
    "label": "Email: ",
    "propertyName": "email",
    "requiredAttribute": "required"
},
{
    "rowId": "row3",
    "label": "Mobile Number: ",
    "propertyName": "mobNo",
    "requiredAttribute": "required"
},
{
    "rowId": "row4",
    "label": "DOB (dd/mm/yyyy): ",
    "propertyName": "dob",
    "requiredAttribute": "required"
}]

//Function to create Html form
function createForm() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "myForm");
    x.setAttribute("name", "userRegForm" )
    x.setAttribute("onSubmit","formValidation()");
    document.body.appendChild(x);
    
    var table = document.createElement("TABLE");
    table.setAttribute("id", "formTable");
    table.setAttribute("align", "center");
    document.getElementById("myForm").appendChild(table);

    console.log(formFields.length);
    //create form based on formFields object 
    for(i =0; i < formFields.length; i++ )
    {
        var row = document.createElement("TR");
        row.setAttribute("id", formFields[i].rowId);
        document.getElementById("formTable").appendChild(row);
        var firstColumn = document.createElement("TD");
        firstColumn.setAttribute("id", formFields[i].rowId + "column" +( i + 1));
        document.getElementById(formFields[i].rowId).appendChild(firstColumn);
        var label = document.createElement("LABEL");
        label.textContent = formFields[i].label;
        document.getElementById(formFields[i].rowId + "column" +( i + 1)).appendChild(label);
        var secondColumn = document.createElement("TD");
        secondColumn.setAttribute("id", formFields[i].rowId + "column" + ( i + 2));
        document.getElementById(formFields[i].rowId).appendChild(secondColumn);
        var inputElement = document.createElement("INPUT");
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("id", "inputEle" + ( i + 1));
        inputElement.setAttribute("name", formFields[i].propertyName);
        document.getElementById("row" + i + "column" + ( i + 2)).appendChild(inputElement);
        document.getElementById("inputEle" + ( i + 1)).required = true;
    }
    //Create a Submit button
    var row = document.createElement("TR");
    row.setAttribute("id", "buttonRow");
    document.getElementById("formTable").appendChild(row);
    var button = document.createElement("INPUT");
    button.setAttribute("type", "submit");
    button.setAttribute("value", "Submit");
    document.getElementById("buttonRow").appendChild(button);
}
// Validate the entered data before registering
function formValidation() {
    var uEmail = document.userRegForm.email;
    var mobNo = document.userRegForm.mobNo;
    var dob = document.userRegForm.dob;
    console.log(uEmail.value);
    if(ValidateEmail(uEmail)) {
        if(ValidateMobileNumber(mobNo)) {
            if(ValidateDOB(dob)) {
                alert("Form Submitted Successfuly!!");
            }
        }
    }
}
// Validate email
function ValidateEmail(uemail) {  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)) { 
        return true;  
    } else {
        alert("Error: Cannot submit form. Please enter valid email address");
    }
}
//validate mob no.
function ValidateMobileNumber(mobNo) {
    if (/^\d{10}$/.test(mobNo.value)) {
        return true;
    } else {
        alert("Error: Cannot submit form. Please enter 10 digit Mobile Number");
    }
}
//validate DOB
function ValidateDOB(dob) {
    if (/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(dob.value)){
        return true
    } else {
        alert("Error: Cannot submit form. Please enter DOB in mentioned format");
    }
}
// Call to function createForm. Starting point.
createForm();