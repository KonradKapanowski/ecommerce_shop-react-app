import React from 'react';
import {Box, Typography} from "@material-ui/core";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "@material-ui/core/Link";

import useStyles from './style'


export function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Typography className={classes.firstText}>
                STAY CONNECTED
            </Typography>
            <Typography className={classes.secondText}>
                FIND US
            </Typography>
            <br/>
            <Box>
                <Link href='https://www.facebook.com/' color='primary'><FacebookIcon className={classes.logo} sx={{ fontSize: 40 }}/></Link>
                <Link href='https://twitter.com/'><TwitterIcon className={classes.logo} sx={{ fontSize: 40 }}/></Link>
                <Link href='https://www.linkedin.com/'><LinkedInIcon className={classes.logo} sx={{ fontSize: 40 }}/></Link>
                <Link href='https://www.youtube.com/' color='secondary'><YouTubeIcon className={classes.logo} sx={{ fontSize: 40 }}/></Link>
            </Box>
        </Box>
    );
}