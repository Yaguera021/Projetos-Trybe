import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

export default class Search extends Component {
  state = {
    disable: true,
    artist: '',
    api: false,
    artistInfo: {},
    artistNick: '',
    loading: false,

  };

  renderClick = async (event) => {
    event.preventDefault();
    const { artist } = this.state;
    this.setState({
      artist: '',
      artistNick: artist,
      loading: true,
    });

    const info = await searchAlbumsAPI(artist);
    this.setState({
      loading: false,
      api: true,
      artistInfo: info,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { disable, artist, loading, api, artistInfo, artistNick } = this.state;
    const min = 2;
    return (
      loading ? (<Loading />)
        : (
          <div data-testid="page-search">
            <Header />
            <input
              type="text"
              data-testid="search-artist-input"
              name="artist"
              value={ artist }
              onChange={ this.handleChange }
            />
            <button
              type="submit"
              disabled={ artist.length >= min ? !disable : disable }
              data-testid="search-artist-button"
              onChange={ this.handleChange }
              onClick={ this.renderClick }
            >
              Pesquisar
            </button>
            <div>
              { (api && artistInfo.length > 0) && (
                <div>
                  <h3>
                    {
                      `Resultado de álbuns de: ${artistNick}`
                    }
                  </h3>
                  <ul>
                    {artistInfo.map(({
                      artistName,
                      artworkUrl100,
                      collectionName,
                      collectionId,
                    }) => (
                      <li key={ collectionId }>
                        <Link
                          to={ `album/${collectionId}` }
                          data-testid={ `link-to-album-${collectionId}` }
                        >
                          Mais informações

                        </Link>
                        <img src={ artworkUrl100 } alt={ collectionName } />
                        <h3>{collectionName}</h3>
                        <p>{ artistName }</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(artistInfo.length === 0 && (
                <div>
                  <p>Nenhum álbum foi encontrado</p>
                </div>
              ))}
            </div>
          </div>
        )
    );
  }
}
