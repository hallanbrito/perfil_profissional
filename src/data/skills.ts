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
    title: "Full-stack: C# / .NET + Angular",
    iconName: "Layers",
    color: "from-blue-600 to-indigo-600",
    skills: [
      {
        name: "C# / ASP.NET Core (.NET 10 LTS)",
        level: "Especialidade",
        description: "Desenvolvimento de APIs RESTful de alta performance, injeção de dependência, Entity Framework Core e LINQ"
      },
      {
        name: "Angular 22 & TypeScript",
        level: "Especialidade",
        description: "Arquitetura com Standalone Components, Signals, RxJS, formulários reativos, roteamento e consumo de APIs back-end"
      },
      {
        name: "Clean Architecture & DDD",
        level: "Sólido",
        description: "Separação de domínio e infraestrutura, Domain-Driven Design, testes unitários e boas práticas SOLID"
      },
      {
        name: "PostgreSQL / SQL Server",
        level: "Avançado",
        description: "Modelagem relacional, migrations com EF Core, queries otimizadas e integridade referencial"
      }
    ]
  },
  {
    title: "Back-end, Python & IA Aplicada",
    iconName: "Cpu",
    color: "from-purple-500 to-pink-500",
    skills: [
      {
        name: "Python (FastAPI & Django 5)",
        level: "Avançado",
        description: "APIs assíncronas, arquitetura limpa (Clean Arch), microsserviços e integração com bases relacionais"
      },
      {
        name: "Método Ágil C.H. & CHDevFlow",
        level: "Autor / Criador",
        description: "Pioneirismo em esteiras de desenvolvimento humano-IA com governança do ciclo CHAVE e CLI 'ch'"
      },
      {
        name: "Integração com LLMs & Roteamento",
        level: "Avançado",
        description: "Engenharia de prompts estruturada, LangChain, cálculo de tokens e roteamento inteligente (Maestro Router)"
      },
      {
        name: "Testes Automatizados & CI/CD",
        level: "Sólido",
        description: "Cobertura com xUnit, Pytest, automação de checks e esteiras de auditoria com GitHub Actions"
      }
    ]
  },
  {
    title: "Front-end Moderno & Ecossistema Web",
    iconName: "Layout",
    color: "from-emerald-500 to-teal-500",
    skills: [
      {
        name: "Next.js 15 & React 19",
        level: "Avançado",
        description: "App Router, Server Components, SSR, hooks customizados e otimização para Web Vitals"
      },
      {
        name: "Tailwind CSS & Design Systems",
        level: "Avançado",
        description: "Construção de layouts modernos 'Dark Tech', componentes responsivos, glassmorphism e animações"
      },
      {
        name: "Acessibilidade & Neurodesign",
        level: "Especialista",
        description: "Foco em padrões de acessibilidade (a11y), interfaces com baixa carga cognitiva e neurodiversidade"
      },
      {
        name: "Linux, Git & Ferramentas CLI",
        level: "Avançado",
        description: "Ambiente Linux diário, controle de versão estrito no GitHub, scripts bash e automações de desktop"
      }
    ]
  },
  {
    title: "Dados, Processos & Inteligência Logística",
    iconName: "Database",
    color: "from-amber-500 to-orange-500",
    skills: [
      {
        name: "Power BI & Análise de Indicadores",
        level: "Avançado",
        description: "Modelagem dimensional, DAX avançado e painéis interativos para tomada de decisão gerencial"
      },
      {
        name: "SAP & Gestão de Inventário",
        level: "14+ anos",
        description: "Ampla vivência em gestão de materiais, faturamento, conferência e distribuição estratégica"
      },
      {
        name: "Otimização de Roteirização e Fretes",
        level: "Especialista",
        description: "Algoritmos e simuladores de carregamento de veículos para redução de custos de frete"
      },
      {
        name: "Resolução Analítica de Problemas",
        level: "PCD TEA",
        description: "Capacidade analítica natural de identificar gargalos sistêmicos e propor soluções ponta a ponta"
      }
    ]
  }
];
