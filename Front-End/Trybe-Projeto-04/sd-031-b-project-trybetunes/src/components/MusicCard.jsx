import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  state = {
    favorite: false,
    loading: false,
  };

  async componentDidMount() {
    const favoriteSongs = await getFavoriteSongs();
    const { trackId } = this.props;
    this.setState({
      favorite: favoriteSongs.some((music) => music.trackId === trackId),
    });
  }

  handleChange = async ({ target }) => {
    const { trackInfo } = this.props;
    this.setState({
      favorite: target.checked,
      loading: true,
    });
    await addSong(trackInfo);
    this.setState({ loading: false });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { favorite, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        <h2>{trackName}</h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label>
          Favorita
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ favorite }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  trackInfo: PropTypes.shape().isRequired,
};
