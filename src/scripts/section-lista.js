import { puxandoPokemons } from "./requests.js";

function renderizarSecaoLista() {
    const conteiner = document.querySelector(".conteiner");

    const sectionLista = document.createElement("section");
    sectionLista.classList.add("section-lista-pokemons");

    const title1 = document.createElement("button");
    title1.classList.add("title-1");
    title1.innerText = `Lista de Pokémons`;

    const conteinerUl = document.createElement("ul");
    conteinerUl.classList.add("conteiner-pokemons");

    sectionLista.append(title1, conteinerUl);
    conteiner.append(sectionLista);
};
async function renderizaPokemons(array) {
    const ulTag = document.querySelector('.conteiner-pokemons');
    ulTag.innerHTML = '';

    array.results.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1);

        ulTag.insertAdjacentHTML('beforeend', `
            <li class="lista-pokemon">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name} class="img-pokemon">
                <h2 class="nome-pokemon">${pokemon.name}</h2>
            </li>
        `);
    });
};

async function renderizaPokemon(array) {
    const ulTag = document.querySelector('.conteiner-pokemons');
    ulTag.innerHTML = '';

    const liTag = document.createElement("li");
    liTag.classList.add("lista-pokemon");

    liTag.insertAdjacentHTML('beforeend', `
        <img src="${array.sprites.front_default}" alt=${array.name} class="img-pokemon">
        <h2 class="nome-pokemon">${array.name}</h2>
    `);

    ulTag.append(liTag);
};

async function VoltarARenderizarPokemons() {
    const btnVoltar = document.querySelector(".title-1");
    const renderizar = await puxandoPokemons();

    btnVoltar.addEventListener('click', () => {
        btnVoltar.innerText = `Lista de Pokémons`;
        renderizaPokemons(renderizar);
    });
};

export { renderizarSecaoLista, renderizaPokemons, renderizaPokemon, VoltarARenderizarPokemons };