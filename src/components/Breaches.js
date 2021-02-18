import { useEffect } from 'react';
import { Button, AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import Toolbar from '../containers/Toolbar';
import Form from '../containers/BreachesForm';

const Breaches = ({breaches, loaded, getBreaches, sortByName, sortByCount, deleteBreachById, setVisibilityFilter, setKeyword}) => {
  useEffect(() => {
    if(!loaded){
      getBreaches()
    }
  }, [getBreaches, loaded])

  const classes = useStyles();

  const isMobile = useMediaQuery('(max-width:600px)');
  const isMidsized = useMediaQuery('(max-width:900px)');

  const columnModel = [
    {
      field: 'url',
      title: 'Logo',
      width: null,
      cellStyle: {
        width: 60,
        whiteSpace: 'nowrap',
        borderBottom: 0,
      },
      headerStyle: {
        width: 60,
      },
      hidden: isMobile ? true : false,
      render: rowData => (<img src={rowData.LogoPath} alt="logo" style={{maxHeight: 30, maxWidth: 60}}/>)
    },
    { title: 'Name', field: 'Name' },
    { title: 'Domain', field: 'Domain', hidden: isMobile ? true : isMidsized ? true : false },
    { 
      title: 'BreachDate',
      field: 'BreachDate',
      hidden: isMobile ? true : isMidsized ? true : false,
      render: rowData => (
        <p>{rowData.BreachDate.slice(0,10)}</p>
      )
    },
    { title: 'PwnCount', field: 'PwnCount'},
    {
      field: 'url',
      render: rowData => (
        <Button className={classes.button}>
          <Link to={rowData._id} style={{color: "#000000", textDecoration: "None"}}>Details</Link>
        </Button>
      )
    }
  ]

  return (
    <>
      <AppBar position="static" className={classes.navBar}>
        <Typography type="h2" className={classes.navText}>Data leaks database</Typography>
      </AppBar>
      <div className={classes.flexContainer}>
        <MaterialTable
          columns={columnModel}
          data={breaches}
          title="Demo Title"
          style={{
            backgroundColor: "#232423",
            color: "#ffffff",
            minWidth: "80vw",
            maxWidth: "99%",
            overflow: "auto",
            marginBottom: "2em",
            marginTop: "1em"
          }}
          isLoading={loaded ? false : true}
          className={classes.table}
          options={{
            headerStyle:{backgroundColor: "#232423", color: "#ffffff"},
            rowStyle: { 
              fontFamily: 'Roboto',
              color: "#ffffff",
            },
            cellStyle: {borderBottom: 0},
            sorting: false,
          }}
          actions={isMobile
            ? undefined
            : [{
                icon: 'delete',
                tooltip: 'Delete breach',
                onClick: (event, rowData) => deleteBreachById(rowData._id)
              }]
          }
          components={{
              Toolbar: props => (
                <Toolbar />
              )
          }}
        />
        <Form />
      </div>
    </>
  );
}

const useStyles = makeStyles({
    '@global': {
        'body' : {
            margin: 0,
            background: "#181918"
        },
        'td.MuiTableCell-root' : {
            borderBottom: 0,
            color: '#ffffff',
        },
        '.MuiIconButton-root.Mui-disabled': {
          color: "#ffffff"
        },
        '.MuiIconButton-root': {
          color: "#ffffff"
        },
        'span.MuiTypography-caption': {
          color: "#ffffff"
        },
        'svg.MuiTablePagination-selectIcon': {
          color: "#ffffff"
        }
    },
    flexContainer: {
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        flexDirection: 'column',
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
    navText: {
      padding: "1em",
      fontSize: "1.5em"
    },
    navBar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
});

export default Breaches;
