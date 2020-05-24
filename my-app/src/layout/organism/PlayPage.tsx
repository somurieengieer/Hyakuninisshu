import React from 'react';
import {AudioPlayer} from "../../features/audio/AudioPlayer";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../../slice/song/songSlice";
import {shuffle} from "../../utils/Utils";


export function PlayPage() {

  const activeSongNums = useSelector(selectActiveNumbers);
  let playSongs = [0].concat(shuffle(activeSongNums));

  return (
    <>
      <AudioPlayer songNums={playSongs}/>
    </>
  );
}

