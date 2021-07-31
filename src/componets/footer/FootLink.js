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

function FootLink({header, linkOne, linkTwo, linkThree, linkFour}) {
    const classes = useStyles();
    console.log(linkOne)

    const pageTo = (page) => {
        let day;
        switch(page){
            case 'Home':
                 day = "hello";
                 break;
            case 'Contant Us':
                day = 'hey there';
                break;
            default:
                day = 'hey'
        }
        console.log(day)
        return day
    }
    return (
        <div>
           <Box className={classes.supoortBox}>
          <h5>{header}</h5>
          <Link to={pageTo(linkOne)} className="supportLink">{linkOne}</Link>
          <Link to="/#" className="supportLink">{linkTwo}</Link>
          <Link to="/#" className="supportLink">{linkThree}</Link>
          <Link to="/#" className="supportLink">{linkFour}</Link>
          </Box>
        </div>
    )
}

export default FootLink
