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


    if(!validarCodigo(codigo.value) || !validarProduto(produto.value) || !validarQuantidade(quantidade.value)){
        return false
    }

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

// falta validação e deixar bonito

function validarCodigo(codigo){

    if(codigo.trim() === ""){
        alert("Você deixou o campo vazio, refaça")
        return false
    }
    else{
        return true
    }
}

function validarProduto(produto){
    if(produto.trim() === ""){
        alert("Você deixou o campo vazio, refaça")
        return false
    }
    else{
        return true
    }
}

function validarQuantidade(quantidade){
    if(quantidade.trim() === ""){
        alert("Você deixou o campo vazio, refaça")
        return false
    }
    else if(isNaN(quantidade)){
        alert("Por favor só coloque números")
        return false
    }
    else{
        return true
    }
}