//decidindo notas do aluno
var nota1 = 6;
var nota2 = 7;
var nota3 = 2;
//verificando se as notas sao validas
while (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log ("Insira notas válidas entre 0 e 10");
    break;
}

var media = (nota1 + nota2 + nota3) / 3;//calculo da media do aluno
var mediaMinima = 7.0; //media minima a ser tirada pelo aluno

//exibindo resultado
if (media >= mediaMinima) {
    console.log ("Nota 1: " + nota1)
    console.log ("Nota 2: " + nota2)
    console.log ("Nota 3: " + nota3)
    console.log ("APROVADO✅")
    console.log ("Sua média" + media)
}   else {
    console.log ("Nota 1: " + nota1)
    console.log ("Nota 2: " + nota2)
    console.log ("Nota 3: " + nota3)
    console.log ("REPROVADO❌")
    console.log ("Sua média: " + media)
    }
