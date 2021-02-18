import { connect } from 'react-redux';
import { getBreachMatchingRouteId } from '../selectors/breachDetails';
import { withFormik } from 'formik';
import BreachDetailsComponent from '../components/BreachDetails';
import { getBreaches } from '../actions/breaches';
import { setEditing, updateBreach } from '../actions/breachesDetails';

const BreachDetails = withFormik({
    validate(values, props) {
        const errors = {};
        const urlExpression = /([\w.]+\.[a-z]{2,3}[^,\s]*)/g;

        if(!values.Name) {
            errors.Name = "Name is required";
        }

        if(!values.Title) {
            errors.Title = "Title is required";
        }

        if(!values.Domain) {
            errors.Domain = "Domain is required";
        } else if (!values.Domain.match(urlExpression)) {
            
            errors.Domain = "Domain must be valid";
        }

        if(!values.BreachDate) {
            errors.BreachDate = "Breach Date is required";
        } else if (Date.parse(values.BreachDate) > Date.now()) {
            errors.BreachDate = "Invalid date";
        }

        if(!values.PwnCount) {
            errors.PwnCount = "PwnCount is required (estimate)"
        } else if(values.PwnCount < 0) {
            errors.PwnCount = "PwnCount must be a positive value"
        }
        
        if(!values.Description) {
            errors.Description = "Description is required"
        }

        return errors;
    },
    enableReinitialize: true,
    mapPropsToValues: props => {
        if(props.breach === undefined) {
            return {
                Name: "",
                Title: "",
                Domain: "",
                BreachDate: "2021-01-01",
                PwnCount: 0,
                Description: "",
                DataClasses: [],
            }
        }

        return {
            Name: props.breach.Name,
            Title: props.breach.Title,
            Domain: props.breach.Domain,
            BreachDate: props.breach.BreachDate.slice(0,10),
            PwnCount: props.breach.PwnCount,
            Description: props.breach.Description,
            DataClasses: props.breach.DataClasses,
            _id: props.breach._id
        }
    },
    handleSubmit(values, { props, setSubmitting, resetForm }) {

        props.updateBreach(values)
        props.setEditing(false)
        setTimeout(() => {
            setSubmitting(false);
            resetForm();
        }, 500);
    },
})(BreachDetailsComponent)

const mapStateToProps = (state, ownProps) => {
    return {
        breach: getBreachMatchingRouteId(state, ownProps),
        loaded: state.breaches.loaded,
        editing: state.breaches.editing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBreaches: () => {
            dispatch(getBreaches())
        },
        setEditing: (editing) => {
            dispatch(setEditing(editing))
        },
        updateBreach: (values) => {
            dispatch(updateBreach(values))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreachDetails)
