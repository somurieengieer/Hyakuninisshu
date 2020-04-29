import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, IconButton, Modal} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {PlayingAudio, PlayStatuses} from "./AudioList";
import {SongInfo} from "../song/Song";
import {SongTypography, TextPosition} from "./SongTypography";
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
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

  console.log('called AudioPlayer', songNums, playingIndex, songNums.length);

  const playingSong = new SongInfo(songNums[playingIndex]);

  const playEnded = () => {
    if (playingIndex < songNums.length - 1) {
      // setPlayingSong(new SongInfo(songNums[playingIndex+1])) // TODO: 連続でやるとplayingIndexに反映されていない？
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
    <Modal
      open={true}
      onClose={stop}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
        <Box m={1} p={1} className={classes.paper}>
          <Box className={classes.paperTop}>
            <Box display="flex" justifyContent="flex-end" p={1}>
              <IconButton onClick={stop}
                          component="span" >
                <CloseIcon style={{fontSize: '3em'}} />
              </IconButton>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center"
            >
              <Box p={1}>
                <IconButton onClick={() => setPlayingIndex(playingIndex - 1)}
                            disabled={ playingIndex <= 0 }
                            component="span" >
                  <SkipPreviousIcon style={{fontSize: '6em'}} />
                </IconButton>
              </Box>
              <Box p={1}>
                {playStatus == PlayStatuses.PLAYING ? (
                  <IconButton onClick={() => setPlayStatus(PlayStatuses.PAUSED)}
                              component="span" >
                    <PauseCircleFilledIcon style={{fontSize: '10em'}} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setPlayStatus(PlayStatuses.PLAYING)}
                              component="span" >
                    <PlayCircleFilledIcon style={{fontSize: '10em'}} />
                  </IconButton>
                )}
              </Box>
              <Box p={1}>
                <IconButton onClick={() => setPlayingIndex(playingIndex + 1)}
                            disabled={ playingIndex >= songNums.length - 1 }
                            component="span" >
                  <SkipNextIcon style={{fontSize: '6em'}} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <PlayingAudio songInfo={playingSong} playEnded={playEnded} playingStatus={playStatus} />

          <Box display="flex" justifyContent="center"
               className={classes.paperBottom}
          >
            <Box style={{width: '600px'}}>
              <SongTypography position={TextPosition.LEFT}>
                {playingSong.song[0]}
              </SongTypography>
              <SongTypography position={TextPosition.CENTER}>
                {playingSong.song[1]}
              </SongTypography>
              <SongTypography position={TextPosition.RIGHT}>
                {playingSong.song[2]}
              </SongTypography>
              <SongTypography position={TextPosition.LEFT}>
                {playingSong.song[3]}
              </SongTypography>
              <SongTypography position={TextPosition.CENTER}>
                {playingSong.song[4]}
              </SongTypography>
            </Box>
          </Box>
        </Box>
    </Modal>
  );
}
