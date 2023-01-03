function renderizarHeader() {
    const divisao = document.querySelector(".divisao-pesquisa");

    const header = document.createElement("header");
    header.classList.add("conteiner-header");

    const imgHeader = document.createElement("img");
    imgHeader.src = `./src/assets/pokeapi.png`;
    imgHeader.alt = `PokéApi`;

    header.append(imgHeader);
    divisao.append(header);
};

export { renderizarHeader };