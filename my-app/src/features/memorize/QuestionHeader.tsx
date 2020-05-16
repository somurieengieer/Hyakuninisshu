import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";


const useStyles = makeStyles({});

// 序歌も含めて流す連番を引数とする
export const QuestionHeader: React.FC =
  ({children}) => {

    const classes = useStyles();

    return (
      <Box display="flex" justifyContent="center">
        <Typography variant="h6">
          {children}
        </Typography>
      </Box>
    );
  };
