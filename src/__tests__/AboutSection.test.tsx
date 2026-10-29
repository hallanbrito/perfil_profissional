import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AboutSection } from '@/components/AboutSection';
import { profileData } from '@/data/profile';

describe('AboutSection Component', () => {
  it('renders about narrative, education, and neurodiversity callout', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Sobre Mim & Filosofia de Trabalho/i)).toBeInTheDocument();
    expect(screen.getByText(/Neurodiversidade na Prática da Engenharia/i)).toBeInTheDocument();
    expect(screen.getAllByText(/UniFacid Wyden/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Anhanguera/i).length).toBeGreaterThan(0);
  });

  it('renders all certifications initially and filters by category', () => {
    render(<AboutSection />);
    const totalCount = profileData.certifications.length;
    expect(screen.getByText(`Todas (${totalCount})`)).toBeInTheDocument();

    expect(screen.getByText('Programação de Sistemas de Informação')).toBeInTheDocument();
    expect(screen.getByText('Foundational C# with Microsoft')).toBeInTheDocument();

    const wydenFilterBtn = screen.getByRole('button', { name: /Wyden/i });
    fireEvent.click(wydenFilterBtn);

    expect(screen.getByText('Programação de Sistemas de Informação')).toBeInTheDocument();
    expect(screen.queryByText('Foundational C# with Microsoft')).not.toBeInTheDocument();

    const marketFilterBtn = screen.getByRole('button', { name: /Mercado \/ IA/i });
    fireEvent.click(marketFilterBtn);

    expect(screen.getByText('Foundational C# with Microsoft')).toBeInTheDocument();
    expect(screen.queryByText('Programação de Sistemas de Informação')).not.toBeInTheDocument();
  });
});
