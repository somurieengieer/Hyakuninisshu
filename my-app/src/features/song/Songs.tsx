import React from 'react';
import {Song, SongInfo} from "./Song";

export function Songs() {

  // @ts-ignore
  const songNums: number[] = [...Array(99).keys()].map(n => n+1);

  return (
    <div>
      {songNums.map(num =>
       (<Song songInfo={new SongInfo(num)} />)
      )}
    </div>
  );
}
