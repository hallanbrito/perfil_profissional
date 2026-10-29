import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '@/components/Navbar';
import { profileData } from '@/data/profile';

describe('Navbar Component', () => {
  it('renders brand identity and role tag', () => {
    render(<Navbar />);
    expect(screen.getByText('HB')).toBeInTheDocument();
    expect(screen.getByText(profileData.name)).toBeInTheDocument();
    expect(screen.getByText(/Full-stack · \.NET · Angular/i)).toBeInTheDocument();
  });

  it('renders all navigation anchor links', () => {
    render(<Navbar />);
    const expectedLinks = ['Sobre', 'Método C.H.', 'Projetos', 'Experiência', 'Habilidades', 'Contato'];
    expectedLinks.forEach((linkText) => {
      const elements = screen.getAllByText(linkText);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renders availability status pill and social links', () => {
    render(<Navbar />);
    expect(screen.getByText(/Disponível para projetos/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', profileData.githubUrl);
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', profileData.linkedinUrl);
  });

  it('toggles mobile menu open and closed', () => {
    render(<Navbar />);
    const toggleButton = screen.getByRole('button', { name: /Toggle Menu/i });
    expect(screen.queryByText(/Disponível para oportunidades/i)).not.toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText(/Disponível para oportunidades/i)).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.queryByText(/Disponível para oportunidades/i)).not.toBeInTheDocument();
  });
});
