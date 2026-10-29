'use client';

import { useState } from 'react';
import { Mail, MapPin, MessageSquare, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { profileData } from '@/data/profile';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-cyan-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Conexões & Oportunidades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Vamos construir software de alto valor juntos?
            </h2>
            <p className="text-slate-400 text-base mt-3 max-w-xl mx-auto">
              Seja para debater arquiteturas de back-end, implementação do Método C.H., oportunidades de contratação ou parcerias técnicas, estou sempre aberto a boas conversas.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {/* WhatsApp Card */}
            <a
              href={profileData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    WhatsApp Direto
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-slate-100 mt-1">
                  {profileData.phone}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Resposta rápida para networking e propostas.
                </p>
              </div>
            </a>

            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 group flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    E-mail
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <h4 className="text-base font-bold text-slate-100 mt-1 truncate">
                  {profileData.email}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Contato formal para projetos e documentações.
                </p>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    LinkedIn
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-slate-100 mt-1">
                  in/hallanbrito
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Conexões profissionais e publicações técnicas.
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    GitHub
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-slate-100 mt-1">
                  github.com/hallanbrito
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  19+ repositórios abertos, commits e esteiras.
                </p>
              </div>
            </a>
          </div>

          {/* Location footnote */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 pt-4">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{profileData.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
