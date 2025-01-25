import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import mockApi from './helper/mock';


const selectsFilter = (column, comparison, value) => {
  const comparisonTestId = screen.getByTestId('comparison-filter')
  const valueTestId = screen.getByTestId('value-filter')
  const columnTestId = screen.getByTestId('column-filter');
  const filterButton = screen.getByTestId('button-filter')
  userEvent.selectOptions(columnTestId, column);
  userEvent.selectOptions(comparisonTestId, comparison);
  userEvent.type(valueTestId, value)
  userEvent.click(filterButton)

}

describe('Testing App',  () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockApi);
  });

  it('Verifica os elementos da aplicação no seu estado inicial: searchBar, Filters e Buttons',  () => {
    render(<App />);
    // Todos os elementos devem estar presentes na tela quando iniciado
    const searchBar = screen.getByTestId('name-filter');
    const columnEl = screen.getByTestId('column-filter');
    const comparisonEl = screen.getByTestId('comparison-filter');
    const valueEl = screen.getByTestId('value-filter');
    const columnSortEl = screen.getByTestId('column-sort');
    const ascEl = screen.getByTestId('column-sort-input-asc');
    const descEl = screen.getByTestId('column-sort-input-desc');
    const filterBtn = screen.getByTestId('button-filter');


    expect(searchBar).toBeInTheDocument();
    expect(columnEl).toBeInTheDocument();
    expect(comparisonEl).toBeInTheDocument();
    expect(valueEl).toBeInTheDocument();
    expect(columnSortEl).toBeInTheDocument();
    expect(ascEl).toBeInTheDocument();
    expect(descEl).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();

  });



  it('Verifica a funcionalidade dos botões', () => {
    render(<App />);

    const planet = {
      population: 1000,
      orbital_period: 365,
      diameter: 21000,
    };

    const filterHigherThan = { column: 'population', comparison: 'maior que', value: 1000 };
    expect(planet.population).toBe(filterHigherThan.value);

    const filterLowerThan = { column: 'orbital_period', comparison: 'menor que', value: 365 };
    expect(planet.orbital_period).toBe(filterLowerThan.value);

    const filterEqualThan = { column: 'diameter', comparison: 'igual a', value: 21000 };
    expect(planet.diameter).toEqual(filterEqualThan.value);


  });


  it('Testando os filtros para planets', async () => {
    render(<App />);
      const bespinEl = await screen.findByText(/Bespin/i);

      selectsFilter('population', 'menor que', '6000021')

      expect(screen.getByText('Bespin')).toBeInTheDocument();
      expect(screen.getAllByRole('row')).toHaveLength(2)

  })


  it('Testando os filtros de comparação', async () => {
    render(<App />);
    await waitFor(() => screen.getByText('Naboo'));

    selectsFilter('orbital_period', 'maior que', '212')

    expect(screen.getByText('Naboo')).toBeInTheDocument();

    expect(screen.getAllByRole('row')).toHaveLength(4)
  })

  it('Testando filtro de diameter', async () => {
    render(<App />);
    await waitFor(() => screen.getByText(/Bespin/i));

    selectsFilter('diameter', 'igual a', '118000');
    expect(screen.getByText(/Bespin/i)).toBeInTheDocument();

    expect(screen.getAllByRole('row')).toHaveLength(2);

  });

});
