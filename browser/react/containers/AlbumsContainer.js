import {connect} from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = function(state) {
  return {
    albums: state.albums.list
  }

}

const containerComponentCreator = connect(mapStateToProps);

const AlbumsContainer = containerComponentCreator(Albums);
export default AlbumsContainer;
