function pesquisarPokemon() {
  let section = document.getElementById("resultados-pesquisa");
  let nomeDados = campoPesquisa.value;

  if (!nomeDados) {
    section.innerHTML = `
        <div class="item-resultado">
          <div class="item-resultado-dados">
            <h2>
              Nada foi encontrada. Você precisa digitar o nome de um Pokémon ou pelo seu número (1 a 151)!
            </h2>
          </div>
        </div>
        `;
    return;
  }

  nomeDados = nomeDados.toLowerCase();

  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";
  let tipos = "";

  for (let dado of dadosPokemon) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    tipos = dado.tipos.join(", ").toLowerCase();

    if (
      nome.includes(nomeDados) ||
      descricao.includes(nomeDados) ||
      tags.includes(nomeDados) ||
      tipos.includes(nomeDados)
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
              <a href="${dado.link}" target="_blank">${dado.id} - ${
        dado.nome
      }</a>
              <p class="paragrafo-tipos">Tipo: ${dado.tipos
                .map((type) => `<i class="${type.toLowerCase()}">${type}</i>`)
                .join("/")}</p>
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
    resultados += `
        <div class="item-resultado">
          <div class="item-resultado-dados">
            <h2>
              Nenhum Pokémon foi encontrado, Tente entre os primeiros 151!
            </h2>
          </div>
        </div>
        `;
  }

  campoPesquisa.value = "";
  section.innerHTML = resultados;
}

function pesquisarDigimon() {
  let section = document.getElementById("resultados-pesquisa");
  let nomeDados = campoPesquisa.value;

  if (!nomeDados) {
    section.innerHTML = `
        <div class="item-resultado">
          <div class="item-resultado-dados">
            <h2>
              Nenhum Digimon foi encontrado, tente entre os parceiros dos Digiescolhidos!
            </h2>
          </div>
        </div>
        `;
    return;
  }

  nomeDados = nomeDados.toLowerCase();

  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";
  let nivel = "";
  let atributo = "";

  for (let dado of dadosDigimon) {
    nome = dado.nome.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    nivel = dado.nivel.toLowerCase();
    atributo = dado.atributo.toLowerCase();

    if (
      nome.includes(nomeDados) ||
      descricao.includes(nomeDados) ||
      tags.includes(nomeDados) ||
      nivel.includes(nomeDados) ||
      atributo.includes(nomeDados)
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
            <div class="cabecalho">
              <h2>
                <a href="${dado.link}" target="_blank">${dado.nome}</a>
              </h2>
              <p>Nível: ${dado.nivel}</p>
              <p>Atributo: ${dado.atributo}</p>
            </div>
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
    resultados += `
        <div class="item-resultado">
          <div class="item-resultado-dados">
            <h2>
              Nenhum Digimon foi encontrado, tente entre os parceiros dos Digiescolhidos!
            </h2>
          </div>
        </div>
        `;
  }

  campoPesquisa.value = "";
  section.innerHTML = resultados;
}

function mudarTema() {
  const body = document.querySelector("body");
  const titulo = document.querySelector("h1");
  const input = document.querySelector("input");
  const botaoPesquisa = document.querySelector(".botao-pesquisa");
  let section = document.getElementById("resultados-pesquisa");

  const ativarScriptDigimon = body.classList.contains("tema-digimon");

  body.classList.toggle("tema-digimon");
  titulo.classList.toggle("tema-digimon");
  input.classList.toggle("tema-digimon");

  if (ativarScriptDigimon) {
    botaoPesquisa.setAttribute("onClick", "pesquisarPokemon()");
    botaoAlterarTema.textContent = "Digimon";
    input.placeholder =
      "Digite o número, nome, tipo ou no que o pokémon foi inspirado";
    titulo.textContent = "Procure por seu Pokémon favorito";
    section.innerHTML = "";
  } else {
    botaoPesquisa.setAttribute("onClick", "pesquisarDigimon()");
    botaoAlterarTema.textContent = "Pokémon";
    input.placeholder = "Digite o nome dele ou o Digiescolhido ligado a ele";
    titulo.textContent = "Procure por seu Digimon favorito";
    section.innerHTML = "";
  }
}

const campoPesquisa = document.getElementById("campo-pesquisa");

campoPesquisa.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    pesquisar();
  }
});

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

botaoAlterarTema.addEventListener("click", () => {
  mudarTema();
});
