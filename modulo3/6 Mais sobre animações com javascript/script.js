// chamei a classe CONTEUDO entrei no SPAN e coloquei em uma variavel
var span = document.querySelector('.conteudo span');

// Criei uma funçao de click no span
span.addEventListener('click',function(){
    // chamei o PARAGRAFO dentro da classe
    var conteudo = document.querySelector('.conteudo p');

    // criei uma condiçao. se o conteudo nao conter a classe (mostrar) esconda-o. se o conteudo conter a classe (mostrar) mostre-o 
    if(conteudo.classList.contains('mostrar')){
        // removi a classe do conteudo. quando clicar no ocultar, vai remover a classe (mostrar) e ocultar tudo oq tem nela.
        conteudo.classList.remove('mostrar');
        // coloquei o ver mais no conteudo
        span.innerHTML = 'Ver Mais!';
        // coloquei um alerta no conteudo
        alert('esconda o conteudo');
    }else{
        // adicionei a classe (mostrar) no conteudo. quando clicar no ver mais, vai criar a classe (mostrar) e deixar visivel oq tem na classe
        conteudo.classList.add('mostrar');
        // coloquei o nome ocultar no conteudo
        span.innerHTML = 'Ocultar';
        // coloquei um alerta no conteudo
        alert('mostre o conteudo');
    }
})

