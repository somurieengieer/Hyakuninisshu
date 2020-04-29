import React from 'react';
import ReactSound from "react-sound";
import {SongInfo} from "../song/SongInfo";


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

