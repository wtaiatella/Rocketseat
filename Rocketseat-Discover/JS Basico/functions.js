
//function statment
//function declaration
 function CreatePhrases () {
    console.log(`Estudar é muito bom!!`)
    console.log("Paciencia e persistência.")
 }

 CreatePhrases()
~
//////////////////////////////////////////////////////
 console.log("")
 console.log("---------------------------------------------")
 console.log("")
 

 let x = 2
//function anonymous
//function expression
 const sum = function(x, y){
    //este x é somente interno a função, não interfere ao x fora
    x=4
    total = x+y
    return total
 }
 let n2 = 3

console.log("o número 1 é ", x)
console.log("o número 2 é ", n2)
console.log(`a soma é ${sum(x, n2)}`)

///////////////////////////////////////////////////////////
console.log("")
console.log("---------------------------------------------")
console.log("")

//exemplo de função callback
function SayMyName (name) {
    console.log("Antes de executar a função callback")

    name()

    console.log("Depois de executar a função CallBack")
}

SayMyName(
    ()=>{
        console.log("Função callback")
    }
)

//////////////////////////////////////////////////////
console.log("")
console.log("---------------------------------------------")
console.log("Exemplo de função Contructor")

//Exemplo de função Contructor

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")

console.log(mayk.walk())
console.log(joao.walk())
