var elmentos = document.getElementsByClassName('box');
// var el = elmentos[0];

// el.style.width = '100px';
// el.style.height = '100px';
// el.style.backgroundColor = 'red';
// el.style.marginLeft = '200px'

for(var i = 0; i < elmentos.length; i++){
    var el = elmentos[i];

    el.style.width = '100px';
    el.style.height = '100px';
    el.style.backgroundColor = 'red';
    el.style.marginLeft = '200px';
    el.style.marginTop = '10px'
    el.style.borderWidth = '1';
    el.style.borderColor = 'grey';
    el.style.borderStyle = 'solid';

}