import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Toolbar = ({sortByName, sortByCount, setKeyword, setVisibilityFilter}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button 
                onClick={() => {
                    sortByName()
                }}
                className={classes.itemTopLeft}
            >
            Filter by name
            </Button>
            <Button 
                onClick={() => {
                    sortByCount()
                }}
                className={classes.itemTopCenter}
            >
            Filter by count
            </Button>
            <Button
                onClick={() => {
                    setVisibilityFilter("SHOW_VERIFIED")
                }}
                className={classes.itemTopRight}
            >
            Show verified
            </Button>
            <Button 
                onClick={() => {
                    setVisibilityFilter("SHOW_ALL")
                }}
                className={classes.itemBottomLeft}
            >
            Show all
            </Button>

            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    setKeyword(e.target[0].value)
                }}
                className={classes.itemBottomRight}
            >
                <TextField label="Search..." />
                <Button className={classes.button} type="submit">
                    Search
                </Button>
            </form>
        </div>
    )
}


const useStyles = makeStyles({
    '@global': {
        '.makeStyles-itemBottomRight-15 > .MuiFormControl-root.MuiTextField-root': {
            marginTop: '-16px'
        }
    },
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gridColumnSpacing: "1em",
        marginTop: '1em',
        marginBottom: '1em',
        "@media (min-width: 780px)" : {
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "1fr",
        }
    },
    itemBottomRight: {
        gridRowStart: '2',
        gridColumn: '4 / span 7',
        color: "#ffffff",
        "@media (min-width: 780px)" : {
            gridColumn: '5',
            gridRowStart: '1'
        }
    },
    itemBottomLeft: {
        gridRowStart: '2',
        gridColumn: '1 / span 3',
        color: "#ffffff",
        "@media (min-width: 780px)" : {
            gridColumn: '4',
            gridRowStart: '1'
        }
    },
    itemTopLeft: {
        gridRowStart: '1',
        gridColumn: '1 / 3',
        color: "#ffffff",
        "@media (min-width: 780px)" : {
            gridColumn: 'auto'
        }
    },
    itemTopCenter: {
        gridRowStart: '1',
        gridColumn: '3 / 5',
        color: "#ffffff",
        "@media (min-width: 780px)" : {
            gridColumn: 'auto'
        }
    },
    itemTopRight: {
        gridRowStart: '1',
        gridColumn: '5 / 7',
        color: "#ffffff",
        "@media (min-width: 780px)" : {
            gridColumn: 'auto'
        }
    },
    button: {
        color: "#000000",
        backgroundColor: "#3949ab",
        '&:hover': {
            backgroundColor: "#627d98",
        },
    },
});

export default Toolbar;