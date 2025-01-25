import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente App', () => {
  test('Testa os links de App', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    act(() => {
      userEvent.click(homeLink);
    });
    expect(history.location.pathname).toBe('/');

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(history.location.pathname).toBe('/about');

    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(favoriteLink).toBeInTheDocument();
    act(() => {
      userEvent.click(favoriteLink);
    });
    expect(history.location.pathname).toBe('/favorites');

    const notFound = screen.getByRole('heading', { level: 2 }, { name: 'Page requested not found' });
    expect(notFound).toBeInTheDocument();
  });
});
