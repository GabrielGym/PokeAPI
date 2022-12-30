function renderSectionLista(){

    const sectionLista = document.createElement("section");
    sectionLista.classList.add("section-lista-pokemons");

    const title1 = document.createElement("h1");
    title1.classList.add("title-1");
    title1.innerText = `Lista de Pokémon`;

    const conteinerUl = document.createElement("ul");
    conteinerUl.classList.add("conteiner-pokemons");

    const tagLi = document.createElement("li");
    tagLi.classList.add("lista-pokemon");

    const tagImg = document.createElement("img");
    tagImg.src = ``
    tagImg.alt = ``
    tagImg.classList.add("img-pokemon");

    const tagH2 = document.createElement("h2");
    tagH2.classList.add("nome-pokemon");
    tagH2.innerText = `Magikarp`;

    tagLi.append(tagImg, tagH2);
    conteinerUl.append(tagLi);
    sectionLista.append(title1, conteinerUl);
    conteiner.append(sectionLista);
}