/* Monte a lógica das requisições aqui */
// requests.js
/* 
async function consomePokeAPI() {
    // Seleciona o elemento que representa o loading da requisição
    const loading = document.querySelector('#loading')

    // Faz a requisição na API
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
          // Converte o retorno para um objeto Javascript válido 
        response => response.json()
      )
      .catch(
        // Caso haja algum erro, retornamos ele no console 
        error => console.log(error)
      )

    // Independente da requisição ser um sucesso, ou um erro, removeremos o loading da tela
    loading.classList.add('hidden')

    // Retorna esse valor convertido
    return pokemonsDaAPI
}

// Chama a função para rodá-la ao carregar a página
consomePokeAPI() */