import React, {Component} from 'react';
import store from '../store';


import {searchLyrics} from '../action-creators/lyrics';

// a component made with connect that passes the global state
// to Lyrics Container
import {connect} from 'react-redux';

const mapStateToProps = function(state) {
  return {
    text: state.lyrics.text
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    searchLyrics(artist, song){
      dispatch(searchLyrics(artist, song));
    }
  }
}

const containerComponentCreator = connect(mapStateToProps, mapDispatchToProps);

const ParentContainer = containerComponentCreator(LyricsContainer);
export default ParentContainer;
