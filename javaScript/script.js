let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");

function validateForm(){
    let firstName = document.forms["myForm"]["fname"].value;
    let lastName = document.forms["myForm"]["lname"].value;
    let emailAddress = document.forms["myForm"]["email"].value;
    let passWord = document.forms["myForm"]["pass"].value;

    if(firstName == ""){
        error1.classList.add("active");
        return false;
    }

    
    if(lastName == ""){
        error2.classList.add("active");
        return false;
    }

    
    if(emailAddress == ""){
        error3.classList.add("active");
        return false;
    }

    
    if(passWord == ""){
        error4.classList.add("active");
        return false;
    }
    
}
