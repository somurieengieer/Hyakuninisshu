import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";


const useStyles = makeStyles({
  marginTop2: {
    marginTop: theme.spacing(2)
  },
  marginTop4: {
    marginTop: theme.spacing(4)
  },
});

export interface QuestionItem {
  question: string[]
  answer: string
  explanation: string[]
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
          <Typography variant='h4' className={classes.marginTop4}>
            A. {question.answer}
          </Typography>
          <Box className={classes.marginTop4}>
            {question.explanation.map(exp => (
              <Typography variant='h5' className={classes.marginTop2}>
                {exp}
              </Typography>
            ))}
          </Box>
        </>
      )}
    </>
  )
}
