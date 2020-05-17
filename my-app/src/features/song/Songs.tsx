import React from 'react';
import {Song} from "./Song";
import {List} from "@material-ui/core";
import {SongInfo} from "./SongInfo";
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../../materialui/theme";

const useStyles = makeStyles({
  root: {
    margin: theme.spacing(3)
  }
});

export function Songs() {

  const classes = useStyles();

  // @ts-ignore
  const songNums: number[] = [...Array(100).keys()].map(n => n + 1);

  return (
    <>
      <List className={classes.root}>
        {songNums.map(num =>
          (<Song key={num} songInfo={new SongInfo(num)}/>)
        )}
      </List>
    </>
  );
}
