// // dia do mes
// var date = new Date();
// alert(date.getDate());
// // dia da semana
// alert(date.getDay());
// // ano
// alert(date.getFullYear());
// // horas
// alert(date.getHours());
// // minutos
// alert(date.getMinutes());
// // segundos
// alert(date.getSeconds());
// // milisegundos
// alert(date.getMilliseconds());

var date = new Date('07/23/2024');

var date2 = new Date('08/03/2024');

var diferenca = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24);
alert(diferenca);