import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const EMAIL_TEST = 'email-input';
const PASSWORD_TEST = 'password-input';

describe('Testando a página de login', () => {
  it('Verifica se a página contém o input de email', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(EMAIL_TEST);

    expect(emailInput).toBeInTheDocument();
    expect(emailInput.type).toBe('email');
  });

  it('Verifica se a página contém o input de senha', () => {
    renderWithRouterAndRedux(<App />);

    const passwordInput = screen.getByTestId(PASSWORD_TEST);

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.type).toBe('password');
  });

  it('Verifica se a página contém o botão de login', () => {
    renderWithRouterAndRedux(<App />);

    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent('Entrar');
  });

  it('Verifica se o botão de login está desabilitado após inserir email e senha inválidos', () => {
    const invalidEmail = 'email errado';
    const invalidPassword = '1234';
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(EMAIL_TEST);
    const loginButton = screen.getByRole('button');
    const passwordInput = screen.getByTestId('password-input');

    userEvent.type(emailInput, invalidEmail);
    userEvent.type(passwordInput, invalidPassword);
    expect(loginButton).toBeDisabled();
  });
  it('Verifica se o botão de login está habilitado após inserir email e senha válidos', () => {
    renderWithRouterAndRedux(<App />);

    const validEmail = 'email@valido.com';
    const validPassword = '1234567';

    const emailInput = screen.getByTestId(EMAIL_TEST);
    const passwordInput = screen.getByTestId(PASSWORD_TEST);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    expect(loginButton).not.toBeDisabled();
  });

  it('Verifica se é alterada a rota para a página de carteira após clicar no botão entrar', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const validEmail = 'email@valido.com';
    const validPassword = '1234567';

    const emailInput = screen.getByTestId(EMAIL_TEST);
    const passwordInput = screen.getByTestId(PASSWORD_TEST);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, validEmail);
    userEvent.type(passwordInput, validPassword);
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/carteira');
  });
});
