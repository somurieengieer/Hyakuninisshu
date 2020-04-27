import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {SongInfo} from "../song/Song";
import ReactSound from "react-sound";


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

interface PlayingAudioProps {
  songInfo: SongInfo
  playEnded: () => void
  playingStatus: PlayStatuses
}

export enum PlayStatuses {
  PLAYING = 'PLAYING',
  STOPPED = 'STOPPED',
  PAUSED = 'PAUSED'
}

export function PlayingAudio({songInfo, playEnded, playingStatus}: PlayingAudioProps) {
  return (
    <ReactSound url={songInfo.path}
                playStatus={playingStatus}
                onFinishedPlaying={playEnded}
    />
  )
}

interface AudioListProps {
  songNums: number[]
  suspend: boolean
}

export function AudioList({songNums, suspend}: AudioListProps) {
  const classes = useStyles();

  const [playing, setPlaying] = useState<boolean>(false);
  const [playingIndex, setPlayingIndex] = useState<number>(0);
  const [playingSong, setPlayingSong]  = useState<SongInfo>(new SongInfo(songNums[playingIndex]));
  // const playingSong = new SongInfo(songNumbers[playingIndex])

  const playEnded = () => {
    console.log(playingIndex, songNums);
    if (playingIndex < songNums.length + 1) {
      setPlayingIndex(playingIndex+1);
      setPlayingSong(new SongInfo(playingIndex))
    }
  };

  return (
    <Box m={1} p={1}>
      <PlayingAudio songInfo={playingSong} playEnded={playEnded} playingStatus={PlayStatuses.PLAYING} />
    </Box>

  );
}

