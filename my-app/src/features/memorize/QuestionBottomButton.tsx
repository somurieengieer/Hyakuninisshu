import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, IconButton, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";


const useStyles = makeStyles({
  margin: {
    margin: theme.spacing(1),
  },
});

export interface QuestionProps {
  onClick: () => void
}

// 序歌も含めて流す連番を引数とする
export const QuestionBottomButton: React.FC<QuestionProps> =
  ({onClick, children}) => {
    const classes = useStyles();

    return (
      <IconButton onClick={onClick}
                  component="span">
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          <Typography variant='h3' gutterBottom>
            {children}
          </Typography>
        </Button>
      </IconButton>
    )
  };
