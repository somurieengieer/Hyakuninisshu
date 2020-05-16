import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {QuestionBottomButton} from "./QuestionBottomButton";
import {useSelector} from "react-redux";
import {selectActiveNumbers} from "../../song/songSlice";
import {selectPlayingNumber} from "../../song/playingSongSlice";


const useStyles = makeStyles({});

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
      <QuestionBottomButton onClick={playPrevious}
                            disabled={isFirstSong}>
        前へ
      </QuestionBottomButton>
      <QuestionBottomButton onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer ? "答え" : '答えを隠す'}
      </QuestionBottomButton>
      <QuestionBottomButton onClick={playNext}
                            disabled={isLastSong}>
        次へ
      </QuestionBottomButton>
    </Box>
  )
}
