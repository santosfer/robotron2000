// No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. Esta função será aplicada em conjunto de um evento de clique.

//minha resposta:
const clicou = document.querySelector('#calcular')

clicou.addEventListener("click", () => { alert("Fui clicado") })

// reposta do instrutor:
const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
    resultado.innerHTML = "Fui clicado"
})