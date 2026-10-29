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
  role: "Engenheiro de Software & Especialista em Automação e IA",
  badgeRole: "Back-end · IA Aplicada · Arquitetura Limpa",
  pcdBadge: "PCD · TEA (Neurodivergente)",
  shortBio:
    "Engenheiro de software e criador do Método Ágil C.H. Uno sólida vivência em operações, dados e logística a arquiteturas modernas de back-end em Python e C#/.NET, desenvolvendo soluções de automação, APIs robustas e esteiras humano-IA orientadas por evidência.",
  fullBio: [
    "Profissional com mais de 14 anos de vivência em processos, controle analítico de estoque e distribuição, graduado em Logística e em fase de conclusão do bacharelado em Engenharia de Software (UniFacid Wyden).",
    "Como pessoa autista (PCD TEA), converto pensamento analítico apurado, reconhecimento de padrões complexos e hiperfoco na construção de sistemas confiáveis, com alta aderência a contratos de verdade, tipagem estrita e documentação clara.",
    "Criador do Método Ágil C.H. (Colaboração Híbrida / ChatGPT-Hallan) e do framework CHDevFlow com CLI 'ch', estabelecendo um paradigma pioneiro para engenharia de software assistida por agentes inteligentes, onde o avanço é governado por fatias incrementais e evidências auditáveis."
  ],
  location: "Teresina, PI — Brasil",
  email: "hallanbrito@gmail.com",
  phone: "(86) 99472-8426",
  whatsappLink:
    "https://wa.me/5586994728426?text=Ol%C3%A1%20Hallan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!",
  githubUrl: "https://github.com/hallanbrito",
  linkedinUrl: "https://www.linkedin.com/in/hallanbrito/",
  avatarUrl: "https://avatars.githubusercontent.com/u/113695320?v=4",
  status: "Disponível para oportunidades em Engenharia de Software & IA",
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
    "LangChain Academy / LLMs",
    "Clean Architecture & DDD na Prática",
    "Análise Avançada de Dados com SQL e Power BI"
  ],
  stats: [
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
    },
    {
      value: "100%",
      label: "Foco em Qualidade e Resiliência",
      sublabel: "PCD TEA com hiperfoco em engenharia e conformidade"
    }
  ]
};
