# Amigo Secreto


Este é um projeto simples de uma **aplicação web front-end** para sorteio de nomes no jogo Amigo Secreto. A página permite adicionar participantes e sortear aleatoriamente quem será o amigo secreto de quem. A aplicação é inteiramente feita em **HTML**, **CSS** e **JavaScript**, e não requer back-end.

## Funcionalidades
 - #### Adicionar participantes ao sorteio.
     O código permite que o usuário adicione um nome de amigo ao sorteio, garantindo que o nome não esteja vazio e que não seja duplicado. Abaixo está a lógica principal da função adicionarAmigo:
   
     - Verificação de campo vazio: O nome não pode ser um espaço em branco. Se for, o sistema avisa o usuário.
     
     - Verificação de duplicidade: O nome não pode ser adicionado mais de uma vez. Caso já tenha sido adicionado, o sistema avisa o usuário.

<br>

Aqui está a lógica principal da função adicionarAmigo:
<br>

```javaScript
 function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector("input");

    if (nomeDoAmigo.value.trim() === "") {
        alert("Insira um nome válido");
        return;
    }

    else if (arrayNomes.includes(nomeDoAmigo.value)) {
        alert("Este nome já foi adicionado anteriormente");
        return;
    }

    else {
        arrayNomes.push(nomeDoAmigo.value);
        let listaAmigosHtml = document.getElementById("listaAmigos");
        let novoItem = document.createElement("li");
        novoItem.textContent = nomeDoAmigo.value;
        listaAmigosHtml.appendChild(novoItem);
    }

    nomeDoAmigo.value = ''; // Limpa o campo de input
}
```

 - **Realizar sorteio de forma aleatória**.
   
    O sorteio é feito aleatoriamente utilizando a função Math.random(). O código escolhe um índice aleatório da lista de amigos e exibe o nome sorteado. O processo garante que o sorteio seja completamente imprevisível.

   - Cálculo do índice aleatório: Utiliza-se a função Math.random() para gerar um número aleatório, que é convertido em um índice válido da lista de amigos.
   - Exibição do resultado: Após o sorteio, a lista é limpa e o resultado é exibido na tela, destacando o nome sorteado.

<br>
  
Aqui está um exemplo do código utilizado:
<br>
```javaScript
    let  tamanhoDaLista  =  arrayNomes.length;
    
    let  indiceSorteado  =  parseInt(Math.random()  *  tamanhoDaLista);
    let  nomeEscolhido  =  arrayNomes[indiceSorteado];
    
    // Removendo todas as linhas da lista no html pra deixar o resultado em destaque
    while (listaAmigosHtml.firstChild) {
      listaAmigosHtml.removeChild(listaAmigosHtml.firstChild);
    }
    
    // mostar o resultado na tela
    let  resultado  =  document.getElementById('resultado');
    resultado.innerHTML  =  `O amigo secreto sorteado foi: ${nomeEscolhido}`;
```
<br><br>
## Tecnologias

- HTML: Usado para a estrutura básica da página e elementos da interface.
- CSS: Usado para estilizar a página e garantir que o design seja agradável e funcional.
- JavaScript: Usado para implementar a lógica do sorteio e interação com o usuário.

<br><br>

## Como rodar o projeto localmente

1. **Clone o repositório**:

    Se ainda não fez isso, clone o repositório usando o comando:

    ```bash
    git clone https://github.com/seu-usuario/amigo-secreto.git
    ```

1. **Abra o arquivo index.html**:

     Navegue até a pasta do projeto e abra o arquivo index.html em seu navegador preferido.

    ```bash
    cd amigo-secreto
    open index.html  # No macOS, ou apenas abra no navegador.
    ```
<br><br>

## Instruções de uso
- Abra a página no seu navegador.
- Na área de input, adicione o nome de um amigo que participará do sorteio.
- Clique em Adicionar Amigo para incluir o nome na lista.
- Quando todos os amigos estiverem adicionados, clique em Sorteio para ver quem será o amigo secreto de quem.
