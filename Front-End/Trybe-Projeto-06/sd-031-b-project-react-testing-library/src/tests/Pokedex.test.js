import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemonButton).toBeInTheDocument();
    expect(nextPokemonButton).toHaveTextContent(/Próximo pokémon/i);
    const pokemonList = ['charmander', 'caterpie', 'ekans', 'alakazam', 'mew', 'rapidash', 'snorlax', 'dragonair', 'pikachu'];
    for (let i = 0; i < pokemonList.length; i += 1) {
      userEvent.click(nextPokemonButton);
      const pokemon = screen.getByText(new RegExp(pokemonList[i], 'i'));
      expect(pokemon).toBeInTheDocument();
    }
  });

  test('Testa se a pokedex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const testId = 'pokemon-type-button';
    const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });
    for (let i = 0; i < 7; i += 1) {
      userEvent.click(nextPokemonButton);
      const categories = screen.getAllByTestId(testId)[i];
      expect(categories).toBeInTheDocument();
    }
  });

  test('Testa se pokedex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: 'All' });
    const psychoButtom = screen.getByRole('button', { name: 'Psychic' });
    userEvent.click(psychoButtom);
    expect(psychoButtom).toBeInTheDocument();
    const psyPokemon = screen.getByText(/alakazam/i);
    expect(psyPokemon).toBeInTheDocument();

    userEvent.click(buttonAll);
    expect(buttonAll).toBeInTheDocument();
    expect(psyPokemon).toBeInTheDocument();
    const firstPokemon = screen.getByText(/pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
  });

  test('Testa se contem o h2 com "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { name: /Encountered pokémon/i, level: 2 });
    expect(h2).toBeInTheDocument();
  });
});
