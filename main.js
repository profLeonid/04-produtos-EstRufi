"use strict"

function adicionarProduto(){
    const produto = document.getElementById(`produtoColocar`)
    const lista = document.getElementById("listas")
    
// o span que to criando está na memória do computador
    const span = document.createElement("span")

    span.textContent = produto.value
    span.className = "rounded-[30px] py-2 px-4 bg-green-200"

    lista.appendChild(span)

}