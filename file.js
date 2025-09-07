let mail = document.querySelector("#email") ; 
let password = document.querySelector("#password") ; 

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password validation regex patterns
const lengthRegex = /^.{8,}$/;
const uppercaseRegex = /[A-Z]/;
const lowercaseRegex = /[a-z]/;
const numberRegex = /[0-9]/;
const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const valid = [lengthRegex , uppercaseRegex , lowercaseRegex , numberRegex , specialRegex] ; 

function validator(usermail , userpassword) {
    let soln = [true , true] ; 

    for(let i = 0 ; i < valid.length ; i++) {
        if(!valid[i].test(userpassword)){
            soln[0] = false ; 
            break ; 
        }
    }   
    soln[1] = emailRegex.test(usermail) ; 
    return soln ; 
}

let form = document.querySelector("#validation-form") ; 

form.addEventListener("submit" , function(e) {
    e.preventDefault() ; 
    console.log(mail.value); 
    console.log(password.value);
    let ans = validator(mail.value , password.value);
    console.log(ans);

    if(ans[1] === false) mail.nextElementSibling.hidden = false;
    else mail.nextElementSibling.hidden = true ; 
    if(ans[0] === false) {
        password.nextElementSibling.hidden = false;
        document.querySelector(".validation-rules").hidden = false ; 

    } 
    else {
        password.nextElementSibling.hidden = true ; 
         document.querySelector(".validation-rules").hidden = true ; 
    }
    let rules = document.querySelector("#success-message") ; 
    if(ans[0] === ans[1]) rules.hidden = false 
    else rules.hidden = true ; 
}) ; 