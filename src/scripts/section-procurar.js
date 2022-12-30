function renderSectionPesquisa() {
    const sectionProcurar = document.createElement("section");
    sectionProcurar.classList.add("section-procurar-pokemon");

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.type  = `text`;
    input.placeholder = `Pesquisar por...`;

    const button = document.createElement("button");
    button.type  = `submit`;
    button.classList.add("button-pesquisar");

    const imgButton = document.createElement("img");
    imgButton.src   = `./src/assets/search-icon.png`;
    imgButton.alt   = `Pesquisar`;

    button.append(imgButton);
    form.append(input, button);
    sectionProcurar.append(form);
    divisao.append(sectionProcurar);
}

