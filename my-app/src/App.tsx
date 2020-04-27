import React from 'react';
import './App.css';
import {Songs} from "./features/song/Songs";
import {SongArchive} from "./features/song/SongArchive";
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
