var p = document.getElementsByTagName('p');

// p

// for(var i = 0; i < p.length; i++){
//     p[i].innerHTML = 'Manipulado pelo javaScript -'+ i;
// }

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}
