let clima = "frio"
console.log(clima)

// var é global e local
// let é local

console.log("Existe x antes do bloco? = ", x)

{
    var x=0;
}

console.log("Existe x depois do bloco? = ", x)

// teste de let

let y=1
console.log("Existe y antes do bloco? = ", y)

{
    //o let permite usar a variavel em bloco filho
    //mas não em bloco pai.
    y=0;
}

console.log("Existe y depois do bloco? = ", y)

let Name = "João"
let age = 15

//neste caso a declaração do texto precisa ser com crase
console.log(`O ${Name} tem ${age} anos.`)

// objetos

let person = {
    name: "Jhon",
    age: 15,
    weight: "35.5",
    IsAdmin: true
}

console.log(person)
console.log(person.name)

//arrays

let animals = [
    "lion",
    "cow",
    "cat",
    {
        name:"dog",
        age:3
    }
]

console.log(animals)
console.log(animals.length)
console.log(animals[0])
console.log(animals[3].name)