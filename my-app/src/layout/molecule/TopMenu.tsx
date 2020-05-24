import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {useLocation} from "react-router";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";
import {myUrl} from "../Urls";
import {resetSong} from "../../slice/song/songSlice";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export function TopMenu() {

  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch()

  console.log('location is ', location.pathname)
  const isTopPage = () => {
    return location.pathname === '/'
  }

  const goBack = () => {
    dispatch(resetSong())
    dispatch(push(myUrl.topPage))
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!isTopPage() && (
            <IconButton onClick={goBack}
                        component="span">
              <ArrowBackIcon/>
            </IconButton>
          )}

          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            はんなり百人一首
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

