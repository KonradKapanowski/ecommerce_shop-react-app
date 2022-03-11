import React, { useState, useEffect }from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Box, Container} from "@material-ui/core";
import useStyles from './style'
import {AddressForm} from "../AddresForm";
import {PaymentForm} from "../PaymentForm";
import {commerce} from "../../../lib/commerce";
import {Link} from "react-router-dom";


const steps = ['Shipping address', 'Payment details']


export function Checkout({cart, order, error, onCaptureCheckout}) {
    const classes = useStyles()
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})


    useEffect(() => {
        let abortController = new AbortController();
        const generateToken = async () => {
            try{
                const token = await  commerce.checkout.generateToken(cart.id, {type: 'cart'})
                setCheckoutToken(token)
            }catch(error){

            }
        }
        if(!cart.id) return;
         generateToken();
        return () =>{
            abortController.abort();
        }
    }, [cart.id])

    const nextStep = () => setActiveStep(activeStep => activeStep + 1)

    const backStep = () => setActiveStep(activeStep => activeStep - 1)

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }


    let Confirmation = () => order.customer ? (
        <>
            <Box>
                <Typography variant='h4'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
                <br/>
                <Button component={Link} to='/' variant='contained' color='secondary' type='button'>Back to Home</Button>
            </Box>
        </>
    ) : (<Box className={classes.spinner}>
            <CircularProgress/>
         </Box>
         )
    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant='contained' color='secondary' type="button" to="/">Back to home</Button>
            </>
        );
    }
    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData = {shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} />

    return (
        <>
            <Box className={classes.toolbar}/>
            <Container className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant = 'h4' align='center'> Checkout </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step,index) => (
                            <Step key={index}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? < Confirmation /> : checkoutToken ? <Form /> : null}
                </Paper>
            </Container>
        </>
    );
}