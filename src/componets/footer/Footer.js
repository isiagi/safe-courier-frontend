import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Facebook, Twitter, Instagram, LinkedIn, Email} from '@material-ui/icons'
import TextField from '@material-ui/core/TextField'
import FootLink from './FootLink'
import './Footer.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    supoortBox: {
        display: 'flex', 
        flexDirection: 'column'
    },
  }));

function Footer() {
    const classes = useStyles();
    return (
      <>
      <Box className={classes.footer}>
      <Box className="footer__container">
          <Box>
              <h3>SafeCourier</h3>
                <Link to='https://www.facebook.com/'><Facebook /></Link>
                <Twitter />
                <Instagram />
                <LinkedIn />
          </Box>

        <FootLink 
          header="support" 
          linkOne="Contant Us" 
          linkTwo="FAQ" 
          linkThree="Terms and Conditions" 
          linkFour="Help"     
        />

        <FootLink 
          header="SafeCourier" 
          linkOne="Home" 
          linkTwo="About Us" 
          linkThree="Careers" 
          linkFour="Capabilities"     
        />
        
          <Box>
            <Email /><p>Stay up-to-date with the lastest from SafeCourier</p>
            <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Enter your email address" /> <br/>
      <Button variant="contained" color="secondary">Sign Up</Button>
    </form>
          </Box>
      </Box>
      </Box>
      </>
    )
}

export default Footer
