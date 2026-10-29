'use client';

import Image from 'next/image';
import { ArrowRight, Sparkles, Terminal, MessageSquare, ShieldCheck, Cpu } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Engenharia de Software & Back-end
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Criador do Método Ágil C.H.
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                PCD · TEA (Neurodivergente)
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12]">
              Engenharia de Software,{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Back-end Resiliente
              </span>{' '}
              e Governança em IA.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Olá, sou o <strong className="text-white font-semibold">{profileData.name}</strong>. Uno mais de 14 anos de vivência lógica em operações, estoques e dados corporativos com arquiteturas modernas de back-end (<span className="text-cyan-300">Python, C#/.NET, SQL</span>), APIs escaláveis e a vanguarda da colaboração humano-IA através do <span className="text-purple-300">Método Ágil C.H.</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Ver Projetos em Destaque</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#metodo-ch"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Conhecer o Método C.H.</span>
              </a>

              <a
                href={profileData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Micro badges below CTA */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Teresina, PI (Disponível Remoto / Híbrido)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Graduação em Software (2026)
              </span>
            </div>
          </div>

          {/* Right Column: High-tech Visual Avatar Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>

              {/* Glass Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 p-6 backdrop-blur-xl shadow-2xl">
                {/* Window Controls Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">hallan@engineer:~</span>
                  <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                    Next.js 15
                  </div>
                </div>

                {/* Avatar and Info */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-2xl p-[3px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-xl shadow-cyan-500/10">
                      <Image
                        src={profileData.avatarUrl}
                        alt={`Foto de ${profileData.fullName}`}
                        width={128}
                        height={128}
                        unoptimized
                        className="w-full h-full object-cover rounded-[13px] bg-slate-950"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-slate-950 border border-slate-700 text-xs px-2 py-0.5 rounded-full font-mono text-cyan-400 shadow">
                      v2.0
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">{profileData.fullName}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    Python · C#/.NET · FastAPI · Clean Arch
                  </p>
                  <p className="text-xs text-slate-400 mt-2 max-w-xs">
                    PCD TEA · Operador Logística Jr → Pleno (Votorantim) · Graduando em Engenharia de Software
                  </p>
                </div>

                {/* Active Stack Chips */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono font-medium">
                    Projetos Ativos de Destaque
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-950/80 border border-slate-800 p-2 rounded-lg">
                      <span className="font-semibold text-slate-200 block truncate">Maestro Router</span>
                      <span className="text-[10px] text-cyan-400 font-mono">FastAPI · OpenAI</span>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 p-2 rounded-lg">
                      <span className="font-semibold text-slate-200 block truncate">DriveHub API</span>
                      <span className="text-[10px] text-indigo-400 font-mono">Clean Arch · DDD</span>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 p-2 rounded-lg">
                      <span className="font-semibold text-slate-200 block truncate">PulseOps</span>
                      <span className="text-[10px] text-teal-400 font-mono">.NET 10 · Angular</span>
                    </div>
                    <div className="bg-slate-950/80 border border-slate-800 p-2 rounded-lg">
                      <span className="font-semibold text-slate-200 block truncate">CHDevFlow & ch</span>
                      <span className="text-[10px] text-purple-400 font-mono">CLI · Governança</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {profileData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-snug">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
