const prompt = require("prompt-sync")({sigint: true})
const numeros = []

for(let i = 0; i < 5; i++){
 const numero = parseInt(prompt(`Digite o ${i + 1} número: `))
 numeros.push(numero)
}

 for (let i = 0; i < 5; i++){
     console.log (`O ${i + 1} número é ${numeros[i]}`)
 }

 const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
 },0)
 
 console.log("A soma dos números é", soma)
 
// INÍCIO DO EXERCÍCIO 05
const numerosOrdenados = [...numeros]

numerosOrdenados.sort((numero1, numero2) => numero1 - numero2)
console.log(numerosOrdenados)
// FIM EXERCÍCIO 05

// INÍCIO DO EXERCÍCIO 06
const soPares = numeros.filter(numeroAtual => {
    if (numeroAtual % 2 == 0){
        return true
    }
})
console.log("O novo array com números pares é", soPares)
// FIM DO EXERCÍCIO 06

// INÍCIO DO EXERCÍCIO 07
const quadrados = numeros.map(numeroAtual => numeroAtual * numeroAtual)

console.log ("O array dos quadrados é", quadrados)
// FIM DO EXERCÍCIO 07
