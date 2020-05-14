import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/songArchive/SongArchive";
import {AudioPlayerComponent} from "./features/audio/AudioPlayerComponent";
import {Typography} from "@material-ui/core";
import {ExamMemorizeComponent} from "./features/memorize/ExamMemorizeComponent";

function App() {
  return (
    <div className="App">
      <div>
        <Typography variant='h3'>
          百人一首はんなり読み上げ
        </Typography>
        <AudioPlayerComponent/>
        <ExamMemorizeComponent/>
        <SongArchive/>
        <Songs />
      </div>
    </div>
  );
}

export default App;
