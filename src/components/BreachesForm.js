import { TextField, Button, List, ListItem, Paper } from '@material-ui/core';
import { FieldArray} from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const FormComponent = (props) => {
    const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
    } = props;

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <TextField 
                    id="standard-basic"
                    label="Name"
                    name="Name"
                    type="text"
                    variant="filled"
                    placeholder="Name"
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
                    variant="filled"
                    placeholder="Title"
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
                    variant="filled"
                    placeholder="Domain"
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
                    rows={5}
                    error={errors.Description && touched.Description}
                    helperText={touched.Description
                        ? errors.Description
                        : undefined
                    }
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
                                    <ListItem  className={classes.listItem} key={index}>
                                        <TextField 
                                            name={`DataClasses.${index}`}
                                            label="Data types"
                                            variant="filled"
                                            placeholder="Ex. Emails, passwords, etc."
                                            error={errors.DataClasses?.index}
                                            value={data}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={classes.listField}
                                        />
                                        <Button
                                            type="button"
                                            color="primary"
                                            className={classes.listAddButton}
                                            onClick={() => arrayHelpers.insert(index + 1, '')} // Adds new empty field after the current index
                                        >
                                            Add
                                        </Button>
                                        <Button
                                            type="button"
                                            color="secondary"
                                            className={classes.listDelButton}
                                            onClick={() => arrayHelpers.remove(index)}
                                        >
                                            Delete
                                        </Button>
                                    </ListItem>
                                ))
                            ) : (
                                <Button type="button" className={classes.buttonLeaks} color="primary" onClick={() => arrayHelpers.push('')}>
                                    Add data leak types
                                </Button>
                            )}
                        </List>
                    )}
                />
                <div className={classes.fileContainer}>
                    <input type="file" name="file" className={classes.fileInput} onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                    }}/>
                </div>

                <Button type="submit" className={classes.button} color="primary" disabled={isSubmitting}>
                    Create
                </Button>
                <Button type="button" className={classes.resetButton} color="secondary" onClick={handleReset}>
                    Reset
                </Button>
            </form>
        </Paper>
    )
}

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
        '.MuiInputBase-input.MuiFilledInput-input' : {
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
        '.MuiFormControl-root.MuiTextField-root' : {
            margin: "0.5em 0em 0.5em 0em"
        },
    },
    form: {
        display: 'flex',
        minWidth: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2em',
        marginBottom: '2em',
        padding: '1em',
        overflow: 'auto',
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
    paper: {
        marginTop: '1em',
        marginBottom: '1em',
        backgroundColor: '#232423',
        minWidth: '80vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    fileContainer: {
        display: 'inline-block',
        textAlign: 'left',
        background: '#373837',
        padding: '16px',
        position: 'relative',
        borderRadius: '3px',
        alignSelf: 'center',
        margin: '0.5em',
    },
    fileInput: {
        color: '#ffffff',

    }
});

export default FormComponent;