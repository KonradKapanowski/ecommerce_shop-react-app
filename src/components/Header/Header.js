import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography, Box, Button, MenuList} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import logo from '../../assets/Shop.png'
import useStyles from './styles'
import {Link, matchPath, useLocation} from 'react-router-dom'
import {stack as Menu} from 'react-burger-menu'
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const  styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        right: '10px',
        transform: 'translateY(-50%)'

    },
    bmBurgerBars: {
        background: '#fff'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '30px',
        width: '30px',
        fontWeight: 700,
    },
    bmCross: {
        background: '#fff',
        width: '5px',
        height:'25px'
    },
    bmMenuWrap: {
        position: 'fixed',
        top: '76.8px',
        height: '100%'
    },
    bmMenu: {
        background: 'gray',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        overflowY: 'hidden'
    },

    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block',
        width: '100%'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}



export function Header({totalItems}) {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }
    const classes = useStyles();
    const location = useLocation();
    const match = matchPath({path: '/'},location.pathname)

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
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
                    <Button component={Link} to='/login' className={classes.login}>LOGIN</Button>
                    <Menu right styles={styles} isOpen={isOpen}
                          onOpen={handleIsOpen}
                          onClose={handleIsOpen}>
                        <MenuList>
                            <MenuItem className={classes.menuItem} component={Link} to='/' onClick={closeSideBar}> <HomeIcon fontSize="large" sx={{marginRight: 5}}/> Home</MenuItem>
                            <MenuItem className={classes.menuItem} component={Link} to='/contact'  onClick={closeSideBar}> <ContactPageIcon fontSize="large" sx={{marginRight: 5}}/>Contact</MenuItem>
                            <MenuItem className={classes.menuItem} component={Link} to='/login'  onClick={closeSideBar}> <LockIcon fontSize="large" sx={{marginRight: 5}}/> LOGIN</MenuItem>
                        </MenuList>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}