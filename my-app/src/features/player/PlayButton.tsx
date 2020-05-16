import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {IconButton} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles({
  icon: {
    fontSize: '1.5em'
  },
});

export interface QuestionProps {
  onClick: () => void
}

// 序歌も含めて流す連番を引数とする
export const PlayButton: React.FC<QuestionProps> =
  ({onClick}) => {
    const classes = useStyles();

    return (
      <IconButton onClick={onClick}
                  component="span"
      >
        <PlayCircleFilledIcon
          className={classes.icon}
        />
      </IconButton>
    )
  };
