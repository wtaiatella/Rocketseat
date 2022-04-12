/* Trabformar Notas escolares

de 90 para cima - A
entre 80 - 89   - B
entre 70 - 79   - C
entre 60 - 69   - D
menor que 60    - F

*/


function getScore(score){

let scoreFinal = ""
if(score>=90){
    scoreFinal = "A"
}else if(score>=80){
    scoreFinal = "B"
}else if(score>=70){
    scoreFinal = "C"
}else if(score>=60){
    scoreFinal = "D"
}else {
    scoreFinal = "F"
}

return scoreFinal
}

score = 90
console.log(`Nota numerica = ${score} e a nota escolar = ${getScore(score)}`)

score = 89
console.log(`Nota numerica = ${score} e a nota escolar = ${getScore(score)}`)

score = 79
console.log(`Nota numerica = ${score} e a nota escolar = ${getScore(score)}`)

score = 69
console.log(`Nota numerica = ${score} e a nota escolar = ${getScore(score)}`)

score =59
console.log(`Nota numerica = ${score} e a nota escolar = ${getScore(score)}`)
