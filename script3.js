var yesLower = ""
var yesUpper = "" 
var yeSpecial = ""
var yesNum = ""
totalChars = ""
secOption = ""

potentialS = ['upper', 'lower', 'specials']


function howMany() {
    totalChars = prompt("how many characters?")
    return
}
function rYoN() {
    yOn()
}
function yOn(a) {
    while (a !== 'y' || a !== 'n') {
        window.b = prompt("choose y or n.")
        if (window.b === 'y' || window.b === 'n') {
            return
            }
    }
}
function getLower() {
    alert("include lowercase?")
    yOn(yesLower)
    yesLower = b
    getUpper()
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
}
function getNum() {
    alert("include numbers")
    yOn(yesNum)
    yesNum = b
}

getLower()

console.log(yesLower, yesUpper, yeSpecial, yesNum)


