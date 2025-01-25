import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  test('Verifica se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent('Electric');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    const pokemonImage = screen.getByRole('img', { name: /pikachu sprite/i, src: 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png', alt: 'Pikachu sprite' });
    expect(pokemonImage).toBeInTheDocument();
  });
  test('Verifica se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsLink).toBeInTheDocument();
    userEvent.click(moreDetailsLink);
    const pokemonImage = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokemonImage).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(history.location.pathname).toBe('/pokemon/25');
    expect(screen.getByRole('heading', { name: /pikachu details/i }));
    expect.toBeInTheDocument();
    expect(moreDetailsLink).not.toBeInTheDocument();
  });
  test('Verifica se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);
    const getFavoriteCheckbox = screen.getByRole('checkbox');
    userEvent.click(getFavoriteCheckbox);
    const favoriteImg = screen.getByAltText('Pikachu is marked as favorite');
    expect(favoriteImg).toBeInTheDocument();
    expect(favoriteImg.src).toBe('http://localhost/star-icon.svg');
  });
});
