import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loader from './Loading';

export default class Header extends Component {
  state = {
    loading: true,
    userName: '',
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, userName: user.name });
  }

  render() {
    const { loading, userName } = this.state;
    return (
      <header data-testid="header-component">
        <nav>
          <ul>
            <li>
              <Link to="/search" data-testid="link-to-search">
                Search
              </Link>
            </li>
            <li>
              <Link to="/favorites" data-testid="link-to-favorites">
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/profile" data-testid="link-to-profile">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
        {loading
          ? (<Loader />)
          : (<p data-testid="header-user-name">{ userName }</p>)}
      </header>
    );
  }
}
