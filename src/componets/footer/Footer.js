import React from 'react'
import {Box, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Facebook, Twitter, Instagram, LinkedIn, Email} from '@material-ui/icons'
import TextField from '@material-ui/core/TextField'
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
    }
  }));

function Footer() {
    const classes = useStyles();
    return (
      <>
      <Box className={classes.footer}>
      <Box className="footer__container">
          <Box>
              <h3>SafeCourier</h3>
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkedIn />
          </Box>
          <Box>
          <h5>support</h5>
          <p>Contant Us</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Help</p>
          </Box>
          <Box>
          <h5>SafeCourier</h5>
          <p>Home</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Capabilities</p>
          </Box>
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
