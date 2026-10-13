export interface ProjectImage {
  src?: string;
  alt?: string;
  colorA?: string;
  colorB?: string;
}

export interface ProjectSlide {
  id: string;
  colorA: string;
  colorB: string;
  src?: string;
  alt?: string;
}

export type ProjectLocale = 'pt' | 'en';

export interface ProjectCopy {
  title: string;
  description: string;
  longDescription: string;
  details: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  details: string[];
  tech?: string[];
  slides?: ProjectSlide[];
  image?: ProjectImage;
  copy?: Partial<Record<ProjectLocale, ProjectCopy>>;
}

export function getProjectCopy(project: Project, lang: ProjectLocale = 'pt'): ProjectCopy {
  return (
    project.copy?.[lang] ??
    project.copy?.pt ??
    {
      title: project.title,
      description: project.description,
      longDescription: project.longDescription,
      details: project.details,
    }
  );
}

const withBase = (path: string) => {
  const normalizedPath = path.replace(/^\//, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${normalizedPath}`;
};

export const featuredProjects: Project[] = [
  {
    slug: 'signal-archive',
    number: '01',
    title: 'signal::archive',
    description: 'Arquitetura editorial minimalista para apresentar ideias, sistemas e rascunhos com clareza.',
    longDescription:
      'Sistema editorial pensado para tornar conteúdos complexos mais legíveis, rápidos de navegar e fáceis de manter.',
    details: [
      'Organizei a informação em blocos orientados por hierarquia visual, com leitura confortável em qualquer dispositivo.',
      'A estrutura foi pensada para suportar artigos, textos longos, notas e materiais de referência sem perder consistência.',
      'O resultado é uma base que funciona como portfólio, diário técnico e arquivo vivo de ideias e decisões.'
    ],
    tech: ['Astro', 'TypeScript', 'CSS'],
    slides: [
      { id: 'slide-1', colorA: '#111111', colorB: '#666666' },
      { id: 'slide-2', colorA: '#f5f5f0', colorB: '#bdbdbd' },
      { id: 'slide-3', colorA: '#2d2d2d', colorB: '#d9d9d9' },
    ],
    copy: {
      pt: {
        title: 'signal::archive',
        description: 'Arquitetura editorial minimalista para apresentar ideias, sistemas e rascunhos com clareza.',
        longDescription: 'Sistema editorial pensado para tornar conteúdos complexos mais legíveis, rápidos de navegar e fáceis de manter.',
        details: [
          'Organizei a informação em blocos orientados por hierarquia visual, com leitura confortável em qualquer dispositivo.',
          'A estrutura foi pensada para suportar artigos, textos longos, notas e materiais de referência sem perder consistência.',
          'O resultado é uma base que funciona como portfólio, diário técnico e arquivo vivo de ideias e decisões.'
        ],
      },
      en: {
        title: 'signal::archive',
        description: 'Minimal editorial architecture to present ideas, systems, and drafts with clarity.',
        longDescription: 'Editorial system designed to make complex content more legible, easier to navigate, and simpler to maintain.',
        details: [
          'I organized information into blocks driven by visual hierarchy, keeping reading comfortable on any device.',
          'The structure was designed to support articles, long-form text, notes, and reference material without losing consistency.',
          'The result is a foundation that works as a portfolio, technical journal, and living archive of ideas and decisions.'
        ],
      },
    },
  },
  {
    slug: 'interface-audit',
    number: '02',
    title: 'Interface Audit',
    description: 'Diagnóstico visual e estrutural de fluxos, hierarquias e decisões de usabilidade em produtos.',
    longDescription:
      'Conduzi uma leitura crítica de interfaces para mapear tensão visual, navegação e inconsistências de linguagem.',
    details: [
      'A análise foca em clareza de intenção, consistência de padrões e pontos de fricção no uso cotidiano.',
      'O processo combina revisão visual, racionalização de arquitetura e mapeamento de comportamento em fluxo.',
      'A entrega ajuda equipes a decidir onde reforçar consistência e onde simplificar a experiência.'
    ],
    tech: ['Figma', 'UX', 'Research'],
    slides: [
      { id: 'slide-4', colorA: '#141414', colorB: '#8a8a8a' },
      { id: 'slide-5', colorA: '#efefef', colorB: '#6a6a6a' },
      { id: 'slide-6', colorA: '#303030', colorB: '#f0f0f0' },
    ],
    copy: {
      pt: {
        title: 'Interface Audit',
        description: 'Diagnóstico visual e estrutural de fluxos, hierarquias e decisões de usabilidade em produtos.',
        longDescription: 'Conduzi uma leitura crítica de interfaces para mapear tensão visual, navegação e inconsistências de linguagem.',
        details: [
          'A análise foca em clareza de intenção, consistência de padrões e pontos de fricção no uso cotidiano.',
          'O processo combina revisão visual, racionalização de arquitetura e mapeamento de comportamento em fluxo.',
          'A entrega ajuda equipes a decidir onde reforçar consistência e onde simplificar a experiência.'
        ],
      },
      en: {
        title: 'Interface Audit',
        description: 'Visual and structural diagnosis of product flows, hierarchy, and usability decisions.',
        longDescription: 'I carried out a critical review of interfaces to map visual tension, navigation issues, and inconsistencies in product language.',
        details: [
          'The analysis focuses on clarity of intent, consistency of patterns, and friction points in day-to-day use.',
          'The process combines visual review, architectural rationalization, and behavioral mapping across the flow.',
          'The outcome helps teams decide where to reinforce consistency and where to simplify the experience.'
        ],
      },
    },
  },
  {
    slug: 'github-gif-profile-generator',
    number: '07',
    title: 'Gerador Dinâmico de GIFs para Perfil GitHub',
    description: 'Este projeto coleta métricas públicas do GitHub e transforma em GIFs animados para enriquecer e automatizar a apresentação de um perfil público no GitHub.',
    longDescription:
      'Solução em Python para extrair dados públicos do GitHub, processá-los e gerar animações visuais que funcionam como dashboard dinâmico para perfis de README.',
    details: [
      'A automação coleta métricas públicas via GitHub API e organiza a informação em estruturas analíticas para processamento e visualização.',
      'O fluxo transforma os dados em gráficos e sequências de imagens, exportando GIFs prontos para publicação em perfis e portfolios.',
      'A solução foi pensada para atualização recorrente e integração contínua com GitHub Actions, deixando o conteúdo sempre atualizado.',
    ],
    tech: ['Python', 'Requests', 'Pandas', 'NumPy', 'Pillow', 'BeautifulSoup', 'GitHub API', 'GitHub Actions'],
    slides: [{
      colorA: '#0f172a', colorB: '#34d399', alt: 'Prévia do README de GIFs para Perfil GitHub', src: withBase('images/project3.0.png'),
      id: "slide-7"
    },
    {
      colorA: '#0f172a', colorB: '#34d399', alt: 'Prévia do GithubActions associados a atualização', src: withBase('images/project3.1.png'),
      id: "slide-8"
    }
  
  ],
  image: {
      colorA: '#111111',
      colorB: '#7a7a7a',
      alt: 'Prévia do README de GIFs para Perfil GitHub',
      src: withBase('images/project3.0.png'),
    },
    copy: {
      pt: {
        title: 'Gerador Dinâmico de GIFs para Perfil GitHub',
        description: 'Este projeto coleta métricas públicas do GitHub e transforma em GIFs animados para enriquecer e automatizar a apresentação de um perfil público no GitHub.',
        longDescription: 'Solução em Python para extrair dados públicos do GitHub, processá-los e gerar animações visuais que funcionam como dashboard dinâmico para perfis de README.',
        details: [
          'A automação coleta métricas públicas via GitHub API e organiza a informação em estruturas analíticas para processamento e visualização.',
          'O fluxo transforma os dados em gráficos e sequências de imagens, exportando GIFs prontos para publicação em perfis e portfolios.',
          'A solução foi pensada para atualização recorrente e integração contínua com GitHub Actions, deixando o conteúdo sempre atualizado.',
        ],
      },
      en: {
        title: 'Dynamic GIF Generator for GitHub Profile',
        description: 'This project collects public GitHub metrics and turns them into animated GIFs to enrich and automate the presentation of a public profile on GitHub.',
        longDescription: 'Python solution to extract public GitHub data, process it, and generate animated visuals that act as a dynamic dashboard for README profiles.',
        details: [
          'The automation collects public metrics through the GitHub API and organizes the data into analytical structures for processing and visualization.',
          'The workflow turns raw data into charts and image sequences, exporting GIFs ready for publishing in profiles and portfolios.',
          'The solution was designed for recurring updates and continuous integration with GitHub Actions, keeping the content fresh and current.',
        ],
      },
    },
  },
];

export const secondaryProjects: Project[] = [
  {
    slug: 'build-control',
    number: '04',
    title: 'Build Control',
    description: 'Monitoramento de releases e decisões de entrega em ambientes de produto.',
    longDescription:
      'Painel conceitual para acompanhar mudanças, releases e riscos de entrega com clareza e pouco ruído.',
    details: [
      'O objetivo era reduzir esforço de acompanhamento e deixar decisões de entrega mais visíveis para a equipe.',
      'A solução enfatiza status, contexto e disparadores em uma leitura mais direta e menos fragmentada.',
      'O resultado é um modelo simples que facilita revisão e resposta mais rápida em ciclos de produto.'
    ],
    image: {
      colorA: '#111111',
      colorB: '#7a7a7a',
      alt: 'Prévia do Build Control',
      src: 'https://i.pinimg.com/736x/13/dc/7e/13dc7e493f65443d28e2eaa5284fc792.jpg',
    },
    copy: {
      pt: {
        title: 'Build Control',
        description: 'Monitoramento de releases e decisões de entrega em ambientes de produto.',
        longDescription: 'Painel conceitual para acompanhar mudanças, releases e riscos de entrega com clareza e pouco ruído.',
        details: [
          'O objetivo era reduzir esforço de acompanhamento e deixar decisões de entrega mais visíveis para a equipe.',
          'A solução enfatiza status, contexto e disparadores em uma leitura mais direta e menos fragmentada.',
          'O resultado é um modelo simples que facilita revisão e resposta mais rápida em ciclos de produto.'
        ],
      },
      en: {
        title: 'Build Control',
        description: 'Release monitoring and delivery decisions across product environments.',
        longDescription: 'Conceptual dashboard to track changes, releases, and delivery risks with clarity and minimal noise.',
        details: [
          'The goal was to reduce monitoring effort and make delivery decisions more visible to the team.',
          'The solution emphasizes status, context, and triggers in a simpler and less fragmented reading.',
          'The result is a streamlined model that supports faster review and response in product cycles.'
        ],
      },
    },
  },
  {
    slug: 'signal-log',
    number: '05',
    title: 'Signal Log',
    description: 'Registro visual de eventos, métricas e processos para análise contínua.',
    longDescription:
      'Estrutura de observação para registrar eventos e métricas relevantes sem perder contexto operacional.',
    details: [
      'A interface prioriza legibilidade do fluxo e destaca sinais que merecem atenção no processo de tomada de decisão.',
      'A estrutura favorece acompanhamento contínuo e reduz a carga cognitiva de revisões manuais.',
      'Esse tipo de registro torna padrões recorrentes visíveis e mais fáceis de melhorar.'
    ],
    image: { colorA: '#f5f5f0', colorB: '#7f7f7f', alt: 'Prévia do Signal Log', src: withBase('images/image.png') },
    copy: {
      pt: {
        title: 'Signal Log',
        description: 'Registro visual de eventos, métricas e processos para análise contínua.',
        longDescription: 'Estrutura de observação para registrar eventos e métricas relevantes sem perder contexto operacional.',
        details: [
          'A interface prioriza legibilidade do fluxo e destaca sinais que merecem atenção no processo de tomada de decisão.',
          'A estrutura favorece acompanhamento contínuo e reduz a carga cognitiva de revisões manuais.',
          'Esse tipo de registro torna padrões recorrentes visíveis e mais fáceis de melhorar.'
        ],
      },
      en: {
        title: 'Signal Log',
        description: 'Visual record of events, metrics, and processes for continuous analysis.',
        longDescription: 'Observation structure to log relevant events and metrics without losing operational context.',
        details: [
          'The interface prioritizes flow readability and highlights signals that deserve attention in the decision-making process.',
          'The structure supports continuous tracking and reduces cognitive load during manual reviews.',
          'This kind of record makes recurring patterns visible and easier to improve over time.'
        ],
      },
    },
  },
  {
    slug: 'ux-library',
    number: '06',
    title: 'UX Library',
    description: 'Coleção de componentes reutilizáveis para manter consistência de produto.',
    longDescription:
      'Biblioteca de padrões para garantir coerência visual, funcional e de linguagem em experiências digitais.',
    details: [
      'A biblioteca facilita reutilização de blocos e reduz a chance de variação indevida de comportamento e estilo.',
      'Ela funciona como referência para criação, revisão e implementação consistente em diferentes frentes do produto.',
      'O valor principal está em estabilizar a base do produto sem travar a criatividade em cada nova iteração.'
    ],
    image: { colorA: '#2d2d2d', colorB: '#bdbdbd', alt: 'Prévia da UX Library' },
    copy: {
      pt: {
        title: 'UX Library',
        description: 'Coleção de componentes reutilizáveis para manter consistência de produto.',
        longDescription: 'Biblioteca de padrões para garantir coerência visual, funcional e de linguagem em experiências digitais.',
        details: [
          'A biblioteca facilita reutilização de blocos e reduz a chance de variação indevida de comportamento e estilo.',
          'Ela funciona como referência para criação, revisão e implementação consistente em diferentes frentes do produto.',
          'O valor principal está em estabilizar a base do produto sem travar a criatividade em cada nova iteração.'
        ],
      },
      en: {
        title: 'UX Library',
        description: 'Collection of reusable components to maintain product consistency.',
        longDescription: 'Pattern library to ensure visual, functional, and language consistency across digital experiences.',
        details: [
          'The library makes block reuse easier and reduces the risk of inconsistent behavior and styling.',
          'It serves as a reference for creation, review, and consistent implementation across different product tracks.',
          'Its main value is stabilizing the product foundation without limiting creativity in each iteration.'
        ],
      },
    },
  },
  {
    slug: 'ux-library',
    number: '06',
    title: 'UX Library',
    description: 'Coleção de componentes reutilizáveis para manter consistência de produto.',
    longDescription:
      'Biblioteca de padrões para garantir coerência visual, funcional e de linguagem em experiências digitais.',
    details: [
      'A biblioteca facilita reutilização de blocos e reduz a chance de variação indevida de comportamento e estilo.',
      'Ela funciona como referência para criação, revisão e implementação consistente em diferentes frentes do produto.',
      'O valor principal está em estabilizar a base do produto sem travar a criatividade em cada nova iteração.'
    ],
    image: { colorA: '#2d2d2d', colorB: '#bdbdbd', alt: 'Prévia da UX Library' },
    copy: {
      pt: {
        title: 'UX Library',
        description: 'Coleção de componentes reutilizáveis para manter consistência de produto.',
        longDescription: 'Biblioteca de padrões para garantir coerência visual, funcional e de linguagem em experiências digitais.',
        details: [
          'A biblioteca facilita reutilização de blocos e reduz a chance de variação indevida de comportamento e estilo.',
          'Ela funciona como referência para criação, revisão e implementação consistente em diferentes frentes do produto.',
          'O valor principal está em estabilizar a base do produto sem travar a criatividade em cada nova iteração.'
        ],
      },
      en: {
        title: 'UX Library',
        description: 'Collection of reusable components to maintain product consistency.',
        longDescription: 'Pattern library to ensure visual, functional, and language consistency across digital experiences.',
        details: [
          'The library makes block reuse easier and reduces the risk of inconsistent behavior and styling.',
          'It serves as a reference for creation, review, and consistent implementation across different product tracks.',
          'Its main value is stabilizing the product foundation without limiting creativity in each iteration.'
        ],
      },
    },
  },
];

export const allProjects = [...featuredProjects, ...secondaryProjects];

export const projectTranslations = Object.fromEntries(
  allProjects.map((project) => [
    project.slug,
    {
      pt: getProjectCopy(project, 'pt'),
      en: getProjectCopy(project, 'en'),
    },
  ])
) as Record<string, Record<ProjectLocale, ProjectCopy>>;

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
