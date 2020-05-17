import React from 'react';
import {Typography} from "@material-ui/core";


export interface QuestionProps {
  value: string
}

export function QuestionText({value}: QuestionProps) {

  return (
    <Typography variant='h4' gutterBottom>
      Q. {value}
    </Typography>
  )
}
