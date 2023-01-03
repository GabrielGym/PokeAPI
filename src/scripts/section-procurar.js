function renderizarSecaoPesquisa() {
    const divisao = document.querySelector(".divisao-pesquisa")

    const sectionProcurar = document.createElement("section");
    sectionProcurar.classList.add("section-procurar-pokemon");

    const nav = document.createElement("nav");

    const input = document.createElement("input");
    input.type = `text`;
    input.placeholder = `Pesquisar por...`;

    const button = document.createElement("button");
    button.type = `submit`;
    button.classList.add("button-pesquisar");

    const imgButton = document.createElement("img");
    imgButton.src = `./src/assets/search-icon.png`;
    imgButton.alt = `Pesquisar`;

    button.append(imgButton);
    nav.append(input, button);
    sectionProcurar.append(nav);
    divisao.append(sectionProcurar);
};

export { renderizarSecaoPesquisa };

