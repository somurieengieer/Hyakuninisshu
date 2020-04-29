import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {IconButton} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {AudioPlayer} from "./AudioPlayer";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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
  const classes = useStyles();

  const activeSongNums = useSelector(selectActiveNumbers);
  const [playing, setPlaying] = useState<boolean>(false);
  const playSongs = [0].concat(shuffle(activeSongNums));

  const stoppedPlay = () => {
    setPlaying(false)
  };

  // TODO: test
  useEffect(() => {
    console.log('changed activeSongNums')
  }, [activeSongNums]);
  useEffect(() => {
    console.log('changed playing')
  }, [playing]);

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

