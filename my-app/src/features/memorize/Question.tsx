import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles({
});

export interface QuestionItem {
  question: string[]
  answer: string
  explanation: string[]
  ext?: JSX.Element
}

export interface QuestionProps {
  question: QuestionItem
  showAnswer: boolean
  playEnded: () => void
}

// 序歌も含めて流す連番を引数とする
export function Question({question, showAnswer, playEnded}: QuestionProps) {

  const classes = useStyles();

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
    </>
  )
}
