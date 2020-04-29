import React from 'react';
import {Song} from "./Song";
import {List} from "@material-ui/core";
import {SongInfo} from "./SongInfo";

export function Songs() {

  // @ts-ignore
  const songNums: number[] = [...Array(100).keys()].map(n => n+1);

  return (
    <List>
      {songNums.map(num =>
       (<Song key={num} songInfo={new SongInfo(num)} />)
      )}
    </List>
  );
}
