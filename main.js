"use strict"

function adicionarProduto(){

    const codigo = document.getElementById(`codigoColocar`)
    const produto = document.getElementById(`produtoColocar`)
    const quantidade = document.getElementById(`quantidadeColocar`)
    const lista = document.getElementById("listas")
    const botao = document.getElementById("buttonAdd")

// o span que to criando está na memória do computador
    const spanCodigo = document.createElement("span")
    const spanProduto = document.createElement("span")
    const spanQuantidade = document.createElement("span")

    spanCodigo.textContent = codigo.value
    spanProduto.textContent = produto.value
    spanQuantidade.textContent = quantidade.value

    spanCodigo.className = "rounded-[30px] py-2 px-4 bg-green-200"
    spanProduto.className = "rounded-[30px] py-2 px-4 bg-red-200"
    spanQuantidade.className = "rounded-[30px] py-2 px-4 bg-blue-200"

    lista.appendChild(spanCodigo)
    lista.appendChild(spanProduto)
    lista.appendChild(spanQuantidade)

    codigo.value = ""
    produto.value = ""
    quantidade.value = ""
}