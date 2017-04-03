import {connect} from 'react-redux';
import Album from '../components/Album';

const mapStateToProps = function(state) {
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
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

const AlbumContainer = containerComponentCreator(Album);
export default AlbumContainer;
