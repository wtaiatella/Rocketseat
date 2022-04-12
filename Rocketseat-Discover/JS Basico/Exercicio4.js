/*
Buscando dados em Array

Array de livros por categoria
-> contar o numero de categorias e seus livros
-> contar o numero de autores
-> mostrar livros do autor Augusto Cury
-> transformar o ultimo passo em função

*/

const bookByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os Segredos da mente",
                author: "Harv",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habiltos",
                author: "Stephen",
            },
        ],
    },
];

console.log(bookByCategory)

let qntOfCategory = bookByCategory.length
console.log(qntOfCategory)

/*
for (let CategoryIndex in bookByCategory){
    
    console.log(`Indice da Categoria ${CategoryIndex}`)
    for (let catProperty in bookByCategory[CategoryIndex]){
        if (catProperty == "category"){
            console.log(`Nome da Categoria: ${bookByCategory[CategoryIndex][catProperty]}`)
        } else{
            for (let bookIndex in bookByCategory[CategoryIndex][catProperty]){
                console.log(`Indice do livro ${bookIndex}`)
                for (let bookProperty in bookByCategory[CategoryIndex][catProperty][bookIndex]){
                    if (bookProperty == "title"){
                        console.log(`Título do livro ${bookByCategory[CategoryIndex][catProperty][bookIndex][bookProperty]}`)
                    } else if (bookProperty == "author"){
                        console.log(`Author do livro ${bookByCategory[CategoryIndex][catProperty][bookIndex][bookProperty]}`)
                    }
                }
            }
        }   
    }
}
*/

for (let CategoryIndex of bookByCategory){
    console.log(`Total de livros da categoria ${CategoryIndex.category}:`)
    console.log(CategoryIndex.books.length)
}

function countAuthor () {
    let authors = [];
    
    for (let Category of bookByCategory){
        for (let book of Category.books){
            if (authors.indexOf(book.author)== -1){
                authors.push(book.author)
            }
        }
    }

    console.log(`A quantidade de autores é ${authors.length} `)

}

countAuthor();

function authorBooks (searchAuthor) {
    let books = [];
    
    for (let Category of bookByCategory){
        for (let book of Category.books){
            if(book.author == searchAuthor){
                books.push(book.title)
            }
        }
    }
    return books
}
console.log(authorBooks("Robert"))