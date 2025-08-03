'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('sobre');

  const sections = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
                <img
                  alt="Foto de Hallan de Sousa Brito"
                  src="https://avatars.githubusercontent.com/u/113695320?s=96&v=4"
                  className="w-full h-full object-cover rounded-full border-2 border-white"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold text-gray-900">Hallan de Sousa Brito</h1>
                <p className="text-sm text-gray-600">PCD TEA | Operador Logística Jr | Engenheiro de Software | Back-end</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full p-[4px] bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl">
              <img
                src="https://avatars.githubusercontent.com/u/113695320?s=96&v=4"
                alt="Foto de Hallan de Sousa Brito"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Hallan de Sousa Brito
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              PCD TEA | Operador Logística Jr | Engenheiro de Software | Back-end (Python, C#, SQL)
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Baixar CV
              </button>
              <button
                onClick={() => window.open('https://wa.me/5586994495678', '_blank')}
                className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg transition-all duration-300"
              >
                Entre em Contato
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Sobre */}
            {activeSection === 'sobre' && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">👤</span>
                  Sobre Mim
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  Profissional de Logística com ênfase em análise de dados e decisão estratégica com foco em estoque. 
                  São 14 anos de experiência em logística, atuando em inventário, controle de estoque e distribuição. 
                  Atualmente, aprimorando habilidades em desenvolvimento back-end com C#, Python e SQL, unindo expertise 
                  logística à tecnologia para criar soluções inovadoras. PCD TEA, proativo e focado em resultados, 
                  buscando ambientes dinâmicos e colaborativos para contribuir com meu conhecimento.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Formação</h3>
                    <ul className="text-sm text-gray-600">
                      <li>Engenharia de Software - Facid Wyden (2023 - 2026)</li>
                      <li>Tecnologia em Logística - Anhanguera Educacional (2013 - 2014)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Localização</h3>
                    <p className="text-sm text-gray-600">Teresina, PI</p>
                  </div>
                </div>
              </div>
            )}

            {/* Experiência */}
            {activeSection === 'experiencia' && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">💼</span>
                  Experiência Profissional
                </h2>
                <div className="space-y-6">
                  {[
                    { cargo: 'Operador de Logística Jr', empresa: 'Votorantim Cimentos', periodo: 'maio/2024 - presente', descricao: 'Gerenciamento de inventário, otimização de processos, suporte operacional e atendimento ao cliente, garantindo entregas pontuais e seguras.' },
                    { cargo: 'Analista de Crédito', empresa: 'Brasil Card', periodo: 'nov/2022 - abr/2024', descricao: 'Análise de crédito para novos clientes e renovações, avaliando riscos e oportunidades de negócios.' },
                    { cargo: 'Analista de Suporte Técnico', empresa: 'Ehrich Comércio', periodo: 'jul/2021 - fev/2023', descricao: 'Suporte técnico em sistemas, hardware e redes, utilizando ferramentas de gerenciamento de chamados.' },
                    { cargo: 'Motorista por Aplicativo', empresa: 'Uber', periodo: 'out/2018 - out/2022', descricao: 'Transporte de passageiros, gestão de rotinas e atendimento ao cliente com flexibilidade.' },
                    { cargo: 'Assistente Administrativo', empresa: 'Ipiranga Produtos de Petróleo', periodo: 'fev/2015 - mai/2018', descricao: 'Suporte em logística, compras e financeiro, controle de notas fiscais e estoque.' },
                    { cargo: 'Auxiliar de Logística', empresa: 'Cacique Atacado Ltda', periodo: 'jul/2013 - jan/2015', descricao: 'Planejamento de fluxo de materiais e gerenciamento de distribuição de produtos.' },
                    { cargo: 'Assistente de Contabilidade', empresa: 'Carvalho & Fernandes', periodo: 'set/2008 - jan/2013', descricao: 'Coleta e revisão de dados de estoque, verificação de movimentações e manutenção de relatórios.' }
                  ].map((exp, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-6">
                      <h3 className="font-bold text-lg text-gray-900">{exp.cargo}</h3>
                      <p className="text-blue-600 font-medium">{exp.empresa} • {exp.periodo}</p>
                      <p className="text-gray-600 mt-2">{exp.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Habilidades */}
            {activeSection === 'habilidades' && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">⚡</span>
                  Habilidades Técnicas
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Frontend</h3>
                    <div className="space-y-3">
                      {['React', 'Next.js', 'Blazor', 'Tailwind CSS'].map((skill) => (
                        <div key={skill} className="flex items-center justify-between">
                          <span className="text-gray-700">{skill}</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Backend</h3>
                    <div className="space-y-3">
                      {['C#', 'Python', 'SQL', 'Power BI'].map((skill) => (
                        <div key={skill} className="flex items-center justify-between">
                          <span className="text-gray-700">{skill}</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projetos */}
            {activeSection === 'projetos' && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">🚀</span>
                  Projetos Destacados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Parcial_V5 – Automação de Pedidos Logísticos</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Aplicação em Blazor para importar planilhas do SAP, agrupar pedidos por cidade, filtrar por região e gerar relatórios interativos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Blazor', 'C# .NET', 'Excel', 'SQL Server'].map((tech) => (
                        <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Simulador de Frete Logístico</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Ferramenta para simular valores de frete com base em itinerários e pesos de pedidos, otimizando carregamentos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Blazor Hosted', 'C#', 'Excel', 'Logística'].map((tech) => (
                        <span key={tech} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dashboard de Transporte</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Dashboard em Python e Power BI consolidando dados logísticos para análise de atrasos e tomada de decisões estratégicas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Pandas', 'Power BI', 'Excel'].map((tech) => (
                        <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-100">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">API de Pedidos Logísticos</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      API REST desenvolvida em C# .NET integrada a SQL Server, permitindo consultas de pedidos e integração com sistemas internos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['C# .NET', 'SQL Server', 'API REST'].map((tech) => (
                        <span key={tech} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contato */}
            {activeSection === 'contato' && (
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white text-sm mr-3">📧</span>
                  Entre em Contato
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Informações de Contato</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-blue-500">📧</span>
                        <span className="text-gray-700">hallanbrito@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-green-500">📱</span>
                        <span className="text-gray-700">(86) 99449-5678</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-500">📍</span>
                        <span className="text-gray-700">Teresina, PI</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais</h3>
                    <div className="space-y-3">
                      <a href="https://www.linkedin.com/in/hallanbrito/" className="flex items-center space-x-3 text-blue-600 hover:text-blue-700">
                        <span>🔗</span>
                        <span>LinkedIn</span>
                      </a>
                      <a href="https://github.com/hallanbrito" className="flex items-center space-x-3 text-gray-700 hover:text-gray-900">
                        <span>🐙</span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Estatísticas</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">14+</div>
                  <div className="text-sm text-gray-600">Anos de experiência em Logística</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Anos com Tecnologia e Análise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">6º</div>
                  <div className="text-sm text-gray-600">Período em Engenharia de Software</div>
                </div>
              </div>
            </div>

            {/* Navegação Mobile */}
            <div className="md:hidden bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex space-x-2 overflow-x-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
