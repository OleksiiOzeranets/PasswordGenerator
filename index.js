const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"
    , "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~"
    , "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]"
    , ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let fistPassword = document.getElementById('fistPassword')
let secondPassword = document.getElementById('secondPassword')
let threePassword = document.getElementById('threePassword')


// let password1 = [];
// let random = Math.floor(Math.random()*5)+10
// for(let i = 0; i < random;i++){//10 - 14
//     let randomPick = Math.floor(Math.random()*characters.length)
//     password1.push(characters[randomPick])
// }
// let password2 = [];
// let random2 = Math.floor(Math.random()*5)+10
// for(let i = 0; i < random2;i++){//10 - 14
//     let randomPick = Math.floor(Math.random()*characters.length)
//     password2.push(characters[randomPick])
// }
// let password3 = [];
// let random3 = Math.floor(Math.random()*5)+10
// for(let i = 0; i < random3;i++){//10 - 14
//     let randomPick = Math.floor(Math.random()*characters.length)
//     password3.push(characters[randomPick])
// }
// let min = 1;
// let max = 5;
function random(min=0,max=0) {
    let password1 = [];
    let random = Math.floor(Math.random() * (max - min)+1) + min //  - 20 +1 
    for (let i = 0; i < random; i++) {
        let randomPick = Math.floor(Math.random() * characters.length)
        password1.push(characters[randomPick])
    }
    return password1
}



function generatePassowrds() {
    fistPassword.textContent = random(10,14).join('')
    secondPassword.textContent = random(10,14).join('')
}
