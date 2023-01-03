import { renderizarHeader } from "./header.js";
import { renderizarSecaoLista, VoltarARenderizarPokemons } from "./section-lista.js";
import { renderizarSecaoPesquisa } from "./section-procurar.js";
import { puxandoPokemons, renderizarPesquisa } from "./requests.js";

const body = document.querySelector("body");

const conteiner = document.createElement("main");
conteiner.classList.add("conteiner");

const divisao = document.createElement("div");
divisao.classList.add("divisao-pesquisa");

body.append(conteiner);
conteiner.append(divisao);


renderizarHeader();
renderizarSecaoLista();
renderizarSecaoPesquisa();
renderizarPesquisa();
puxandoPokemons();
VoltarARenderizarPokemons();