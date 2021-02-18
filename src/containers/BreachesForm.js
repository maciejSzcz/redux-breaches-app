import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { ObjectID } from 'bson';
import { addBreach } from '../actions/breachesForm';
import FormComponent from '../components/BreachesForm';

const Form = withFormik({
    validate(values, props) {
        const errors = {
        };
        const urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;

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
            errors.BreachDate = "Date can't be from the future";
        }

        if(!values.PwnCount) {
            errors.PwnCount = "PwnCount is required (estimate)"
        } else if(values.PwnCount < 0) {
            errors.PwnCount = "PwnCount must be a positive value"
        }
        
        if(!values.Description) {
            errors.Description = "Description is required"
        } else if(values.Description.length < 20) {
            errors.Description = "Description too short"
        }

        return errors;
    },
    mapPropsToValues: props => ({
        Name: "",
        Title: "",
        Domain: "",
        BreachDate: "2021-01-01",
        PwnCount: 0,
        Description: "",
        DataClasses: [],
        file: null,
    }),
    async handleSubmit(values, { props, setSubmitting, resetForm }) {
        const formData = new FormData();
		formData.append('upload', values.file);
        let url = ""

        if(values.file) {
            await fetch(
                'https://user-sec-app.herokuapp.com/upload',
                {
                    method: 'POST',
                    body: formData,
                }
            )
            .then((response) => response.json())
                .then((result) => {
                    url = result.url
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

        const breach = {
            BreachDate: values.BreachDate,
            Description: values.Description,
            Domain: values.Domain,
            Name: values.Name,
            PwnCount: values.PwnCount,
            Title: values.Title,
            _id: (new ObjectID()).toString(),
            DataClasses: values.DataClasses.map(x => [x]),
            LogoPath: url
        }

        props.addBreach(breach)

        setTimeout(() => {
            setSubmitting(false);
            resetForm();
        }, 500);
    },
})(FormComponent)

const mapDispatchToProps = (dispatch) => {
    return {
        addBreach: (breach) => {
            dispatch(addBreach(breach))
        },
    }
}

export default connect(null, mapDispatchToProps)(Form)
