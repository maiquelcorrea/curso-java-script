
// criando uma classe
class Animal{
    constructor(nome){
        this.nome = nome;
    }

    printnome(){
        return this.nome;
    }
}

// usando o extends a classe cachorro esta herdando tudo da classe animal
class cachorro extends Animal{
    constructor(nome){
        // o super invoca o constructor da classe animal
        super(nome);
        this.raca = 'bulldog';
    }

    printraca(){
        return this.raca;
    }
}

cachorro = new cachorro();

alert(cachorro.printraca())