import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
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
      >
        <Typography variant="h5">
          {children}
        </Typography>
      </Button>
    )
  };
