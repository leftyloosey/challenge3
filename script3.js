var yesUpper = "" 
var yeSpecial = ""
var yesNum = ""
var totalChars = ""
var passWord = []

var alphaLower = "abcdefghijklmnopqrstuvwxyz"
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var alphaSpecials = "!\"#$%&\'()*+,-/:;<=>?@[]^_`{|}~"
var alphaNums = "0123456789"

function reHowMany() {
    howMany()
}

function getRandom(a) {
    return a[Math.floor(Math.random() * a.length)]
}

function addToPass() {
    for (i = 0; i < totalChars; i++) {
        passWord.push(getRandom(ansDindex))[i]
        }
}
function howMany() {
    totalChars = prompt("how many characters?")
    if (isNaN(totalChars) || totalChars < 8 || totalChars > 128) {
        alert("no. please choose a number between 8 and 128")
        reHowMany()
    }
}
function yOn(a) {
    while (a !== 'y' || a !== 'n') {
        window.b = prompt("choose y or n.")
        if (window.b === 'y' || window.b === 'n') {
            return
            }
    }
}

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