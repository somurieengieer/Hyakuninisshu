import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import {QuestionBottomButton} from "./QuestionBottomButton";
import {useDispatch, useSelector} from "react-redux";
import {
  nextSong,
  previousSong,
  resetShuffle,
  selectActiveNumbers,
  selectPlayingNumber,
  selectShowAnswer,
  switchShowAnswer
} from "../../../slice/song/songSlice";
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

// 序歌も含めて流す連番を引数とする
export function QuestionFooter() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const playingIndex = useSelector(selectPlayingNumber);
  const numberOfActiveSongs = useSelector(selectActiveNumbers).length;
  const showAnswer = useSelector(selectShowAnswer)

  const isFirstSong = playingIndex == 0;
  const isLastSong = playingIndex + 1 >= numberOfActiveSongs;

  const playPrevious = () => {
    dispatch(previousSong())
  }
  const playNext = () => {
    dispatch(nextSong())
  }
  const playFirst = () => {
    dispatch(resetShuffle())
  }

  const switchShowAnswerProp = () => {
    dispatch(switchShowAnswer())
  }

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
          <QuestionBottomButton onClick={switchShowAnswerProp}>
            {!showAnswer ? "答えを表示" : '答えを隠す'}
          </QuestionBottomButton>
        </Grid>
        <Grid item xs={3} className={classes.button}>
          {isLastSong ? (
            <QuestionBottomButton onClick={playFirst}>
              最初へ
            </QuestionBottomButton>
          ) : (
            <QuestionBottomButton onClick={playNext}>
              次へ
            </QuestionBottomButton>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}
