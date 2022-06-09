console.log("Hallo")

let placeholderFirstName = document.getElementsByTagName("input")[0].getAttribute('placeholder');
let placeholderLastName = document.getElementsByTagName("input")[1].getAttribute('placeholder');
let placeholderEmail = document.getElementsByTagName("input")[2].getAttribute('placeholder');
let placeholderPassword = document.getElementsByTagName("input")[3].getAttribute('placeholder');

function validateFormOnSubmit(event){
    event.preventDefault();
    // CHECK FIRST NAME FIELD
    let fName = document.querySelector('#firstName').value;
    if (fName === ""){   
        let fNameError = document.getElementsByClassName("error-message")[0];
        fNameError.innerText = placeholderFirstName + ' cannot be empty';
        document.querySelector(".form-control").classList.remove("validStyle");
        document.querySelector(".form-control").classList.add("invalidStyle");
        document.getElementsByName('firstName')[0].placeholder = '';
    }
    else {   
        document.querySelector(".form-control").classList.remove("invalidStyle");
        document.querySelector(".form-control").classList.add("validStyle");
    };
        // CHECK LAST NAME FIELD
    let lName = document.querySelector('#lastName').value;
    if (lName === ""){   
        let lNameError = document.getElementsByClassName("error-message")[1];
        lNameError.innerText = placeholderLastName + ' cannot be empty';
        document.getElementsByClassName("form-control")[1].classList.remove("validStyle");
        document.getElementsByClassName("form-control")[1].classList.add("invalidStyle");
        document.getElementsByName('lastName')[0].placeholder = '';
    }
    else {   
        document.getElementsByClassName("form-control")[1].classList.remove("invalidStyle");
        document.getElementsByClassName("form-control")[1].classList.add("validStyle");
    };
        // CHECK EMAIL FIELD
    let eMail = document.querySelector('#eMail').value;
    if (eMail === ""){   
        let eMailError = document.getElementsByClassName("error-message")[2];
        eMailError.innerText = placeholderEmail + ' cannot be empty';
        document.getElementsByClassName("form-control")[2].classList.remove("validStyle");
        document.getElementsByClassName("form-control")[2].classList.add("invalidStyle");
        document.getElementsByName('eMail')[0].placeholder = '';
    }

    else if (eMail.includes("@") == false || eMail.includes(".") == false){
        let eMailError = document.getElementsByClassName("error-message")[2];
        eMailError.innerText = 'Looks like this is not an email';
        document.getElementsByClassName("form-control")[2].classList.remove("validStyle");
        document.getElementsByClassName("form-control")[2].classList.add("invalidStyle");
    }

    else {
        document.getElementsByClassName("form-control")[2].classList.remove("invalidStyle");
        document.getElementsByClassName("form-control")[2].classList.add("validStyle");
    };
        // CHECK PASSWORD FIELD
    let passWord = document.querySelector('#passWord').value;
    if (passWord === ""){   
        let passWordError = document.getElementsByClassName("error-message")[3];
        passWordError.innerText = placeholderPassword + ' cannot be empty';
        document.getElementsByClassName("form-control")[3].classList.remove("validStyle");
        document.getElementsByClassName("form-control")[3].classList.add("invalidStyle");
        document.getElementsByName('passWord')[0].placeholder = '';
    }
    else {   
        document.getElementsByClassName("form-control")[3].classList.remove("invalidStyle");
        document.getElementsByClassName("form-control")[3].classList.add("validStyle");
    };
}