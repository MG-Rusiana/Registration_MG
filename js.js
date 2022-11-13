
function ValidateEmail(mail) {

    //compare email from email "(-_-)?"
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            eml.innerText = "You have entered a valid email!"
            eml.style.color = "green"
            console.log("if")
        } else if (mail == "") {
            eml.innerText = ""
            console.log("else if")
        }else {
            eml.innerText = "Invalid email!"
            eml.style.color = "red"
            console.log("else")
        }
    }

function verifyPassword(password) {

    //authentication variables, pra ignon choy
    var lower = false
    var upper = false
    var num= false
    var len= false

    // Validate small letters
    var lowerCaseLetters = /[a-z]/g;
    if(password.match(lowerCaseLetters)) {  
        console.log("lowercase")
        lower = true
    } else {
        console.log("!lowercase")
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(password.match(upperCaseLetters)) {  
        console.log("Uppercase")
        upper = true
    } else {
        console.log("!Uppercase")
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(password.match(numbers)) {  
        console.log("numberrcase")
        num= true
    } else {
        console.log("!numbercase")
    }
    // Validate length
    if(password.length >= 8) {
        console.log("longenough")
        len= true
    } else {
        console.log("!longenough")
    }

    //authenticate all the requirement 
    if(  lower ==true && upper  ==true &&num ==true && len ==true){
        pass.innerHTML = "Valid password"
        pass.style.color = "green"
        console.log(password)
        password_value = password
    }else{
        pass.innerHTML = "Invalid password"
        pass.style.color = "red"
        password_value = password
    }

}

var password_value

function confirmPassword (confirmation){
if (confirmation == password_value){
    con.innerText = "Your password matched!"
    con.style.color = "green"
    console.log(confirmation)
} else if (confirmation == ""){
    con.innerText = ""
} else {
    con.innerText = "Your password doesn't match!"
    con.style.color = "red"
    console.log(confirmation)
}
}

function cutiePie (cute){
    if (cute.includes("chris") || 
        cute.includes("Chris") || 
        cute.includes("May") || 
        cute.includes("may") || 
        cute.includes("templa") || 
        cute.includes("Templa") || 
        cute.includes("tin") || 
        cute.includes("Tin")){
        user.innerText = "You have a cutie name UwU"
        user.style.color = "red"
    } else {
        user.innerText = ""
    }
}
    

let cute = document.getElementById('cute')
let user = document.getElementById('user')
user.innerText = " "

let email = document.getElementById('email')
let eml = document.getElementById('eml')
eml.innerText = ""

var password = document.getElementById('password')
let pass = document.getElementById('pass')
pass.innerText = "note: password must be more than 8 digits and contain uppercase, lowercase, and numbers"
pass.style.color = "gray"

var confirmation = document.getElementById('confirm')
let con = document.getElementById('con')
con.innerText = ""


//calling function section
email.addEventListener('input', (email_value) => {
    ValidateEmail(email_value.target.value)
    
})

password.addEventListener('input',(pass_value)=>{
    verifyPassword(pass_value.target.value)
})

confirmation.addEventListener('input',(conPass_value)=>{
    confirmPassword(conPass_value.target.value)
})

cute.addEventListener('input',(cutie_value)=>{
    cutiePie(cutie_value.target.value)
})