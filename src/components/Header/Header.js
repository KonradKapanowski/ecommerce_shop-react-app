import React  from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography, Icon, Box} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import logo from '../../assets/Shop.png'
import useStyles from './styles'
import {Link, matchPath, useLocation} from 'react-router-dom'
import {height} from "@mui/system";



export function Header({totalItems}) {
    const classes = useStyles();
    const location = useLocation();
    const match = matchPath({path: '/'},location.pathname)



    return (
        <div className={classes.container}>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="e-commerce" className={classes.image}/>
                        CONDI
                    </Typography>
                    <Box className={classes.grow}/>
                    { match && (
                        <Box className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                                <Badge badgeContent={totalItems} color="secondary" >
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
// #F2F4FF
//