'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { profileData } from '@/data/profile';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Método C.H.', href: '#metodo-ch' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-cyan-400 font-mono font-bold text-base group-hover:scale-110 transition-transform">
                  HB
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                {profileData.name}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>Full-stack · .NET · Angular</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponível para projetos</span>
            </div>

            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={profileData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-lg shadow-sm shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Vamos Conversar</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-slate-100 bg-slate-900 border border-slate-800 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-5 space-y-3 backdrop-blur-xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Disponível para oportunidades</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 bg-slate-900 rounded-lg border border-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 bg-slate-900 rounded-lg border border-slate-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href={profileData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
