// get element by id
let genbtnEl = document.getElementById('genbtn-el');
let pwdoutputoneEl = document.getElementById('pwd-outputone-el');
let pwdoutputtwoEl = document.getElementById('pwd-outputtwo-el');
let pwdoutputthreeEl = document.getElementById('pwd-outputthree-el');
let pwdoutputfourEl = document.getElementById('pwd-outputfour-el');
let copyoneEl = document.getElementById('copyone-el');
let copytwoEl = document.getElementById('copytwo-el');
let copythreeEl = document.getElementById('copythree-el');
let copyfourEl = document.getElementById('copyfour-el');
let pwdlengthEL = document.getElementById('pwdlength-el');
let alertEl = document.getElementById('alert-el');






// varables for generated password
let optonepwd = "";
let opttwopwd = "";
let optthreepwd = "";
let optfourpwd = "";
// array of password options
let pwdoptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<", ">", "?", "/", ":", ";", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+"];

//add event listeners

genbtnEl.addEventListener('click', generatePassword);
copyoneEl.addEventListener('click', () => copytoclipboard(pwdoutputoneEl));
copytwoEl.addEventListener('click', () => copytoclipboard(pwdoutputtwoEl));
copythreeEl.addEventListener('click', () => copytoclipboard(pwdoutputthreeEl));
copyfourEl.addEventListener('click', () => copytoclipboard(pwdoutputfourEl));

//generate randon number
function getRandomNumber() {
    return Math.floor(Math.random() * pwdoptions.length);
}

//generate password function
function generatePassword() {
    for (let i = 0; i < getpwdlength(); i++) {
        getRandomNumber();
        optonepwd += pwdoptions[getRandomNumber()];
    }
    for (let i = 0; i < getpwdlength(); i++) {
        getRandomNumber();
        opttwopwd += pwdoptions[getRandomNumber()];
    }
    for (let i = 0; i < getpwdlength(); i++) {
        getRandomNumber();
        optthreepwd += pwdoptions[getRandomNumber()];
    }
    for (let i = 0; i < getpwdlength(); i++) {
        getRandomNumber();
        optfourpwd += pwdoptions[getRandomNumber()];
    }
    if (pwdlengthEL.value < 8) {
        alertEl.style.display = "block";
        alertEl.textContent = "Password is too weak";
        const alertmgs= setTimeout(() => {
            alertEl.style.display = "none";
        }, 2000);



    } else if (pwdlengthEL.value > 30) {
        alertEl.style.display = "block";
        alertEl.textContent = "Password is too long";
        const alertmg = setTimeout(() => {
            alertEl.style.display = "none";
        }, 2000);

    } else if (pwdlengthEL.value === null || pwdlengthEL.value === "Password length") {
        alertEl.style.display = "block";
        alertEl.textContent = "Please enter a password length";
        const alertmgs = setTimeout(() => {
            alertEl.style.display = "none";
        }, 2000);

    } else {
        pwdoutputoneEl.value = optonepwd;
        pwdoutputtwoEl.value = opttwopwd;
        pwdoutputthreeEl.value = optthreepwd;
        pwdoutputfourEl.value = optfourpwd;
    }
    // console.log(pwdoptions[getRandomNumber()]);

}

function copytoclipboard(outputel) {
    //Select the text field 
    outputel.select();
    outputel.setSelectionRange(0, 99999); //For mobile devices
    //Copy the text inside the text field
    navigator.clipboard.writeText(outputel.value);
    alertEl.style.display = "block";
    alertEl.textContent = "Copied text";

    const alertmgs = setTimeout(() => {
        alertEl.style.display = "none";
    }, 2000);



}

function getpwdlength() {
    pwdlength = pwdlengthEL.value;
    return pwdlength;
}