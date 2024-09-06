function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let nomePokemon = campoPesquisa.value;

  if (!nomePokemon) {
    section.innerHTML =
      "<p>Nada foi encontrada. Você precisa digitar o nome de um Pokémon ou pelo seu número (1 a 151)</p>";
    return;
  }

  nomePokemon = nomePokemon.toLowerCase();

  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (
      nome.includes(nomePokemon) ||
      descricao.includes(nomePokemon) ||
      tags.includes(nomePokemon)
    ) {
      resultados += `
        <div class="item-resultado">
          <div class="item-resultado-imagem">
            <img
              src="${dado.image}"
              alt="Gif de um ${dado.nome}"
            />
          </div>
          <div class="item-resultado-dados">
            <h2>
              <a href="#" target="_blank">${dado.id} - ${dado.nome}</a>
            </h2>
            <p class="descricao-meta">
              ${dado.descricao}
            </p>
            <a
              href="${dado.link}"
              target="_blank"
              >Mais informações</a
            >
          </div>
        </div>
        `;
    }
  }

  if (!resultados) {
    resultados += "Nada foi encontrado!";
  }

  section.innerHTML = resultados;
}

const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    pesquisar();
  }
});
