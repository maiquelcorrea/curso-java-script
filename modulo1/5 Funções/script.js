function testes(){
    // executado quando chamar a funçao
    console.log('chamando a funçao testes');
}

testes();

function testes2(nome,idade){
    // parametros na funçao
    console.log('o nome é '+nome);
    console.log('a idade é '+idade);
    console.log('----------------------------');
}

testes2('maiquel',18);
testes2('natalia',19);

function pegarnome(parametro){
    if(parametro == 1){
        return 'maiquel';
    }else{
        return 'outro nome';
    }
}

var nome = pegarnome(1);
console.log(nome)

