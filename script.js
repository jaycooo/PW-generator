var playername = window.prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters");
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
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]//
}
 //variables to collect input from user prompts
 var passwordLength = 0;
 var upperCase;
 var lowerCase;
 var numbers;
 var specialChar;

 