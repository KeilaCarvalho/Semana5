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