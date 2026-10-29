import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hallan de Sousa Brito | Engenheiro de Software Full-stack (C#/.NET + Angular)',
  description:
    'Portfólio profissional de Hallan de Sousa Brito: Engenheiro de Software Full-stack (C#/.NET 10, Angular 22, Python, FastAPI), PCD TEA e criador do Método Ágil C.H.',
  keywords: [
    'Hallan Brito',
    'Hallan de Sousa Brito',
    'Engenheiro de Software Full-stack',
    'Full-stack Developer',
    'C#',
    '.NET 10',
    'Angular',
    'Angular 22',
    'TypeScript',
    'Python',
    'FastAPI',
    'Clean Architecture',
    'DDD',
    'Método Ágil C.H.',
    'CHDevFlow',
    'PulseOps',
    'Maestro Router',
    'DriveHub API',
    'PCD TEA',
    'Teresina Piauí'
  ],
  authors: [{ name: 'Hallan de Sousa Brito', url: 'https://github.com/hallanbrito' }],
  creator: 'Hallan de Sousa Brito',
  metadataBase: new URL('https://perfil-profissional-five.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://perfil-profissional-five.vercel.app',
    title: 'Hallan de Sousa Brito | Engenharia de Software, Back-end & Método C.H.',
    description:
      'Portfólio profissional e ecossistema de projetos de Hallan de Sousa Brito. Especialista em back-end, automações e governança humano-IA.',
    siteName: 'Portfólio Hallan Brito',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hallan de Sousa Brito | Engenheiro de Software & Autor do Método C.H.',
    description:
      'Especialista em back-end, arquiteturas resilientes e esteiras de desenvolvimento humano-IA.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`${inter.variable} antialiased bg-[#090a0f] text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
