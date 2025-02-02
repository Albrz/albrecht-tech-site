import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Transforme seu Negócio com Soluções Inteligentes/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the services section', () => {
    render(<Home />);
    const servicesHeading = screen.getByTestId('services-section-title');
    expect(servicesHeading).toBeInTheDocument();
    expect(servicesHeading).toHaveTextContent(/Nossos Serviços/i);
  });

  it('renders the CTA buttons', () => {
    render(<Home />);
    const startButton = screen.getByText(/Comece Agora/i);
    const servicesButton = screen.getByText(/Conheça Nossos Serviços/i);
    expect(startButton).toBeInTheDocument();
    expect(servicesButton).toBeInTheDocument();
  });
});
