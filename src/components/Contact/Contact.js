import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Mail from "@material-ui/icons/Mail";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from "@material-ui/core/Button";
import useStyles from './style';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import emailjs from '@emailjs/browser';
import Iframe from 'react-iframe'


const USER_ID = process.env.REACT_APP_EMAIL_USERID
const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICEID
const TEMPLATES_ID = process.env.REACT_APP_EMAIL_TEMPLATE

const GOOGLE_API = process.env.REACT_APP_GOOGLE_API
const url = `https://www.google.com/maps/embed/v1/place?q=New%20York%20%2C%20Nowy%20JorGrand%20Army%20Plaza%20Flatbush%20Ave%2C%20Brooklyn%2C%20NY%2011238%2C%20Stany%20Zjednoczonek%2C%20Stany%20Zjednoczone&key=${GOOGLE_API}`


export function Contact() {
    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATES_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                return alert('SUCCESSFUL!')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className={classes.divContainer} >
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={12} sm={9} md={9} lg={6}>
                        <div className={classes.paper}>
                            <Typography component="div">
                                <Box fontSize={30} fontWeight={600} m={-2}>
                                    CONTACT US
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <br/>
                                <Box fontSize={16} m={1} >
                                    <a style={{textDecoration:"none", color:'black', display: 'flex', alignItems: 'center'}} href='tel://+12025550189'><PhoneIcon/> <p>+1-202-555-0189 </p> </a>
                                </Box>
                                <Box fontWeight={600} textAlign='center'>
                                    OR SEND MESSAGE
                                </Box>
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={sendEmail}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={9}>
                                        <TextField
                                            className={classes.inputF}
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><AlternateEmailIcon color="disabled"/></InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="name"
                                            label="Name"
                                            type='text'
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><AccountBoxIcon color="disabled" /></InputAdornment>,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <TextField
                                            variant="outlined"
                                            multiline
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="message"
                                            label="Message"
                                            type='text'
                                            rows={5}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start"><Mail color="disabled" /></InputAdornment>,
                                            }}
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
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9} md={9} lg={6}>
                        <div className={classes.paper}>
                            <Typography component="div">
                                <Box fontSize={30} fontWeight={600} m={-2}>
                                    YOU CAN ALSO
                                </Box>
                                <br/>
                                <Box fontWeight={600} textAlign='center'>
                                    VISIT US
                                </Box>
                            </Typography>
                            <Box className={classes.form} >
                                <Iframe
                                    url={url}
                                    width='100%'
                                    height='465px'
                                    loading='lazy'
                                />
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}