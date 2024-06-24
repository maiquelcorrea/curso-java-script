// aplicaçao calculadora dinamica

// queremos um numero inicial
// queremos um sinal(tipo de operaçao)
// queremos um numero final

var numero1 = prompt('informe o primeiro numero...');


var sinal = prompt('informe o sinal da sua operaçao...');
    while(sinal != '-' && sinal != '+' && sinal != '/' && sinal != '*'){
        alert('por favor informe um sinal valido');
        sinal = prompt('informe o sinal da sua operaçao...');
    }

var numero2 = prompt('informe o numero final...');

// funçoeas para converter numero para uma string
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

var resultado = 0;

if(sinal == '+'){
    resultado = numero1 + numero2;
}else if(sinal == '-'){
    resultado = numero1 - numero2;
}else if(sinal == '*'){
    resultado = numero1 * numero2;
}else if(sinal == '/'){ 
    resultado = numero1 / numero2;
}

alert('o resultado final é '+resultado);