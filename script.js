// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");

  passwordText.value = passWord;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);