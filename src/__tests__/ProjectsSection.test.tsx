import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from '@/components/ProjectsSection';

describe('ProjectsSection Component', () => {
  it('renders section title and all project category pills', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Projetos, Arquitetura e Engenharia')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Todos os Projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /IA & Automação/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Back-end & Arquitetura/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Full-stack & Acessibilidade/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Logística & Negócio/i })).toBeInTheDocument();
  });

  it('renders all initial projects in "todos" view', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Método Ágil C.H.')).toBeInTheDocument();
    expect(screen.getByText('PulseOps')).toBeInTheDocument();
    expect(screen.getByText('Maestro Router')).toBeInTheDocument();
    expect(screen.getByText('DriveHub API')).toBeInTheDocument();
  });

  it('filters projects dynamically when a category pill is clicked', () => {
    render(<ProjectsSection />);
    const backendBtn = screen.getByRole('button', { name: /Back-end & Arquitetura/i });
    fireEvent.click(backendBtn);

    expect(screen.getByText('Maestro Router')).toBeInTheDocument();
    expect(screen.getByText('DriveHub API')).toBeInTheDocument();
    expect(screen.queryByText('PulseOps')).not.toBeInTheDocument();

    const fullstackBtn = screen.getByRole('button', { name: /Full-stack & Acessibilidade/i });
    fireEvent.click(fullstackBtn);
    expect(screen.getByText('PulseOps')).toBeInTheDocument();
    expect(screen.queryByText('DriveHub API')).not.toBeInTheDocument();
  });

  it('contains valid repository URLs and destinations for open-source projects', () => {
    render(<ProjectsSection />);
    const repoLinks = screen.getAllByRole('link', { name: /Ver Repositório/i });
    expect(repoLinks.length).toBeGreaterThan(0);

    const hrefs = repoLinks.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('https://github.com/hallanbrito/metodo-ch');
    expect(hrefs).toContain('https://github.com/hallanbrito/PulseOps');
    expect(hrefs).toContain('https://github.com/hallanbrito/maestro-router');
    expect(hrefs).toContain('https://github.com/hallanbrito/DriveHub-API');
    expect(hrefs).toContain('https://github.com/hallanbrito/CHDevFlow');

    // Verify security attributes on repository links
    repoLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });
});
