export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  badgeRole: string;
  pcdBadge: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  whatsappLink: string;
  githubUrl: string;
  linkedinUrl: string;
  avatarUrl: string;
  status: string;
  education: Array<{
    course: string;
    institution: string;
    period: string;
    status: string;
  }>;
  certifications: string[];
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
}

export const profileData: ProfileData = {
  name: "Hallan Brito",
  fullName: "Hallan de Sousa Brito",
  role: "Engenheiro de Software Full-stack",
  badgeRole: "Full-stack: C#/.NET + Angular · Python · IA Aplicada",
  pcdBadge: "PCD · TEA (Neurodivergente)",
  shortBio:
    "Engenheiro de software Full-stack com foco em C#/.NET e Angular, além de Python, Next.js e IA aplicada. Criador do Método Ágil C.H., uno mais de 14 anos de vivência em dados e processos à construção de sistemas ponta a ponta, desde APIs corporativas resilientes até interfaces modernas e responsivas.",
  fullBio: [
    "Engenheiro de Software Full-stack atuando no ciclo completo do desenvolvimento: desde a arquitetura de back-end em C#/.NET (ASP.NET Core, .NET 10 LTS) e Python (FastAPI, Django) até interfaces ricas e reativas com Angular (versão 22) e Next.js/React.",
    "Com mais de 14 anos de vivência corporativa em processos, controle analítico de estoque e distribuição (Logística Anhanguera e bacharelado em Engenharia de Software na UniFacid Wyden), trago uma visão prática e estratégica para cada linha de código.",
    "Como pessoa autista (PCD TEA), converto o hiperfoco e o reconhecimento agudo de padrões na entrega de sistemas consistentes, Clean Architecture, tipagem estrita e rigor contratual.",
    "Criador do Método Ágil C.H. (Colaboração Híbrida / ChatGPT-Hallan) e do framework CHDevFlow com CLI 'ch', estabelecendo um paradigma pioneiro para engenharia assistida por IA governada por evidências auditáveis."
  ],
  location: "Teresina, PI — Brasil",
  email: "hallanbrito@gmail.com",
  phone: "(86) 99472-8426",
  whatsappLink:
    "https://wa.me/5586994728426?text=Ol%C3%A1%20Hallan,%20vi%20seu%20portf%C3%B3lio%20Full-stack%20e%20gostaria%20de%20conversar!",
  githubUrl: "https://github.com/hallanbrito",
  linkedinUrl: "https://www.linkedin.com/in/hallanbrito/",
  avatarUrl: "https://avatars.githubusercontent.com/u/113695320?v=4",
  status: "Disponível para oportunidades Full-stack (C#/.NET + Angular | Python)",
  education: [
    {
      course: "Bacharelado em Engenharia de Software",
      institution: "UniFacid Wyden",
      period: "2023 — 2026",
      status: "Em formação (Previsão: Dez/2026)"
    },
    {
      course: "Tecnologia em Logística",
      institution: "Anhanguera Educacional",
      period: "2013 — 2014",
      status: "Concluído"
    }
  ],
  certifications: [
    "Foundational C# with Microsoft",
    "Desenvolvimento Full-stack com Angular & .NET",
    "LangChain Academy / LLMs",
    "Clean Architecture & DDD na Prática",
    "Análise Avançada de Dados com SQL e Power BI"
  ],
  stats: [
    {
      value: "Full-stack",
      label: "C#/.NET + Angular",
      sublabel: "Domínio ponta a ponta: APIs de alta performance a SPAs modernas"
    },
    {
      value: "14+",
      label: "Anos de Vivência Operacional",
      sublabel: "Logística, análise de dados e tomada de decisão estratégica"
    },
    {
      value: "19+",
      label: "Repositórios no GitHub",
      sublabel: "APIs, arquitetura limpa, ferramentas CLI e IA"
    },
    {
      value: "C.H.",
      label: "Autor do Método C.H.",
      sublabel: "Governança pioneira em colaboração humano-IA"
    }
  ]
};
