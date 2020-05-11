import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/songArchive/SongArchive";
import {AudioPlayerComponent} from "./features/audio/AudioPlayerComponent";
import {Typography} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div>
        <Typography variant='h3'>
          百人一首読み上げ
        </Typography>
        <AudioPlayerComponent />
        <SongArchive />
        <Songs />
      </div>
    </div>
  );
}

export default App;
