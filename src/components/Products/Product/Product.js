import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

import useStyles from './style'

export function Product({product, onAddToCart}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia image={product.image.url} title={product.name} className={classes.media}/>
            <CardContent>
                <Box className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom className={classes.name}>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </Box>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant='body2' color='textSecondary' className={classes.description}/>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={(() => onAddToCart(product.id, 1))}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    );
}