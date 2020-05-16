import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, IconButton} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {PlayingAudio, PlayStatuses} from "./PlayingAudio";
import {SongTypography} from "./SongTypography";
import {theme} from "../../materialui/theme";
import {SongInfo} from "../song/SongInfo";
import {useDispatch, useSelector} from "react-redux";
import {nextSong, previousSong, resetSong, selectPlayingNumber} from "../song/playingSongSlice";
import {ModalPlayer} from "../player/ModalPlayer";
import {QuestionHeader} from "../memorize/QuestionHeader";


const useStyles = makeStyles({
  iconBig: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '6em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '8em'
    }
  },
  iconSmall: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '3em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4em'
    }
  },
});

interface AudioPlayerProps {
  songNums: number[]
  callbackStop: () => void
}

// 序歌も含めて流す連番を引数とする
export function AudioPlayer({songNums, callbackStop}: AudioPlayerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [playStatus, setPlayStatus] = useState<PlayStatuses>(PlayStatuses.PLAYING);
  const playingIndex = useSelector(selectPlayingNumber);

  const playingSong = new SongInfo(songNums[playingIndex]);

  const playNext = () => {
    if (playingIndex < songNums.length - 1) {
      dispatch(nextSong())
    } else {
      dispatch(resetSong());
      setPlayStatus(PlayStatuses.PAUSED)
    }
  };

  const playPrevious = () => {
    dispatch(previousSong())
  };


  const stop = () => {
    setPlayStatus(PlayStatuses.STOPPED);
    callbackStop()
  };

  return (
    <ModalPlayer callbackStop={stop}
                 headerJSX={(
                   <QuestionHeader>
                     {playingIndex + 1} / {songNums.length}
                   </QuestionHeader>
                 )}
    >
      <Box display="flex" justifyContent="center" alignItems="center"
      >
        <Box p={1}>
          <IconButton onClick={playPrevious}
                      disabled={playingIndex <= 0}
                      component="span">
            <SkipPreviousIcon className={classes.iconSmall}/>
          </IconButton>
        </Box>
        <Box p={1}>
          {playStatus == PlayStatuses.PLAYING ? (
            <IconButton onClick={() => setPlayStatus(PlayStatuses.PAUSED)}
                        component="span">
              <PauseCircleFilledIcon className={classes.iconBig}/>
            </IconButton>
          ) : (
            <IconButton onClick={() => setPlayStatus(PlayStatuses.PLAYING)}
                        component="span">
              <PlayCircleFilledIcon className={classes.iconBig}/>
            </IconButton>
          )}
        </Box>
        <Box p={1}>
          <IconButton onClick={playNext}
                      disabled={playingIndex >= songNums.length - 1}
                      component="span">
            <SkipNextIcon className={classes.iconSmall}/>
          </IconButton>
        </Box>
      </Box>

      <PlayingAudio songInfo={playingSong} playEnded={playNext} playingStatus={playStatus}/>

      <SongTypography song={playingSong}/>
    </ModalPlayer>
  );
}
