import React, {useState} from 'react';
import {IconButton} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {AudioPlayer} from "./AudioPlayer";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";


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
      <IconButton onClick={() => setPlaying(true)}
                  component="span" >
        <PlayCircleFilledIcon style={{fontSize: '12em'}} />
      </IconButton>
      { playing && (<AudioPlayer songNums={playSongs} callbackStop={stoppedPlay}/>)}
    </>
  );
}

