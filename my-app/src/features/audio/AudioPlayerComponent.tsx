import React, {useState} from 'react';
import {AudioPlayer} from "./AudioPlayer";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {PlayButton} from "../player/PlayButton";
import {shuffle} from "../../utils/Utils";


export function AudioPlayerComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const [playing, setPlaying] = useState<boolean>(false);
  let playSongs = [0].concat(shuffle(activeSongNums));

  const stoppedPlay = () => {
    playSongs = [0].concat(shuffle(activeSongNums));
    setPlaying(false)
  };

  return (
    <>
      <PlayButton onClick={() => setPlaying(true)}/>
      {playing && (
        <AudioPlayer songNums={playSongs} callbackStop={stoppedPlay}/>
      )}
    </>
  );
}

