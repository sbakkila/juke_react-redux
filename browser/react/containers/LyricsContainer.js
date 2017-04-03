import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';



//wrapper that only adds local state
class LyricsContainer extends Component {

  constructor() {
    super();
    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);
  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      props.searchLyrics(this.state.artistQuery, this.state.songQuery);
    }
  }

  render() {
    return (
      <Lyrics
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

export default LyricsContainer;
