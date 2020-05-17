import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {SongInfo} from "./SongInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    writingMode: 'vertical-rl',
    height: '240px',
    textAlign: 'left', // 上寄せになる
    borderColor: 'rgba(0, 150, 0, 0.5)',
    borderStyle: 'solid',
    borderWidth: theme.spacing(1.5),
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
}));

interface SongProps {
  songInfo: SongInfo
}

// export function Song(num: number, path: string, song: string, active: boolean) {
export function SongCard({songInfo}: SongProps) {

  const classes = useStyles();
  const songText = 'いまをかぎりのいのちともがな';

  return (
    <Box className={classes.root}>
      <Typography variant="h3">
        {songText}
      </Typography>
    </Box>
  );
}
