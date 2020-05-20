import React from 'react';
import './App.css';
import {SongArchive} from "./features/songArchive/SongArchive";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "./materialui/theme";
import {TopMenu} from "./layout/TopMenu";
import {PlayersComponent} from "./layout/PlayersComponent";
import {GoogleAdsSmall} from "./ads/GoogleAdsSmall";

const useStyles = makeStyles({
  margin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <TopMenu/>

      <GoogleAdsSmall/>

      <PlayersComponent/>

      <div className={classes.margin}>
        <SongArchive/>
      </div>

      {/*曲のカスタマイズ機能はお蔵入り*/}
      {/*<Songs/>*/}

      <GoogleAdsSmall/>
    </>
  );
}

export default App;
