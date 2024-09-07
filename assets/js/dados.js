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
      "Um Digimon do tipo Reptil, estágio Criança. É o parceiro de Tai (Taichi Yagami) e pode evoluir para formas poderosas. Agumon é corajoso, leal e possui um ataque de fogo chamado 'Chama Bebê'. Sua relação com Tai é baseada em confiança e liderança.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Agumon",
    tags: "dinossauro tai digiescolhido digimon",
    image: "https://digimon.shadowsmith.com/img/agumon.jpg",
  },
  {
    id: "002",
    nome: "Gabumon",
    nivel: "Rookie",
    atributo: "Data",
    descricao:
      "Apesar de sua pelagem de pele, este é um verdadeiro Digimon réptil. Ele tem uma personalidade tímida e envergonhada e sempre faz pelagens de dados sobrantes do Garurumon para usar. Usar a pele de um Digimon temível como o Garurumon serve para protegê-lo. Sua personalidade dá uma guinada de 180 quando veste essa pele. Seu movimento especial é Blue Blaster.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Gabumon",
    tags: "lobo casaco ishida digiescolhido digimon",
    image: "https://digimon.shadowsmith.com/img/gabumon.jpg",
  },
  {
    id: "003",
    nome: "Biyomon",
    nivel: "Rookie",
    atributo: "Vaccine",
    descricao:
      "Um Digimon bebê pássaro cujas asas se transformaram em braços. Ele pode agarrar objetos com suas asas, mas não consegue voar muito bem. Ele vive no chão, mas quando o perigo se aproxima, ele voa para escapar. Mesmo assim, ele pode voar quase tão bem quanto o Patamon, então ele vê o Patamon como um rival. Ele sonha em se tornar um Birdramon para voar livremente nos céus e não quer se tornar um Kokatorimon sem vôo. Ele tem uma personalidade curiosa e adora bicar a cabeça do Tanemon. Seu movimento especial Spiral Twister dispara chamas ilusórias.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Biyomon",
    tags: "pássaro sora digiescolhido digimom Piyomon",
    image: "https://digimon.shadowsmith.com/img/biyomon.jpg",
  },
  {
    id: "004",
    nome: "Tentomon",
    nivel: "Rookie",
    atributo: "Vaccine",
    descricao:
      "Um Digimon insetoide com uma carapaça dura, mas de baixa agressividade. Ele tem uma garra dura em cada antebraço e quatro em cada um dos membros médios e traseiros. Seus membros médios, em particular, podem manipular objetos habilmente, como mãos humanas. Outros Digimon insetoides mais evoluídos se preocupam apenas com combates, mas este parece estar em sintonia com a natureza, podendo ser visto alegremente cheirando flores ou cochilando à sombra de uma árvore. No entanto, ele possui um golpe especial, que lança eletricidade estática amplificada por suas asas, chamado Super Shocker.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Tentomon",
    tags: "inseto izumi digiescolhido digimom",
    image: "https://digimon.shadowsmith.com/img/tentomon.jpg",
  },
  {
    id: "005",
    nome: "Palmon",
    nivel: "Rookie",
    atributo: "Data",
    descricao:
      "Um Digimon de vegetação com uma flor tropical na cabeça. Ele evoluiu de Tanemon como um réptil, mas sua aparência e características o classificam como um tipo de vegetação. Durante o dia, ele espalha sua flor e seus braços semelhantes a folhas para realizar a fotossíntese. Enterra seus pés semelhantes a raízes no solo para absorver nutrientes, mas também é capaz de andar. Sua flor emite um cheiro doce quando está feliz, e um fedor forte o suficiente para repelir grandes Digimon quando está zangado ou em perigo. Seu movimento especial, Poison Ivy, envolve o inimigo em hera venenosa, causando paralisia.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Palmon",
    tags: "planta mimi digiescolhido digimom",
    image: "https://digimon.shadowsmith.com/img/palmon.jpg",
  },
  {
    id: "006",
    nome: "Gomamon",
    nivel: "Rookie",
    atributo: "Vaccine",
    descricao:
      "Um Digimon besta marinha coberto por uma pelagem isolante, capaz de se mover em terra. Seu pelo curto e branco cresce à medida que amadurece e se torna marrom quando o Digimon está totalmente desenvolvido. Ele é travesso e adora se intrometer em tudo que vê. O cabelo vermelho que cresce em sua cabeça e nas costas reage às suas emoções, ficando eriçado quando está com raiva. As garras de Gomamon são fortes o suficiente para cortar facilmente gelo espesso, então é melhor não subestimá-lo. Seu movimento especial, Marching Fishes, comanda um cardume de pequenos peixes.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Gomamon",
    tags: "foca jou joe digiescolhido digimom",
    image: "https://digimon.shadowsmith.com/img/gomamon.jpg",
  },
  {
    id: "007",
    nome: "Patamon",
    nivel: "Rookie",
    atributo: "Data",
    descricao:
      "Um Digimon mamífero caracterizado por suas grandes orelhas, que ele usa como asas para voar, embora não consiga ir mais rápido que 1 km/h, sendo definitivamente mais rápido caminhar. As pessoas adoram como ele parece fofo quando tenta tão arduamente voar (não que isso o incomode). Ele é muito obediente e faz o que lhe mandam. Patamon também herdou a genética de antigos Digimon capazes de liberar um poder sagrado oculto sem precisar usar um Anel Sagrado. Seu movimento especial, Boom Bubble, faz com que ele inspire ar e o dispare como uma bala de ar.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Patamon",
    tags: "anjo voador tk  digiescolhido digimom",
    image: "https://digimon.shadowsmith.com/img/patamon.jpg",
  },
  {
    id: "008",
    nome: "Gatomon",
    nivel: "Champion",
    atributo: "Vaccine",
    descricao:
      "Travesso e cheio de curiosidade, seu corpo é pequeno, e anteriormente era um Digimon do tipo sagrado. Seu verdadeiro poder não corresponde a essa aparência. O Anel Sagrado em sua cauda é a prova de sua natureza sagrada, mas ele perde poder e não pode demonstrar sua força original se este for removido. Para se proteger, ele usa longas garras copiadas dos dados de SaberLeomon. Seu movimento especial, Lightning Paw, ataca os inimigos com suas garras longas.",
    link: "https://digitalmonster.fandom.com/pt/wiki/Gatomon",
    tags: "tailmon hikari digiescolhido digimom",
    image: "https://digimon.shadowsmith.com/img/gatomon.jpg",
  },
];
