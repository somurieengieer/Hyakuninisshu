import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import SpeedIcon from '@material-ui/icons/Speed';
import {useDispatch, useSelector} from "react-redux";
import {selectIntervalSecond, setIntervalSecond} from "../../../slice/player/option/playOptionSlice"

const useStyles = makeStyles({
  root: {},
  sliderRoot: {
    width: 240,
  },
  input: {
    width: 42,
  },
});

export function IntervalTimeSlider() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const wrapUpSecond = useSelector(selectIntervalSecond);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    dispatch(setIntervalSecond(newValue as number))
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    if (!isNaN(val)) {
      dispatch(setIntervalSecond(val))
    }
  };

  return (
    <>
      <Typography id="input-slider"
                  component="span"
      >
        歌の読み上げ間隔
      </Typography>
      <Grid container spacing={2} alignItems="center" className={classes.sliderRoot}
            component="span"
      >
        <Grid item
              component="span"
        >
          <SpeedIcon/>
        </Grid>
        <Grid item xs
              component="span"
        >
          <Slider
            value={wrapUpSecond}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="secondary"
            min={0}
            max={10}
          />
        </Grid>
        <Grid item
              component="span"
        >
          <Input
            className={classes.input}
            value={wrapUpSecond}
            margin="dense"
            onChange={handleInputChange}
            // onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            endAdornment={"秒"}
          />
        </Grid>
      </Grid>
    </>
  );
}
