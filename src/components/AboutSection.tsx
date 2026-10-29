'use client';

import { useState } from 'react';
import { User, GraduationCap, Award, Brain, CheckCircle2, BookMarked, Sparkles } from 'lucide-react';
import { profileData } from '@/data/profile';

export function AboutSection() {
  const [certFilter, setCertFilter] = useState<'todas' | 'academica' | 'mercado'>('todas');

  const filteredCertifications = profileData.certifications.filter((cert) => {
    if (certFilter === 'todas') return true;
    return cert.category === certFilter;
  });

  return (
    <section id="sobre" className="py-24 bg-slate-950/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sobre Mim & Filosofia de Trabalho</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
              A união entre disciplina operacional, neurodiversidade e engenharia de software Full-stack.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profileData.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Neurodiversity / PCD TEA Highlight Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900/60 border border-emerald-500/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Brain className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-emerald-300">
                  Neurodiversidade na Prática da Engenharia
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  O autismo (TEA) potencializa a capacidade de encontrar inconsistências estruturais, respeitar rigorosamente contratos de software e documentar sistemas de modo que qualquer pessoa ou agente possa entender sem ambiguidade.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            {/* Formação Acadêmica */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-slate-100">
                  Formação Acadêmica
                </h3>
              </div>

              <div className="space-y-4">
                {profileData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/70"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs font-bold text-slate-200">
                        {edu.course}
                      </h4>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificações & Cursos de Destaque */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-base font-bold text-slate-100">
                    Certificações
                  </h3>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setCertFilter('todas')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      certFilter === 'todas'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Todas ({profileData.certifications.length})
                  </button>
                  <button
                    onClick={() => setCertFilter('academica')}
                    className={`px-2 py-0.5 rounded transition-colors flex items-center gap-1 ${
                      certFilter === 'academica'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <BookMarked className="w-3 h-3" />
                    <span>Wyden</span>
                  </button>
                  <button
                    onClick={() => setCertFilter('mercado')}
                    className={`px-2 py-0.5 rounded transition-colors flex items-center gap-1 ${
                      certFilter === 'mercado'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Mercado / IA</span>
                  </button>
                </div>
              </div>

              {/* Certifications List */}
              <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                {filteredCertifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold text-slate-200">
                            {cert.title}
                          </h4>
                          <span className="text-[11px] text-slate-400 block mt-0.5">
                            {cert.issuer}
                          </span>
                        </div>
                      </div>

                      {cert.tag && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 shrink-0">
                          {cert.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
