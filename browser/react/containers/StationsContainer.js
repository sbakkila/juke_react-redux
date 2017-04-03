import {connect} from 'react-redux';
import Stations from '../components/Stations';

const mapStateToProps = function(state) {
  return {}
}
const mapDispatchToProps = function(dispatch) {
  return {}
}
const containerComponentCreator = connect(mapStateToProps, mapDispatchToProps);

const StationsContainer = containerComponentCreator(Stations);
export default StationsContainer;
