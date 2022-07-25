
const MESSAGE = readline();
//console.log(MESSAGE)
var B = ""

function translateToBinaire(char) {   // fonction qui transforme le caractère en binaire
    var indexAscii = char.charCodeAt(0)  
    //console.log("Ascii :", indexAscii)
    var binaire = indexAscii.toString(2)
    //console.log("binaire :", binaire)
    return binaire
}

for ( let i=0; i<MESSAGE.length; i++) {      // on boucle sur chaque caractère du message
    var bin = translateToBinaire(MESSAGE[i])
    B += bin
    //console.log("B :", B)
}

B = B.match(/(.)\1*/g)                 // regex qui decoupe a chaque changement de caractère
//console.log(B)

var results = []
for ( let i=0; i< B.length; i++) {
    var result = ""
    if (B[i][0] === "0") {                // si le premier caractère du bloc de B === 0
        result = "00 "                  
    } else {
        result = "0 "                   // sinon premier caractère du bloc === 1
    }
    //console.log("length :", B[i].length)
    result += "0".repeat(B[i].length) 
    results.push(result)
}


results = results.join(" ")
console.log(results)
