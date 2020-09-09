import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { Paper, TextField, Button,CircularProgress} from '@material-ui/core';
import BarChart from './barChart';
import PieChart from './pieChart';

//import NavBar from './NavBar';
//import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
 

  paper: {
   // height: 500,
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    padding : 15,
    marginTop : 50
  },

  input: {
    width: '100%',
    marginBottom: 15
  },

}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      
      <BarChart />
      <PieChart />
    
    </div>
  );
}

export default App;
