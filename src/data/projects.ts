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
}

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
  },
  {
    slug: 'system-notes',
    number: '03',
    title: 'System Notes',
    description: 'Registro de padrões, documentação e decisões de produto em um sistema de referência simples.',
    longDescription:
      'Estrutura de documentação para registrar decisões de produto, padrões e fluxos recorrentes em um ambiente de trabalho colaborativo.',
    details: [
      'A documentação centraliza padrões e critérios de decisão para reduzir repetição e ambiguidade na execução.',
      'As notas funcionam como base para avaliação, comunicação e manutenção de consistência ao longo do tempo.',
      'O sistema ajuda a transformar conhecimento implícito em referência útil para o time e para o projeto.'
    ],
    tech: ['MDX', 'Docs', 'Design Ops'],
    slides: [
      { id: 'slide-7', colorA: '#111111', colorB: '#9a9a9a' },
      { id: 'slide-8', colorA: '#f5f5f0', colorB: '#7a7a7a' },
      { id: 'slide-9', colorA: '#302f2f', colorB: '#d0d0d0' },
    ],
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
    image: { colorA: '#f5f5f0', colorB: '#7f7f7f', alt: 'Prévia do Signal Log', src: '/images/image.png' },
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
  },
];

export const allProjects = [...featuredProjects, ...secondaryProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
