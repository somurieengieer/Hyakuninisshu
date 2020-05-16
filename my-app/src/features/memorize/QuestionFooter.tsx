import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {QuestionBottomButton} from "./QuestionBottomButton";


const useStyles = makeStyles({});

export interface QuestionProps {
  showAnswer: boolean,
  setShowAnswer: (val: boolean) => void
  playNext: () => void
}

// 序歌も含めて流す連番を引数とする
export function QuestionFooter({showAnswer, setShowAnswer, playNext}: QuestionProps) {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center"
    >
      {!showAnswer ? (
        <QuestionBottomButton onClick={() => setShowAnswer(true)}>
          答え
        </QuestionBottomButton>
      ) : (
        <QuestionBottomButton onClick={() => setShowAnswer(false)}>
          答えを隠す
        </QuestionBottomButton>

      )}
      <QuestionBottomButton onClick={playNext}>
        次へ
      </QuestionBottomButton>
    </Box>
  )
}
