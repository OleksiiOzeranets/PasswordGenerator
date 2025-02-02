const characters =["A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
    "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"
    ,"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~"
    ,"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]"
    ,",","|",":",";","<",">",".","?","/"];
    
let fistPassword = document.getElementById('fistPassword')
let secondPassword = document.getElementById('secondPassword')

let password1 = [];
let password2 = [];
for(let i = 0; i < 11;i++){
    let randomPick = Math.floor(Math.random()*characters.length)
    let randomPick2 = Math.floor(Math.random()*characters.length)
    password1.push(characters[randomPick])
    password2.push(characters[randomPick2])
}


function generatePassowrds() {
    fistPassword.textContent = password1
    secondPassword.textContent = password2
}