/* Crie um objeto que possua duas propriedades do tipo array:
- receitas: []
- despesas: []

Depois, crie um programa que calcule receitas e despesas e uma 
mensagem que mostre se a família está com o saldo positivo ou negativo 
e qual o saldo. */

let família = {
    receitas: [2000, 3000, 200],
    despesas: [150, 210, 100, 800, 500, 600, 400, 1000]
}

function soma(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculoDoBalanço() {
    const calculoReceitas = soma(família.receitas)
    const calculoDespesas = soma(família.despesas)

    const total = calculoReceitas - calculoDespesas

    const estaOk = total >= 0

    let message = "negativo"

    if (estaOk) {
        message = "positivo"
    }

    console.log("Seu saldo é " + message);
    console.log("O valor do saldo é " + total);

}

calculoDoBalanço()