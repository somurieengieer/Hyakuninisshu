import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {theme} from "../../../materialui/theme";


const useStyles = makeStyles({
  marginTop2: {
    marginTop: theme.spacing(2)
  },
  marginTop4: {
    marginTop: theme.spacing(4)
  },
});

export interface QuestionItem {
  question: JSX.Element
  answer: string
  explanation: string[]
}

export interface QuestionProps {
  question: QuestionItem
  showAnswer: boolean
}

// 序歌も含めて流す連番を引数とする
export function Question({question, showAnswer}: QuestionProps) {

  const classes = useStyles();

  return (
    <>
      <div>
        {question.question}
      </div>
      {showAnswer && (
        <>
          <Typography variant='h4' className={classes.marginTop4}>
            A. {question.answer}
          </Typography>
          <Box className={classes.marginTop4}>
            {question.explanation.map((exp, index) => (
              <Typography key={`exp${index}`} variant='body2' className={classes.marginTop2}>
                {exp}
              </Typography>
            ))}
          </Box>
        </>
      )}
    </>
  )
}
