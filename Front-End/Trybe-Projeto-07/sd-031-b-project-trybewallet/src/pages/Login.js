import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoTrybeWallet from '../styles/images/logoTrybeWallet.png';
import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });

    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    const { email, password } = this.state;
    const maxnumber = 5;
    if (password.length >= maxnumber && emailRegex.test(email)) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props;

    dispatch(addEmail({ ...this.state }));

    history.push('/carteira');
  };

  render() {
    const { disabled, email, password } = this.state;
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="logo-wallet">
            <img src={ logoTrybeWallet } alt="logo" />
          </div>
          <form>
            <input
              type="email"
              name="email"
              value={ email }
              placeholder="Email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
            <input
              type="password"
              name="password"
              value={ password }
              placeholder="Password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <button disabled={ disabled } onClick={ this.handleClick }>Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
