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
    <h1 style={{textAlign: 'center'}}>Parcel Details</h1>
      <Card className={classes.root} mb={5}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {parcels.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Map />
    </div>
  );
}

export default ParcelID;
