import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders the company name', () => {
    render(<Home />);
    const heading = screen.getByText(/Albrecht Tech/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the company tagline', () => {
    render(<Home />);
    const tagline = screen.getByText(/Soluções em Automação com IA/i);
    expect(tagline).toBeInTheDocument();
  });
});
