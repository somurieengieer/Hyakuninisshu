import React from 'react';
import {Box} from "@material-ui/core";
import {SongInfo} from "../../song/SongInfo";
import {SongCard} from "../../song/SongCard";


export interface QuestionCardProps {
  songInfo: SongInfo
}

export function QuestionCard({songInfo}: QuestionCardProps) {

  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <SongCard songInfo={songInfo}/>
      </Box>
    </Box>
  )
}
