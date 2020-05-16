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


const useStyles = makeStyles({
  paper: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/washi.jpg)`,
  },
  paperTop: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_top.png)`,
    backgroundRepeat: 'no-repeat',
  },
  paperBottom: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/wagara_bottom.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right 0px',
  },
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
  songArea: {
    [theme.breakpoints.down('xs')]: {
      width: 400
    },
    [theme.breakpoints.up('sm')]: {
      width: 560,
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

  const [playStatus, setPlayStatus] = useState<PlayStatuses>(PlayStatuses.PLAYING);
  const [playingIndex, setPlayingIndex] = useState<number>(0);

  const playingSong = new SongInfo(songNums[playingIndex]);

  const playEnded = () => {
    if (playingIndex < songNums.length - 1) {
      setPlayingIndex(playingIndex+1);
    } else {
      setPlayingIndex(0);
      setPlayStatus(PlayStatuses.STOPPED)
    }
  };

  const stop = () => {
    setPlayStatus(PlayStatuses.STOPPED);
    callbackStop()
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center"
      >
        <Box p={1}>
          <IconButton onClick={() => setPlayingIndex(playingIndex - 1)}
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
          <IconButton onClick={() => setPlayingIndex(playingIndex + 1)}
                      disabled={playingIndex >= songNums.length - 1}
                      component="span">
            <SkipNextIcon className={classes.iconSmall}/>
          </IconButton>
        </Box>
      </Box>

      <PlayingAudio songInfo={playingSong} playEnded={playEnded} playingStatus={playStatus}/>

      <Box display="flex" justifyContent="center"
           className={classes.paperBottom}
      >
        <Box className={classes.songArea}>
          <SongTypography song={playingSong}/>
            </Box>
          </Box>
    </>
  );
}
