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
    tags: "água tartaruga ash gary pokemon",
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
    tags: "água tartaruga gary pokemon",
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
    tags: "água tartaruga gary pokemon",
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
    tags: "pássaro pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif",
  },
  {
    id: "023",
    nome: "Ekans",
    tipos: ["Venenoso"],
    descricao:
      "Um Pokémon do tipo Venenoso. Ele se enrola para descansar e usa sua língua para sentir o ambiente ao redor.",
    link: "https://www.pokemon.com/br/pokedex/Ekans",
    tags: "cobra serpente equipe rocket jesse pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif",
  },
  {
    id: "024",
    nome: "Arbok",
    tipos: ["Venenoso"],
    descricao:
      "A evolução de Ekans. Seus padrões no corpo assustam seus inimigos e seu ataque venenoso é letal.",
    link: "https://www.pokemon.com/br/pokedex/Arbok",
    tags: "cobra serpente equipe rocket jesse pokemon agatha elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif",
  },
  {
    id: "025",
    nome: "Pikachu",
    tipos: ["Eletrico"],
    descricao:
      "Um Pokémon do tipo Elétrico. Ele armazena eletricidade nas bochechas e libera em choques poderosos.",
    link: "https://www.pokemon.com/br/pokedex/Pikachu",
    tags: "rato ash mascote pokemon tenente surge vermilion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
  },
  {
    id: "026",
    nome: "Raichu",
    tipos: ["Eletrico"],
    descricao:
      "A evolução de Pikachu. Sua eletricidade é ainda mais forte e pode ser letal quando descarregada.",
    link: "https://www.pokemon.com/br/pokedex/Raichu",
    tags: "rato pokemon tenente surge vermilion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif",
  },
  {
    id: "027",
    nome: "Sandshrew",
    tipos: ["Terrestre"],
    descricao:
      "Um Pokémon do tipo Terra. Ele se enrola como uma bola para se proteger e se enterra no solo para se esconder.",
    link: "https://www.pokemon.com/br/pokedex/Sandshrew",
    tags: "tatu bola pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif",
  },
  {
    id: "028",
    nome: "Sandslash",
    tipos: ["Terrestre"],
    descricao:
      "A evolução de Sandshrew. Seus espinhos duros podem perfurar o solo, permitindo que se esconda rapidamente.",
    link: "https://www.pokemon.com/br/pokedex/Sandslash",
    tags: "ouriço pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif",
  },
  {
    id: "029",
    nome: "Nidoran (fêmea)",
    tipos: ["Venenoso"],
    descricao:
      "Um Pokémon do tipo Venenoso. Seus pequenos chifres contêm veneno, que ela usa para se proteger.",
    link: "https://www.pokemon.com/br/pokedex/nidoran-female",
    tags: "cifre roedor femea pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif",
  },
  {
    id: "030",
    nome: "Nidorina",
    tipos: ["Venenoso"],
    descricao:
      "A evolução de Nidoran♀. Seus chifres se desenvolveram ainda mais, e ela se torna mais agressiva ao proteger seus filhotes.",
    link: "https://www.pokemon.com/br/pokedex/Nidorina",
    tags: "cifre roedor femea pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif",
  },
  {
    id: "031",
    nome: "Nidoqueen",
    tipos: ["Venenoso", "Terrestre"],
    descricao:
      "A evolução final de Nidoran♀. Seu corpo robusto oferece uma defesa formidável e ela usa seu poder para proteger a ninhada.",
    link: "https://www.pokemon.com/br/pokedex/Nidoqueen",
    tags: "chifre rainha gary pokemon giovanni viridian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif",
  },
  {
    id: "032",
    nome: "Nidoran (macho)",
    tipos: ["Venenoso"],
    descricao:
      "Um Pokémon do tipo Venenoso. Seus chifres são venenosos e ele os usa em batalha para atacar seus oponentes.",
    link: "https://www.pokemon.com/br/pokedex/nidoran-male",
    tags: "chifre pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif",
  },
  {
    id: "033",
    nome: "Nidorino",
    tipos: ["Venenoso"],
    descricao:
      "A evolução de Nidoran♂. Ele é agressivo e usa seus chifres venenosos para atacar com fúria.",
    link: "https://www.pokemon.com/br/pokedex/Nidoqueen",
    tags: "chifre pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/33.gif",
  },
  {
    id: "034",
    nome: "Nidoking",
    tipos: ["Venenoso", "Terrestre"],
    descricao:
      "A evolução final de Nidoran♂. Com um corpo imponente e chifres venenosos, Nidoking é uma força devastadora.",
    link: "https://www.pokemon.com/br/pokedex/Nidoqueen",
    tags: "chifre rei pokemon gary giovanni viridian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/34.gif",
  },
  {
    id: "035",
    nome: "Clefairy",
    tipos: ["Fada"],
    descricao:
      "Um Pokémon do tipo Fada. Ele é dito viver nas montanhas e é adorado por sua aparência fofa e comportamento alegre.",
    link: "https://www.pokemon.com/br/pokedex/Clefairy",
    tags: "fada lua pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif",
  },
  {
    id: "036",
    nome: "Clefable",
    tipos: ["Fada"],
    descricao:
      "A evolução de Clefairy. Diz-se que Clefable raramente aparece, pois prefere lugares tranquilos e solitários.",
    link: "https://www.pokemon.com/br/pokedex/Clefable",
    tags: "chifre rei pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/36.gif",
  },
  {
    id: "037",
    nome: "Vulpix",
    tipos: ["Fogo"],
    descricao:
      "Um Pokémon do tipo Fogo. Nasce com uma cauda, mas essa se divide à medida que cresce. Solta pequenas labaredas quando fica animado.",
    link: "https://www.pokemon.com/br/pokedex/Vulpix",
    tags: "raposa nove caudas kyuubi pokemon brock",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif",
  },
  {
    id: "038",
    nome: "Ninetales",
    tipos: ["Fogo"],
    descricao:
      "A evolução de Vulpix. Suas nove caudas possuem poderes místicos, e diz-se que pode viver por mil anos.",
    link: "https://www.pokemon.com/br/pokedex/Ninetales",
    tags: "raposa nove caudas kyuubi pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/38.gif",
  },
  {
    id: "039",
    nome: "Jigglypuff",
    tipos: ["Normal", "Fada"],
    descricao:
      "Um Pokémon do tipo Normal/Fada. Sua voz hipnótica faz qualquer um dormir, e ele infla seu corpo quando fica bravo.",
    link: "https://www.pokemon.com/br/pokedex/Jigglypuff",
    tags: "dormir cantora pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif",
  },
  {
    id: "040",
    nome: "Wigglytuff",
    tipos: ["Normal", "Fada"],
    descricao:
      "A evolução de Jigglypuff. Seu corpo é extremamente macio e flexível, permitindo-lhe saltar grandes alturas.",
    link: "https://www.pokemon.com/br/pokedex/Ninetales",
    tags: "rosa pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/40.gif",
  },
  {
    id: "041",
    nome: "Zubat",
    tipos: ["Venenoso", "Voador"],
    descricao:
      "Um Pokémon do tipo Venenoso/Voador. Vive em cavernas escuras e usa ondas ultrassônicas para navegar e encontrar presas.",
    link: "https://www.pokemon.com/br/pokedex/Zubat",
    tags: "morcego brock pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif",
  },
  {
    id: "042",
    nome: "Golbat",
    tipos: ["Venenoso", "Voador"],
    descricao:
      "A evolução de Zubat. Suas presas afiadas sugam o sangue de suas vítimas, drenando energia rapidamente.",
    link: "https://www.pokemon.com/br/pokedex/Golbat",
    tags: "morcego brock pokemon agatha elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif",
  },
  {
    id: "043",
    nome: "Oddish",
    tipos: ["Planta", "Venenoso"],
    descricao:
      "Um Pokémon do tipo Planta/Venenoso. Durante o dia, enterra-se no solo para absorver nutrientes e à noite caminha espalhando sementes.",
    link: "https://www.pokemon.com/br/pokedex/Oddish",
    tags: "verdura pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif",
  },
  {
    id: "044",
    nome: "Gloom",
    tipos: ["Planta", "Venenoso"],
    descricao:
      "A evolução de Oddish. Exala um cheiro forte e desagradável, mas seu néctar pode ser usado para criar perfumes.",
    link: "https://www.pokemon.com/br/pokedex/Gloom",
    tags: "dorminhoco fedorento pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/44.gif",
  },
  {
    id: "045",
    nome: "Vileplume",
    tipos: ["Planta", "Venenoso"],
    descricao:
      "A evolução final de Oddish. Sua grande flor libera pólen tóxico que pode causar alergias severas.",
    link: "https://www.pokemon.com/br/pokedex/Vileplume",
    tags: "flor pokemon erika celadon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif",
  },
  {
    id: "046",
    nome: "Paras",
    tipos: ["Inseto", "Planta"],
    descricao:
      "Um Pokémon do tipo Inseto/Planta. Fungos crescem em suas costas, controlando parcialmente suas ações.",
    link: "https://www.pokemon.com/br/pokedex/Paras",
    tags: "cogumelo fungo pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/46.gif",
  },
  {
    id: "047",
    nome: "Parasect",
    tipos: ["Inseto", "Planta"],
    descricao:
      "A evolução de Paras. O fungo tomou conta de todo o corpo, agindo como um organismo único.",
    link: "https://www.pokemon.com/br/pokedex/Parasect",
    tags: "cogumelo fungo pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/47.gif",
  },
  {
    id: "048",
    nome: "Venonat",
    tipos: ["Inseto", "Venenoso"],
    descricao:
      "Um Pokémon do tipo Inseto/Venenoso. Seus olhos grandes funcionam como radares, permitindo localizar presas no escuro.",
    link: "https://www.pokemon.com/br/pokedex/Venonat",
    tags: "peludo pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/48.gif",
  },
  {
    id: "049",
    nome: "Venomoth",
    tipos: ["Inseto", "Venenoso"],
    descricao:
      "A evolução de Venonat. Suas asas liberam escamas venenosas que podem paralisar adversários.",
    link: "https://www.pokemon.com/br/pokedex/Venomoth",
    tags: "mariposa pokemon sabrina saffron",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif",
  },
  {
    id: "050",
    nome: "Diglett",
    tipos: ["Terrestre"],
    descricao:
      "Um Pokémon do tipo Terra. Vive subterrâneo, aparecendo apenas com a cabeça. Cultivadores apreciam sua habilidade de arar o solo.",
    link: "https://www.pokemon.com/br/pokedex/Diglett",
    tags: "cabeça minhoca pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif",
  },
  {
    id: "051",
    nome: "Dugtrio",
    tipos: ["Terrestre"],
    descricao:
      "A evolução de Diglett. Consiste em três Diglett que trabalham juntos para cavar túneis extensos.",
    link: "https://www.pokemon.com/br/pokedex/Dugtrio",
    tags: "cabeças minhoca pokemon giovanni viridian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/51.gif",
  },
  {
    id: "052",
    nome: "Meowth",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Adora objetos brilhantes e coleta moedas para guardar como tesouro.",
    link: "https://www.pokemon.com/br/pokedex/Meowth",
    tags: "gato falante equipe rocket pokemon jesse james",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif",
  },
  {
    id: "053",
    nome: "Persian",
    tipos: ["Normal"],
    descricao:
      "A evolução de Meowth. Elegante e ágil, é conhecido por sua natureza altiva e movimentos graciosos.",
    link: "https://www.pokemon.com/br/pokedex/Persian",
    tags: "gato pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/53.gif",
  },
  {
    id: "054",
    nome: "Psyduck",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Sofre constantemente de dores de cabeça e, quando a dor aumenta, libera poderes psíquicos.",
    link: "https://www.pokemon.com/br/pokedex/Psyduck",
    tags: "pato misty pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif",
  },
  {
    id: "055",
    nome: "Golduck",
    tipos: ["Agua"],
    descricao:
      "A evolução de Psyduck. Um nadador excelente, usa habilidades psíquicas com maestria.",
    link: "https://www.pokemon.com/br/pokedex/Golduck",
    tags: "pato pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/55.gif",
  },
  {
    id: "056",
    nome: "Mankey",
    tipos: ["Lutador"],
    descricao:
      "Um Pokémon do tipo Lutador. Extremamente temperamental, ataca ferozmente quando provocado.",
    link: "https://www.pokemon.com/br/pokedex/Mankey",
    tags: "macaco raivoso pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif",
  },
  {
    id: "057",
    nome: "Primeape",
    tipos: ["Lutador"],
    descricao:
      "A evolução de Mankey. Sua raiva é tão intensa que dificilmente se acalma, tornando-o um adversário perigoso.",
    link: "https://www.pokemon.com/br/pokedex/Primeape",
    tags: "macaco raivoso boxeador pokemon ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/57.gif",
  },
  {
    id: "058",
    nome: "Growlithe",
    tipos: ["Fogo"],
    descricao:
      "Um Pokémon do tipo Fogo. Leal e corajoso, protege seu treinador e território com determinação.",
    link: "https://www.pokemon.com/br/pokedex/Growlithe",
    tags: "cachorro tigre pokemon policial jenny blaine seafoam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif",
  },
  {
    id: "059",
    nome: "Arcanine",
    tipos: ["Fogo"],
    descricao:
      "A evolução de Growlithe. Conhecido por sua velocidade e majestade, é reverenciado como símbolo de bravura.",
    link: "https://www.pokemon.com/br/pokedex/Arcanine",
    tags: "cachorro tigre pedra pokemon gary policial jenny blaine seafoam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/59.gif",
  },
  {
    id: "060",
    nome: "Poliwag",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Sua cauda o ajuda a nadar, e a espiral em sua barriga é na verdade seus órgãos internos visíveis.",
    link: "https://www.pokemon.com/br/pokedex/Poliwag",
    tags: "girino pokemon misty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/60.gif",
  },
  {
    id: "061",
    nome: "Poliwhirl",
    tipos: ["Agua"],
    descricao:
      "A evolução de Poliwag. Pode andar em terra e água, usando suas mãos para lançar ataques poderosos.",
    link: "https://www.pokemon.com/br/pokedex/Poliwhirl",
    tags: "sapo pokemon misty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/61.gif",
  },
  {
    id: "062",
    nome: "Poliwrath",
    tipos: ["Agua", "Lutador"],
    descricao:
      "A evolução final de Poliwag. Combina força física e habilidades aquáticas, sendo um lutador formidável.",
    link: "https://www.pokemon.com/br/pokedex/Poliwrath",
    tags: "sapo boxeador pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/62.gif",
  },
  {
    id: "063",
    nome: "Abra",
    tipos: ["Psiquico"],
    descricao:
      "Um Pokémon do tipo Psíquico. Passa a maior parte do tempo dormindo, mas pode se teletransportar para evitar perigo.",
    link: "https://www.pokemon.com/br/pokedex/Abra",
    tags: "lagarta pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/63.gif",
  },
  {
    id: "064",
    nome: "Kadabra",
    tipos: ["Psiquico"],
    descricao:
      "A evolução de Abra. Seus poderes psíquicos aumentaram, e ele usa uma colher para canalizar sua energia.",
    link: "https://www.pokemon.com/br/pokedex/Kadabra",
    tags: "esper pokemon sabrina saffron",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/64.gif",
  },
  {
    id: "065",
    nome: "Alakazam",
    tipos: ["Psiquico"],
    descricao:
      "A evolução final de Abra. Seu intelecto é extraordinário, e seus poderes psíquicos são incomparáveis.",
    link: "https://www.pokemon.com/br/pokedex/Alakazam",
    tags: "esper sabrina pokemon gary sabrina saffron",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/65.gif",
  },
  {
    id: "066",
    nome: "Machop",
    tipos: ["Lutador"],
    descricao:
      "Um Pokémon do tipo Lutador. Treina constantemente para se tornar mais forte, levantando objetos pesados.",
    link: "https://www.pokemon.com/br/pokedex/Machop",
    tags: "dinossauro wrestler pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/66.gif",
  },
  {
    id: "067",
    nome: "Machoke",
    tipos: ["Lutador"],
    descricao:
      "A evolução de Machop. Seus músculos são tão desenvolvidos que precisa de um cinto especial para conter sua força.",
    link: "https://www.pokemon.com/br/pokedex/Machoke",
    tags: "dinossauro wrestler cinturão pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/67.gif",
  },
  {
    id: "068",
    nome: "Machamp",
    tipos: ["Lutador"],
    descricao:
      "A evolução final de Machop. Com quatro braços, pode executar diversos movimentos simultaneamente.",
    link: "https://www.pokemon.com/br/pokedex/Machamp",
    tags: "dinossauro wrestler cinturão pokemon bruno elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/68.gif",
  },
  {
    id: "069",
    nome: "Bellsprout",
    tipos: ["Planta", "Venenoso"],
    descricao:
      "Um Pokémon do tipo Planta/Venenoso. Flexível e rápido, usa suas vinhas para atacar e se defender.",
    link: "https://www.pokemon.com/br/pokedex/Bellsprout",
    tags: "broto raiz pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/69.gif",
  },
  {
    id: "070",
    nome: "Weepinbell",
    tipos: ["Planta", "Venenoso"],
    descricao:
      "A evolução de Bellsprout. Se pendura em galhos para dormir e pode expelir ácido para dissolver presas.",
    link: "https://www.pokemon.com/br/pokedex/Weepinbell",
    tags: "flor pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/70.gif",
  },
  {
    id: "071",
    nome: "Victreebel",
    tipos: ["Planta", "Venenoso"],
    descricao:
      "A evolução final de Bellsprout. Atrai presas com seu aroma doce e as dissolve com enzimas poderosas.",
    link: "https://www.pokemon.com/br/pokedex/Victreebel",
    tags: "carnivora james equipe rocket pokemon erika celadon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/71.gif",
  },
  {
    id: "072",
    nome: "Tentacool",
    tipos: ["Agua", "Venenoso"],
    descricao:
      "Um Pokémon do tipo Água/Venenoso. Flutua no mar e seus tentáculos liberam toxinas dolorosas.",
    link: "https://www.pokemon.com/br/pokedex/Tentacool",
    tags: "polvo pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/72.gif",
  },
  {
    id: "073",
    nome: "Tentacruel",
    tipos: ["Agua", "Venenoso"],
    descricao:
      "A evolução de Tentacool. Com 80 tentáculos, pode controlar as correntes marítimas e é temido pelos navegantes.",
    link: "https://www.pokemon.com/br/pokedex/Tentacruel",
    tags: "polvo kraken pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/73.gif",
  },
  {
    id: "074",
    nome: "Geodude",
    tipos: ["Pedra", "Terrestre"],
    descricao:
      "Um Pokémon do tipo Pedra/Terra. Parece uma rocha comum, mas tem braços fortes e é encontrado em montanhas.",
    link: "https://www.pokemon.com/br/pokedex/Geodude",
    tags: "flutuando voando pokemon brock pewter",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif",
  },
  {
    id: "075",
    nome: "Graveler",
    tipos: ["Pedra", "Terrestre"],
    descricao:
      "A evolução de Geodude. Rola montanha abaixo para se locomover, esmagando tudo em seu caminho.",
    link: "https://www.pokemon.com/br/pokedex/Graveler",
    tags: "pedregulho pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/75.gif",
  },
  {
    id: "076",
    nome: "Golem",
    tipos: ["Pedra", "Terrestre"],
    descricao:
      "A evolução final de Geodude. Seu corpo é duro como diamante, sobrevivendo a erupções vulcânicas.",
    link: "https://www.pokemon.com/br/pokedex/Golem",
    tags: "tartaruga pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/76.gif",
  },
  {
    id: "077",
    nome: "Ponyta",
    tipos: ["Fogo"],
    descricao:
      "Um Pokémon do tipo Fogo. Suas crinas são feitas de fogo, e aprende a correr rapidamente após nascer.",
    link: "https://www.pokemon.com/br/pokedex/Ponyta",
    tags: "cavalo pokemon blaine seafoam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif",
  },
  {
    id: "078",
    nome: "Rapidash",
    tipos: ["Fogo"],
    descricao:
      "A evolução de Ponyta. Corre tão rápido que parece uma estrela cadente, e suas chamas intensificam-se com a velocidade.",
    link: "https://www.pokemon.com/br/pokedex/Rapidash",
    tags: "cavalo pokemon blaine seafoam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/78.gif",
  },
  {
    id: "079",
    nome: "Slowpoke",
    tipos: ["Agua", "Psiquico"],
    descricao:
      "Um Pokémon do tipo Água/Psíquico. Lento em movimento e pensamento, sua cauda tem propriedades regenerativas.",
    link: "https://www.pokemon.com/br/pokedex/Slowpoke",
    tags: "hipopotamo pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/79.gif",
  },
  {
    id: "080",
    nome: "Slowbro",
    tipos: ["Agua", "Psiquico"],
    descricao:
      "A evolução de Slowpoke. Evolui quando um Shellder morde sua cauda, tornando-o mais consciente e poderoso.",
    link: "https://www.pokemon.com/br/pokedex/Slowbro",
    tags: "hipopotamo pokemon lorelei elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/80.gif",
  },
  {
    id: "081",
    nome: "Magnemite",
    tipos: ["Eletrico", "Metal"],
    descricao:
      "Um Pokémon do tipo Elétrico/Aço. Flutua usando magnetismo e pode causar interferência em equipamentos eletrônicos.",
    link: "https://www.pokemon.com/br/pokedex/Magnemite",
    tags: "imã pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif",
  },
  {
    id: "082",
    nome: "Magneton",
    tipos: ["Eletrico", "Metal"],
    descricao:
      "A evolução de Magnemite. Formado por três Magnemites unidos, seu poder magnético é amplificado.",
    link: "https://www.pokemon.com/br/pokedex/Magneton",
    tags: "imã trio pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif",
  },
  {
    id: "083",
    nome: "Farfetch'd",
    tipos: ["Normal", "Voador"],
    descricao:
      "Um Pokémon do tipo Normal/Voador. Usa um talo como arma e é conhecido por sua inteligência e habilidades de combate.",
    link: "https://www.pokemon.com/br/pokedex/Farfetchd",
    tags: "pato cebolinha alho pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif",
  },
  {
    id: "084",
    nome: "Doduo",
    tipos: ["Normal", "Voador"],
    descricao:
      "Um Pokémon do tipo Normal/Voador. Tem duas cabeças que pensam independentemente, coordenando para correr em alta velocidade.",
    link: "https://www.pokemon.com/br/pokedex/Doduo",
    tags: "kiwi pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/84.gif",
  },
  {
    id: "085",
    nome: "Dodrio",
    tipos: ["Normal", "Voador"],
    descricao:
      "A evolução de Doduo. Com três cabeças, cada uma representa uma emoção diferente, controlando seu corpo poderoso.",
    link: "https://www.pokemon.com/br/pokedex/Dodrio",
    tags: "kiwi pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/85.gif",
  },
  {
    id: "086",
    nome: "Seel",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Vive em águas geladas, usando sua camada de gordura para se proteger do frio.",
    link: "https://www.pokemon.com/br/pokedex/Seel",
    tags: "foca pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/86.gif",
  },
  {
    id: "087",
    nome: "Dewgong",
    tipos: ["Agua", "Gelo"],
    descricao:
      "A evolução de Seel. Seu corpo branco como neve permite camuflar-se em ambientes árticos, sendo um nadador habilidoso.",
    link: "https://www.pokemon.com/br/pokedex/Dewgong",
    tags: "foca pokemon lorelei elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/87.gif",
  },
  {
    id: "088",
    nome: "Grimer",
    tipos: ["Venenoso"],
    descricao:
      "Um Pokémon do tipo Venenoso. Formado por lodo tóxico, polui tudo que toca e cresce alimentando-se de resíduos.",
    link: "https://www.pokemon.com/br/pokedex/Grimer",
    tags: "lixo gosma pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/88.gif",
  },
  {
    id: "089",
    nome: "Muk",
    tipos: ["Venenoso"],
    descricao:
      "A evolução de Grimer. Seu corpo é ainda mais tóxico, e o cheiro que exala pode ser sentido a quilômetros.",
    link: "https://www.pokemon.com/br/pokedex/Muk",
    tags: "lixo gosma fedorento pokemon ash koga fuchsia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/89.gif",
  },
  {
    id: "090",
    nome: "Shellder",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Sua concha é extremamente dura, fechando rapidamente para se proteger.",
    link: "https://www.pokemon.com/br/pokedex/Shellder",
    tags: "ostra pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif",
  },
  {
    id: "091",
    nome: "Cloyster",
    tipos: ["Agua", "Gelo"],
    descricao:
      "A evolução de Shellder. Sua concha é quase impenetrável, atacando com espinhos afiados.",
    link: "https://www.pokemon.com/br/pokedex/Cloyster",
    tags: "ostra pokemon lorelei elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/91.gif",
  },
  {
    id: "092",
    nome: "Gastly",
    tipos: ["Fantasma", "Venenoso"],
    descricao:
      "Um Pokémon do tipo Fantasma/Venenoso. Composto principalmente por gás, pode atravessar paredes e se esconder na escuridão.",
    link: "https://www.pokemon.com/br/pokedex/Gastly",
    tags: "bola fogo alma assombração pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif",
  },
  {
    id: "093",
    nome: "Haunter",
    tipos: ["Fantasma", "Venenoso"],
    descricao:
      "A evolução de Gastly. Com mãos destacadas do corpo, assombra vítimas e causa sensações de frio intenso.",
    link: "https://www.pokemon.com/br/pokedex/Haunter",
    tags: "assombração alma pokemon ash agatha elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/93.gif",
  },
  {
    id: "094",
    nome: "Gengar",
    tipos: ["Fantasma", "Venenoso"],
    descricao:
      "A evolução final de Gastly. Adora pregar peças assustadoras e pode se esconder na sombra de alguém.",
    link: "https://www.pokemon.com/br/pokedex/Gengar",
    tags: "assombração alma pokemon agatha elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif",
  },
  {
    id: "095",
    nome: "Onix",
    tipos: ["Pedra", "Terrestre"],
    descricao:
      "Um Pokémon do tipo Pedra/Terra. Composto por rochas ligadas, cava através do solo e montanhas, moldando a terra.",
    link: "https://www.pokemon.com/br/pokedex/Onix",
    tags: "serpente cobra brock pokemon pewter bruno elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif",
  },
  {
    id: "096",
    nome: "Drowzee",
    tipos: ["Psiquico"],
    descricao:
      "Um Pokémon do tipo Psíquico. Hipnotiza presas e se alimenta de seus sonhos, preferindo os de crianças.",
    link: "https://www.pokemon.com/br/pokedex/Drowzee",
    tags: "anta pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/96.gif",
  },
  {
    id: "097",
    nome: "Hypno",
    tipos: ["Psiquico"],
    descricao:
      "A evolução de Drowzee. Usa um pêndulo para induzir hipnose, e dizem que sequestra aqueles que hipnotiza.",
    link: "https://www.pokemon.com/br/pokedex/Hypno",
    tags: "hipnotizador pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/97.gif",
  },
  {
    id: "098",
    nome: "Krabby",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Usa garras poderosas para lutar e se defender, vivendo em praias e rios.",
    link: "https://www.pokemon.com/br/pokedex/Krabby",
    tags: "caranguejo pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/98.gif",
  },
  {
    id: "099",
    nome: "Kingler",
    tipos: ["Agua"],
    descricao:
      "A evolução de Krabby. Sua garra maior é incrivelmente forte, capaz de esmagar conchas duras.",
    link: "https://www.pokemon.com/br/pokedex/Kingler",
    tags: "caranguejo pokemon ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/99.gif",
  },
  {
    id: "100",
    nome: "Voltorb",
    tipos: ["Eletrico"],
    descricao:
      "Um Pokémon do tipo Elétrico. Parece uma Poké Bola e muitas vezes explode quando agitado ou ameaçado.",
    link: "https://www.pokemon.com/br/pokedex/Voltorb",
    tags: "pokebola pokemon tenente surge vermilion",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif",
  },
  {
    id: "101",
    nome: "Electrode",
    tipos: ["Eletrico"],
    descricao:
      "A evolução de Voltorb. Armazena grande quantidade de energia elétrica, podendo causar explosões massivas.",
    link: "https://www.pokemon.com/br/pokedex/Electrode",
    tags: "pokebola pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/101.gif",
  },
  {
    id: "102",
    nome: "Exeggcute",
    tipos: ["Planta", "Psiquico"],
    descricao:
      "Um Pokémon do tipo Planta/Psíquico. Consiste em seis ovos que compartilham uma conexão telepática.",
    link: "https://www.pokemon.com/br/pokedex/Exeggcute",
    tags: "ovos pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif",
  },
  {
    id: "103",
    nome: "Exeggutor",
    tipos: ["Planta", "Psiquico"],
    descricao:
      "A evolução de Exeggcute. Conhecido como 'Árvore da Selva', suas múltiplas cabeças pensam independentemente.",
    link: "https://www.pokemon.com/br/pokedex/Exeggutor",
    tags: "coqueiro palmeira pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/103.gif",
  },
  {
    id: "104",
    nome: "Cubone",
    tipos: ["Terrestre"],
    descricao:
      "Um Pokémon do tipo Terra. Usa o crânio de sua mãe como capacete, e o osso que carrega é sua arma.",
    link: "https://www.pokemon.com/br/pokedex/Exeggutor",
    tags: "fiho pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif",
  },
  {
    id: "105",
    nome: "Marowak",
    tipos: ["Terrestre"],
    descricao:
      "A evolução de Cubone. Superou sua tristeza, tornando-se um guerreiro forte que maneja seu osso com habilidade.",
    link: "https://www.pokemon.com/br/pokedex/Exeggutor",
    tags: "mãe pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/105.gif",
  },
  {
    id: "106",
    nome: "Hitmonlee",
    tipos: ["Lutador"],
    descricao:
      "Um Pokémon do tipo Lutador. Especialista em chutes, suas pernas podem se estender para alcançar oponentes distantes.",
    link: "https://www.pokemon.com/br/pokedex/Hitmonlee",
    tags: "karatê karateca pokemon bruno elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif",
  },
  {
    id: "107",
    nome: "Hitmonchan",
    tipos: ["Lutador"],
    descricao:
      "Um Pokémon do tipo Lutador. Mestre em socos, suas mãos se movem mais rápido que o olho pode ver.",
    link: "https://www.pokemon.com/br/pokedex/Hitmonchan",
    tags: "boxeador boxe pokemon bruno elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif",
  },
  {
    id: "108",
    nome: "Lickitung",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Sua língua tem mais de dois metros, secreta saliva pegajosa para capturar presas.",
    link: "https://www.pokemon.com/br/pokedex/Lickitung",
    tags: "língua jesse equipe rocket pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif",
  },
  {
    id: "109",
    nome: "Koffing",
    tipos: ["Venenoso"],
    descricao:
      "Um Pokémon do tipo Venenoso. Flutua no ar, exalando gases tóxicos inflamáveis.",
    link: "https://www.pokemon.com/br/pokedex/Koffing",
    tags: "meteoro poluição james equipe rocket pokemon koga fuchsia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/109.gif",
  },
  {
    id: "110",
    nome: "Weezing",
    tipos: ["Venenoso"],
    descricao:
      "A evolução de Koffing. Com múltiplos corpos, produz gases ainda mais tóxicos e poluentes.",
    link: "https://www.pokemon.com/br/pokedex/Weezing",
    tags: "meteoro poluição james equipe rocket pokemon koga fuchsia",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/110.gif",
  },
  {
    id: "111",
    nome: "Rhyhorn",
    tipos: ["Terrestre", "Pedra"],
    descricao:
      "Um Pokémon do tipo Terra/Pedra. Corpo duro como pedra, avança sem pensar em direção aos oponentes.",
    link: "https://www.pokemon.com/br/pokedex/Rhyhorn",
    tags: "rinocerante pokemon giovanni viridian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif",
  },
  {
    id: "112",
    nome: "Rhydon",
    tipos: ["Terrestre", "Pedra"],
    descricao:
      "A evolução de Rhyhorn. Desenvolveu postura bípede e inteligência maior, tornando-se mais estratégico.",
    link: "https://www.pokemon.com/br/pokedex/Rhydon",
    tags: "kaiju pokemon giovanni viridian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/112.gif",
  },
  {
    id: "113",
    nome: "Chansey",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Gentil e carinhoso, carrega um ovo nutritivo que compartilha com os feridos.",
    link: "https://www.pokemon.com/br/pokedex/Chansey",
    tags: "enfermeira joy pokecenter centro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/113.gif",
  },
  {
    id: "114",
    nome: "Tangela",
    tipos: ["Planta"],
    descricao:
      "Um Pokémon do tipo Planta. Corpo envolto em vinhas azuis que crescem continuamente.",
    link: "https://www.pokemon.com/br/pokedex/Tangela",
    tags: "cipó tentuculos pokemon erika celadon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif",
  },
  {
    id: "115",
    nome: "Kangaskhan",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Protege ferozmente seu filhote na bolsa, atacando qualquer ameaça.",
    link: "https://www.pokemon.com/br/pokedex/Kangaskhan",
    tags: "canguru mãe filho pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/115.gif",
  },
  {
    id: "116",
    nome: "Horsea",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Nada para trás usando a barbatana dorsal, expele tinta para escapar de predadores.",
    link: "https://www.pokemon.com/br/pokedex/Horsea",
    tags: "cavalo marinho pokemon misty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif",
  },
  {
    id: "117",
    nome: "Seadra",
    tipos: ["Agua"],
    descricao:
      "A evolução de Horsea. Seus espinhos são venenosos, sendo conhecido por ser territorial.",
    link: "https://www.pokemon.com/br/pokedex/Seadra",
    tags: "cavalo marinho pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/117.gif",
  },
  {
    id: "118",
    nome: "Goldeen",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Conhecido como a 'Rainha dos Mares', suas nadadeiras elegantes escondem chifres afiados.",
    link: "https://www.pokemon.com/br/pokedex/Goldeen",
    tags: "peixe dourado pokemon misty",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/118.gif",
  },
  {
    id: "119",
    nome: "Seaking",
    tipos: ["Agua"],
    descricao:
      "A evolução de Goldeen. Durante a temporada de acasalamento, escava ninhos em rios com seus chifres poderosos.",
    link: "https://www.pokemon.com/br/pokedex/Seaking",
    tags: "carpa pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/119.gif",
  },
  {
    id: "120",
    nome: "Staryu",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Pode regenerar membros perdidos e brilha à noite com seu núcleo central.",
    link: "https://www.pokemon.com/br/pokedex/Staryu",
    tags: "estrela mar pokemon misty cerulean",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif",
  },
  {
    id: "121",
    nome: "Starmie",
    tipos: ["Agua", "Psiquico"],
    descricao:
      "A evolução de Staryu. Seu núcleo emite energia misteriosa, frequentemente associado a eventos cósmicos.",
    link: "https://www.pokemon.com/br/pokedex/Starmie",
    tags: "estrela mar pokemon misty cerulean",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/121.gif",
  },
  {
    id: "122",
    nome: "Mr. Mime",
    tipos: ["Psiquico", "Fada"],
    descricao:
      "Um Pokémon do tipo Psíquico/Fada. Cria barreiras invisíveis usando pantomima, altamente expressivo.",
    link: "https://www.pokemon.com/br/pokedex/mr-mime",
    tags: "mímico mãe ash pokemon sabrina saffron",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/122.gif",
  },
  {
    id: "123",
    nome: "Scyther",
    tipos: ["Inseto", "Voador"],
    descricao:
      "Um Pokémon do tipo Inseto/Voador. Lâminas afiadas nos braços, rápido e mortal em combate.",
    link: "https://www.pokemon.com/br/pokedex/Scyther",
    tags: "louva deus foice pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/123.gif",
  },
  {
    id: "124",
    nome: "Jynx",
    tipos: ["Gelo", "Psiquico"],
    descricao:
      "Um Pokémon do tipo Gelo/Psíquico. Comunica-se com linguagem misteriosa, dançando para expressar emoções.",
    link: "https://www.pokemon.com/br/pokedex/Jynx",
    tags: "papai noel pokemon lorelei elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/124.gif",
  },
  {
    id: "125",
    nome: "Electabuzz",
    tipos: ["Eletrico"],
    descricao:
      "Um Pokémon do tipo Elétrico. Atrai raios durante tempestades, armazenando eletricidade no corpo.",
    link: "https://www.pokemon.com/br/pokedex/Electabuzz",
    tags: "felino pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/125.gif",
  },
  {
    id: "126",
    nome: "Magmar",
    tipos: ["Fogo"],
    descricao:
      "Um Pokémon do tipo Fogo. Vive perto de vulcões, exalando calor intenso.",
    link: "https://www.pokemon.com/br/pokedex/Magmar",
    tags: "pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/126.gif",
  },
  {
    id: "127",
    nome: "Pinsir",
    tipos: ["Inseto"],
    descricao:
      "Um Pokémon do tipo Inseto. Usa pinças poderosas para esmagar inimigos, extremamente forte.",
    link: "https://www.pokemon.com/br/pokedex/Pinsir",
    tags: "pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/127.gif",
  },
  {
    id: "128",
    nome: "Tauros",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Selvagem e indomável, ataca em alta velocidade com chifres afiados.",
    link: "https://www.pokemon.com/br/pokedex/Tauros",
    tags: "touro boi pokemon ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/128.gif",
  },
  {
    id: "129",
    nome: "Magikarp",
    tipos: ["Agua"],
    descricao:
      "Um Pokémon do tipo Água. Fraco e desajeitado, mas com incrível capacidade de sobrevivência.",
    link: "https://www.pokemon.com/br/pokedex/Magikarp",
    tags: "peixe carpa pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif",
  },
  {
    id: "130",
    nome: "Gyarados",
    tipos: ["Agua", "Voador"],
    descricao:
      "A evolução de Magikarp. Extremamente agressivo, capaz de devastar cidades.",
    link: "https://www.pokemon.com/br/pokedex/Gyarados",
    tags: "serpente marinha pokemon lance elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/130.gif",
  },
  {
    id: "131",
    nome: "Lapras",
    tipos: ["Agua", "Gelo"],
    descricao:
      "Um Pokémon do tipo Água/Gelo. Gentil e inteligente, usado para transporte marítimo, comunica-se com cantos melodiosos.",
    link: "https://www.pokemon.com/br/pokedex/Lapras",
    tags: "serpente marinha pokemon ash lorelei elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/131.gif",
  },
  {
    id: "132",
    nome: "Ditto",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Pode se transformar em qualquer coisa, copiando aparência e habilidades.",
    link: "https://www.pokemon.com/br/pokedex/Ditto",
    tags: "gosma imitador pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
  },
  {
    id: "133",
    nome: "Eevee",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Estrutura genética instável permite evoluir para várias formas diferentes.",
    link: "https://www.pokemon.com/br/pokedex/Eevee",
    tags: "raposa pokemon gary",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif",
  },
  {
    id: "134",
    nome: "Vaporeon",
    tipos: ["Agua"],
    descricao:
      "Evolução de Eevee do tipo Água. Desenvolveu barbatanas, podendo se dissolver na água.",
    link: "https://www.pokemon.com/br/pokedex/Vaporeon",
    tags: "raposa pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/134.gif",
  },
  {
    id: "135",
    nome: "Jolteon",
    tipos: ["Eletrico"],
    descricao:
      "Evolução de Eevee do tipo Elétrico. Pelo torna-se agulhas carregadas de eletricidade estática.",
    link: "https://www.pokemon.com/br/pokedex/Jolteon",
    tags: "raposa pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/135.gif",
  },
  {
    id: "136",
    nome: "Flareon",
    tipos: ["Fogo"],
    descricao:
      "Evolução de Eevee do tipo Fogo. Armazena calor no corpo, expelindo chamas intensas.",
    link: "https://www.pokemon.com/br/pokedex/Flareon",
    tags: "raposa pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/136.gif",
  },
  {
    id: "137",
    nome: "Porygon",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Criado artificialmente, pode entrar em sistemas cibernéticos e converter-se em dados.",
    link: "https://www.pokemon.com/br/pokedex/Porygon",
    tags: "computador digital proibido pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif",
  },
  {
    id: "138",
    nome: "Omanyte",
    tipos: ["Pedra", "Agua"],
    descricao:
      "Um Pokémon do tipo Pedra/Água. Revivido de fóssil, usava concha para proteção, flutuando no mar.",
    link: "https://www.pokemon.com/br/pokedex/Omanyte",
    tags: "pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/138.gif",
  },
  {
    id: "139",
    nome: "Omastar",
    tipos: ["Pedra", "Agua"],
    descricao:
      "A evolução de Omanyte. Tentáculos fortes abrem conchas duras; acredita-se que extinguiu-se pelo peso da concha.",
    link: "https://www.pokemon.com/br/pokedex/Omastar",
    tags: "pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/139.gif",
  },
  {
    id: "140",
    nome: "Kabuto",
    tipos: ["Pedra", "Agua"],
    descricao:
      "Um Pokémon do tipo Pedra/Água. Revivido de fóssil, escondia-se no fundo do mar com carapaça dura.",
    link: "https://www.pokemon.com/br/pokedex/Kabuto",
    tags: "pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/140.gif",
  },
  {
    id: "141",
    nome: "Kabutops",
    tipos: ["Pedra", "Agua"],
    descricao:
      "A evolução de Kabuto. Adaptou-se à terra, com lâminas afiadas nos braços para caçar.",
    link: "https://www.pokemon.com/br/pokedex/Kabutops",
    tags: "pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/141.gif",
  },
  {
    id: "142",
    nome: "Aerodactyl",
    tipos: ["Pedra", "Voador"],
    descricao:
      "Um Pokémon do tipo Pedra/Voador. Predador pré-histórico, revivido de âmbar, domina os céus com ferocidade.",
    link: "https://www.pokemon.com/br/pokedex/Aerodactyl",
    tags: "pterodáctilo pokemon gary lance elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/142.gif",
  },
  {
    id: "143",
    nome: "Snorlax",
    tipos: ["Normal"],
    descricao:
      "Um Pokémon do tipo Normal. Passa a maior parte do tempo dormindo e comendo; quando acordado, sua força é imensa.",
    link: "https://www.pokemon.com/br/pokedex/Snorlax",
    tags: "dorminhoco pokemon ash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif",
  },
  {
    id: "144",
    nome: "Articuno",
    tipos: ["Gelo", "Voador"],
    descricao:
      "Um Pokémon Lendário do tipo Gelo/Voador. Controla o gelo, sua aparição é associada a nevascas.",
    link: "https://www.pokemon.com/br/pokedex/Articuno",
    tags: "pássaro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/144.gif",
  },
  {
    id: "145",
    nome: "Zapdos",
    tipos: ["Eletrico", "Voador"],
    descricao:
      "Um Pokémon Lendário do tipo Elétrico/Voador. Controla raios e trovões, habitando nuvens de tempestade.",
    link: "https://www.pokemon.com/br/pokedex/Zapdos",
    tags: "pássaro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/145.gif",
  },
  {
    id: "146",
    nome: "Moltres",
    tipos: ["Fogo", "Voador"],
    descricao:
      "Um Pokémon Lendário do tipo Fogo/Voador. Representa o fogo, suas asas brilham como chamas intensas.",
    link: "https://www.pokemon.com/br/pokedex/Moltres",
    tags: "pássaro pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/146.gif",
  },
  {
    id: "147",
    nome: "Dratini",
    tipos: ["Dragão"],
    descricao:
      "Um Pokémon do tipo Dragão. Vive em águas profundas, dizem que controla o clima ao redor.",
    link: "https://www.pokemon.com/br/pokedex/Dratini",
    tags: "dragão serpente pseudo lendário pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/147.gif",
  },
  {
    id: "148",
    nome: "Dragonair",
    tipos: ["Dragão"],
    descricao:
      "A evolução de Dratini. Corpo alongado emite aura misteriosa, podendo controlar o clima.",
    link: "https://www.pokemon.com/br/pokedex/Dragonair",
    tags: "dragão serpente pseudo lendário pokemon lance elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/148.gif",
  },
  {
    id: "149",
    nome: "Dragonite",
    tipos: ["Dragão"],
    descricao:
      "A evolução final de Dratini. Apesar da aparência robusta, é gentil, ajudando marinheiros em perigo.",
    link: "https://www.pokemon.com/br/pokedex/Dragonite",
    tags: "dragão pseudo lendário pokemon lance elite quatro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif",
  },
  {
    id: "150",
    nome: "Mewtwo",
    tipos: ["Psiquico"],
    descricao:
      "Um Pokémon Lendário do tipo Psíquico. Criado geneticamente do DNA de Mew, é extremamente poderoso e inteligente.",
    link: "https://www.pokemon.com/br/pokedex/Mewtwo",
    tags: "artificialmente artificial pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif",
  },
  {
    id: "151",
    nome: "Mew",
    tipos: ["Psiquico"],
    descricao:
      "Um Pokémon Mítico do tipo Psíquico. Diz-se que contém o DNA de todos os Pokémon, podendo aprender qualquer técnica.",
    link: "https://www.pokemon.com/br/pokedex/Mew",
    tags: "lendário pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/151.gif",
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
