/*

Prototype

*prototype-based language
*prototype chain
*__proto__

*/

// Manipulando  STRINGS
//separar o texto com espaços no array
//depois juntar tudo com _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let PhraseWithUnderScore = myArray.join("_")
console.log(PhraseWithUnderScore)



//manipulando ARRAYS
let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("nodejs")
//adicionar no começo
techs.unshift("sql")
//remover do fim 
techs.pop()
//remover do começo
techs.shift()
/*
pegar somente alguns elementos do array
slice não modifica o array, retorna novo valor
primeiro parâmetro começa contagem em zero
o segundo começa contagem em 1
este exemplo retorna os indices 1 e 2 do array
*/
console.log(techs.slice(1,3))
/*
remover 1 ou mais itens em qualquer posição
primeiro parâmetro é o índice da posição
segundo é a quantidade de itens a remover
este método modifica o array
*/
techs.splice(1,2)
//encontrar a posição de um elemento do array
let index = techs.indexOf("css")

console.log(techs)


