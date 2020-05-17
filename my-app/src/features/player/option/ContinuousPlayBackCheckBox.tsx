import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectContinuousPlayBack, setContinuousPlayBack} from "../../../slice/player/option/playOptionSlice"
import {Checkbox, FormControlLabel} from "@material-ui/core";

export function ContinuousPlayBackCheckBox() {
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
