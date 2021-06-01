/*Crie um programa que transforme o sistema de notas númerico em letras A,B,C,D,E

Se nota for 90 ou maior - A
Se nota for entre 80 e 89 - B
Se nota for entre 70 e 79 - C
Se nota for entre 60 e 69 - D
Se nota for menor que 60 - E

*/

let nota = 70;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80 && nota <= 89) {
    console.log("Nota B");
} else if (nota >= 70 && nota <= 79) {
    console.log("Nota C");
} else if (nota >= 60 && nota <= 69) {
    console.log("Nota D");
} else {
    console.log("Nota E");
}