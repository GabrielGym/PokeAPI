function renderSectionLista(){

    const sectionLista = document.createElement("section");
    sectionLista.classList.add("section-lista-pokemons");

    const title1 = document.createElement("h1");
    title1.classList.add("title-1");
    title1.innerText = `Lista de Pokémon`;

    const conteinerUl = document.createElement("ul");
    conteinerUl.classList.add("conteiner-pokemons");

    sectionLista.append(title1, conteinerUl);
    conteiner.append(sectionLista);
}
async function renderizaPokemons() {
    const ulTag = document.querySelector('.conteiner-pokemons')
    const listaDePokemons = await consomePokeAPI()

    listaDePokemons.results.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        ulTag.insertAdjacentHTML('beforeend', `
            <li class="lista-pokemon">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name} class="img-pokemon">
                <h2 class="nome-pokemon">${pokemon.name}</h2>
            </li>
        `)
    })
}