import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Generate a
    <br> 
    <span>random password</span></h1>
    <h2>Never use an insecure password again.</h2>
    <button id="generate-el">Generate passwords</button>
    <button id="clear-el">Clear passwords</button>
    <div class="password-wrapper">
      <div id="password-el-one" class="password-section"></div>
      <div id="password-el-two" class="password-section"></div>
    </div>
    <p id="copied-el" class="copied"></p>
    <div class="customize-wrapper">
    <h3>Customize your password:</h3>

    <label class="labels">Enter length: </label>
    <input id="password-length" type="number" id="length" name="length" min="5" max="20">
    <p id="password-error"></p>
    <label class="labels">Letters: </label>
    <input id="letters-toggle" type="checkbox" name="letters" checked>
    <label class="labels">Symbols: </label>
    <input id="symbols-toggle" type="checkbox" name="symbol" checked>
    <label class="labels">Numbers: </label>
    <input id="numbers-toggle" type="checkbox" name="number" checked>
    </div>


  </div>
`

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const charactersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersAlapha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const charactersNumbersSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let generateBtn = document.querySelector("#generate-el")
let clearBtn = document.querySelector("#clear-el")
let passwordElOne = document.querySelector("#password-el-one")
let passwordElTwo = document.querySelector("#password-el-two")
let passwordLengthEl = document.querySelector("#password-length")
let errorMessage = document.querySelector("#password-error")
let copiedEl = document.querySelector("#copied-el")
let symbolsToggle = document.querySelector("#symbols-toggle:checked")
let numbersToggle = document.querySelector("#numbers-toggle:checked")
let lettersToggle = document.querySelector("#letters-toggle:checked")

// check box will be checked on render of page 
let includeSymbols = true;
let includeNumbers = true;
let includeLetters = true; 

generateBtn.addEventListener("click", function() {
  const passwordLength = parseInt(passwordLengthEl.value);
  if (passwordLength > 20) {
    errorMessage.textContent = "Length cannot exceed 20 characters"
  } else if (passwordLength < 5) {
    errorMessage.textContent = "Length cannot be less than 5 characters"
  } else if (passwordElOne.innerHTML === "" && passwordElTwo.innerHTML === "") {
    generatePassword(passwordLength)
  } 

  if (passwordElOne.innerHTML === "" && passwordElTwo.innerHTML === "") {
    generatePassword(15)
  }
  copiedEl.textContent = ""
})

function generatePassword(passwordLength) {
  if (includeSymbols === true && includeNumbers === true && includeLetters === true) {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * characters.length)
      let randomIndexTwo = Math.floor(Math.random() * characters.length)
      passwordElOne.textContent += characters[randomIndexOne]
      passwordElTwo.textContent += characters[randomIndexTwo]
    } 
  } else if (includeSymbols === true && includeNumbers === true) {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * charactersNumbersSymbols.length)
      let randomIndexTwo = Math.floor(Math.random() * charactersNumbersSymbols.length)
      passwordElOne.textContent += charactersNumbersSymbols[randomIndexOne]
      passwordElTwo.textContent += charactersNumbersSymbols[randomIndexTwo]
    } 
  } else if (includeSymbols === true) {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * charactersSymbols.length)
      let randomIndexTwo = Math.floor(Math.random() * charactersSymbols.length)
      passwordElOne.textContent += charactersSymbols[randomIndexOne]
      passwordElTwo.textContent += charactersSymbols[randomIndexTwo]
    } 
  } else if (includeNumbers === true) { 
    for (let i = 0; i < passwordLength; i++) {
    let randomIndexOne = Math.floor(Math.random() * charactersNumbers.length)
    let randomIndexTwo = Math.floor(Math.random() * charactersNumbers.length)
    passwordElOne.textContent += charactersNumbers[randomIndexOne]
    passwordElTwo.textContent += charactersNumbers[randomIndexTwo]
  } 
} else if (includeLetters === true) {
  for (let i = 0; i < passwordLength; i++) {
    let randomIndexOne = Math.floor(Math.random() * charactersAlapha.length)
    let randomIndexTwo = Math.floor(Math.random() * charactersAlapha.length)
    passwordElOne.textContent += charactersAlapha[randomIndexOne]
    passwordElTwo.textContent += charactersAlapha[randomIndexTwo]
  } 
}
  
}

clearBtn.addEventListener("click", function () {
  passwordElOne.textContent = ""
  passwordElTwo.textContent = ""
  copiedEl.textContent = ""
})

passwordElOne.addEventListener("click", function() {
  let passwordCopyOne = passwordElOne.textContent
  console.log(passwordCopyOne)
  navigator.clipboard.writeText(passwordCopyOne).then(() => {
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });
  copiedEl.textContent = "Copied password one"
})

passwordElTwo.addEventListener("click", function() {
  let passwordCopyTwo = passwordElTwo.textContent
  console.log(passwordCopyTwo)
  navigator.clipboard.writeText(passwordCopyTwo).then(() => {
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
  },() => {
    console.error('Failed to copy');
    /* Rejected - text failed to copy to the clipboard */
  });
  copiedEl.textContent = "Copied password two"
})


symbolsToggle.addEventListener("change", function () {
  includeSymbols = symbolsToggle.checked;
  console.log(symbolsToggle.checked)
})

numbersToggle.addEventListener("change", function () {
  includeNumbers = numbersToggle.checked;
  console.log(numbersToggle.checked)
})

lettersToggle.addEventListener("change", function () {
  includeLetters = lettersToggle.checked;
  console.log(lettersToggle.checked)
})