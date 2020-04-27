import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, IconButton} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../song/songSlice";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import StopIcon from '@material-ui/icons/Stop';
import {AudioList} from "./AudioList";


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

export function AudioPlayer() {
  const classes = useStyles();

  const songNums: number[] = useSelector(selectActiveNumbers);

  const [playing, setPlaying] = useState<boolean>(false);

  // const replaceNumbers = (numbers: number[]): void => {
  //   dispatch(replace(numbers));
  // }

  const playAndStop = () => {
    setPlaying(!playing)
  };

  return (
    <Box m={1} p={1}>
      <Box display="flex" justifyContent="center" alignItems="center" >
        <Box p={1}>
          <IconButton onClick={playAndStop} component="span" >
            <SkipPreviousIcon style={{fontSize: '6em'}} />
          </IconButton>
        </Box>
        <Box p={1}>
          <IconButton onClick={playAndStop} component="span" >
            {playing ? (
              <PauseCircleFilledIcon style={{fontSize: '12em'}} />
            ) : (
              <PlayCircleFilledIcon style={{fontSize: '12em'}} />
            )}
          </IconButton>
        </Box>
        <Box p={1}>
          <IconButton onClick={playAndStop} component="span" >
            <SkipNextIcon style={{fontSize: '6em'}} />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <IconButton onClick={playAndStop} component="span" >
          <StopIcon style={{fontSize: '6em'}} />
        </IconButton>
      </Box>
      <AudioList songNumbers={songNums} />
    </Box>
  );
}

