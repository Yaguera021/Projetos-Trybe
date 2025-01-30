import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import Tomato from '../../images/tomate.png';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('user', email);
  };

  return (
    <div className='login-container'>
      <div className='content-wrapper'></div>
      <img src={Logo} alt='Logo-App' />
      <img src={Tomato} alt='Tomato' className='tomato-img' />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'></label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid='email-input'
            autoComplete='username'
          />
        </div>
        <div>
          <label htmlFor='password'></label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid='password-input'
            autoComplete='current-password'
          />
        </div>
        <div>
          <button type='submit' data-testid='login-submit-btn'>
            ENTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
