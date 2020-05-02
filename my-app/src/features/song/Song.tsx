import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {add, remove, selectActiveNumbers,} from './songSlice';
import {Checkbox, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {SongInfo} from "./SongInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '1em',
  },
  song: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(7),
  }
}));

interface SongProps {
  songInfo: SongInfo
}

// export function Song(num: number, path: string, song: string, active: boolean) {
export function Song({songInfo}: SongProps) {

  const activeNumbers: number[] = useSelector(selectActiveNumbers);
  const dispatch = useDispatch();
  const [checkStatus, setCheckStatus] = useState<boolean>(activeNumbers.includes(songInfo.num));
  const labelId = songInfo.num + 'songLabel';

  const classes = useStyles();

  useEffect(() => {
    setCheckStatus(activeNumbers.includes(songInfo.num))
  }, [activeNumbers.join(',')]);

  const handleToggle = (value: any) => () => {
    dispatch((checkStatus ? remove : add)(songInfo.num));
    setCheckStatus(!checkStatus)
  };

  return (
    <ListItem key={songInfo.num} role={undefined} dense button
              onClick={handleToggle(songInfo.num)}
              className={classes.root}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checkStatus}
          tabIndex={-1}
          disableRipple // クリック時にさざ波エフェクト
        />
      </ListItemIcon>
      <ListItemText id={labelId+'number'} primary={songInfo.num}  />
      <ListItemText id={labelId+'song'} primary={songInfo.songDisplay()}
                    className={classes.song}
      />
      <ListItemSecondaryAction>
        <Typography >
          {songInfo.singer}
        </Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
