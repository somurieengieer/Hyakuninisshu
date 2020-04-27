import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, IconButton, Modal} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import StopIcon from '@material-ui/icons/Stop';
import {PlayingAudio, PlayStatuses} from "./AudioList";
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

interface AudioPlayerProps {
  songNums: number[]
  callbackStop: () => void
}

// 序歌も含めて流す連番を引数とする
export function AudioPlayer({songNums, callbackStop}: AudioPlayerProps) {
  const classes = useStyles();

  const [playStatus, setPlayStatus] = useState<PlayStatuses>(PlayStatuses.PLAYING);
  const [playingIndex, setPlayingIndex] = useState<number>(0);
  const [playingSong, setPlayingSong]  = useState<SongInfo>(new SongInfo(songNums[playingIndex]));

  // const replaceNumbers = (numbers: number[]): void => {
  //   dispatch(replace(numbers));
  // }

  // const playAndStop = () => {
  //   setPlayStatus(!playing)
  // };

  const playEnded = () => {
    console.log(playingIndex, songNums);
    if (playingIndex < songNums.length + 1) {
      setPlayingIndex(playingIndex+1);
      setPlayingSong(new SongInfo(playingIndex))
    }
  };

  return (
    <Modal
      open={true}
      onClose={callbackStop}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{backgroundColor: 'bkack'}}
    >
      <Box m={1} p={1}
           style={{backgroundColor: '#FFEDE2'}}
      >
        <Box display="flex" justifyContent="center" alignItems="center" >
          <Box p={1}>
            <IconButton onClick={() => setPlayingIndex(playingIndex - 1)}
                        disabled={true}
                        component="span" >
              <SkipPreviousIcon style={{fontSize: '6em'}} />
            </IconButton>
          </Box>
          <Box p={1}>
            {playStatus == PlayStatuses.PLAYING ? (
              <IconButton onClick={() => setPlayStatus(PlayStatuses.PAUSED)}
                          component="span" >
                <PauseCircleFilledIcon style={{fontSize: '12em'}} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setPlayStatus(PlayStatuses.PLAYING)}
                          component="span" >
                <PlayCircleFilledIcon style={{fontSize: '12em'}} />
              </IconButton>
            )}
          </Box>
          <Box p={1}>
            <IconButton onClick={() => setPlayingIndex(playingIndex + 1)}
                        disabled={true}
                        component="span" >
              <SkipNextIcon style={{fontSize: '6em'}} />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <IconButton onClick={() => setPlayStatus(PlayStatuses.STOPPED)}
                      component="span" >
            <StopIcon style={{fontSize: '6em'}} />
          </IconButton>
        </Box>
        <PlayingAudio songInfo={playingSong} playEnded={playEnded} playingStatus={playStatus} />
      </Box>
    </Modal>
  );
}
