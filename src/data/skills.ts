export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: Array<{
    name: string;
    level: string;
    description: string;
  }>;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Back-end & Arquitetura",
    iconName: "Server",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python / FastAPI / Django", level: "Avançado", description: "APIs assíncronas, Clean Arch, DDD e orquestração de microsserviços" },
      { name: "C# / .NET 10 LTS", level: "Sólido", description: "ASP.NET Core, APIs REST, LINQ, testes e sistemas corporativos" },
      { name: "PostgreSQL / SQL Server", level: "Avançado", description: "Modelagem relacional, consultas complexas, integridade e performance" },
      { name: "Arquitetura Hexagonal & DDD", level: "Sólido", description: "Desacoplamento de domínio, inversão de controle e regras de negócio puras" }
    ]
  },
  {
    title: "IA Aplicada & Governança",
    iconName: "Cpu",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Método Ágil C.H.", level: "Autor / Criador", description: "Framework de governança humano-IA, ciclo CHAVE e fatias de valor W" },
      { name: "CHDevFlow & Ferramentas CLI", level: "Criador", description: "Esteiras de desenvolvimento híbrido com evidências auditáveis (RUC)" },
      { name: "Integração LLMs / Roteamento", level: "Avançado", description: "Seleção determinística de rotas, controle de custo de tokens e LangChain" },
      { name: "Engenharia de Prompt & Automação", level: "Avançado", description: "Workflows multiagente, delegação estrita e restrição de escopo" }
    ]
  },
  {
    title: "Front-end & Aplicações Modernas",
    iconName: "Layout",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Next.js 15 & React 19", level: "Avançado", description: "App Router, Server Components, SSR e arquiteturas reativas" },
      { name: "TypeScript", level: "Avançado", description: "Tipagem estrita, contratos de dados seguros e refatoração confiável" },
      { name: "Tailwind CSS", level: "Avançado", description: "Design systems modernos, interfaces dark mode e animações fluidas" },
      { name: "Acessibilidade & Neurodesign", level: "Especialista", description: "Atenção a padrões WCAG, interfaces cognitivas e neurodiversidade" }
    ]
  },
  {
    title: "Dados, Processos & Logística",
    iconName: "Database",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Power BI & Análise de Dados", level: "Avançado", description: "Modelagem dimensional, DAX e painéis analíticos para decisões táticas" },
      { name: "SAP & Gestão de Inventário", level: "14+ anos", description: "Acompanhamento de estoque, faturamento, suprimentos e expedição" },
      { name: "Otimização de Rotas e Fretes", level: "Especialista", description: "Simulação de itinerários, carregamento de veículos e redução de custos" },
      { name: "Melhoria Contínua de Processos", level: "Avançado", description: "Identificação de ineficiências e substituição de tarefas manuais" }
    ]
  }
];
