import { renderizaPokemons, renderizaPokemon } from "./section-lista.js";

async function puxandoPokemons() {

  const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
    .then(
      res => res.json()
    )
    .then(res => {
      renderizaPokemons(res)
      return res
    })
    .catch(
      erro => console.log(erro)
    );

  return pokemonsDaAPI;
};

async function puxandoPokemonPorNome(nomePokemon) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then(res => res.json())
    .then(res => {
      renderizaPokemon(res)
      return res
    });

  return pokemon;
};

function renderizaCarregando() {
  const ulTag = document.querySelector('.conteiner-pokemons');

  ulTag.insertAdjacentHTML('beforeend', `
  <li class="carregandoLi"><h1 class="carregando">Carregando...</h1></li>
  `)

  return ulTag
}

function renderizarPesquisa() {
  const title = document.querySelector(".title-1");
  const input = document.querySelector("input");
  const btnPesquisar = document.querySelector(".button-pesquisar");
  const ulTag = document.querySelector('.conteiner-pokemons');

  btnPesquisar.addEventListener('click', () => {

    ulTag.innerHTML = ''
    renderizaCarregando()

    setTimeout(() => {
      ulTag.innerHTML = ''
    }, 1490)

    setTimeout(() => {
      puxandoPokemonPorNome(input.value);
      title.innerText = `Voltar ao inicio`;
    }, 1500);

  });
};

export { puxandoPokemons, renderizarPesquisa, renderizaCarregando };