import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';



const Header = () => {
    const classes = useStyles();
  
return (
    <div >
      <AppBar >
        <Toolbar className={classes.root} >
            <div>
                <Link to='/' style={{
                   textDecoration:'none'
                }}>
                <Button className={classes.style}> 
               <h1>Loja de celulares </h1> 
                </Button>
                </Link>
              
            </div>

            <div className={classes.avatar}>

               <AccountCircleIcon alt="Remy Sharp" src="/broken-image.jpg"></AccountCircleIcon>
                <Link to='/login' style={{
                    textDecoration:'none'
                }}>
                <Button className={classes.style}>Entre</Button>
               </Link>
                <Typography className={classes.style}>
                       ou
                </Typography>
                <Link to='/register' style={{
                    textDecoration:'none'
                }}>
                <Button className={classes.style}>cadastra-se</Button>
               </Link>
               <Link to='/shopcart' style={{
                    textDecoration:'none'
                }}>
               <Button className={classes.style}>
               <ShoppingCartIcon />
               </Button>
               </Link>
              
               

            </div>   

                </Toolbar>
            </AppBar>

    </div>
) }

export default Header;



