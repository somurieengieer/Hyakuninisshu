import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {selectContinuousPlayBack, setContinuousPlayBack} from "./playOptionSlice"
import {Checkbox, FormControlLabel} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  sliderRoot: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export function ContinuousPlayBackCheckBox() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const continuousPlayBack = useSelector(selectContinuousPlayBack);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setContinuousPlayBack(event.target.checked))
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={continuousPlayBack}
            onChange={handleChange}
            name="continuousPlayBack"
            color="secondary"
          />
        }
        label="連続再生"
      />
    </div>
  );
}
