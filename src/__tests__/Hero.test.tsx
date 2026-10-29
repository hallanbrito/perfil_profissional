import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '@/components/Hero';
import { profileData } from '@/data/profile';

describe('Hero Component', () => {
  it('renders headline and badges', () => {
    render(<Hero />);
    expect(screen.getAllByText(/Engenheiro de Software Full-stack/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/C#\/\.NET \+ Angular/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Criador do Método Ágil C\.H\./i)).toBeInTheDocument();
    expect(screen.getAllByText(/PCD · TEA/i).length).toBeGreaterThan(0);
  });

  it('renders call to action links with correct destinations', () => {
    render(<Hero />);
    const projectsBtn = screen.getByRole('link', { name: /Ver Projetos Full-stack/i });
    expect(projectsBtn).toHaveAttribute('href', '#projetos');

    const methodBtn = screen.getByRole('link', { name: /Conhecer o Método C\.H\./i });
    expect(methodBtn).toHaveAttribute('href', '#metodo-ch');

    const whatsappBtn = screen.getByRole('link', { name: /WhatsApp/i });
    expect(whatsappBtn).toHaveAttribute('href', profileData.whatsappLink);
  });

  it('renders key performance stats', () => {
    render(<Hero />);
    profileData.stats.forEach((stat) => {
      expect(screen.getAllByText(stat.label).length).toBeGreaterThan(0);
    });
  });
});
