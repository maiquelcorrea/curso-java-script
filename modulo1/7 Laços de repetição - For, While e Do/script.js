/*
var n = 0;

while(n < 10){
    // execute esse codigo aqui
    console.log(n)
    n++;
}    
*/

// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// var n = 0

// do{
//     console.log(n);
//     n++;
// }while(n < 10);

let somaDosPares = 0;

for (let i = 1; i <= 100; i++) {
  // Verifique se o número atual é par
  if (i % 2 === 0) {
    // Adicione o número par à soma
    somaDosPares += i;
  }
}

// Exiba a soma dos números pares no console
console.log("A soma de todos os números pares de 1 a 100 é:", somaDosPares);
