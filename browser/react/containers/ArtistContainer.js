
import {connect} from 'react-redux';
import Artist from '../components/Artist';

const mapStateToProps = function(state) {
  return {


   //  ...state.player,
    currentSongList: state.player.currentSongList,
    progress: state.player.progress,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    selectedArtist: state.artists.selected
   }
}
const mapDispatchToProps = function(dispatch) {
  return {
      toggleOne: function(song, list){
        dispatch(toggleSong(song, list));
    }
  }
}

const containerComponentCreator = connect(mapStateToProps, mapDispatchToProps);

const ArtistContainer = containerComponentCreator(Artist);
export default ArtistContainer;

