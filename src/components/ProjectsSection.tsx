'use client';

import { useState } from 'react';
import { ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { projectsData } from '@/data/projects';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'ia', label: 'IA & Automação' },
    { id: 'backend', label: 'Back-end & Arquitetura' },
    { id: 'fullstack', label: 'Full-stack & Acessibilidade' },
    { id: 'logistica', label: 'Logística & Negócio' },
  ];

  const filteredProjects =
    activeCategory === 'todos'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfólio em Produção & Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Projetos, Arquitetura e Engenharia
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Ecossistema de aplicações desenvolvidas com foco em back-end escalável, Clean Architecture, agentes de IA com governança e impacto direto na produtividade e inclusão.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 scale-[1.03]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-slate-900/70 border transition-all duration-300 flex flex-col justify-between group p-6 backdrop-blur-md relative overflow-hidden ${
                project.featured
                  ? 'border-cyan-500/30 hover:border-cyan-500/60 shadow-lg shadow-cyan-950/20 hover:shadow-cyan-500/10'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Top Accent Line for Featured */}
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />
              )}

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                    {project.categoryLabel}
                  </span>

                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      Destaque
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Highlight Tagline */}
                <p className="text-xs font-medium text-slate-300 mb-3 flex items-start gap-1.5">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>{project.highlight}</span>
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/60">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-2">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Ver Repositório</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      Projeto Corporativo / Interno
                    </span>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Acessar</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
