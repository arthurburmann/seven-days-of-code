/*      prompt não funciona no node js

const cidade = prompt("Digite a sua cidade:");
const msg = 'Você é de '+ cidade +'.';
alert(msg);

*/

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = 'Olá '+ nome +', você tem '+ idade +' anos e está aprendendo '+ linguagem +'!';

alert(msg);

const resposta = prompt("Você gosta de estudar "+ linguagem +"? Responda com o número 1 para SIM ou 2 para NÃO.")
if(resposta == 1){
    const respostaSim = 'Muito bem! Continue estudando!';
    alert(respostaSim);
}   else {
    const respostaNao = 'Que pena... Já tentou estudar outra linguagem?';
    alert(respostaNao);
}