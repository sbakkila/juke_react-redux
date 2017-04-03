import React from 'react';
import Songs from './Songs';

export default function (props) {
  console.log('logging from station ',props);

  const genreName = props.genreName;
  const songs = props.songs;
  const isPlaying = props.isPlaying;
  const currentSong = props.currentSong;
  const toggleOne = props.toggleOne;


  return(
    <div>
    <h3>{genreName}</h3>
    <Songs
      songs = {songs}
      currentSong = {currentSong}
      isPlaying = {isPlaying}
      toggleOne = {toggleOne}
    />
    </div>
  );
}
