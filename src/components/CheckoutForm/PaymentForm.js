import React from 'react';
import {Typography, Button, Divider, Box} from "@material-ui/core";
import { Elements, CardElement, ElementsConsumer} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js'
import {Review} from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export function PaymentForm({checkoutToken, backStep, shippingData, onCaptureCheckout ,nextStep}) {
    const handleSubmit = async (event, elements, stripe) =>{
        event.preventDefault();

        if(!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement})

        if(error){
            console.log(error)
        }else{
            const orderData = {
                line_items: checkoutToken.live.line_items,
                customer: {
                    firstname: shippingData.name,
                    lastname: shippingData.lastname,
                    email: shippingData.email
                },
                shipping: {
                    name: 'International',
                    street: shippingData.address,
                    town_city:shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zipcode,
                    country: shippingData.shippingCountry
                },
                fulfillment: { shipping_method: shippingData.shippingOption},
                payment: {
                    gateway: 'stripe',
                    stripe: {
                        payment_method_id: paymentMethod.id
                    }
                }
            }
            onCaptureCheckout(checkoutToken.id, orderData);
            nextStep();
            console.log(orderData)
        }

    };
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider/>
            <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>Payment method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <form onSubmit={(event) => handleSubmit(event, elements, stripe)}>
                            <CardElement/>
                            <br/> <br/>
                            <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Button variant='contained' color='secondary' onClick={backStep}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                                </Button>
                            </Box>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
}