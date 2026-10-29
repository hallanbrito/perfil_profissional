export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "votorantim",
    role: "Operador de Logística Jr → Pleno",
    company: "Votorantim Cimentos",
    period: "mai/2024 — out/2026",
    location: "Teresina, PI",
    badge: "Evolução Profissional",
    description:
      "Planejamento estratégico de operações logísticas, controle de carregamentos e roteirização otimizada para os estados do Piauí e Maranhão, assegurando equilíbrio de inventário e pontualidade.",
    achievements: [
      "Análise aprofundada de indicadores e relatórios operacionais integrando dados do SAP e planilhas avançadas.",
      "Identificação ativa de gargalos operacionais e desenvolvimento de melhorias com foco na automação de rotinas manuais.",
      "Apoio técnico à tomada de decisão para redução de custos com frete e tempo de ciclo de atendimento."
    ],
    skills: ["Logística Estratégica", "SAP", "Excel Avançado", "Análise de Indicadores", "Roteirização", "Melhoria Contínua"]
  },
  {
    id: "brasil-card",
    role: "Analista de Crédito",
    company: "Brasil Card",
    period: "nov/2022 — abr/2024",
    location: "Teresina, PI",
    description:
      "Análise criteriosa de concessão de crédito, avaliação probabilística de risco e verificação de conformidade financeira de pessoas físicas e jurídicas.",
    achievements: [
      "Operação com consultas analíticas a birôs de crédito (SCPC/SPC) e validação de capacidade de pagamento.",
      "Mitigação consistente de taxas de inadimplência e apoio em auditorias internas de conformidade cadastral."
    ],
    skills: ["Análise de Risco", "Modelagem de Crédito", "Auditoria de Dados", "Tomada de Decisão"]
  },
  {
    id: "ehrich",
    role: "Analista de Suporte Técnico",
    company: "Ehrich Comércio",
    period: "jul/2021 — fev/2023",
    location: "Teresina, PI",
    description:
      "Diagnóstico e resolução de incidentes em infraestrutura de TI, estações de trabalho, redes e sistemas corporativos.",
    achievements: [
      "Gestão de chamados críticos mantendo SLA de atendimento em níveis elevados.",
      "Instalação, homologação e manutenção preventiva de sistemas operacionais, banco de dados e aplicações empresariais."
    ],
    skills: ["Suporte N2/N3", "Redes & Hardware", "Diagnóstico de Sistemas", "Gestão de Incidentes"]
  },
  {
    id: "historico-consolidado",
    role: "Trajetória Operacional Consolidada",
    company: "Ipiranga · Cacique Atacado · Carvalho & Fernandes",
    period: "2008 — 2018",
    location: "Piauí",
    description:
      "Uma década de formação de disciplina operacional e consistência analítica em ambientes corporativos de grande porte:",
    achievements: [
      "Ipiranga Produtos de Petróleo (2015–2018): Assistente Administrativo em logística, compras, conferência fiscal e estoques.",
      "Cacique Atacado (2013–2015): Auxiliar de Logística focado em fluxo de materiais e distribuição regional.",
      "Carvalho & Fernandes (2008–2013): Assistente de Contabilidade responsável por conciliação de estoques e relatórios fiscais."
    ],
    skills: ["Controle de Estoque", "Gestão de Materiais", "Conciliação Fiscal", "Resiliência Operacional"]
  }
];
