import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MethodologyHighlight } from '@/components/MethodologyHighlight';

describe('MethodologyHighlight Component', () => {
  it('renders section headline and central thesis', () => {
    render(<MethodologyHighlight />);
    expect(screen.getByText('Método Ágil C.H. & CHDevFlow')).toBeInTheDocument();
    expect(screen.getByText(/Tese Central do Método/i)).toBeInTheDocument();
    expect(
      screen.getByText(/produtividade sustentável não é a quantidade de código gerado/i)
    ).toBeInTheDocument();
  });

  it('renders all five stages of the CHAVE cycle', () => {
    render(<MethodologyHighlight />);
    expect(screen.getByText('Contextualizar')).toBeInTheDocument();
    expect(screen.getByText('Harmonizar')).toBeInTheDocument();
    expect(screen.getByText('Agir')).toBeInTheDocument();
    expect(screen.getByText('Verificar')).toBeInTheDocument();
    expect(screen.getByText('Evoluir')).toBeInTheDocument();
  });

  it('renders canonical documentation links', () => {
    render(<MethodologyHighlight />);
    const docsLink = screen.getByRole('link', { name: /Docs Canônicos/i });
    expect(docsLink).toHaveAttribute('href', 'https://github.com/hallanbrito/metodo-ch');

    const cliLink = screen.getByRole('link', { name: /CLI `ch`/i });
    expect(cliLink).toHaveAttribute('href', 'https://github.com/hallanbrito/CHDevFlow');
  });
});
