let dadosPokemon = [
  {
    id: "001",
    nome: "Bulbasaur",
    tipos: ["Grama", "Venenoso"],
    descricao:
      "Um Pokémon tipo Planta/Venenoso. Ele armazena energia solar no bulbo em suas costas e libera em ataques poderosos.",
    link: "https://www.pokemon.com/br/pokedex/bulbasaur",
    tags: "planta venenoso bulbasauro ash pokemon pokémon",
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
    tags: "planta venenoso ivisauro pokemon pokémon",
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
    tags: "planta venenoso venosauro pokemon pokémon",
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
    tags: "fogo ash pokemon pokémon",
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
    tags: "fogo ash pokemon pokémon",
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
    tags: "fogo voador ash pokemon pokémon",
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
    tags: "água tartaruga ash pokemon pokémon",
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
    tags: "água tartaruga pokemon pokémon",
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
    tags: "água tartaruga pokemon pokémon",
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
    tags: "inseto larva ash pokemon pokémon",
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
    tags: "inseto casulo ash pokemon pokémon",
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
    tags: "inseto borbaleta ash pokemon pokémon",
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
    tags: "inseto larva pokemon pokémon",
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
    tags: "inseto borbaleta ash pokemon pokémon",
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
    tags: "inseto borbaleta ash pokemon pokémon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif",
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
