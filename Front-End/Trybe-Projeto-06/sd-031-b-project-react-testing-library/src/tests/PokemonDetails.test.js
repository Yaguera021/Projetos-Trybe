import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente PokemonDetails', () => {
  test('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const heading = screen.getByRole('heading', { name: /pikachu details/i });
    expect(heading).toBeInTheDocument();
    expect(moreDetails).not.toBeInTheDocument();
    const summary = screen.getByRole('heading', { name: /summary/i });
    expect(summary).toBeInTheDocument();
    const details = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(details).toBeInTheDocument();
  });
  test('Testa se existe uma seção com os mapas contendo as localizações do pokémon', () => {
    renderWithRouter(<App />);
    const pikachuLocation = 'Pikachu location';

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const locations = screen.getByRole('heading', { name: /game locations of pikachu/i });
    expect(locations).toBeInTheDocument();
    const location1 = screen.getAllByAltText(pikachuLocation)[0];
    expect(location1).toBeInTheDocument();
    expect(location1.src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    const location2 = screen.getAllByAltText(pikachuLocation)[1];
    expect(location2).toBeInTheDocument();
    expect(location2.src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
