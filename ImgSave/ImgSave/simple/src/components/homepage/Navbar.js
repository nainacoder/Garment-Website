import React,{ useState, useEffect } from 'react'
import {AppBar} from '@material-ui/core' 
 import {Link} from 'react-router-dom'
import './Navbar.css';
import axios from 'axios'
//import Main from '../SignUP/Main'
//import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import { Modal, Button } from "react-bootstrap";



function Header(){

        let temp=[];
        const URL = 'https://demo2946218.mockable.io/getall_api';
            const [groups, setGroup] = React.useState([]);
            const options = {
                'headers': {
                    'Content-Type': 'application/json',
                }
            }
        
        useEffect(() => {
                axios.get(URL, options)
                    .then( (groups) => {
                        console.log("Data in groups : ",groups.data['allProductDetails'][0]['productDetails'][0]['categoryNames'][0]);
                        setGroup(groups.data['allProductDetails'][0]['productDetails'][0]['categoryNames']);
                       
                    })
                    .catch( (error) => {
                        console.log(error);
                    })
            }, [])

 
        const [showModal, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

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
    
    return (
      <div className="header">
      <AppBar className="container">
          <div className="row v-center">
              <div className="header-item item-left">
                  <div className="logo">
                      <Link to='/#'>MADSSS</Link >
                  </div>
              </div>
              {/* <!-- menu start here --> */}
              <div className="header-item item-center">
                  <div className="menu-overlay">
                  </div>
                  <nav className="menu">
                     
               
              <ul className="main-menu">
              <li className="menu-item-has-children">
                        <Link to="/#">MEN</Link >
                        <div className="sub-menu mega-menu mega-menu-column-4">
                          <div className="list-item">
                          {console.log("Value of groups above map: ",groups[0])}
                        
                          {groups.map( (row, index) => (  
                           <>
                                {console.log("Value of cname: ",row.cname)}
                                <h4 className="title">{row.cname}</h4>
                                <ul>

                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                          </>     

                          ))}
                                
                                
                          </div>
                          <div className="list-item">
                              <h4 className="title">Formals</h4>
                              <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                              
                          </div>
                          <div className="list-item">
                              <h4 className="title">Our Collection</h4>
                              <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                    </div>
                   
                  </div>
                </li>
                <li className="menu-item-has-children">
                        <Link to='/#'>WOMEN</Link >
                        <div className="sub-menu mega-menu mega-menu-column-4">
                          <div className="list-item">
                                <h4 className="title">TopWear</h4>
                                <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                              
                          </div>
                          <div className="list-item">
                              <h4 className="title">Formals</h4>
                              <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                                
                          </div>
                          <div className="list-item">
                              <h4 className="title">Our Collection</h4>
                              <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                    </div>
                   
                  </div>
                </li>
                <li className="menu-item-has-children">
                        <Link to='/#'>KIDS</Link >
                        <div className="sub-menu mega-menu mega-menu-column-4">
                          <div className="list-item">
                                <h4 className="title">TopWear</h4>
                                <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                               
                          </div>
                          <div className="list-item">
                              <h4 className="title">Formals</h4>
                              <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                               
                          </div>
                          <div className="list-item">
                              <h4 className="title">Our Collection</h4>
                              <ul>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                     <li><Link to='/#'>Product List</Link ></li>
                                </ul>
                    </div>
                   
                  </div>
                  
                </li>
                <li class="menu-item-has-children header-item item-right" >
                <Link to="/#">LOGIN/SIGNUP</Link>
                        <div class="sub-menu single-column-menu">
                                <ul>
                                <div className="button">
                                <Button  variant="contained" color="primary" onClick={handleShow}>LOGIN</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Modal show={showModal} onHide={handleClose}>
                                <Modal.Header closeButton id="modalclose">
                                <Modal.Title>Log In </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className="bck-img">
                                <div className="style">
                                                        
                                        <br />
                                        {/* <AccountCircleRoundedIcon fontSize="small" style={{height:50,width:50}} /> */}
                                        <form >
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
                                        </form>
                                        </div>
                                        </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="primary" onClick={handleClose}>
                                        Log In
                                        </Button>
                                        </Modal.Footer>
                                </Modal>
                                <Button variant="contained" color="secondary"  >SIGNUP</Button>
                                </div>
                                </ul>
                        </div>
                </li>
              </ul>
            </nav>
          </div>
         
          
         <div class="header-item item-right">
           <Link to='/#'><i className="fa fa-search"></i></Link >&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/#'><i className="fa fa-heart"></i></Link >&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/#'><i className="fa fa-shopping-cart"></i></Link >&nbsp;&nbsp;&nbsp;&nbsp;
           
        </div>
        </div>
      </AppBar>
      </div>
    )
  
}
export default Header




