import { connect } from 'react-redux';
import { sortByCount, sortByName, setVisibilityFilter, setKeyword } from '../actions/breaches';
import Toolbar from '../components/Toolbar'


const mapDispatchToProps = (dispatch) => {
    return {
        sortByName: () => {
            dispatch(sortByName())
        },
        sortByCount: () => {
            dispatch(sortByCount())
        },
        setVisibilityFilter: (filter) => {
            dispatch(setVisibilityFilter(filter))
        },
        setKeyword: (keyword) => {
            dispatch(setKeyword(keyword))
        },
    }
}

export default connect(null, mapDispatchToProps)(Toolbar)
