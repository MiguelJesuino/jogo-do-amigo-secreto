//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayNomes = [];



function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector("input");

    // Verificando se o input d nome está vazio
    if (nomeDoAmigo.value == ""){
        alert("Insira um nome valido")
    }    

    // Verificar se o nome já foi adicionado antes
    else if (arrayNomes.includes(nomeDoAmigo.value)) {
        alert("Este nome já foi adicionado anteriormente");
    } 

    else {
        // Adiciona o nome ao array
        arrayNomes.push(nomeDoAmigo.value);
        
        // indicando o id da lista onde vamos escrever os nomes
        let listaAmigosHtml = document.getElementById("listaAmigos");

        // criando uma nova linha com o nome do amigo
        let novoItem = document.createElement("li");
        novoItem.textContent = nomeDoAmigo.value;
        listaAmigosHtml.appendChild(novoItem);
    };
    
    // apagando nome no input
    nomeDoAmigo.value = ''
};


function sortearAmigo(){
    let tamanhoDaLista = arrayNomes.length;

    // pra sortear um nome aleatório, como os valores de uma lista são puxados pelo indice, usei a função Math.random pra pegar um indice aleatório
    let indiceSorteado = parseInt(Math.random() * tamanhoDaLista);
    let nomeEscolhido = arrayNomes[indiceSorteado];

    // Removendo todas as linhas da lista no html pra deixar o resultado em destaque
    while (listaAmigosHtml.firstChild) {
        listaAmigosHtml.removeChild(listaAmigosHtml.firstChild); 
    }

    // mostar o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado foi: ${nomeEscolhido}`;
    
}

