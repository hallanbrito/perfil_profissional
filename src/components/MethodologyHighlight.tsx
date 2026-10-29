import { CheckCircle2, GitBranch, Cpu, Shield, ArrowUpRight, BookOpen, Terminal } from 'lucide-react';

export function MethodologyHighlight() {
  const chaveSteps = [
    {
      letter: 'C',
      name: 'Contextualizar',
      desc: 'Reconstrução rigorosa da baseline, identificação das fontes de verdade, riscos e dependências antes de qualquer mutação.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      letter: 'H',
      name: 'Harmonizar',
      desc: 'Contrato da Fatia W: definição explícita de escopo incluído/excluído, caminhos permitidos e critérios verificáveis de aceite.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      letter: 'A',
      name: 'Agir',
      desc: 'Execução sob autonomia restrita e isolada (CH-0 a CH-3). O agente opera em branch dedicada sem tocar diretamente em produção.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      letter: 'V',
      name: 'Verificar',
      desc: 'Validação por evidências auditáveis (RUC). O executor nunca declara autoaprovação; os testes devem ser demonstrados com logs reais.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      letter: 'E',
      name: 'Evoluir',
      desc: 'Decisão soberana do responsável humano (PO), consolidação do valor aceito e aprendizados persistidos na memória versionada.',
      color: 'from-pink-500 to-emerald-500'
    }
  ];

  return (
    <section id="metodo-ch" className="py-20 bg-slate-950/60 border-y border-slate-800/80 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 mb-3">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>Metodologia Autoral de Governança Humano-IA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Método Ágil C.H. & CHDevFlow
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mt-2">
              Engenharia de software humano–IA orientada por decisão, delegação limitada e evidências. Criado por Hallan Brito para transformar o uso de IA em um processo previsível, auditável e livre de alucinações.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hallanbrito/metodo-ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-purple-500/60 transition-all hover:bg-slate-800"
            >
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Docs Canônicos</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="https://github.com/hallanbrito/CHDevFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/60 transition-all hover:bg-slate-800"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>CLI `ch`</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Central Thesis Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40 border border-purple-500/20 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold block mb-1">
                Tese Central do Método
              </span>
              <p className="text-base sm:text-lg text-slate-200 italic font-medium leading-relaxed">
                &ldquo;Na engenharia assistida por IA, produtividade sustentável não é a quantidade de código gerado. É a quantidade de valor aceito com evidência, compreensão e responsabilidade humana.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Ciclo CHAVE Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {chaveSteps.map((step) => (
            <div
              key={step.letter}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} p-[1px] shadow-sm`}
                  >
                    <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-extrabold text-lg text-white">
                      {step.letter}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Etapa
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero alucinação</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pillars / Autonomy Summary */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3">
            <GitBranch className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <span className="text-slate-200 font-semibold block">Fatias W & Branches Isoladas</span>
              <span className="text-slate-400">Entregas atômicas e 100% reversíveis</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <span className="text-slate-200 font-semibold block">Autonomia Gradual CH-0 a CH-3</span>
              <span className="text-slate-400">Permissão proporcional ao risco de cada tarefa</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-slate-200 font-semibold block">RUC & Auditoria Factual</span>
              <span className="text-slate-400">Relatório de conformidade sem autoaprovação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
