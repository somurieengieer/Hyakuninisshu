import React from 'react';
import {Box, Typography} from "@material-ui/core";


export enum TextPosition {
  LEFT = 'flex-start',
  CENTER = 'center',
  RIGHT= 'flex-end',
}

interface SongTypographyProps {
  position: TextPosition
}

// 序歌も含めて流す連番を引数とする
export const SongTypography: React.FC<SongTypographyProps> =
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
  );
};
