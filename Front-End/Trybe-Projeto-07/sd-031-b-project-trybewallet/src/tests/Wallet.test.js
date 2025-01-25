import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import wallet from '../redux/reducers/wallet';

describe('Testando a página da carteira', () => {
  it('Verifica se a página contém o email do usuário', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();
  });

  it('Verifica se a página contém o total de gastos', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });
    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();
  });

  it('Verifica os inputs', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });

    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const button = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Verifica se é renderizado um card para cada despesa', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });

    const table = screen.getByTestId('table-test');
    expect(table).toBeInTheDocument();
  });

  it('Verifica se o botão de adicionar despesa funciona corretamente', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/carteira');
    });

    const valueInput = screen.getByTestId('value-input');
    const descriptionInput = screen.getByTestId('description-input');
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });

    act(() => {
      userEvent.type(valueInput, '10');
      userEvent.type(descriptionInput, 'batata frita');
      userEvent.click(addButton);
    });

    const table = screen.getByTestId('table-test');
    expect(table).toBeInTheDocument();
  });
});
describe('Testando os reducers de wallet', () => {
  const initialState = {
    currencies: [],
    expenses: [],
    isEditing: false,
    idToEdit: 0,
    total: 0,
  };

  it('Verifica o ADD_EXPENSE', () => {
    const expense = { id: 1, amount: 10, description: 'batata frita' };
    const action = { type: 'ADD_EXPENSE', payload: expense };

    const newState = wallet(initialState, action);

    expect(newState.expenses).toEqual([expense]);
    expect(newState.total).toBe(0);
  });
  it('Verifica o UPT_TOTAL', () => {
    const total = 100;
    const action = { type: 'UPT_TOTAL', payload: total };

    const newState = wallet(initialState, action);

    expect(newState.total).toEqual(total);
  });
  it('Verifica o ADD_CURRENCIES', () => {
    const currencies = ['USD', 'EUR', 'JPY'];
    const action = { type: 'ADD_CURRENCIES', payload: currencies };

    const newState = wallet(initialState, action);

    expect(newState.currencies).toEqual(currencies);
  });
  it('Verifica o DELETE_EXPENSE', () => {
    const expense1 = { id: 1, amount: 10, description: 'Expense 1' };
    const expense2 = { id: 2, amount: 20, description: 'Expense 2' };
    const initialStateWithExpenses = {
      ...initialState,
      expenses: [expense1, expense2],
    };
    const action = { type: 'DELETE_EXPENSE', payload: 1 };

    const newState = wallet(initialStateWithExpenses, action);

    expect(newState.expenses).toHaveLength(1);
    expect(newState.expenses[0]).toEqual(expense2);
  });
});
