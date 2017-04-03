import {connect} from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
  const stations = {};

  songsArray.forEach(function(song){
    if(!stations[song.genre]){
      stations[song.genre] = [song];
    } else {
      stations[song.genre].push(song);
    }
  })
  return stations;
};

const mapStateToProps = function(state) {
  return {
    stations: convertSongsToStations(state.songs)
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

const StationsContainer = containerComponentCreator(Stations);
export default StationsContainer;
