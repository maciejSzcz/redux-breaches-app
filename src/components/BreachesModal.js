import { forwardRef } from 'react';
import { Button, Paper, TextField, List, ListItem } from '@material-ui/core';
import { FieldArray} from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const BreachesModal = forwardRef((props, ref) => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setEditing
    } = props;

    const classes = useStyles();

    return (        
        <Paper className={classes.modal}>
            <form onSubmit={handleSubmit} spellCheck="false" className={classes.form}>
                <TextField 
                    id="standard-basic"
                    label="Name"
                    name="Name"
                    type="text"
                    placeholder="Name"
                    variant="filled"
                    error={errors.Name && touched.Name}
                    helperText={touched.Name 
                        ? errors.Name
                        : undefined
                    }
                    value={values.Name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextField 
                    id="standard-basic"
                    label="Title"
                    name="Title"
                    type="text"
                    placeholder="Title"
                    variant="filled"
                    error={errors.Title && touched.Title}
                    helperText={touched.Title
                        ? errors.Title 
                        : undefined
                    }
                    value={values.Title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextField 
                    id="standard-basic"
                    label="Domain"
                    name="Domain"
                    type="text"
                    placeholder="Domain"
                    variant="filled"
                    error={errors.Domain && touched.Domain}
                    helperText={touched.Domain
                        ? errors.Domain
                        : undefined
                    }
                    value={values.Domain}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextField
                    id="date"
                    label="Breach date"
                    name="BreachDate"
                    type="date"
                    variant="filled"
                    error={errors.BreachDate && touched.BreachDate}
                    helperText={touched.BreachDate
                        ? errors.BreachDate
                        : undefined
                    }
                    value={values.BreachDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextField 
                    id="standard-number"
                    label="PwnCount"
                    name="PwnCount"
                    type="number"
                    placeholder="0"
                    variant="filled"
                    error={errors.PwnCount && touched.PwnCount}
                    helperText={touched.PwnCount
                        ? errors.PwnCount
                        : undefined
                    }
                    value={values.PwnCount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <TextField 
                    id="standard-multiline-flexible"
                    label="Description"
                    name="Description"
                    placeholder="Description"
                    variant="filled"
                    rows={4}
                    error={errors.Description && touched.Description}
                    value={values.Description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    multiline
                />
                <FieldArray
                    name="DataClasses"
                    render={arrayHelpers => (
                        <List className={classes.list}>
                            {values.DataClasses && values.DataClasses.length > 0 ? (
                                values.DataClasses.map((data, index) => (
                                    <ListItem className={classes.listItem} key={index}>
                                        <TextField 
                                            name={`DataClasses.${index}`}
                                            label="Data types"
                                            placeholder="Ex. Emails, passwords, etc."
                                            variant="filled"
                                            error={errors.DataClasses?.index}
                                            value={data}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.listField}
                                        />
                                        <Button
                                            type="button"
                                            onClick={() => arrayHelpers.insert(index + 1, '')} // Adds new empty field after the current index
                                            className={classes.listAddButton}
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)}
                                            className={classes.listDelButton}
                                        >
                                            Delete
                                        </Button>
                                    </ListItem>
                                ))
                            ) : (
                                <Button type="button" className={classes.buttonLeaks} onClick={() => arrayHelpers.push('')}>
                                    Add data leak types
                                </Button>
                            )}
                        </List>
                    )}
                />
                <Button type="submit" className={classes.button} color="primary" disabled={isSubmitting}>
                    Create
                </Button>
                <Button type="button" className={classes.resetButton} color="secondary" onClick={handleReset}>
                    Reset
                </Button>
            </form>
            <div className={classes.controls}>
                <Button type="button" variant="outlined" className={classes.closeButton} onClick={() => setEditing(false) }>
                    Close
                </Button>
            </div>
        </Paper>
    )
})

const useStyles = makeStyles({
    '@global': {
        '.MuiFormHelperText-root.Mui-error' : {
            color: "#cf6679"
        },
        '.MuiFormLabel-root.Mui-error' : {
            color: "#cf6679"
        },
        '.MuiFormLabel-root' : {
            color: "#ffffff"
        },
        '.MuiFormLabel-root.Mui-focused' : {
            color: "#ffffff"
        },
        '.MuiInputBase-input.MuiInput-input' : {
            color: "#ffffff"
        },
        '.MuiFormLabel-root.Mui-focused.Mui-error' : {
            color: "#cf6679"
        },
        '.MuiInput-underline.Mui-error::after' : {
            borderBottomColor: "#cf6679"
        },
        '.MuiInputBase-root.MuiFilledInput-root' : {
            backgroundColor: "#373837"
        },
        '.MuiInputBase-input.MuiFilledInput-input' : {
            color: "#ffffff",
        },
        '.MuiFormControl-root.MuiTextField-root' : {
            margin: "0.5em 0em 0.5em 0em"
        },
    },
    modal: {
        position: 'relative',
        minHeight: '80vh',
        maxHeight: '90vh',
        top: '5%',
        left: '50%',
        width: '90%',
        marginLeft: '-45%',
        overflow: 'auto',
        backgroundColor: '#232423',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        ['@media (min-width:780px)']: {  // eslint-disable-line no-useless-computed-key
            width: '70%',
            marginLeft: '-35%'
        }
    },
    list: {
        overflow: 'auto',
        maxHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    listItem: {
        display: 'flex',
    },
    listField: {
        flexGrow: '2'
    },
    listAddButton: {
        flexGrow: '1',
        color: "#000000",
        backgroundColor: "#3949ab",
        '&:hover': {
            backgroundColor: "#627d98",
        },
    },
    listDelButton: {
        flexGrow: '0.6',
        color: "#000000",
        backgroundColor: "#F44336",
        '&:hover': {
            backgroundColor: "#FF7961",
        },
    },
    closeButton: {
        color: "#F44336",
        border: "1px solid #F44336"
    },
    controls: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '50px',
        top: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: '5em',
        minWidth: "40%",
        margin: '0 1em',
    },
    button: {
        color: "#000000",
        backgroundColor: "#3949ab",
        width: '9em',
        margin: '0.5em',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: "#627d98",
        },
    },
    buttonLeaks: {
        color: "#000000",
        backgroundColor: "#3949ab",
        width: '9em',
        margin: '0.5em',
        alignSelf: 'center',
        '&:hover': {
            backgroundColor: "#627d98",
        },
    },
    resetButton: {
        color: "#000000",
        width: '9em',
        margin: '0.5em',
        alignSelf: 'center',
        backgroundColor: "#F44336",
        '&:hover': {
            backgroundColor: "#FF7961",
        },
    },
});


export default BreachesModal;