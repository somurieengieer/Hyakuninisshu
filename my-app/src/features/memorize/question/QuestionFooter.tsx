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
  showAnswer
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
  const answerVisible = useSelector(selectShowAnswer)

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

  const showAnswerMethod = () => {
    dispatch(showAnswer())
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container className={classes.root}>
        <Grid item xs={4} className={classes.button}>
          <QuestionBottomButton onClick={playPrevious}
                                disabled={isFirstSong}>
            前へ
          </QuestionBottomButton>
        </Grid>
        <Grid item xs={4} className={classes.button}>
          <QuestionBottomButton onClick={showAnswerMethod}
                                disabled={answerVisible}
          >
            回答
          </QuestionBottomButton>
        </Grid>
        <Grid item xs={4} className={classes.button}>
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
