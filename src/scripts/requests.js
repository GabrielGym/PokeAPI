async function consomePokeAPI() {
    const loading = document.querySelector('.conteiner-pokemons')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        response => response.json()
      )
      .catch(
        error => console.log(error)
      )

     loading.classList.add('hidden')

    return pokemonsDaAPI
}