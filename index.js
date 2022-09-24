const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
 "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
 "<",">",".","?","/"];

let passwordLength = 8

const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const password3El = document.getElementById("password3-el");
const password4El = document.getElementById("password4-el");

const slider = document.getElementById("slider");
let sliderNumber = document.getElementById("sliderNumber");

// Creates a function generatePasswords() that return a random password composed of passwordLength characters
function generateRandomPasswords() {
  // Declares a variable called password and assign its value to an empty string
  let password = "";
  for (let j = 0; j < passwordLength; j++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    // Adds the new random chars to the password string
    password += characters[randomIndex];
  }
  return password;
}

// Creates a function getGeneratePasswords() that displays generated passwords in HTML document
function getGeneratePasswords() {
  // Displays the message in the messageEl using messageEl.textContent
  password1El.innerHTML = `<input type="text" id="1" value="${generateRandomPasswords()}" onclick="copyToClipboard(1)" readonly>
  `;
  password2El.innerHTML = `<input type="text" id="2" value="${generateRandomPasswords()}" onclick="copyToClipboard(2)" readonly>
  `;
  password3El.innerHTML = `<input type="text" id="3" value="${generateRandomPasswords()}" onclick="copyToClipboard(3)" readonly>
  `;
  password4El.innerHTML = `<input type="text" id="4" value="${generateRandomPasswords()}" onclick="copyToClipboard(4)" readonly>
  `;
  // Call changeColorPasswords() function
  changeColorPasswords();
}

// Creates a function changeColorPasswords() that changes color to passwords
function changeColorPasswords() {
  // Gets and stores all elements with generatedPassword class in allPassword variable
  let allPasswords = document.getElementsByClassName("generatedPassword");
  // Changes color to var(--clr-bright-green) for every passwords in allPasswords
  for (let i = 0; i < allPasswords.length; i++) {
    allPasswords[i].style.color = "var(--clr-bright-green)";
  }
}

// Creates a function copyToClipboard() that copies selected password just clicking on hit
function copyToClipboard(index) {
  const copyText = document.getElementById(index).value;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard");
  });
}

// Create an input event listener for slider element
slider.addEventListener("input", function () {
  // Display the value of the slider
  sliderNumber.textContent = `${slider.value}`;
  // Assign to passwordLength new value
  passwordLength = slider.value;
});