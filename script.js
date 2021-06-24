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
var userSelection;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();   
    
      function generatePassword() {
      characters = Number(prompt("Please specify length of password, Must be 8-128 characters"));
      if (isNaN(characters) || characters < 8 || characters > 128){
        alert("MUST BE 8-128 CHARACTERS ONLY/Invalid Input!");
        return;
      }
      userAlpha = confirm("Do you want lowercase letters?");
      userAlphaUpper = confirm("Do you want uppercase letters?");
      userNumbers = confirm("Do you want numbers?");
      userSpecial = confirm("Do you want special characters?");

      while (!userAlpha && !userAlphaUpper && !userNumbers && !userSpecial) {
        alert("You must select at least one character type!");
        generatePassword();
      }

      if (userAlpha && userAlphaUpper && userNumbers && userSpecial){
        userSelection = alpha.concat(alphaUpper, numbers, special);
        console.log(userSelection);
      }
      else if (userAlpha && userAlphaUpper && userNumbers) {
        userSelection = alpha.concat(alphaUpper,numbers);
        console.log(userSelection);
      }
      else if (userAlpha && userAlphaUpper && userSpecial) {
        userSelection = alpha.concat(alphaUpper, special);
        console.log(userSelection);
      }
      else if (userAlpha && userNumbers && userSpecial){
        userSelection = alpha.concat(numbers, special);
        console.log(userSelection);
      }
      else if (userAlphaUpper && userNumbers && userSpecial){
        userSelection = alphaUpper.concat(numbers, special);
        console.log(userSelection);
      }
      else if (userAlpha && userAlphaUpper){
        userSelection = alpha.concat(alphaUpper);
        console.log(userSelection);
      }
      else if (userAlpha && userNumbers){
        userSelection = alpha.concat(numbers);
        console.log(userSelection);
      }
      else if (userAlpha && userSpecial){
        userSelection = alpha.concat(special);
        console.log(userSelection);
      }
      else if (userAlphaUpper && userNumbers){
        userSelection = alphaUpper.concat(numbers);
        console.log(userSelection);
      }
      else if (userAlphaUpper && userSpecial){
        userSelection = alphaUpper.concat(special);
        console.log(userSelection);
      }
      else if (userNumbers && userSpecial){
        userSelection = numbers.concat(special);
        console.log(userSelection);
      }
      else if (userAlpha){
        userSelection = alpha;
        console.log(userSelection);
      }
      else if (userAlphaUpper){
        userSelection = alphaUpper;
        console.log(userSelection);
      }
      else if (userNumbers){
        userSelection = numbers;
        console.log(userSelection);
      }
      else if (userSpecial){
        userSelection = special;
        console.log(userSelection);
      }
      
      }  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
