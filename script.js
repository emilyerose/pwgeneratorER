// Assignment code here
var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
var upperAlpha = lowerAlpha.toUpperCase();
var numbers = '1234567890';
var specialAlpha = '!@#$%^&*';

function generatePassword() {
  let passLength;
  let password='';
  let allowedChars='';
  let userEntry = prompt("Enter length of password (between 8 and 128 characters)");
  userEntry=parseFloat(userEntry.trim())
  if (userEntry && userEntry>=8 && userEntry<=128) {
    passLength=userEntry;
  }
  else {
    alert("You did not enter a valid password length. Please enter a number between 8 and 128.");
    generatePassword();
  }
  if (confirm('Allow numeric characters (numbers)?')){
    allowedChars += numbers;
  };
  if (confirm('Allow special characters?')){
    allowedChars += specialAlpha;
  };
  if (confirm('Allow uppercase characters?')) {
    allowedChars += upperAlpha;
  };
  if (confirm('Allow lowercase characters?')) {
    allowedChars += lowerAlpha;
  };
  if (!allowedChars) {
    if (confirm('You did not select any character types. To exit out of the password maker, hit cancel. Otherwise, allow some type of character for your password.')) {
      generatePassword();
    }
  }
    let randomNums = Array.from({length: passLength}, () => Math.floor(Math.random() * allowedChars.length));
    for (let x=0; x<passLength; x++) {
      password+=allowedChars.charAt(randomNums[x]);
    }
  console.log(password)
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
