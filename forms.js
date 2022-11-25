const nameError = document.getElementById("name-error");
const passwordError = document.getElementById("password-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");
///validation
function validateName() {
    const name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "please name is required";
        return false;
    }
    if (!name.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "please name is required";
        return false;

    }
    nameError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}


function validatePassword() {
    const password = document.getElementById("contact-password").value
    if (password.length == 0) {
        passwordError.innerHTML = "please password is required"
        return false;
    }
    if (!password.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        passwordError.innerHTML = "please password is required";
        return false;

    }
    passwordError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}

function validateEmail() {
    const email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = "email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "email invalid";
        return false;

    }
    emailError.innerHTML = '<i class="fa fa-check-square"></i>';
    return true;
}
function validateForm(){
    if(!validateName()||!validateEmail()||!validatePassword()){
    
        submitError.innerHTML="please fix error to submit";
        return false;
    }
}

