// Definição de classe
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        // /*
        // Forma 1 (Estudo)
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
        // */

        /*
        // Forma 2 (Estudo)
        let categoria = "Sem categoria";

        if (this.idade >= 9 && this.idade <= 11) {
            categoria = "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            categoria = "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            categoria = "Intermediário";
        } else {
            categoria = "Adulto";
        }

        return categoria;
        */
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasDoMeio = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

        let soma = notasDoMeio.reduce(function (total, atual) {
            return total + atual;
        }, 0);

        return soma / notasDoMeio.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas.join(", ");
    }

    obtemCategoria() {
        let categoria = this.calculaCategoria();
        return categoria;
    }

    obtemIMC() {
        let imc = this.calculaIMC();
        return imc;
    }

    obtemMediaValida() {
        let media = this.calculaMediaValida();
        return media;
    }
}

// Entrada
// Declara o atleta
const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.7,
    [10, 9.34, 8.42, 10, 7.88]
);

// Saída
console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
