import React, { useState } from "react";
import {Redirect} from "react-router-dom"
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Nav from '../Navbar/Navbar'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function EditParcel({match}) {
  const [value, setValue] = useState({});
  const [redirect, setRedirect] = useState(null)
  const classes = useStyles();

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault();
    fetch(`https://safecourie.herokuapp.com/api/v1/parcels/${match.params.id}/edit`, {
      headers: { "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}` 
     },
      method: "PATCH",
      body: JSON.stringify({
        description: value.description,
        weight: value.weight,
        status: value.status,
        pick: value.pick,
        destination: value.destination,
      }),
    })
      .then((docs) => {
        console.log(docs)
        if (docs.ok) {
          return docs.json();
        }
        console.log("error");
      })
      .then(() => {
        setRedirect('/parcels');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(value);

  if(redirect){
    return <Redirect to={redirect} />
  }

  return (
    <>
    <Nav />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit Parcel
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="description"
                label="description"
                name="description"
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="weight"
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="weight"
                label="weight"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="status"
                label="status"
                name="status"
                type="text"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                name="pick"
                label="pick"
                type="text"
                id="pick"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                id="destination"
                label="destination"
                name="destination"
                type="text"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Parcel
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  </>
  );
}
