
const MESSAGE = readline();
console.error(MESSAGE)
var B = ""

function translateToBinaire(char) {   // fonction qui transforme le caractère en binaire
    var indexAscii = char.charCodeAt(0)  
    console.error("Ascii :", indexAscii)
    var binaire = indexAscii.toString(2)
    var binaire7bits = ("0000000".concat(binaire)).slice(-7)
    console.error("binaire :", binaire)
    console.error("binaire7bits :", binaire7bits)
    return binaire7bits
}

for ( let i=0; i<MESSAGE.length; i++) {      // on boucle sur chaque caractère du message
    var bin = translateToBinaire(MESSAGE[i])
    B += bin
}

B = B.match(/(.)\1*/g)                 // regex qui decoupe a chaque changement de caractère

var results = []
for ( let i=0; i< B.length; i++) {
    var result = ""
    if (B[i][0] === "0") {                // si le premier caractère du bloc de B === 0
        result = "00 "                  
    } else {
        result = "0 "                   // sinon premier caractère du bloc === 1
    }
    //console.error("length :", B[i].length)
    result += "0".repeat(B[i].length) 
    results.push(result)
}


results = results.join(" ")
console.log(results)

