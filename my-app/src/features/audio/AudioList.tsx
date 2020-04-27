import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import {SongInfo} from "../song/Song";


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

interface AudioListProps {
  songNumbers: number[]
}

interface PlayingAudioProps {
  songInfo: SongInfo
  playEnded: () => void
}

export function PlayingAudio({songInfo, playEnded}: PlayingAudioProps) {
  return (
    <audio id={'audio'+songInfo.num}
           src={songInfo.path}
           className='audioSong'
           autoPlay={true}
           controls={true}
           onEnded={playEnded}
    />
  )
}

export function AudioList({songNumbers}: AudioListProps) {
  const classes = useStyles();

  const songNums: number[] = useSelector(selectActiveNumbers);

  const [playing, setPlaying] = useState<boolean>(false);
  const [playingIndex, setPlayingIndex] = useState<number>(0);
  const [playingSong, setPlayingSong]  = useState<SongInfo>(new SongInfo(songNumbers[playingIndex]));
  // const playingSong = new SongInfo(songNumbers[playingIndex])

  const playAndStop = () => {
    setPlaying(!playing)
  };

  const playEnded = () => {
    console.log(playingIndex, songNumbers);
    if (playingIndex < songNumbers.length + 1) {
      setPlayingIndex(playingIndex+1);
      setPlayingSong(new SongInfo(playingIndex))
    }
  };

  return (
    <Box m={1} p={1}>
      <PlayingAudio songInfo={playingSong} playEnded={playEnded} />
    </Box>

  );
}

