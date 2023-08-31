// fill out this container
import { connect } from 'react-redux';
import Import from '../components/Import';
import { fetchMakes, removeMake } from '../redux/actions';

const mapStateToProps = (state) => {
  return{
    makes: state.makes || []
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    removeMake: (index) => dispatch(removeMake(index)),
    fetchMakes: () => dispatch(fetchMakes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)