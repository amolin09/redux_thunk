// fill out this container
import { connect } from 'react-redux';
import Import from '../components/Import';
import { fetchMakes, removeMake } from '../redux/actions';

const mapStateToProps = (state) => ({ makes: state.makes });


const mapDispatchToProps = (dispatch) =>{
  return{
    removeMake: (index) => dispatch(removeMake(index)),
    fetchMakes: () => fetchMakes(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)