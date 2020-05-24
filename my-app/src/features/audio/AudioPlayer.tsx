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
import {nextSong, previousSong, resetSong, selectPlayingNumber} from "../../slice/song/songSlice";
import {PlayerFrame} from "../player/PlayerFrame";
import {
  selectContinuousPlayBack,
  selectIntervalSecond,
  selectSongVisible
} from "../../slice/player/option/playOptionSlice"
import {SongVisibleCheckBox} from "../player/option/SongVisibleCheckBox";


const useStyles = makeStyles({
  iconBig: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '4em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '8em'
    }
  },
  iconSmall: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '4em'
    }
  },
});

interface AudioPlayerProps {
  songNums: number[]
}

// 序歌も含めて流す連番を引数とする
export function AudioPlayer({songNums}: AudioPlayerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [playStatus, setPlayStatus] = useState<PlayStatuses>(PlayStatuses.PLAYING);
  const playingIndex = useSelector(selectPlayingNumber);
  const intervalSecond = useSelector(selectIntervalSecond);
  const continuousPlayBack = useSelector(selectContinuousPlayBack);
  const songVisible = useSelector(selectSongVisible);

  const playingSong = new SongInfo(songNums[playingIndex]);

  const playNext = () => {
    if (playingIndex < songNums.length - 1) {
      dispatch(nextSong())
    } else {
      dispatch(resetSong());
      setPlayStatus(PlayStatuses.PAUSED)
    }
  };

  const playNextTimer = () => {
    if (continuousPlayBack) {
      setTimeout(playNext, intervalSecond * 1000)
    } else {
      playNext();
      setPlayStatus(PlayStatuses.PAUSED)
    }
  };

  const playing = () => {
    return playStatus === PlayStatuses.PLAYING
  };

  const switchPlay = () => {
    setPlayStatus(playStatus === PlayStatuses.PLAYING ? PlayStatuses.PAUSED : PlayStatuses.PLAYING)
  };

  const playPrevious = () => {
    dispatch(previousSong())
  };

  return (
    <PlayerFrame headerText={`${playingIndex + 1} / ${songNums.length}`}>
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
          <IconButton onClick={switchPlay}
                      component="span">
            {playing() ? (
              <PauseCircleFilledIcon className={classes.iconBig}/>
            ) : (
              <PlayCircleFilledIcon className={classes.iconBig}/>
            )}
          </IconButton>
        </Box>
        <Box p={1}>
          <IconButton onClick={playNext}
                      disabled={playingIndex >= songNums.length - 1}
                      component="span">
            <SkipNextIcon className={classes.iconSmall}/>
          </IconButton>
        </Box>
      </Box>

      <PlayingAudio songInfo={playingSong} playEnded={playNextTimer} playingStatus={playStatus}/>

      {songVisible && (
        <SongTypography song={playingSong}/>
      )}
      <Box textAlign={"right"}>
        <SongVisibleCheckBox/>
      </Box>
    </PlayerFrame>
  );
}
