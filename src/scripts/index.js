const body = document.querySelector("body");

const conteiner = document.createElement("main");
conteiner.classList.add("conteiner");

const divisao = document.createElement("div");
divisao.classList.add("divisao-pesquisa");

body.append(conteiner);
conteiner.append(divisao)

renderHeader();
renderSectionPesquisa();
renderSectionLista();
consomePokeAPI() 
renderizaPokemons()