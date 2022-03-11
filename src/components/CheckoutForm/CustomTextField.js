import React from 'react';
import { TextField, Grid} from "@material-ui/core";
import {useFormContext, Controller} from "react-hook-form";

export function FormInput({name, label, required, onChange}) {
    const {control} = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render={() =>
                    <TextField
                        defaultValue=''
                        control={control}
                        name={name}
                        label={label}
                        required={required}
                        fullWidth
                        onChange={onChange}/>}
             name=''/>
        </Grid>
    );
}