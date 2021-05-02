import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { Button } from './Button';
// import { Button } from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import './Navbar2.css';
import './Navbar.css';
import { AppBar } from '@material-ui/core'
import TextField from "@material-ui/core/TextField";
import PersonIcon from '@material-ui/icons/Person';
import { Modal, Button } from "react-bootstrap";
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import { Tabs } from "@feuer/react-tabs";
import "./styletab.css";




function Navbar() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

//Modal
    const [showModal1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => {
        setShow1(true);
        console.log("showModal1 on handle click",showModal1)
    }


   
    const [Email, setEmail] = useState("");
    const [Password, setPwd] = useState("");



    const emailChangeHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        console.log(e.target.value);
        setPwd(e.target.value);
    };



    const URL1 = 'https://localhost:44363/api/Product';

    const URL2 = '';

    const [category,setCategory] = useState([]);
  
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    
    useEffect(() => {
            axios.get(URL1, options)
                .then( (groups) => {
                   
                    
                    setCategory(groups.data['categoryNames']);
                    
                   
                    
                })
                .catch( (error) => {
                    console.log(error);
                })
        }, [])

       
        let str='';
        

        const handleCall = (catName,subCatName,pName,pid) => {
            let name = catName+pName;
            <Link to= {"/"+catName+pName}>
             <name pid={pid}/>
                
         
                {console.log("name",name)}
                {console.log("PID: ", pid)}
                {console.log(catName,subCatName,pName)}
                </Link>
            }

        
           

    return (
        <>
            <div className="header">
            {console.log("Category names:  ", category)}
                <AppBar className="container">
                    <div className="row v-center">

                        <nav className='navbar'>
                            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                                MADSSS
                            <i class='fa fa-firstdraft' />
                            </Link>
                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                            </div>
                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            {/* <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                </Link>
                            </li> */}
                            {/* map goes here */}
                            {category.map( (row, index) => ( 

                                    <div className="header-item item-center">
                                    <div className="menu-overlay">
                                    </div>
                                    <nav className="menu">
                                    <ul className="main-menu">
                                    <li className="menu-item-has-children nav-item">
                                        <Link to='/' className='nav-links linknav' onClick={closeMobileMenu}>
                                            {row.catName}
                                    </Link>
                                        <div className="sub-menu mega-menu mega-menu-column-4">       
                                             
                                           
                                            {row['subCategoryNames'].map( (row1, index) => ( 
                                                <>
                                                <div className="list-item">  
                                                <h4 className="title">{row1.subCatName}</h4>
                                                {row1['productName'].map( (row2, index) => (
                                                    <>
                                                    <ul>   
                                                
                                                      <li onClick={()=>handleCall(row.catName,row1.subCatName,row2.pName.replace(/\s/g,''),row2.pid)}><Link to={"/"+row.catName+"-"+row1.subCatName+"-"+row2.pName.replace(/\s/g,'')}>{row2.pName}</Link ></li>
                                                     
                                                       
                                                    </ul>
                                                    </>
                                                    
                                            ))}  
                                            <hr></hr> 
                                            </div>    
                                                </>
                                                ))}
                                        </div>                                        
                                    </li>
                                    </ul>
                                    </nav>
                                    </div>
                                    ))}

                        <div className="header-item item-center">
                        <div className="menu-overlay">
                        </div>
                        <nav className="menu">
                        
    
                        <ul className="main-menu">
                        <li className="menu-item-has-children nav-item">


                        <Link className="linknav" onClick={handleShow1}><PersonIcon/></Link>
                           <Modal className="modal" show={showModal1} onHide={handleClose1}>
                                {console.log("showModal1",showModal1)}
                                
                                <Modal.Body className="modalstyle">
                                   
                                        <div className="style">

                                            <br />
                                            <Paper square className="App">

                                            <Tabs 
                                                className="tabstyle"
                                                tabsProps={{
                                                style: {
                                                    textAlign: "center",
                                                   
                                                }
                                                }}
                                                activeTab={{
                                                id: "tab1"
                                                }}
                                            >
                                                <Tabs.Tab id="tab1" title="Sign In">
                                                <div style={{ padding: 10 }}>
                                                <form className='formstyle'>
                                                <TextField
                                                    className="textfield"
                                                    type="email"
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    value={Email}
                                                    onChange={(e) => {
                                                        emailChangeHandler(e);
                                                    }}
                                                />{" "}
                                                <br></br>
                                                <br></br>
                                            &nbsp;
                                            <TextField
                                                    className="textfield"
                                                    type="password"
                                                    id="outlined-basic"
                                                    label="Password"
                                                    variant="outlined"
                                                    value={Password}
                                                    onChange={(e) => {
                                                        passwordChangeHandler(e);
                                                    }}
                                                />
                                                <br></br>
                                                <br></br>
                                                <button className='btnsubs'>Sign In</button>
                                            </form>
                                   
                                                </div>
                                                </Tabs.Tab>
                                                <Tabs.Tab id="tab2" title="Register">
                                                <div style={{ padding: 10 }}>

                                                <form className='formstyle'>
                                                <TextField
                                                    className="textfield"
                                                    type="email"
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    value={Email}
                                                    onChange={(e) => {
                                                        emailChangeHandler(e);
                                                    }}
                                                />{" "}
                                                <br></br>
                                                <br></br>
                                            &nbsp;
                                            <TextField
                                                    className="textfield"
                                                    type="password"
                                                    id="outlined-basic"
                                                    label="Password"
                                                    variant="outlined"
                                                    value={Password}
                                                    onChange={(e) => {
                                                        emailChangeHandler(e);
                                                    }}
                                                />{" "}
                                                <br></br>
                                                <br></br>
                                            &nbsp;
                                            <TextField
                                                    className="textfield"
                                                    type="password"
                                                    id="outlined-basic"
                                                    label="Confirm Password"
                                                    variant="outlined"
                                                    value={Password}
                                                    onChange={(e) => {
                                                        passwordChangeHandler(e);
                                                    }}
                                                />
                                                <br></br>
                                                <br></br>
                                                <button className='btnsubs'>Register</button>
                                            </form>

                                                </div>
                                                </Tabs.Tab>
                                            </Tabs>
                                          
                                            </Paper>
                                       
                         
                                        </div>
                                    
                                </Modal.Body>
                                </Modal>
                      
                                <Link to='/#' className='nav-links'><i className="fa fa-search nav-links"></i></Link >


                                <Link to='/#' className='nav-links'><i className="fa fa-shopping-cart nav-links"></i></Link >
                            </li>

                            </ul>
                                        </nav>

                                    </div>
                                    </ul>

                                    </nav>
                                    </div>
                </AppBar>
            </div>
        </>
    );
}

export default Navbar

