import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {SongInfo} from "../song/SongInfo";


export enum TextPosition {
  LEFT = 'flex-start',
  CENTER = 'center',
  RIGHT = 'flex-end',
}

interface SongOneLineProps {
  position: TextPosition
}

const SongOneLine: React.FC<SongOneLineProps> =
  ({position, children}) => {

    return (
      <Box display="flex" justifyContent={position}>
        <Box>
          {/*h3のレスポンシブフォントサイズ変更はtheme.tsxに記載*/}
          <Typography variant='h3' gutterBottom>
            {children}
          </Typography>
        </Box>
      </Box>
    )
  };

interface SongTypographyProps {
  song: SongInfo
}

// 序歌も含めて流す連番を引数とする
export const SongTypography: React.FC<SongTypographyProps> =
  ({song, children}) => {

    return (
      <>
        <SongOneLine position={TextPosition.LEFT}>
          {song.song[0]}
        </SongOneLine>
        <SongOneLine position={TextPosition.CENTER}>
          {song.song[1]}
        </SongOneLine>
        <SongOneLine position={TextPosition.RIGHT}>
          {song.song[2]}
        </SongOneLine>
        <SongOneLine position={TextPosition.LEFT}>
          {song.song[3]}
        </SongOneLine>
        <SongOneLine position={TextPosition.CENTER}>
          {song.song[4]}
        </SongOneLine>
      </>
    );
};
