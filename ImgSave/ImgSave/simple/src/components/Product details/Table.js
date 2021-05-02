import React,{ useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './table.css'


const useStyles = makeStyles((theme) => ({
 


  paper: {
    height: 500,
    width: 300,
    padding: theme.spacing(8),
    textAlign: 'center',
    margin: 'auto',
    spacing: 10,
    color: theme.palette.text.secondary,
    direction: 'row',
    
  },
  imgg: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button:{
    margin: 'auto',
    top:20,
   
  },

}));
 
 function AutoGrid() {
  const classes = useStyles();

  
  let temp=[];
  const URL = 'https://demo0468203.mockable.io/body';

      const [groups, setGroup] = React.useState([]);
  
      const options = {
          'headers': {
              'Content-Type': 'application/json',
          }
      }
  
  useEffect(() => {
          axios.get(URL, options)
              .then( (groups) => {
                  console.log(groups.data);
                  setGroup(groups.data['Men'][0]['TopWear'][0]['Polo']);
                 
              })
              .catch( (error) => {
                  console.log(error);
              })
      }, [])
 
 
  return (

    

    <div className={classes.root} className="tab" >
    <Grid className={classes.grid} item xs={14} spacing={6} container spacing={30} columns={3}>
        {groups.map( (row, index) => (
          <Paper className={classes.paper}>
            <img className={classes.imgg} src={row.image} />

            {/* <p><small>Rs. </small><strong>{row.price}</strong></p>
            <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add to cart
      </Button> */}
            
          </Paper> 
          ))}
        </Grid>
    </div>
   
  );
}
export default AutoGrid