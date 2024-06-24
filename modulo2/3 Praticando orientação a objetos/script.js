

function Animal(nome,peso){
    if(nome == undefined){
        nome = 'cachorro';
    }

    if(peso == undefined){
        peso = '5kg';
    }

    this.nome = nome;
    this.peso = peso;
}

animal = new Animal('gato');

alert(animal.nome)
