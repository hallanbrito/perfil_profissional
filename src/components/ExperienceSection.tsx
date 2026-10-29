import { Briefcase, Calendar, MapPin, CheckCircle, TrendingUp } from 'lucide-react';
import { experiencesData } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Trajetória e Consistência Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Experiência & Liderança Operacional
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Uma combinação única de disciplina operacional corporativa, análise de dados de alto impacto e evolução técnica contínua para engenharia de software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-10">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="relative pl-12 md:pl-20 group">
                {/* Timeline Dot Node */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:border-teal-300 group-hover:bg-cyan-500 transition-all duration-300 shadow-sm shadow-cyan-500/50" />

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 group-hover:border-slate-700 backdrop-blur-md transition-all duration-300">
                  {/* Top Bar with Role & Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <TrendingUp className="w-3 h-3" />
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-cyan-400">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
