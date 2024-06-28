var span = document.getElementById('.container span');

span.addEventListener('click', function(){
    var p = document.querySelector('#sentimentos p');
    
    if(p.classList.contains('mostrar')){
        p.classList.remove('mostrar');
        span.innerHTML = 'Ver mais!';
    }else{
        p.classList.add("mostrar");
        span.innerHTML = 'Ocultar!';
    }
    
})