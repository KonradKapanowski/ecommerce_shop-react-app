import React, {useState , useEffect}from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography, Box} from "@material-ui/core";
import { useForm, FormProvider} from "react-hook-form";
import {FormInput} from "./CustomTextField";
import {Link} from 'react-router-dom'

import {commerce} from "../../lib/commerce";



export function AddressForm({checkoutToken, next }) {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState(' ');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name}))
    const options = shippingOptions.map((sO)=> ({id: sO.id, label:`${sO.description} - (${sO.price.formatted_with_symbol})`}) )

    const fetchSippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubdivisions = async(countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region: stateProvince});

        setShippingOptions(options);
        setShippingOption(options[0].id)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        next({shippingCountry, shippingSubdivision, shippingOption, name, lastname, address,email,city, zipcode });
    }


    useEffect(() => {
            fetchSippingCountries(checkoutToken.id);

    }, []);

    useEffect(() => {
            if(shippingCountry) {fetchSubdivisions(shippingCountry)}

    }, [shippingCountry]);

    useEffect(() => {
            if(shippingSubdivision) {fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)}

    }, [shippingSubdivision]);

    return (
        <>
            <Typography variant='h6' gutterBottom> Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name' onChange={e => setName(e.target.value)}/>
                        <FormInput required name='lastName' label='Last name' onChange={e => setLastName(e.target.value)}/>
                        <FormInput required name='address' label='Address' onChange={e => setAddress(e.target.value)}/>
                        <FormInput required name='email' label='Email' onChange={e => setEmail(e.target.value)}/>
                        <FormInput required name='city' label='City' onChange={e => setCity(e.target.value)}/>
                        <FormInput required name='zipcode' label='ZIP / Postal code' onChange={e => setZipcode(e.target.value)}/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select  defaultValue = "" fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map(country => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select  defaultValue = "" fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map(subdivision => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select  defaultValue = ""  fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br/>
                    <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to='/cart' variant='contained' color='secondary'>Back to Cart</Button>
                        <Button type='submit'  variant='contained' color='primary'>Next</Button>
                    </Box>
                </form>
            </FormProvider>
        </>
    );
}