import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./navBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titl: {
    textDecoration: "none",
    color: "#fff",
  },
}));

export default function ButtonAppBar() {
  const [loged, setLoged] = useState(false);

  const classes = useStyles();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setLoged(true);
  };

  if(loged){
    return <Redirect to='/' />
}

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.titl}>
              Safe Courier
            </Link>
          </Typography>

          {!localStorage.getItem("token") ? (
            <Button color="inherit">
              <Link to="/login" className={classes.titl}>
                Login
              </Link>
            </Button>
          ) : (
            <>
            <Button color="inherit"><Link to={'/parcels'} className={classes.titl}>
          Home
              </Link></Button>
              <Button color="inherit"><Link to={'/admin'} className={classes.titl}>
          Admin
              </Link></Button>
            <Button color="inherit" onClick={handleLogOut}>
              Logout
            </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
