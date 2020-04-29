import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {theme} from "../../materialui/theme";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  songFont: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5em'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export enum TextPosition {
  LEFT = 'flex-start',
  CENTER = 'center',
  RIGHT= 'flex-end',
}

interface SongTypographyProps {
  // songText: string
  position: TextPosition
  // children: ReactNode
}

// 序歌も含めて流す連番を引数とする
export const SongTypography: React.FC<SongTypographyProps> = ({position, children}) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent={position}>
      <Box>
        <Typography variant='h3' gutterBottom>
          {children}
        </Typography>
      </Box>
    </Box>
  );
};
