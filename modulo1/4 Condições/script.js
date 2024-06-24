// condiçoes

// var numero = 10;
// var nome = 'maiquel';

/*
if(nome == 'natalia'){
    console.log(true);
}else if(nome == 'maiquel'){
    console.log('verdadeiro');
}else{
    console.log('o m ta maiusculo mano kaskskda');
}
*/

// < menor
// <= menor ou igual
// > maior
// >= maior ou igual
// != diferente
// && E
// || ou


/*
if(numero <= 18){
    console.log('o numero é menor ou igual a 18');
}
*/

// if(nome != 'natalia'){
//     console.log('o nome é diferente de natalia');
// }


// if(nome != 'maiquel' || numero == 10){
//     console.log('a condiçao bate');
// }
// var vogais = ('a','e','i','o','u');

// function checar(){
//     let vogais = document.getElementById('opa').value;
//     vogais = vogais.ToLowerCase();

//     if(){

//     }
// }

// function check(){
//     var vogais = document.getElementById('text').value;
//     vogais = vogais.toLowerCase();

//     if(vogais == 'a' || vogais == 'e' || vogais == 'i' || vogais == '0' || vogais == 'u'){
//         alert('vogal');
//     }else{
//         alert('consoante');
//     }
// }

var idade = prompt('qual a sua idade?');
idade = Number(idade);

if(idade >= 18){
    alert('voce é maior de 18 anos');
}else{
    alert('voce é menor de 18 anos');
}