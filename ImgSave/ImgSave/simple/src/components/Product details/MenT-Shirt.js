import React,{ useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './table.css'
import Button from '@material-ui/core/Button'


 
const useStyles = makeStyles((theme) => ({
 


paper: {
background:'transparent',
height: 280,
overflow: 'hidden',
width: 300,
padding: theme.spacing(4),
textAlign: 'center',
spacing: 20,
color: 'transparent',
direction: 'row',
outline: 'none',
boxShadow: 'none',
overlay: 'hidden',
bottom: 20,
 
 },

 grid:{
     bottom:8000,
 },

imgg: {
height: 230,
width: 280,
display: 'block',
maxWidth: '100%',
padding: theme.spacing(1),
margin: 'auto',
 },

button:{
margin: 'auto',
top:20,
 
 },
 
 zoom: {
   transition:"transform 0s" ,
   margin: "auto",
   '&:hover':{
    transform : "scale(1.2)",
     },
 },
 
 
}));
 
 
function MenShirt( {pid} ) {
   
const classes = useStyles();
 
 

const URL = 'https://localhost:44363/api/Product/ProductList';
const [products, setProducts] = React.useState([]);
 
const options = {
'headers': {
'Content-Type': "application/json",
 }
 }
 
let str1 = 'https://localhost:4499/Product/';

useEffect(() => {
    let data = {
        "PID": 1
    }
    axios.post(URL,data)
    .then((response) => {
        console.log("Posted data here",response.data);
        setProducts(response.data);
        console.log("value in products", products);
    })
    .catch( (error) => {
        alert(error);
         })

},[])


 
return (
<div className='root' className='tab' >

<h1>Hello</h1>

<Grid className={classes.grid} item xs={14} spacing={9} container spacing={3} columns={3}>

{products.map( (row, index) => (

<Paper className={classes.paper} height={200}>
<div className={classes.zoom}>
<img className={classes.imgg} src={str1+row.imagePath} />

</div>
</Paper>
))}

</Grid>

</div>
 
 );
}
export default MenShirt