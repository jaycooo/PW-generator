var password = window.prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters");
// Assignment Code
var generateBtn = document.querySelector("#generate");


// creating password object.
var pwdCriteria = {

  //password length
  pwdLength: 0,

  //append child array letters lower case
  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

  // append child array letters upper case
  pwdUppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

  //append child array numbers
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

  // append child array specials
  pwdCharacter: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//32
}
function writePassword() {
  //call password function
  var password = generatePassword();

  //show password in in box
  var passwordText =document.querySelector("#password");

  //update the textArea with the new password 
  passwordText.value = password;
}
 
// event listener
generateBtn.addEventListener("click", writePassword);

//Function to generate password
function generatePassword() {
  //result holder
  var result ="";

  //Holder for user input
}