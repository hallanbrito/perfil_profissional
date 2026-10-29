import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ContactSection } from '@/components/ContactSection';
import { profileData } from '@/data/profile';

describe('ContactSection Component', () => {
  it('renders contact links with correct URLs', () => {
    render(<ContactSection />);
    expect(screen.getByText(profileData.phone)).toBeInTheDocument();
    expect(screen.getByText(profileData.email)).toBeInTheDocument();
    expect(screen.getByText('in/hallanbrito')).toBeInTheDocument();
    expect(screen.getByText('github.com/hallanbrito')).toBeInTheDocument();

    const whatsappLink = screen.getByRole('link', { name: /WhatsApp Direto/i });
    expect(whatsappLink).toHaveAttribute('href', profileData.whatsappLink);
  });

  it('copies email to clipboard on copy button click', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<ContactSection />);
    const copyBtn = screen.getByRole('button', { name: /Copiar/i });
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith(profileData.email);
    await waitFor(() => {
      expect(screen.getByText('Copiado')).toBeInTheDocument();
    });
  });
});
