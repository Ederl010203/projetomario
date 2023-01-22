/*
objetivo 1 quando clicar o veja o  trailer 
1.1  pega o elemento que represneta o botao  e precisamos indentifar quando clicar no botao 
da jieto de pega o elemento no modal 
abrirs o modal tela 





2 e no x fecha  modal

1.1 pegar o o modelo 
indentificar  quando o usuario clicar no x 
fecha a modal
*/
//1.1  pega o elemento que represneta o botao
console.log('mostrar o documento',document);
//1.1  pega o elemento que represneta o botao
const botao = document.querySelector('.botao');
// 2precisamos indentifar quando clicar no botao
//cria um varialvel 
function alternarmodal(){
    modal.classList.toggle ( "aberto");  
}
botao.addEventListener("click",() => {
//abrirs o modal tela
 alternarmodal();  
 video.setAttribute("src",linkdovideo);// para rodar e volta assistir novamente
}) 
//pega o elemento no modal
const modal = document.querySelector(".modal");
//abrirs o modal tela

//objetivo 2
//x fecha  modal
const botaofechamodal = document.querySelector(".fecha-modal");
//1.1 pegar o o modelo indentificar  quando o usuario clicar no x
botaofechamodal.addEventListener("click",() =>{
   //fecha a modal
   alternarmodal();
   video.setAttribute("src", " ");
}) 
const video = document.getElementById("video"); //abrir o video
console.log(video.src);// aqui e pra uqnado fecha abrir novamente
const linkdovideo = video.src;// a variavel




 