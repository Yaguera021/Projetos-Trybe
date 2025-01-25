import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente NotFound', () => {
  test('Verifica se tem o h2 com texto "Page requested not found"', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();

    const getImg = screen.getByRole('img', { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
    expect(getImg).toBeInTheDocument();

    const getAltImg = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(getAltImg.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
