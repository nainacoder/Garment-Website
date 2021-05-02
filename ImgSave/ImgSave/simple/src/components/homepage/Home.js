import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Tables from '../Product details/Table';
import Carousel from 'react-bootstrap/Carousel';
import '../Product details/table.css'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

let str1 = 'https://localhost:4499/Home/';



function Home() {

    const classes = useStyles();

    let temp1='';
  
    const URL = 'https://localhost:44363/api/Product';
        const [groups, setGroup] = React.useState([]);
        const [section1,setSection1] = React.useState([]);
        const [section2,setSection2] = React.useState([]);
        const [section3,setSection3] = React.useState([]);

        const options = {
            'headers': {
                'Content-Type': 'application/json',
            }
        }
    
    useEffect(() => {
            axios.get(URL, options)
                .then( (groups) => {
                   
                    setGroup(groups.data);
                    setSection1(groups.data['homeImages'][0]['homeImageDetails']);
                    setSection2(groups.data['homeImages'][1]['homeImageDetails']);
                    setSection3(groups.data['homeImages'][2]['homeImageDetails']);
                    
                })
                .catch( (error) => {
                    console.log(error);
                })
        }, [])

        const handleClick = () => {
                <Tables />
        }


     

    return (
        <div className='home'> 
                
                     

            {
                section1 &&
                
                <Carousel>  
                {section1.map( (row, index) => (
                         
                    <Carousel.Item interval={1000}>
                    {temp1 = str1+row.imagePath}
                        <Link to='/table'>
                        <img
                        className="carouselHeight"
                                src={temp1}
                        alt="First slide"
                        onClick={handleClick}/>
                        {console.log(" Image Path: ",str1+row.imagePath)}
                        </Link>
                    </Carousel.Item> 
                    
                ))}
                </Carousel>
            } 
          
            {section2 &&
            
               
            <div className="section3">

                    <Grid container spacing={2}>
                    {section2.map( (row, index) => ( 
                        <Grid item xs>
{console.log(str1+row.imagePath)}
                        <Paper className={classes.paper}><img className="Image_section2" src={str1+row.imagePath}/></Paper>
                        </Grid>
                    ))}
                    </Grid>
                </div>
            }


            {section3 &&
            
               
            <div className="section3">

                    <Grid container spacing={2}>
                    {section3.map( (row, index) => ( 
                        <Grid item xs>
                        <Paper className={classes.paper}><img className="Image_section2" src={str1+row.imagePath}/></Paper>
                        </Grid>
                    ))}
                    </Grid>
                </div>
            }
          
            </div> 
    )
}

export default Home

