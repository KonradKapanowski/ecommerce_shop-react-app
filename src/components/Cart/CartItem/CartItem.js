import React from 'react';
import {Typography, Button, Card, CardActions, CardContent, CardMedia, Box} from "@material-ui/core";

import useStyles from './style'

export function CartItem({ item, onRemoveFromCart, onUpdateCartQuantity }) {
    const classes = useStyles()

    return (
        <Card >
            <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.name}</Typography>
                <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <Box className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1 )}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1 )}>+</Button>
                </Box>
                <Button variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
}