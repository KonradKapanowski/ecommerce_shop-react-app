import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';
import useStyles from './style'

export default function Login() {
    const classes = useStyles();


    return (
        <div className={classes.divContainer} >
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="div">
                            <Box fontSize={30} fontWeight={600} m={-2}>
                                SIGN IN
                            </Box>
                        </Typography>
                        <Typography component="div">
                            <Box fontSize={16} m={1} >
                                Sign into your account
                            </Box>
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={9}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                </Grid>
                                <Grid item xs={9} >
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        className={classes.submit}
                                        m={0}
                                    >
                                        Sign In
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2" >
                                        Forgot your password?
                                    </Link>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography component="div">
                                        <Box fontSize={20} m={3}>
                                            <Link href="#" >
                                                YOU DO NOT HAVE AN ACCOUNT?
                                            </Link>
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.signup}
                                        m={-1}
                                    >
                                        SIGN UP
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
        </div>
    );
}