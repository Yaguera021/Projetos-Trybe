import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Album extends Component {
  state = {
    tracks: [],
    favoriteSongs: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.musicTracker(id);
    this.favoriteSongs(id);
  }

  musicTracker = async (id) => {
    const info = await getMusics(id);
    this.setState({
      tracks: info,
    });
  };

  favoriteSongs = async (id) => {
    const tracks = await getMusics(id);
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      tracks,
      favoriteSongs,
    });
  };

  render() {
    const { tracks, favoriteSongs } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {tracks.length === 0 ? (<Loading />)
          : (
            <div>
              <h3 data-testid="album-name">{tracks[0].collectionName}</h3>
              <h3 data-testid="artist-name">{tracks[0].artistName}</h3>

              {tracks
                .filter((_, index) => index !== 0)
                .map((song) => (
                  <MusicCard
                    key={ song.trackId }
                    trackName={ song.trackName }
                    previewUrl={ song.previewUrl }
                    trackId={ song.trackId }
                    trackInfo={ song }
                    favoriteSongs={ favoriteSongs.includes(song.trackId) }
                  />
                ))}
            </div>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
