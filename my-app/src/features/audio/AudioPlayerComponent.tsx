import React, {useState} from 'react';
import {AudioPlayer} from "./AudioPlayer";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {PlayButton} from "../player/PlayButton";


// Fisher–Yates アルゴリズム
function shuffle([...arr]) {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

export function AudioPlayerComponent() {

  const activeSongNums = useSelector(selectActiveNumbers);
  const [playing, setPlaying] = useState<boolean>(false);
  const playSongs = [0].concat(shuffle(activeSongNums));

  const stoppedPlay = () => {
    setPlaying(false)
  };

  return (
    <>
      <PlayButton onClick={() => setPlaying(true)}>
        歌の読み上げ
      </PlayButton>
      {playing && (<AudioPlayer songNums={playSongs} callbackStop={stoppedPlay}/>)}
    </>
  );
}

