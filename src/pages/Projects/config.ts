import ComunicaProfessor from '../../assets/comunica-professor.png';
import Toraline from '../../assets/toraline.png';
import Horror from '../../assets/horror.jpg';
import EntreApps from '../../assets/entre-apps.png';
import Apostila from '../../assets/apostila.png';

type Project = {
  link?: string;
  image?: string;
  title: string;
  description: string;
  download?: boolean;
};

const config: Array<Project> = [
  {
    link: 'https://www.figma.com/file/bV3fEoNyh1f7g1SStJE6Gk/Comunica-Professor-LowScreens-v2',
    image: ComunicaProfessor,
    title: 'Comunica Professor',
    description: 'Aplicativo de celular para conversação entre o corpo docente da escola.',
  },
  {
    link: 'https://www.figma.com/file/5EQVoO35bIAIXL9pgDM3lm/Toraline',
    image: Toraline,
    title: 'Toraline',
    description: 'Dashboard para plataforma de repositório de links',
  },
  {
    link: '../../assets/entre-apps.pdf',
    download: true,
    image: EntreApps,
    title: 'Entre Apps',
    description: 'Dashboard para plataforma de repositório de links',
  },
  {
    link: '../../assets/apostila.pdf',
    download: true,
    image: Apostila,
    title: 'Apostila de Curso de Micropigmentação de Sobrancelhas',
    description: 'Diagramação de apostila de micropigmentação de sobrancelhas',
  },
  {
    link: 'https://www.behance.net/gallery/62333181/Projeto-Academico-Propaganda-de-livros-de-terror',
    image: Horror,
    title: 'Propaganda de livros de terror',
    description: 'Projeto Acadêmico com propagandas de livros de terror da Darkside',
  },
];

export default config;
