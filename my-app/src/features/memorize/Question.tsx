import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";
import {QuestionBottomButton} from "./QuestionBottomButton";


const useStyles = makeStyles({
  paper: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/washi.jpg)`,
  },
  margin: {
    margin: theme.spacing(1),
  },
});

export interface QuestionItem {
  question: string[]
  answer: string
  explanation: string[]
  ext?: JSX.Element
}


export interface QuestionProps {
  question: QuestionItem
  playEnded: () => void
}

// 序歌も含めて流す連番を引数とする
export function Question({question, playEnded}: QuestionProps) {
  const classes = useStyles();

  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  useEffect(() => {
    setShowAnswer(false)
  }, [question]);

  return (
    <>
      {question.question.map(q => (
        <Typography variant='h4' gutterBottom>
          Q. {q}
        </Typography>
      ))}
      {showAnswer && (
        <>
          <Typography variant='h4' gutterBottom>
            A. {question.answer}
          </Typography>
          {question.explanation.map(exp => (
            <Typography variant='h5' gutterBottom>
              {exp}
            </Typography>
          ))}
          {question.ext}
        </>
      )}

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
        <QuestionBottomButton onClick={playEnded}>
          次へ
        </QuestionBottomButton>
      </Box>
    </>
  )
}
