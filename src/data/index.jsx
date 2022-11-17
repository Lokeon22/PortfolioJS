import pombal from "../assets/projectsPreview/pombalProject.png";
import poke from "../assets/projectsPreview/pokemonProject.png";
import witcher from "../assets/projectsPreview/witcherProject.png";
import topfilmes from "../assets/projectsPreview/topfilmesProject.png";
import github from "../assets/icons/github.svg";
import live from "../assets/icons/live.svg";

const projetos = [
  {
    id: 0,
    imgURL: pombal,
    title: "Pombal Movies",
    description:
      "Aplicativo full stack criado para o usuário postar reviews e notas sobre qualquer tipo de filme. No back-end, foi utilizado o Axios para consumir uma API própria. ",
    stack: ["#React", "#Styled-Components", "#Node"],
    github: github,
    live: live,
    link: "https://github.com/Lokeon22/Pombal-Movies",
    linkrepo: "https://pombalmovies.netlify.app/",
  },
  {
    id: 1,
    imgURL: poke,
    title: "P.O.K-API",
    description:
      "Desenvolvido para consumir dados da API do Pokemon, onde o usuário efetua buscas por um pokemon específico e verificar os detalhes.",
    stack: ["#React", "#Tailwind", "#PokeAPI"],
    github: github,
    live: live,
    link: "https://github.com/Lokeon22/P.O.K-API",
    linkrepo: "https://github.com/Lokeon22/P.O.K-API",
  },
  {
    id: 2,
    imgURL: topfilmes,
    title: "Top Filmes",
    description:
      "Projeto para consumir uma API do TMDB. O usuário consegue verificar os detalhes de cada filme e também foi implementado um filtro de buscas.",
    stack: ["#React", "#Tailwind", "#TMDB_API"],
    github: github,
    live: live,
    link: "https://github.com/Lokeon22/Project-Films",
    linkrepo: "https://projectfilms.netlify.app/",
  },
  {
    id: 3,
    imgURL: witcher,
    title: "The Witcher",
    description:
      "Projeto realizado para aplicar os conceitos do DOM. Contém o uso de duas libs, SwiperJS e Vanila-tilt.js",
    stack: ["#HTML", "#CSS", "#JS"],
    github: github,
    live: live,
    link: "https://github.com/Lokeon22/Witcher-project",
    linkrepo: "https://lokeon22.github.io/Witcher-project/",
  },
  {
    id: 4,
    imgURL: pombal,
    title: "P.O.K-API",
    description:
      "Desenvolvido para consumir dados da API do Pokemon, onde o usuário efetua buscas por um pokemon específico e verificar os detalhes",
    stack: ["#React", "#Tailwind", "#PokeAPI"],
    github: github,
    live: live,
    link: "https://github.com/Lokeon22/P.O.K-API",
    linkrepo: "https://pombalmovies.netlify.app/",
  },
  {
    id: 5,
    imgURL: poke,
    title: "P.O.K-API",
    description:
      "Desenvolvido para consumir dados da API do Pokemon, onde o usuário efetua buscas por um pokemon específico e verificar os detalhes",
    stack: ["#React", "#Tailwind", "#PokeAPI"],
    github: github,
    live: live,
    link: "https://github.com/Lokeon22/P.O.K-API",
    linkrepo: "https://pombalmovies.netlify.app/",
  },
];

export default projetos;
