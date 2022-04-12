/* conversão Calsius vs Fahrenheit

C = (F-32)*5/9
F = C*9/5 + 32

Entrada = XXC ou XXF

*/

function tranformDegree(degree){
    const isCelcius = degree.toUpperCase().includes("C")
    const isFahrenheit = degree.toUpperCase().includes("F")
    let convertion

    if(!isCelcius&&!isFahrenheit){
        throw new Error('Erro de medida')
    }

    if(isCelcius){
        degree = Number(degree.slice(0,(degree.indexOf("C"))))
        convertion = degree*9/5 + 32 + "F"
    } else { 
        degree = Number(degree.slice(0,(degree.indexOf("F"))))
        convertion = (degree-32)*5/9 + "C"
    }
    return convertion
}

try{

    console.log(tranformDegree("30t"))

} catch (error) {
    console.log (error)
}