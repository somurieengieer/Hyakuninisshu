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
  answer: JSX.Element
  explanation: string[]
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
      {!showAnswer ? (
        <>
          {question.question.map(q => (
            <Typography variant='h4' gutterBottom>
              {q}
            </Typography>
          ))}
          {/*<Typography variant='h3' gutterBottom>*/}
          {/*  {question.question}*/}
          {/*</Typography>*/}
        </>
      ) : (
        <>
          <Typography variant='h4' gutterBottom>
            {question.answer}
          </Typography>
          {question.explanation.map(exp => (
            <Typography variant='h5' gutterBottom>
              {exp}
            </Typography>
          ))}
          {/*<Typography variant='h3' gutterBottom>*/}
          {/*  {question.explanation}*/}
          {/*</Typography>*/}
        </>
      )}

      <Box display="flex" justifyContent="center"
      >
        {!showAnswer ? (
          <QuestionBottomButton onClick={() => setShowAnswer(true)}>
            答えを見る
          </QuestionBottomButton>
        ) : (
          <QuestionBottomButton onClick={() => setShowAnswer(false)}>
            問題に戻る
          </QuestionBottomButton>

        )}
        <QuestionBottomButton onClick={playEnded}>
          次の問題へ
        </QuestionBottomButton>
      </Box>
      {/*<IconButton onClick={playEnded}*/}
      {/*            component="span" >*/}
      {/*  <Button variant="contained" size="medium" color="primary" className={classes.margin}>*/}
      {/*    <Typography variant='h3' gutterBottom>*/}
      {/*      次の問題へ*/}
      {/*    </Typography>*/}
      {/*  </Button>*/}
      {/*</IconButton>*/}
    </>
  )
}
