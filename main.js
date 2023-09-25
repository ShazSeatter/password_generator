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

    <div class="customize-wrapper">
    <h3>Customize your password:</h3>

    <label>Enter length: </label>
    <input id="password-length" type="number" id="length" name="length" min="5" max="20">
    <p id="password-error"></p>
    </div>
  
  </div>
`

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.querySelector("#generate-el")
let clearBtn = document.querySelector("#clear-el")
let passwordElOne = document.querySelector("#password-el-one")
let passwordElTwo = document.querySelector("#password-el-two")
let passwordLengthEl = document.querySelector("#password-length")
let errorMessage = document.querySelector("#password-error")

generateBtn.addEventListener("click", function() {
  const passwordLength = parseInt(passwordLengthEl.value);
  
  if (passwordLength > 20) {
    errorMessage.textContent = "Length cannot exceed 20 characters"
  } else if (passwordLength < 5) {
    errorMessage.textContent = "Length cannot be less than 5 characters"
  } else if (passwordElOne.innerHTML === "" && passwordElTwo.innerHTML === "") {
    for (let i = 0; i < passwordLength; i++) {
      let randomIndexOne = Math.floor(Math.random() * characters.length)
      let randomIndexTwo = Math.floor(Math.random() * characters.length)
      passwordElOne.textContent += characters[randomIndexOne]
      passwordElTwo.textContent += characters[randomIndexTwo]
    }
  } 
  
})

clearBtn.addEventListener("click", function () {
  passwordElOne.textContent = ""
  passwordElTwo.textContent = ""
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
})


