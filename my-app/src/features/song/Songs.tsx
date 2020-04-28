import React from 'react';
import {Song, SongInfo} from "./Song";

export function Songs() {

  // const songNums: number[] = useSelector(selectActiveNumbers)

  // @ts-ignore
  const songNums: number[] = [...Array(100).keys()].map(n => n+1);

  return (
    <div>
      {songNums.map(num =>
       (<Song key={num} songInfo={new SongInfo(num)} />)
      )}
    </div>
  );
}
