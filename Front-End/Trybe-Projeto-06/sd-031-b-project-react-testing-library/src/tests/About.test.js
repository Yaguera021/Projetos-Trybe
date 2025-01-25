import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente About', () => {
  test('Testando as informações sobre a Pokedex', () => {
    renderWithRouter(<About />);

    const getHeading = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(getHeading).toBeInTheDocument();

    const firstP = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    expect(firstP).toBeInTheDocument();

    const secondP = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(secondP).toBeInTheDocument();

    const getImg = screen.getByRole('img', { alt: /Pokédex/i });
    expect(getImg).toBeInTheDocument();

    const getImgSrc = screen.getByAltText('Pokédex');
    expect(getImgSrc.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
