import React, { useState, useEffect } from "react";
import Map from "../Dispaly/Map/Map";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Nav from "../Navbar/Navbar";
import imag from '../images/1.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 30,
  },
  media: {
    height: 140,
  },
});

function ParcelID({ match }) {
  const classes = useStyles();

  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    fetchItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(match);

  const fetchItems = async () => {
    const data = await fetch(
      `https://safecourie.herokuapp.com/api/v1/parcels/${match.params.id}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const items = await data.json();
    console.log(items);
    setParcels(items.message);
  };
  console.log(parcels);

  return (
    <div>
      <Nav />
      <h1 style={{ textAlign: "center" }}>Parcel Details</h1>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: 'wrap' }}>
        <Card className={classes.root} mb={5}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imag}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {parcels.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {parcels.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Thanks from @safe courier
            </Button>
          </CardActions>
        </Card>
        <div>
          <h1 style={{ textDecoration: "underLine" }}>Parcel Summary</h1>
          <h3>Title : {parcels.title}</h3>
          <h3>Description : {parcels.description}</h3>
          <h3>Pick Up : {parcels.pick}</h3>
          <h3>Destination : {parcels.destination}</h3>
          <h3>Status : {parcels.status}</h3>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default ParcelID;
