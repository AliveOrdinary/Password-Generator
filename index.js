const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];



var input = document.getElementById("no-char");
let noOfChar = ""
input.addEventListener('change', () => {
    noOfChar = parseInt(input.value)
    return noOfChar
});

let itemOne = document.getElementById("text-1")
let itemTwo = document.getElementById("text-2")


function passWordGen() {
    console.log(noOfChar)
    for (let i = 0; i < noOfChar; i++) {
        let rNum = Math.floor(Math.random() * (characters.length))
        let randomChar = characters[rNum]
        itemOne.textContent += randomChar
    }
    for (let i = 0; i < noOfChar; i++) {
        let rNum = Math.floor(Math.random() * (characters.length))
        let randomChar = characters[rNum]
        itemTwo.textContent += randomChar
    }
}

