export interface Project {
  id: string;
  title: string;
  category: 'ia' | 'backend' | 'fullstack' | 'logistica' | 'todos';
  categoryLabel: string;
  description: string;
  highlight: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "metodo-ch",
    title: "Método Ágil C.H.",
    category: "ia",
    categoryLabel: "IA & Metodologia",
    description:
      "Engenharia de software humano–IA orientada por decisão, delegação limitada e evidência. Formaliza o Ciclo CHAVE (Contextualizar, Harmonizar, Agir, Verificar, Evoluir), fatias de valor W e níveis de autonomia de CH-0 a CH-3.",
    highlight: "Metodologia autoral para produtividade sustentável com IA",
    technologies: ["Colaboração Híbrida", "Ciclo CHAVE", "Fatias W", "Governança", "Auditoria"],
    repoUrl: "https://github.com/hallanbrito/metodo-ch",
    featured: true
  },
  {
    id: "chdevflow",
    title: "CHDevFlow & CLI ch",
    category: "ia",
    categoryLabel: "IA & Ferramentas",
    description:
      "Framework e CLI oficial para orquestrar esteiras de desenvolvimento híbrido. Mantém o GitHub como fonte da verdade, separa orquestração de execução e gera Relatórios Unificados de Conformidade (RUC).",
    highlight: "CLI operacional e esteiras de governança para times com IA",
    technologies: ["Python", "CLI", "GitHub API", "Automação", "DevOps"],
    repoUrl: "https://github.com/hallanbrito/CHDevFlow",
    featured: true
  },
  {
    id: "maestro-router",
    title: "Maestro Router",
    category: "backend",
    categoryLabel: "Back-end & IA",
    description:
      "API REST em Python e FastAPI que seleciona a rota ideal de modelos de IA com base em regras estritas de elegibilidade, estimativa de custo de tokens e desempate determinístico com adaptadores desacoplados.",
    highlight: "Roteador inteligente de LLMs com controle orçamentário",
    technologies: ["Python", "FastAPI", "OpenAI API", "Pytest", "Arquitetura REST"],
    repoUrl: "https://github.com/hallanbrito/maestro-router",
    featured: true
  },
  {
    id: "drivehub-api",
    title: "DriveHub API",
    category: "backend",
    categoryLabel: "Back-end & Arquitetura",
    description:
      "API REST corporativa para governança comercial, estoque e propostas de vendas de veículos. Construída com Clean Architecture pura, DDD, entidades independentes de frameworks e validações rígidas de domínio.",
    highlight: "Clean Architecture & DDD aplicados em Django 5 / DRF",
    technologies: ["Django 5", "Django REST Framework", "Clean Architecture", "DDD", "PostgreSQL"],
    repoUrl: "https://github.com/hallanbrito/DriveHub-API",
    featured: true
  },
  {
    id: "pulseops",
    title: "PulseOps",
    category: "fullstack",
    categoryLabel: "Full-stack & .NET",
    description:
      "Plataforma completa para monitoramento de disponibilidade HTTP e abertura automatizada de incidentes. Arquitetura moderna com ASP.NET Core no back-end e Angular 22 no front-end.",
    highlight: "Monitoramento e incidentes em C#/.NET 10 LTS e Angular 22",
    technologies: ["C#", ".NET 10 LTS", "Angular 22", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/hallanbrito/PulseOps",
    featured: true
  },
  {
    id: "cotacli",
    title: "CotaCLI",
    category: "ia",
    categoryLabel: "Automação & Desktop",
    description:
      "Utilitário em Python para consultar saldos e renovações de cotas de IA (Codex, Antigravity) diretamente no terminal ou através de um applet na bandeja do KDE Plasma 6.",
    highlight: "Monitoramento centralizado de cotas de IA no Linux",
    technologies: ["Python", "KDE Plasma 6", "CLI", "Linux System", "Automação"],
    repoUrl: "https://github.com/hallanbrito/CotaCLI",
    featured: false
  },
  {
    id: "mindflip",
    title: "MindFlip",
    category: "fullstack",
    categoryLabel: "Front-end & Neurociência",
    description:
      "Laboratório interativo de percepção visual e testes de capacidade cognitiva construído sob o Método C.H., com interface acessível, persistência local e testes de regras estritas.",
    highlight: "Experiência interativa com acessibilidade e testes",
    technologies: ["React", "TypeScript", "Vite", "Acessibilidade", "Testes"],
    repoUrl: "https://github.com/hallanbrito/MindFlip",
    featured: false
  },
  {
    id: "autilife",
    title: "AutiLife",
    category: "fullstack",
    categoryLabel: "Inclusão & Neurodiversidade",
    description:
      "Plataforma voltada para auxiliar indivíduos no espectro autista (TEA) e suas famílias na organização estruturada de rotinas, medicações e agendas terapêuticas.",
    highlight: "Tecnologia acessível com impacto direto na neurodiversidade",
    technologies: ["React", "TypeScript", "UX Acessível", "Inclusão"],
    repoUrl: "https://github.com/hallanbrito/AutiLife",
    featured: false
  },
  {
    id: "automacoes-logisticas",
    title: "Soluções de Automação Logística",
    category: "logistica",
    categoryLabel: "Logística & Negócio",
    description:
      "Conjunto de ferramentas desenvolvidas para otimizar carregamentos e roteirização: importadores de dados do SAP, simuladores dinâmicos de frete e dashboards consolidados em tempo real.",
    highlight: "Otimização de rotas e mitigação de erros operacionais manuais",
    technologies: ["C# .NET", "Python", "Power BI", "SAP", "Excel Avançado"],
    featured: false
  }
];
