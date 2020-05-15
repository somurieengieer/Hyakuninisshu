import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/songArchive/SongArchive";
import {AudioPlayerComponent} from "./features/audio/AudioPlayerComponent";
import {ExamKamiShimoComponent} from "./features/memorize/ExamKamiShimoComponent";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "./materialui/theme";
import {ExamShimoKamiComponent} from "./features/memorize/ExamShimoKamiComponent";
import {TopMenu} from "./layout/TopMenu";

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

        <div className={classes.margin}>
          <AudioPlayerComponent/>
          <ExamKamiShimoComponent/>
          <ExamShimoKamiComponent/>
        </div>

        <div className={classes.margin}>
          <SongArchive/>
        </div>

        <Songs/>
      </div>
    </div>
  );
}

export default App;
