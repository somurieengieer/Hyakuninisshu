import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import {QuestionBottomButton} from "./QuestionBottomButton";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../../song/songSlice";
import {selectPlayingNumber} from "../../song/playingSongSlice";
import {theme} from "../../../materialui/theme";


const useStyles = makeStyles({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '500px',
    },
  },
  button: {
    textAlign: 'center',
  }
});

export interface QuestionProps {
  showAnswer: boolean,
  setShowAnswer: (val: boolean) => void
  playPrevious: () => void
  playNext: () => void
}

// 序歌も含めて流す連番を引数とする
export function QuestionFooter({showAnswer, setShowAnswer, playPrevious, playNext}: QuestionProps) {
  const classes = useStyles();

  const playingIndex = useSelector(selectPlayingNumber);
  const numberOfActiveSongs = useSelector(selectActiveNumbers).length;

  const isFirstSong = playingIndex == 0;
  const isLastSong = playingIndex + 1 >= numberOfActiveSongs;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container className={classes.root}>
        <Grid item xs={3} className={classes.button}>
          <QuestionBottomButton onClick={playPrevious}
                                disabled={isFirstSong}>
            前へ
          </QuestionBottomButton>
        </Grid>
        <Grid item xs={6} className={classes.button}>
          <QuestionBottomButton onClick={() => setShowAnswer(!showAnswer)}>
            {!showAnswer ? "答えを表示" : '答えを隠す'}
          </QuestionBottomButton>
        </Grid>
        <Grid item xs={3} className={classes.button}>
          <QuestionBottomButton onClick={playNext}
                                disabled={isLastSong}>
            次へ
          </QuestionBottomButton>
        </Grid>
      </Grid>
    </Box>
  )
}
