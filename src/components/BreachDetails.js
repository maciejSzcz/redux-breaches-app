import { Card, CardContent, Typography, CircularProgress, Modal, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import BreachesModal from './BreachesModal'

const BreachDetails = (props) => {

    const {
        breach,
        loaded,
        getBreaches,
        editing,
        setEditing
    } = props;

    const classes = useStyles();

    if(loaded) {
        if(breach) {
            return (
                <div className={classes.flexContainer}>
                    <Card className={classes.cardContainer}>
                        <CardContent>
                            <Typography color="textSecondary" className={classes.Typography} gutterBottom>
                                <Button className={classes.backButton}>
                                    <Link to='/' style={{color: "#000", textDecoration: "None"}}>Return</Link>
                                </Button>
                            </Typography>
                            <img src={breach.LogoPath} alt="logo" style={{height: 50}}/>
                            <Typography variant="h6" className={classes.Typography} gutterBottom>
                                Name: {breach.Name}
                            </Typography>
                            <Typography color="h7" className={classes.Typography} gutterBottom>
                                Title: {breach.Title}
                            </Typography>
                            <Typography color="textSecondary" className={classes.Typography} gutterBottom>
                                Domain: {breach.Domain}
                            </Typography>
                            <Typography color="textSecondary" className={classes.Typography} gutterBottom>
                                Date: {breach.BreachDate.slice(0,10)}
                            </Typography>
                            <Typography color="textSecondary" className={classes.Typography} gutterBottom>
                                Pwn Count: {breach.PwnCount}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" className={classes.Typography} component="p" gutterBottom>
                                Description: {ReactHtmlParser(breach.Description)}
                            </Typography>
                            <Typography variant="body2" className={classes.Typography} component="p">
                                Data types leaked:
                            </Typography>
                            <ul>
                                {breach.DataClasses?.map((data, index) => (
                                    <Typography key={index} color="textSecondary" className={classes.listItem}  component="li">{data}</Typography>
                                ))}
                            </ul>
                            <Button type="button" className={classes.button} onClick={() => {
                                setEditing(true)
                            }}>
                                Edit
                            </Button>
                            <Modal
                                open={editing}
                                onClose={() => {
                                    setEditing(false)
                                }}
                            >
                                <BreachesModal {...props} />
                            </Modal>
                        </CardContent>
                    </Card>
                </div>
            )
        }
        return (
            <h1>Not found</h1>
        )
    } else {
        return (
            <div className={classes.flexContainer}>
                <CircularProgress />
                {loaded ? undefined : getBreaches()}
            </div>
        )
    }
}

const useStyles = makeStyles({
    '@global': {
        'body' : {
            margin: 0,
            background: "#181918"
        },
        'a' : {
            color: "#ffffff"
        }
    },
    Typography: {
        color: "#ffffff",
        margin: "1em 0"
    },
    listItem: {
        color: "#ffffff",
        fontSize: "0.875rem"
    },
    cardContainer: {
        maxWidth: "800px",
        backgroundColor: "#232423",
        marginTop: '1em',
        marginBottom: '1em',
    },
    flexContainer: {
        display: 'flex',
        minHeight: '100vh',
        width: '98vw',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controls: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: "#000000",
        backgroundColor: "#3949ab",
        '&:hover': {
            backgroundColor: "#627d98",
        },
    },
    backButton: {
        color: "#000000",
        backgroundColor: "#F44336",
        '&:hover': {
            backgroundColor: "#FF7961",
        },
    },
});

export default BreachDetails;