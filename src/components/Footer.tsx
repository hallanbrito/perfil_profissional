import { ArrowUp } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
                HB
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-slate-200">
                {profileData.fullName}
              </span>
              <p className="text-xs text-slate-400">
                Engenharia de Software · Back-end · Governança em IA
              </p>
            </div>
          </div>

          <div className="text-center md:text-right text-xs text-slate-400 font-mono space-y-1">
            <p>
              Construído com Next.js 15 · React 19 · Tailwind CSS
            </p>
            <p className="text-slate-400 flex items-center justify-center md:justify-end gap-1">
              <span>Governança sob o</span>
              <a
                href="https://github.com/hallanbrito/metodo-ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                Método Ágil C.H.
              </a>
              <span>&copy; 2026</span>
            </p>
          </div>

          <div>
            <a
              href="#"
              aria-label="Voltar ao topo"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors flex items-center justify-center"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
