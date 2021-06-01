/* 

Crie uma função que transforme celsius em fahrenheit e vice-versa.

F = C * 9/5 + 32
C = (F - 32) * 5/9

*/

// transformeGraus("50F")

function transformeGraus(graus) {
    const celsiusExiste = graus.toUpperCase().includes("C")
    const fahrenheitExiste = graus.toUpperCase().includes("F")

    if(!celsiusExiste && !fahrenheitExiste) {
        throw new Error("Grau não identificado.")
    }

    // fluxo ideal F -> C
    let updateGraus = Number(graus.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let grausSign = "C"

    // fluxo alternativo C -> F
    if(celsiusExiste) {
        updateGraus = Number(graus.toUpperCase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        grausSign = "F"
    }

    return formula(updateGraus) + grausSign
}

try {
    console.log(transformeGraus("50F"))
    console.log(transformeGraus("10C"))
    transformeGraus("50X")
} catch (error) {
    console.log(error.message)
}