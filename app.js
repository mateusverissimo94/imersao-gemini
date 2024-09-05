function pesquisar() {
  const nomeAtleta = document.querySelector("input").value;
  let section = document.getElementById("resultados-pesquisa");

  let resultados = "";

  for (let dado of dados) {
    nomeSeparado = dado.titulo.split(" ");

    if (
      nomeSeparado[0].toLowerCase() === nomeAtleta.toLowerCase() ||
      nomeSeparado[1].toLowerCase() === nomeAtleta.toLowerCase()
    ) {
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }
  }

  if (resultados === "") {
    resultados += `
    <div class="item-resultado">
        <h2>
            Atleta não encontrada, Digite outro nome!
        </h2>
    </div>
    `;
  }

  section.innerHTML = resultados;
}

const input = document.getElementById("input");
console.log(input);

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    pesquisar();
  }
});
