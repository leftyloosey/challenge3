//variables and arrays declared at the start
var yesUpper = "" 
var yeSpecial = ""
var yesNum = ""
var totalChars = ""
var passWord = []

var alphaLower = "abcdefghijklmnopqrstuvwxyz"
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var alphaSpecials = "!\"#$%&\'()*+,-/:;<=>?@[]^_`{|}~"
var alphaNums = "0123456789"

//this function is for restarting the length-finding function
function reHowMany() {
    howMany()
}
//the randomizer
function getRandom(a) {
    return a[Math.floor(Math.random() * a.length)]
}
//this function is a loop that adds a new random character until the length 
    //matches the user input
function addToPass() {
    for (i = 0; i < totalChars; i++) {
        passWord.push(getRandom(ansDindex))[i]
        }
}
//for finding the length of the password
function howMany() {
    totalChars = prompt("how many characters?")
    if (isNaN(totalChars) || totalChars < 8 || totalChars > 128) {
        alert("no. please choose a number between 8 and 128")
        reHowMany()
    }
}
//a function for making sure each user input is in y or n format
function yOn(a) {
    while (a !== 'y' || a !== 'n') {
        window.b = prompt("choose y or n.")
        if (window.b === 'y' || window.b === 'n') {
            alert("thanks!")
            return
            }
    }
}
//the next three functions gather the parameters of the password
function getUpper() {
    alert("include uppercase?")
    yOn(yesUpper)
    yesUpper = b
    getSpecial()
} 
function getSpecial() {
    alert("include specials?")
    yOn(yeSpecial)
    yeSpecial = b
    getNum()
}
function getNum() {
    alert("include numbers")
    yOn(yesNum)
    yesNum = b
    howMany()
}

getUpper()

//this last block is for distilling all the raw data into a useable string
ansIndex = [yesUpper, yeSpecial, yesNum, alphaLower]

if (ansIndex[0] == 'y') {
    ansIndex[0] = alphaUpper
}
if (ansIndex[1] == 'y') {
    ansIndex[1] = alphaSpecials
}
if (ansIndex[2] == 'y') {
    ansIndex[2] = alphaNums
}
ansDindex = ansIndex.join("")
console.log(totalChars)
addToPass()
console.log(passWord)
passWord = passWord.join("")
console.log(passWord)