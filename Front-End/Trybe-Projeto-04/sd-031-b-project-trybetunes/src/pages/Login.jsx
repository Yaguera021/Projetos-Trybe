import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  state = {
    user: '',
    disabled: true,
    loading: false,
    redirect: false,
  };

  submit = async (event) => {
    event.preventDefault();
    const { user } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name: user });
    this.setState({
      loading: false,
      redirect: true,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { loading, disabled, redirect, user } = this.state;
    const min = 3;
    if (redirect) return <Redirect to="/search" />;
    return (
      loading ? <Loading />
        : (
          <div data-testid="page-login">
            <img src="/imgs/logo.png" alt="login" />
            <input
              type="text"
              name="user"
              value={ user }
              data-testid="login-name-input"
              placeholder="Name..."
              onChange={ this.handleChange }

            />
            <button
              data-testid="login-submit-button"
              onClick={ this.submit }
              disabled={ user.length >= min ? !disabled : disabled }
            >
              Entrar
            </button>
          </div>
        )
    );
  }
}
