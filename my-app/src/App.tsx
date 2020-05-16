import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/songArchive/SongArchive";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "./materialui/theme";
import {TopMenu} from "./layout/TopMenu";
import {PlayersComponent} from "./layout/PlayersComponent";

const useStyles = makeStyles({
  margin: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div>
        <TopMenu/>

        <PlayersComponent/>
        {/*<div className={classes.margin}>*/}
        {/*  <AudioPlayerComponent/>*/}
        {/*  <ExamKamiShimoComponent/>*/}
        {/*  <ExamShimoKamiComponent/>*/}
        {/*</div>*/}

        <div className={classes.margin}>
          <SongArchive/>
        </div>

        <Songs/>
      </div>
    </div>
  );
}

export default App;
