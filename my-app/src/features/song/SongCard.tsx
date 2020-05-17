import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {SongInfo} from "./SongInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    writingMode: 'vertical-rl',
    height: '240px',
    width: '168px',
    textAlign: 'left', // 上寄せになる
    borderColor: 'rgba(0, 150, 0, 0.5)',
    borderStyle: 'solid',
    borderWidth: theme.spacing(1.5),
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  text: {
    width: '100%',
    fontSize: '2.7rem', // カードのサイズを固定にするため直書き。variant='h3'の書き方はNG
    lineHeight: '3.6rem',
  }
}));

interface SongProps {
  songInfo: SongInfo
}

// export function Song(num: number, path: string, song: string, active: boolean) {
export function SongCard({songInfo}: SongProps) {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.text}>
        {songInfo.song_hiragana_shimo()}
      </Typography>
    </Box>
  );
}
