const item = document.querySelector("#lista");
item.textContent = linguagens[0];
let linguagens = ["JavaScript","Python","C"];​
item.textContent = linguagens[0];
item.textContent = linguagens[1];
item.textContent = linguagens[2];
function inserirNome(){
 let nomeUsuario = prompt("Qual o seu nome");
 let elemento = document.querySelector("#nome-usuario");
 elemento.textContent = nomeUsuario;
}
inserirNome();
