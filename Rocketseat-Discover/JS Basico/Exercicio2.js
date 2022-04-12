/* Sistema de gasto familiar

Crie um objeto que possui 2 propriedades, ambas do tipo array:
* receitas:[]
* depesas: []

Agora crie uma função que irá calcular o total
de receitas e despesas e irá mostrar se a 
familia está com saldo positivo ou negativo
seguido do valor do saldo
*/

let costs = {
    income: [80, 45, 35, 9],
    expenses: [-30, -45, -58, -36]
}

var sum = 0
for (let property in costs){
    for (let cost of costs[property]) {
        sum += cost
    }
}
console.log(sum)


costs = {
    income: [82, 45, 35, 9],
    expenses: [51, 45, 58, 36]
}

function calculateBalance(costs1) {
    const calculateIncome = costs1.income.reduce((calculateIncome, Element)=>calculateIncome + Element)
    const calculateExpenses = costs1.expenses.reduce((calculateExpenses, Element)=>calculateExpenses + Element)
    const balance = calculateIncome - calculateExpenses 
    let result = ""
    if(balance >= 0){
        result = "positive"
    } else {
        result = "negative"
    }
    console.log(`Your balance is ${result}: ${balance}`)
}

calculateBalance(costs)
