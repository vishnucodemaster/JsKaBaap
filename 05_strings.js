const name = "Vishnu"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('vishn')

console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName[0])
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'))

const newString = gameName.substring(-8,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Boss    "
console.log(newStringOne.trim());

const url = "https://chat.openai.com/c/2148c6ea-617f-4059-89d7-1e45b2ba93ce"
console.log(url.replace('617f','5666'))