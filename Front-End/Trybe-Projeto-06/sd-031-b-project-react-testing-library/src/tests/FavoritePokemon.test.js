import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemon from '../pages/FavoritePokemon';

describe('Testando o componente FavoritePokemon', () => {
  test('Testando se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ [] } />);
    const noFavoritePokemonFound = screen.getByText(
      'No favorite Pokémon found',
    );
    expect(noFavoritePokemonFound).toBeInTheDocument();
  });

  test('Testando se é exibido todos os cards de pokémons favoritados', () => {
    const favoritePokemon = {
      id: 65,
      name: 'Alakazam',
      type: 'Psychic',
      averageWeight: {
        value: '48.0',
        measurementUnit: 'kg',
      },
      image:
          'https://archives.bulbagarden.net/media/upload/8/88/Spr_5b_065_m.png',
      moreInfo:
          'https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)',
      foundAt: [
        {
          location: 'Unova Accumula Town',
          map: 'https://archives.bulbagarden.net/media/upload/4/44/Unova_Accumula_Town_Map.png',
        },
      ],
      summary:
          'Closing both its eyes heightens all its other senses. This enables it to use its abilities to their extremes.',
    };

    const pokemonList = [favoritePokemon];

    renderWithRouter(<FavoritePokemon pokemonList={ pokemonList } />);
    const pokemonName = screen.getByText('Alakazam');
    expect(pokemonName).toBeInTheDocument();
  });
});
