// Assignment Code
var alpha = ["abcdefghijklmnopqrstuvwxyz"];
var alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var special = ["!@#$%^&*<>?-_+=:;~"];
var characters;
var userAlpha;
var userAlphaUpper;
var userNumbers;
var userSpecial;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();   
    
      function generatePassword() {
      characters = Number(prompt("Please specify length of password, Must be 8-128 characters"));
      if (isNaN(characters) || characters < 8 || characters > 128){
        alert("MUST BE 8-128 CHARACTERS ONLY");
      }
    }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
