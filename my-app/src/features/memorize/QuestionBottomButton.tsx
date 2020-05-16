import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";


const useStyles = makeStyles({
  margin: {
    margin: theme.spacing(1),
  },
});

export interface QuestionProps {
  onClick: () => void
  disabled?: boolean
}

// 序歌も含めて流す連番を引数とする
export const QuestionBottomButton: React.FC<QuestionProps> =
  ({onClick, disabled, children}) => {
    const classes = useStyles();

    return (
      <Button variant="contained" onClick={onClick} size="medium" color="primary"
              disabled={disabled}
              className={classes.margin}>
        <Typography variant='h4' gutterBottom>
          {children}
        </Typography>
      </Button>
    )
  };
