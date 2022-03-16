import React from 'react';
import {Container, Typography, Box, Grid, Button } from "@material-ui/core";
import {Link} from 'react-router-dom';


import useStyles from './style';
import {CartItem} from "./CartItem/CartItem";

export function Cart({cart, handleUpdateCartQuantity, handleEmptyCart, handleRemoveFromCart}) {
    const classes = useStyles()

    const EmptyCart= () =>(
        <Box className={classes.emptyCart}>
        <Typography variant='subtitle2'>You have no items in your shopping cart,
        <Link to='/' className={classes.link} color='secondary'> start buying something!</Link>!
        </Typography>
            <Button variant='contained' color='secondary'><Link to='/' className={classes.link1}>GO TO PRODUCTS </Link></Button>
        </Box>
    )
    const FilledCart= () =>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ) )}
            </Grid>
            <Box className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <Box>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty cart</Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </Box>
            </Box>
        </>
)
    if(!cart.line_items) return "Loading..."

    return (
        <Container className={classes.container}>
            <Box className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
        </Container>
    );
}