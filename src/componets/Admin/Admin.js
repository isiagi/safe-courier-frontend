import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Link as Linking} from 'react-router-dom'
import Nav from '../Navbar/Navbar'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Parcel() {

  const [parcels, setParcels] = useState([])
  const classes = useStyles();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://safecourie.herokuapp.com/api/v1/parcels", {
        method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const items = await data.json();
    console.log(items);

    setParcels(items.message)
  };
  console.log(parcels);

  return (
    <React.Fragment>
    <Nav />
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
         <p></p>
         <h4 style={{textAlign: 'center', fontSize: '30px'}}>Admin Page</h4>
         <p>Note : If you are not an admin, You can only view your parcels on this page</p>
          <Grid container spacing={4}>

            {parcels === 'No Parcel Availiable' ? 'No Parcel Availiable' : parcels.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card} key={card._id}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.description}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                     <Linking to={`/parcels/${card._id}`}>View</Linking>
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}