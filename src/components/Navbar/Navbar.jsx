import React from 'react'
import { AppBar,Typography,Toolbar } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link,useLocation } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position = "fixed" color = "inherit">
                <Toolbar>
                <Typography variant = "h6"  color = "inherit">Theeban's Full Stack Web Shop</Typography>            
                <div className = {classes.grow}></div>                
                <ShoppingCart/>
                </Toolbar>
            </AppBar>
        </div>
    )
}



export default Navbar

