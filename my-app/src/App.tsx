import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/songArchive/SongArchive";
import {AudioPlayerComponent} from "./features/audio/AudioPlayerComponent";

function App() {
  return (
    <div className="App">
      <div>
        <AudioPlayerComponent />
        <SongArchive />
        <Songs />
      </div>
    </div>
  );
}

export default App;
