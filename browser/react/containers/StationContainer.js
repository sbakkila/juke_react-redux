import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import { toggleSong } from '../action-creators/player';


function filterSongs(songsArray, genre){
  return songsArray.filter(function(song){
    return song.genre === genre;
  });
}

const mapStateToProps = function(state, ownProps) {

  return {
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,
    genreName: ownProps.params.genreName
  }

}
const mapDispatchToProps = function(dispatch) {
  return {
      toggleOne: function(song, list){
        dispatch(toggleSong(song, list));
    }
  }
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
