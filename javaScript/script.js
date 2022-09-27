let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let error4 = document.querySelector(".error4");
let iconerror = document.querySelector(".icons");

function validateForm(){
    let firstName = document.forms["myForm"]["fname"].value.trim();
    let lastName = document.forms["myForm"]["lname"].value.trim();
    let emailAddress = document.forms["myForm"]["email"].value.trim();
    let passWord = document.forms["myForm"]["pass"].value.trim();

    if(firstName == ""){
        error1.classList.add("active");
    }else{
        error1.classList.remove("active");
    }

    
    if(lastName == ""){
        error2.classList.add("active");
    }else{
        error2.classList.remove("active");
    }

    
    if(emailAddress == ""){
        error3.classList.add("active");
    }else{
        error3.classList.remove("active");
    }

    
    if(passWord == ""){
        error4.classList.add("active");
        return false
    }else{
        error4.classList.remove("active");
    }
    
}
