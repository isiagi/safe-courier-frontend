import React from 'react'
import {Link} from 'react-router-dom'
import {Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './Footer.css'

const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    supoortBox: {
        display: 'flex', 
        flexDirection: 'column'
    },
  }));

  const pageTo = (page) => {
    let day;
    switch(page){
        case 'Home':
             day = "/#";
             break;
        case 'Contant Us':
            day = '/#';
            break;
        case 'FAQ':
            day = '/#';
            break;
        case 'Terms and Conditions':
            day = '/#';
            break;
        case 'Help':
            day = '/#';
            break;
        case 'About Us':
            day = '/#';
            break;
        case 'Careers':
            day = '/#';
            break;
        case 'Capabilities':
            day = '/#';
            break;
        default:
            day = '/#'
    }
    return day
}

function FootLink({header, linkOne, linkTwo, linkThree, linkFour}) {
    const classes = useStyles();

    return (
        <div>
           <Box className={classes.supoortBox}>
          <h4>{header}</h4>
          <Link to={pageTo(linkOne)} className="supportLink">{linkOne}</Link>
          <Link to={pageTo(linkTwo)} className="supportLink">{linkTwo}</Link>
          <Link to={pageTo(linkThree)} className="supportLink">{linkThree}</Link>
          <Link to={pageTo(linkFour)} className="supportLink">{linkFour}</Link>
          </Box>
        </div>
    )
}

export default FootLink
