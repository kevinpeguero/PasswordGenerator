

// Array of special characters to be included in password
var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

//   prompt("who won the 2019 nba finals?")

//   confirm("true or false toronto wn nba finals")

//   alert("has to be toronto raptors")

// Function Password Length
function passwordLength() {
    var charLength = parseInt(prompt("how many characters in the password"))
    console.log(charLength)

    if (charLength >=8 && charLength <=128) {
       alert("password is good")
    } else {
        alert("password needs to be between 8 through 128")
    }


}
passwordLength()

//Prompts user for lowercase letters
var lowerCaseEl = confirm("Would you like lower-case characters?");
var lowercase = lowerCaseEl;
    if(lowerCaseEl) {
        masterPassword += lowerCaseArray.slice(0,8);
        console.log(lowercase)
    }
 

//Prompts user for uppercase letters
var upperCaseEl = confirm("Would you like upper-case characters?");
var uppercase = upperCaseEl;
    if(upperCaseEl) {
        masterPassword += upperCaseArray.slice(0,8);
        console.log(upperCaseEl);
    }

//Prompts user for symbols
var symbolEl = confirm("Would you like symbols?");
var symbol = symbolEl;
if(symbolEl) {
    masterPassword += symbolArray
    console.log(symbol);
}

//Prompts user for numbers
var numberEl = confirm("Would you like numbers?")
var number = numberEl;
if(numberEl) {
    masterPassword += numberArray.slice(0,8);
    console.log(number)
}

//User must choose 1 option for password generation
if (!lowerCaseEl && !upperCaseEl && !numberEl && !symbolEl) {
    alert("You must select at least 1 option for password creation.")
    generatePassword();
};

//document.getElementById("display").masterPassword = generatePassword;

passwordEl = newPassword(length, masterPassword);       


//Password Generation Function
newPassword = function (length, masterPassword) {
var passwordEl = document.getElementById("display");
//Initialize final password as blank string
let userPassword = '';

//Append random character form masterPassword
for (let i = 0; i < length; i++) {
    userPassword += masterPassword.charAt(Math.floor(Math.random() * masterPassword.length))
};
passwordEl.innerHTML = userPassword;
}

//Copy to Clipboard function
function copyClip() {
//Grabs text in area
var copyBtn = document.getElementById("display");

//Selects textarea
copyBtn.select();
copyBtn.setSelectionRange(0, 99999);

//Copies textarea
document.execCommand("copy");

//Logic to display message
if (copyBtn.innerHTML === '') {
setMessage("You must generate a password first!", "red")
} else
setMessage("Copied to clipboard", "green")
};

//Flashes alert if copied to clipboard or failed
function setMessage(msg, color) {
message.style.color = color
message.textContent = msg;
}



