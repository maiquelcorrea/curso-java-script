var anonascimento = prompt('por favor informe o ano que voce nasceu');

while(anonascimento >= 2020){
    alert('por favor informe seu ano de nascimento correatamente');
    anonascimento = prompt('por favor informe o ano que voce nasceu');
        while(anonascimento <= 1920){
            alert('por favor informe seu ano de nascimento correatamente');
            anonascimento = prompt('por favor informe o ano que voce nasceu');
        }
}

while(anonascimento <= 1920){
    alert('por favor informe seu ano de nascimento correatamente');
    anonascimento = prompt('por favor informe o ano que voce nasceu');
    while(anonascimento >= 2020){
        alert('por favor informe seu ano de nascimento correatamente');
        anonascimento = prompt('por favor informe o ano que voce nasceu');
    }
}

var anoatual = prompt('por favor informe o ano atual');

var idadefinal = anoatual - anonascimento;

alert('a idade final é '+idadefinal);