import { connect } from 'react-redux';
import { getBreaches, deleteBreachById } from '../actions/breaches';
import Breaches from '../components/Breaches'
import { getBreachesFilteredByKeyword } from '../selectors/breaches'

const mapStateToProps = (state) => {
    return {
        breaches: getBreachesFilteredByKeyword(state.breaches),
        loaded: state.breaches.loaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBreaches: () => {
            dispatch(getBreaches())
        },
        deleteBreachById: (id) => {
            dispatch(deleteBreachById(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Breaches)
