import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {theme} from "../../materialui/theme";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles({
  button: {
    margin: theme.spacing(1),
  },
});

export interface QuestionProps {
  onClick: () => void
}

// 序歌も含めて流す連番を引数とする
export const PlayButton: React.FC<QuestionProps> =
  ({onClick, children}) => {
    const classes = useStyles();

    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<PlayCircleFilledIcon/>}
        onClick={onClick}
        size="large"
      >
        {children}
      </Button>
    )
  };
