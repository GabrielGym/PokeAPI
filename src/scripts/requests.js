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

function renderizarPesquisa() {
  const title = document.querySelector(".title-1");
  const input = document.querySelector("input");
  const btnPesquisar = document.querySelector(".button-pesquisar");

  btnPesquisar.addEventListener('click', () => {
    puxandoPokemonPorNome(input.value);
    title.innerText = `Voltar ao inicio`;
  });
};

export { puxandoPokemons, renderizarPesquisa };