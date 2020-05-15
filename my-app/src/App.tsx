import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/songArchive/SongArchive";
import {AudioPlayerComponent} from "./features/audio/AudioPlayerComponent";
import {Typography} from "@material-ui/core";
import {ExamMemorizeComponent} from "./features/memorize/ExamMemorizeComponent";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "./materialui/theme";

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
        <Typography variant='h3' className={classes.margin}>
          百人一首はんなり読み上げ
        </Typography>

        <div className={classes.margin}>
          <AudioPlayerComponent/>
          <ExamMemorizeComponent/>
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
