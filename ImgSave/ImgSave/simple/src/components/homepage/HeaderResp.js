// import React, { useState } from 'react';
// import Paper from '@material-ui/core/Paper';
// import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import { PlayCircleFilledWhite } from '@material-ui/icons';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import HttpsIcon from '@material-ui/icons/Https';
// import Login from './Login';
// import { Link } from 'react-router-dom';
// import Modal from '@material-ui/core/Modal';
// import TextField from "@material-ui/core/TextField";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const StyledMenu = withStyles({
//     paper: {
//       border: '1px solid #d3d4d5',
//     },
//   })((props) => (
//     <Menu
//       elevation={0}
//       getContentAnchorEl={null}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'center',
//       }}
//       {...props}
//     />
//   ));


//   const StyledMenuItem = withStyles((theme) => ({
//     root: {
//       '&:focus': {
//         backgroundColor: theme.palette.primary.main,
//         '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//           color: theme.palette.common.white,
//         },
//       },
//     },
//   }))(MenuItem);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: 'primary',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   toolbar: {
//     minHeight: 128,
//     alignItems: 'flex-start',
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     alignSelf: 'flex-end',
//   },
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   }, 
// }));



// export default function Header() {


    
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
//    const classes = useStyles();

 
//     const handleLogin = () => {  
//       <Login />
//    }


//    const [modalStyle] = React.useState(getModalStyle);
//    const [open, setOpen] = React.useState(false);
//    const [Email, setEmail] = useState("");
//     const [Password, setPwd] = useState("");
  
//     const emailChangeHandler = (e) => {
//       console.log(e.target.value);
//       setEmail(e.target.value);
//     };
  
//     const passwordChangeHandler = (e) => {
//       console.log(e.target.value);
//       setPwd(e.target.value);
//     };
  
//     const loginHandler = (e) => {
//       console.log(e.target.value);
//       alert("You're Logged In!");
//       // history.push('/search/')
//     };
 
//    const handleOpen = () => {
//      setOpen(true);
//    };
 
//    const handleCloseModal = () => {
//      setOpen(false);
//    };
 
//    const body = (
//      <div style={modalStyle} className={classes.paper}>
//      <div className="bck-img">
//     <div className="style">
     
//         <br />
//           <AccountCircleRoundedIcon fontSize="large" style={{height:100,width:100}} />
//         <form className={classes.root}>
//           <TextField
//             className="textfield"
//             type="email"
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             value={Email}
//             onChange={(e) => {
//               emailChangeHandler(e);
//             }}
//           />{" "}
//           &nbsp;
//           <TextField
//             className="textfield"
//             type="password"
//             id="outlined-basic"
//             label="Password"
//             variant="outlined"
//             value={Password}
//             onChange={(e) => {
//               passwordChangeHandler(e);
//             }}
//           />
//           <br />
//           <div className="btn1">
//             <Button
//             style={{marginLeft:150, marginTop:10}}
//               className="btn1"
//               variant="contained"
//               color="primary"
//                onClick={(e)=>{loginHandler(e)}}
//                href="/search"           > 
//               Login
//             </Button>
//           </div>
//         </form>
  
//     </div>
//     </div>

//      </div>
//    );

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="white">
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="default"
//             aria-label="open drawer"
      
//           >
//             <MenuIcon />
//           </IconButton>
     
//           <Button className={classes.title} variant="h5" noWrap onMouseEnter={handleClick}>
//             Men
//           </Button>
          

//           <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onMouseDown={handleClose}
//       >
//         <StyledMenuItem >
//           <ListItemText primary="Jeans" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shirt" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shorts" />
//         </StyledMenuItem>
//       </StyledMenu>


//           <Button className={classes.title} variant="h5" noWrap onMouseEnter={handleClick}>
//             Women
//           </Button>


//           <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onMouseDown={handleClose}
//       >
//         <StyledMenuItem >
//           <ListItemText primary="Jeans" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shirt" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shorts" />
//         </StyledMenuItem>
//       </StyledMenu>


//           <Button className={classes.title} variant="h5" noWrap onMouseEnter={handleClick}>
//             Kids
//           </Button>


//           <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onMouseDown={handleClose}
//       >
//         <StyledMenuItem >
//           <ListItemText primary="Jeans" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shirt" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shorts" />
//         </StyledMenuItem>
//       </StyledMenu>

//           <Button className={classes.title} variant="h5" noWrap onMouseEnter={handleClick}>
//             Sales
//           </Button>

//           <StyledMenu
//         id="customized-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onMouseDown={handleClose}
//       >
//         <StyledMenuItem >
//           <ListItemText primary="Jeans" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shirt" />
//         </StyledMenuItem>
//         <StyledMenuItem >
//           <ListItemText primary="Shorts" />
//         </StyledMenuItem>
//       </StyledMenu>


//       <IconButton aria-label="login" edge="end" color="default">     
       
//       <HttpsIcon onClick={handleOpen}/>
//           <Modal
//             open={open}
//             onClose={handleCloseModal}
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//           >
//           {body}
//           </Modal>
//       </IconButton>

        
//           <IconButton aria-label="search" color="default">
//             <SearchIcon />
//           </IconButton>
//           <IconButton aria-label="display more actions" edge="end" color="default">
//             <MoreIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import React from 'react';


function Header() {
  return (
    <div>
    <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand mr-auto" href="#"></a> 
            {/* Logo goes up here */}
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><a class="nav-link" href="#"><span class="fa fa-male fa-lg"></span> Men </a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html"><span class="fa fa-female fa-lg"></span> Women </a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><span class="fa fa-child fa-lg"></span> Kids </a></li>
                    <li class="nav-item"><a class="nav-link" href="./contactus.html"> Sales </a></li>
                </ul>
                <span class="navbar-text">
                    <a data-toggle="modal" data-target="#loginModal">
                    <span class="fa fa-sign-in"></span> Login</a>
                </span>
            </div>
            </div>  
            
    </nav>
    </div>
  );
}

export default Header


   