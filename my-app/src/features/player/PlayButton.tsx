import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {IconButton} from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";


const useStyles = makeStyles({
  icon: {
    fontSize: '1.5em'
  },
});

export interface PlayButtonProps {
  url: string
}

// 序歌も含めて流す連番を引数とする
export const PlayButton: React.FC<PlayButtonProps> =
  ({url}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
      <IconButton onClick={() => dispatch(push(url))}
                  component="span"
      >
        <PlayCircleFilledIcon
          className={classes.icon}
        />
      </IconButton>
    )
  };
