/* operator precedence

grouping                    ()
negação e incremento        ! ++ --
multiplicação e divisão     * / 
adição e subtração          + -
relacional                  < <= > >=
igualdade                   == != === !==
AND                         &&
OR                          ||
condicional                 ?:
assingnment                 = += -= *=
*/

/*

FALSY
Quando um valor é considerado false em contexto
onde um booleano é obrigatório

false
0
-0
""
null
undefined
NaN

TRUTHY
Quando um valor é considerado false em contexto
onde um booleano é obrigatório

true 
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/

/////////////////////////////////////
//throw
//try....catch

function sayMyName(name=""){
    if(name===""){
        throw new Error('Nome é obrigatório')
    }
    console.log('depois do erro')
}

try{
    sayMyName()
} catch(e){
    console.log(e)
}

////////////////////////////
//for...of
//loop para items de string, numero, array

let Name = 'Mayk'
let Names = ['João', 'Luis', "Pedro"]

for(let char of Name){
    console.log(char)
}

for (let index of Names){
    console.log(index)
}

//////////////////////////////////////////
//for...in
//loop para propriedades de objetos

let person = {
    name: 'Jhon',
    age: 30,
    weight: 88.6
}

for (let property in person){
    console.log(`Propriedade ${property} e valor ${person[property]}`)
}