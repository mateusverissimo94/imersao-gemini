let dadosPokemon = [
  {
    id: "001",
    nome: "Bulbasaur",
    tipos: ["Grama", "Venenoso"],
    descricao:
      "Um Pokémon tipo Planta/Venenoso. Ele armazena energia solar no bulbo em suas costas e libera em ataques poderosos.",
    link: "https://www.pokemon.com/br/pokedex/bulbasaur",
    tags: "bulbasauro ash pokemon sapo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
  },
  {
    id: "002",
    nome: "Ivysaur",
    tipos: ["Grama", "Venenoso"],
    descricao:
      "A evolução de Bulbasaur. Quando o bulbo em suas costas floresce, ele fica mais forte e pronto para evoluir.",
    link: "https://www.pokemon.com/br/pokedex/Ivysaur",
    tags: "ivisauro pokemon sapo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif",
  },
  {
    id: "003",
    nome: "Venusaur",
    tipos: ["Grama", "Venenoso"],
    descricao:
      "A evolução final de Bulbasaur. A flor em suas costas libera uma fragrância que acalma os que estão por perto.",
    link: "https://www.pokemon.com/br/pokedex/Venusaur",
    tags: "venosauro pokemon sapo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif",
  },
  {
    id: "004",
    nome: "Charmander",
    tipos: ["Fogo"],
    descricao:
      "Um Pokémon do tipo Fogo. Sua cauda flamejante reflete seu humor e vitalidade. Se a chama apagar, ele morre.",
    link: "https://www.pokemon.com/br/pokedex/Charmander",
    tags: "ash pokemon lagarto salamandra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
  },
  {
    id: "005",
    nome: "Charmeleon",
    tipos: ["Fogo"],
    descricao:
      "A evolução de Charmander. Ele usa sua cauda flamejante para atacar seus oponentes e é conhecido por seu temperamento feroz.",
    link: "https://www.pokemon.com/br/pokedex/Charmeleon",
    tags: "ash pokemon lagarto salamandra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif",
  },
  {
    id: "006",
    nome: "Charizard",
    tipos: ["Fogo", "Voador"],
    descricao:
      "A evolução final de Charmander. Charizard é capaz de cuspir fogo tão quente que pode derreter pedras. Seu voo poderoso o torna temível.",
    link: "https://www.pokemon.com/br/pokedex/Charizard",
    tags: "ash pokemon dragão salamandra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif",
  },
  {
    id: "007",
    nome: "Squirtle",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Usa sua concha para proteção e esguicha água para atacar os inimigos.",
    link: "https://www.pokemon.com/br/pokedex/Squirtle",
    tags: "água tartaruga ash pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
  },
  {
    id: "008",
    nome: "Wartortle",
    tipos: ["Agua"],
    descricao:
      "A evolução de Squirtle. Suas orelhas longas e cauda espessa ajudam a manter o equilíbrio na água e também o protegem.",
    link: "https://www.pokemon.com/br/pokedex/Wartortle",
    tags: "água tartaruga pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif",
  },
  {
    id: "009",
    nome: "Blastoise",
    tipos: ["Agua"],
    descricao:
      "A forma final de Squirtle. Seus canhões de água disparam jatos potentes capazes de perfurar aço.",
    link: "https://www.pokemon.com/br/pokedex/Blastoise",
    tags: "água tartaruga pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif",
  },
  {
    id: "010",
    nome: "Caterpie",
    tipos: ["Inseto"],
    descricao:
      "Um Pokémon do tipo Inseto. Ele se move devagar, mas pode usar seda para se proteger de predadores.",
    link: "https://www.pokemon.com/br/pokedex/Caterpie",
    tags: "larva ash pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif",
  },
  {
    id: "011",
    nome: "Metapod",
    tipos: ["Inseto"],
    descricao:
      "A evolução de Caterpie. Sua casca rígida o protege enquanto se prepara para evoluir.",
    link: "https://www.pokemon.com/br/pokedex/Metapod",
    tags: "casulo ash pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif",
  },
  {
    id: "012",
    nome: "Butterfree",
    tipos: ["Inseto", "Voador"],
    descricao:
      "A evolução final de Caterpie. Suas asas liberam pólen venenoso, e ele é um excelente polinizador.",
    link: "https://www.pokemon.com/br/pokedex/Butterfree",
    tags: "borbaleta ash pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif",
  },
  {
    id: "013",
    nome: "Weedle",
    tipos: ["Inseto", "Venenoso"],
    descricao:
      "Um Pokémon tipo Inseto/Venenoso. Seu ferrão na cabeça é venenoso e ele usa para se defender.",
    link: "https://www.pokemon.com/br/pokedex/Weedle",
    tags: "larva pokemon ferrão",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif",
  },
  {
    id: "014",
    nome: "Kakuna",
    tipos: ["Inseto", "Venenoso"],
    descricao:
      "A evolução de Weedle. Embora pareça imóvel, está em processo de evolução interna.",
    link: "https://www.pokemon.com/br/pokedex/Kakuna",
    tags: "casulo pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif",
  },
  {
    id: "015",
    nome: "Beedrill",
    tipos: ["Inseto", "Venenoso"],
    descricao:
      "A evolução final de Weedle. Com três ferrões venenosos, Beedrill é incrivelmente territorial e agressivo.",
    link: "https://www.pokemon.com/br/pokedex/Beedrill",
    tags: "abelha pokemon ferrão",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
  },
  {
    id: "016",
    nome: "Pidgey",
    tipos: ["Normal", "Voador"],
    descricao:
      "Um Pokémon do tipo Normal/Voador. Ele tem um excelente senso de direção e pode voltar para seu ninho de qualquer lugar.",
    link: "https://www.pokemon.com/br/pokedex/Pidgey",
    tags: "pássaro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif",
  },
  {
    id: "017",
    nome: "Pidgeotto",
    tipos: ["Normal", "Voador"],
    descricao:
      "A evolução de Pidgey. Ele patrulha seu território em busca de presas e é muito protetor.",
    link: "https://www.pokemon.com/br/pokedex/Pidgeotto",
    tags: "pássaro pokemon ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
  },
  {
    id: "018",
    nome: "Pidgeot",
    tipos: ["Normal", "Voador"],
    descricao:
      "A forma final de Pidgey. Suas asas poderosas permitem que voe em alta velocidade, e ele tem uma visão incrível.",
    link: "https://www.pokemon.com/br/pokedex/Pidgey",
    tags: "pássaro pokemon ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif",
  },
  {
    id: "019",
    nome: "Rattata",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Ele é ágil e possui dentes afiados que crescem constantemente.",
    link: "https://www.pokemon.com/br/pokedex/Rattata",
    tags: "rato pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif",
  },
  {
    id: "020",
    nome: "Raticate",
    tipos: ["Normal"],
    descricao:
      "A evolução de Rattata. Seus dentes são tão afiados que pode roer até mesmo concreto.",
    link: "https://www.pokemon.com/br/pokedex/Raticate",
    tags: "rato pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif",
  },
  {
    id: "021",
    nome: "Spearow",
    tipos: ["Normal", "Voador"],
    descricao:
      "Um Pokémon do tipo Normal/Voador. Ele é muito agressivo e protege seu território com ataques rápidos e ferozes.",
    link: "https://www.pokemon.com/br/pokedex/Spearow",
    tags: "pássaro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif",
  },
  {
    id: "022",
    nome: "Fearow",
    tipos: ["Normal", "Voador"],
    descricao:
      "A evolução de Spearow. Ele pode voar grandes distâncias e é conhecido por sua habilidade de voar a altas altitudes.",
    link: "https://www.pokemon.com/br/pokedex/Fearow",
    tags: "pássaro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
  },
];

let dadosDigimon = [
  {
    id: "001",
    nome: "Agumon",
    nivel: "Rookie",
    atributo: "Vaccine",
    descricao:
      "Um Digimon do tipo Reptil, estágio Criança. É o parceiro de Tai (Taichi Yagami) e pode evoluir para formas poderosas. Agumon é corajoso, leal e possui um ataque de fogo chamado 'Chama Bebê'. Sua relação com Tai é baseada em confiança e liderança",
    link: "https://digitalmonster.fandom.com/pt/wiki/Agumon",
    tags: "dinossauro tai digiescolhido digimon rookie vaccine",
    image: "https://digimon.shadowsmith.com/img/agumon.jpg",
  },
];
